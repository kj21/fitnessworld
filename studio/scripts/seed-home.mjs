/**
 * Seed the homepage content added in the "homepage ← Sanity" change.
 *
 * Safe to run against the live dataset:
 *   - the "Startseite" document is only created if it does not exist yet
 *   - existing studios only get cardFeatures / sortOrder where those are unset
 *   - nothing that editors already changed is overwritten
 *
 * Usage (from the studio/ folder):
 *   export SANITY_WRITE_TOKEN=sk...   # Editor token, sanity.io/manage → API → Tokens
 *   node scripts/seed-home.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'u4s4v1t1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('SANITY_WRITE_TOKEN is not set.')
  process.exit(1)
}

// Mirrors homeContent() in src/data/site.js. Studio count is intentionally
// left out of heroStats / numbers so the site keeps computing it.
const homePage = {
  _id: 'homePage',
  _type: 'homePage',
  seoTitle: 'Fitness World Studios | 24/7 Fitness, Reha-Sport & Kurse',
  heroEyebrow: 'Fitness World Studios',
  heroHeadline: 'Stärker.\n*Gesünder.*\nGemeinsam.',
  heroLede: '24/7 Training, Reha-Sport, Kurse und persönliche Betreuung an vier Standorten. Für deinen Start, deinen Wiedereinstieg und dein nächstes Ziel.',
  heroPrimaryCta:   { label: 'Kostenloses Probetraining', to: '/probetraining' },
  heroSecondaryCta: { label: 'Studio finden', to: '/holdorf' },
  marqueeItems: ['24/7 Training', 'Reha-Sport', 'AOK-Kurse', 'Boxen', 'Kickboxen', 'Personal Training', 'Kurse', 'Wellness', 'Community'],
  whyEyebrow: 'Warum Fitness World?',
  whyHeadline: 'Training allein\nreicht *nicht.*',
  whyLede: 'Wir glauben, dass langfristige Erfolge dort entstehen, wo professionelle Betreuung, moderne Trainingsmöglichkeiten und echte Gemeinschaft zusammenkommen.',
  whyText: 'Egal ob du gerade erst anfängst, nach einer Pause zurückkommst oder gezielt stärker werden willst: Bei Fitness World findest du einen Ort, der zu deinem Alltag passt und dich nicht alleine lässt.',
  whyLink: { label: 'Mehr über uns', to: '/team' },
  studiosEyebrow: 'Unsere Studios',
  studiosText: 'Wähle dein Studio in deiner Nähe und finde heraus, welche Angebote, Kurse und Trainingsmöglichkeiten vor Ort auf dich warten.',
  servicesEyebrow: 'Unsere Leistungen',
  servicesHeadline: 'Alles für *dein Ziel.*',
  servicesText: 'Ob Kraft, Ausdauer, Gesundheit oder Technik: Wir bieten dir Training, das zu deinem Ziel und deinem Level passt.',
  services: [
    { _key: 's1', icon: 'dumbbell', title: 'Krafttraining',     to: '/kurse',                   text: 'Mehr Kraft, mehr Stabilität und sichtbarer Fortschritt mit modernen Geräten und klarer Struktur.' },
    { _key: 's2', icon: 'pulse',    title: 'Ausdauer',          to: '/kurse',                   text: 'Verbessere Kondition, Energie und Leistungsfähigkeit mit Cardio, das in deinen Alltag passt.' },
    { _key: 's3', icon: 'heart',    title: 'Reha-Sport',        to: '/kurse/reha-sport',        text: 'Gesundheitlich orientiertes Training mit klarer Betreuung und strukturierten Kursen.' },
    { _key: 's4', icon: 'glove',    title: 'Boxen & Kickboxen', to: '/kurse/boxen',             text: 'Technik, Fokus und Kondition in intensiven Einheiten für Anfänger und Fortgeschrittene.' },
    { _key: 's5', icon: 'users',    title: 'Kurse',             to: '/kurse',                   text: 'Gemeinsam trainieren, motiviert bleiben und neue Routinen aufbauen.' },
    { _key: 's6', icon: 'target',   title: 'Personal Training', to: '/kurse/personal-training', text: 'Individuelle Betreuung, klare Ziele und ein Plan, der wirklich zu dir passt.' },
  ],
  communityEyebrow: 'Community',
  communityHeadline: 'Fitness ist besser *gemeinsam.*',
  communityText: 'Bei Fitness World trainierst du nicht anonym. Du wirst Teil einer Gemeinschaft, die sich gegenseitig motiviert, unterstützt und gemeinsam besser wird.',
  communityCta: { label: 'Community entdecken', to: '/team' },
  testimonialsEyebrow: 'Das sagen unsere Mitglieder',
  testimonialsHeadline: 'Echte Stimmen.\nEchtes *Vertrauen.*',
  ctaEyebrow: 'Probetraining',
  ctaHeadline: 'Finde heraus,\nwas in dir *steckt.*',
  ctaText: 'Vereinbare jetzt dein kostenloses Probetraining und lerne Fitness World persönlich kennen.',
  ctaButton: { label: 'Probetraining vereinbaren', to: '/probetraining' },
}

// Card tags + order for the studios that already exist in Sanity (from site.js).
const studioCards = {
  'studioLocation-holdorf':     { sortOrder: 1, cardFeatures: ['24/7 Training', 'Boxen', 'Wellness', 'Parkplätze'] },
  'studioLocation-goldenstedt': { sortOrder: 2, cardFeatures: ['24/7 Training', 'Reha-Sport', 'Kurse', 'Lounge'] },
  'studioLocation-twistringen': { sortOrder: 3, cardFeatures: ['24/7 Training', 'Functional', 'Community', 'Solarium'] },
}

async function run() {
  const tx = client.transaction().createIfNotExists(homePage)
  for (const [id, fields] of Object.entries(studioCards)) {
    tx.patch(id, (p) => p.setIfMissing(fields))
  }
  const res = await tx.commit()
  console.log(`Done — ${res.results.length} document(s) touched.`)
}

run().catch((err) => { console.error(err.message); process.exit(1) })
