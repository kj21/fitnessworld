/**
 * Rebrand migration — "Blue Access System" / "Training nach deinem Lifestyle".
 *
 * NOT part of the normal seed. It is the only script that OVERWRITES text an
 * editor may have changed, because the rebrand explicitly replaces the old
 * claim ("… Eine Community") and the old hero headline.
 *
 * Run it only after the production freeze is lifted and the new copy is signed
 * off, from studio/:
 *   npx sanity exec scripts/migrate-rebrand.mjs --with-user-token           # dry run
 *   npx sanity exec scripts/migrate-rebrand.mjs --with-user-token -- --write
 *
 * Without --write nothing is sent; the script only prints what would change.
 */
import { createRequire } from 'node:module'
const { getCliClient } = createRequire(import.meta.url)('sanity/cli')
import { homeContent } from '../../src/data/site.js'
import { servicePages } from '../../src/data/pages.js'

const client = getCliClient({ apiVersion: '2024-01-01' })
const write = process.argv.includes('--write')

let keySeq = 0
const withKeys = (v) => {
  if (Array.isArray(v)) return v.map((x) => (x && typeof x === 'object' ? { _key: x._key || `k${++keySeq}`, ...withKeys(x) } : x))
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, withKeys(x)]))
  return v
}
const stripLocal = ({ heroImagePlaceholder, imageAlt, ...rest }) => rest

const c = homeContent(4)

// Replaced outright: the old positioning must not survive the rebrand.
const replace = {
  heroEyebrow: c.heroEyebrow,
  heroHeadline: c.heroHeadline,
  heroLede: c.heroLede,
  heroPrimaryCta: c.heroPrimaryCta,
  heroSecondaryCta: c.heroSecondaryCta,
  studiosEyebrow: c.studiosEyebrow,
  studiosHeadline: c.studiosHeadline,
  studiosText: c.studiosText,
  ctaEyebrow: c.ctaEyebrow,
  ctaHeadline: c.ctaHeadline,
  ctaText: c.ctaText,
  ctaButton: c.ctaButton,
  seoTitle: c.seoTitle,
  metaDesc: c.metaDesc,
}

// Added only where empty: new sections that did not exist before.
const add = withKeys({
  accessBar: c.accessBar,
  decisionEyebrow: c.decisionEyebrow, decisionHeadline: c.decisionHeadline, decisionText: c.decisionText, decisionCards: c.decisionCards,
  access247Eyebrow: c.access247Eyebrow, access247Headline: c.access247Headline, access247Text: c.access247Text,
  access247Points: c.access247Points, access247Note: c.access247Note, access247Cta: c.access247Cta,
  rehaEyebrow: c.rehaEyebrow, rehaHeadline: c.rehaHeadline, rehaText: c.rehaText, rehaSteps: c.rehaSteps, rehaCta: c.rehaCta,
  fighterEyebrow: c.fighterEyebrow, fighterHeadline: c.fighterHeadline, fighterText: c.fighterText,
  fighterPoints: c.fighterPoints, fighterCta: c.fighterCta,
  membershipEyebrow: c.membershipEyebrow, membershipHeadline: c.membershipHeadline, membershipText: c.membershipText, membershipCta: c.membershipCta,
  ctaSteps: c.ctaSteps,
})

// New Leistungs-Seiten; existing ones are left alone.
const pages = ['training-247', 'fighter-world'].map((slug) => {
  const page = servicePages[slug]
  return {
    _id: `servicePage-${slug}`, _type: 'servicePage',
    ...stripLocal(withKeys(page)),
    sections: (withKeys(page.sections) || []).map(stripLocal),
  }
})

const current = await client.getDocument('homePage')
console.log('Startseite — wird ersetzt:')
for (const [k, v] of Object.entries(replace)) {
  const before = typeof current?.[k] === 'object' ? JSON.stringify(current?.[k]) : current?.[k]
  console.log(`  ${k}\n    alt: ${String(before ?? '—').slice(0, 70).replace(/\n/g, ' / ')}\n    neu: ${String(typeof v === 'object' ? JSON.stringify(v) : v).slice(0, 70).replace(/\n/g, ' / ')}`)
}
console.log(`\nStartseite — neue Abschnitte (nur wenn leer): ${Object.keys(add).length} Felder`)
console.log(`Neue Leistungs-Seiten: ${pages.map((p) => p._id).join(', ')}`)

if (!write) {
  console.log('\nDry run. Mit "-- --write" tatsächlich schreiben.')
  process.exit(0)
}

const tx = client.transaction()
tx.patch('homePage', (p) => p.set(replace).setIfMissing(add))
pages.forEach((doc) => tx.createIfNotExists(doc))
const res = await tx.commit()
console.log(`\nDone — transaction ${res.transactionId}.`)
