/**
 * Seed Kurse, Kursplan, Mitgliedschaft-Seite, Unternehmen & Impressum,
 * Leistungs-Seiten and Seitentexte.
 *
 * Safe on the live dataset: every document is created with createIfNotExists,
 * so anything that already exists (or was edited) is left untouched.
 *
 * Run from studio/ with your Sanity login (no token needed):
 *   npx sanity exec scripts/seed-content.mjs --with-user-token
 */
// sanity/cli is CommonJS in this studio setup, so load it via require.
import { createRequire } from 'node:module'
import { servicePages, pageCopy } from '../../src/data/pages.js'
const { getCliClient } = createRequire(import.meta.url)('sanity/cli')

const client = getCliClient({ apiVersion: '2024-01-01' })

const courses = [
  { id: 'reha-sport',          title: 'Reha-Sport',          category: 'Gesundheit',       link: '/kurse/reha-sport',        featured: true,  text: 'Gezielte Bewegung in der Gruppe. Ideal für den Wiedereinstieg nach Verletzungen, Operationen oder bei chronischen Beschwerden.' },
  { id: 'functional-training', title: 'Functional Training', category: 'Kraft & Ausdauer', link: '/probetraining',                            text: 'Ganzkörpertraining mit Fokus auf Kraft, Stabilität, Koordination und Beweglichkeit.' },
  { id: 'zirkeltraining',      title: 'Zirkeltraining',      category: 'Kraft & Ausdauer', link: '/probetraining',                            text: 'Effizient trainieren mit klaren Stationen und motivierender Struktur.' },
  { id: 'boxen',               title: 'Boxen',               category: 'Boxen',            link: '/kurse/boxen',             featured: true,  navLabel: 'Boxen & Kickboxen', text: 'Technik, Kondition und mentale Stärke in einer intensiven Einheit.' },
  { id: 'kickboxen',           title: 'Kickboxen',           category: 'Boxen',            link: '/kurse/boxen',                              text: 'Dynamisches Training für Ausdauer, Kraft, Reaktion und Fokus.' },
  { id: 'personal-training',   title: 'Personal Training',   category: 'Individuell',      link: '/kurse/personal-training', featured: true,  text: 'Ein klarer Plan, persönliche Betreuung und Training, das exakt zu deinem Ziel passt.' },
].map((c, i) => ({ _id: `course-${c.id}`, _type: 'course', active: true, featured: false, sortOrder: i + 1, ...c, id: undefined }))

const schedule = [
  ['mo-0900', 'Mo', '09:00', 'Functional Training', 'Holdorf',     'Alle Level'],
  ['mo-1830', 'Mo', '18:30', 'Boxen',               'Holdorf',     'Anfänger'],
  ['di-1900', 'Di', '19:00', 'Zirkeltraining',      'Twistringen', 'Alle Level'],
  ['mi-0930', 'Mi', '09:30', 'Reha-Sport',          'Goldenstedt', 'Einsteiger'],
  ['mi-1800', 'Mi', '18:00', 'Kickboxen',           'Holdorf',     'Alle Level'],
  ['do-1000', 'Do', '10:00', 'Functional Training', 'Twistringen', 'Alle Level'],
  ['do-1930', 'Do', '19:30', 'Boxen',               'Twistringen', 'Fortgeschrittene'],
  ['fr-0900', 'Fr', '09:00', 'Zirkeltraining',      'Holdorf',     'Alle Level'],
  ['sa-1000', 'Sa', '10:00', 'Functional Training', 'Goldenstedt', 'Alle Level'],
].map(([id, day, time, course, studio, level]) => ({
  _id: `schedule-${id}`, _type: 'scheduleEntry', day, time, course, studio, level, trainer: 'Team FW', active: true,
}))

const k = (i) => `k${i}`
const membershipPage = {
  _id: 'membershipPage', _type: 'membershipPage',
  heroSub: 'Klar strukturierte Tarife ohne versteckte Kosten. Finde die Mitgliedschaft, die zu deinem Alltag und deinen Zielen passt.',
  pricingNote: 'Alle Preise sind Richtwerte. Die verbindlichen Konditionen erhältst du beim Probetraining oder auf Anfrage.\nBitte Preise und Laufzeiten vor Vertragsabschluss im Studio bestätigen lassen.',
  benefits: [
    { title: '24/7 Zugang', text: 'Trainiere wann du willst – morgens, abends oder nachts. Dein Studio ist immer offen.' },
    { title: '{anzahl} Standorte', text: 'Mit deiner Mitgliedschaft trainierst du in allen {anzahl} Studios ohne Aufpreis.' },
    { title: 'Persönliche Betreuung', text: 'Wir kennen deinen Namen, dein Ziel und begleiten dich auf deinem Weg.' },
    { title: 'Moderne Ausstattung', text: 'Hochwertige Geräte, gepflegte Anlagen und eine motivierende Atmosphäre.' },
    { title: 'Community', text: 'Du trainierst nicht anonym. Du wirst Teil einer echten Fitness-Community.' },
    { title: 'Kurse inklusive', text: 'Viele Gruppenangebote sind ohne Zusatzkosten dabei.' },
  ].map((b, i) => ({ _key: k(i), ...b })),
  faq: [
    { q: 'Wie lange ist die Mindestlaufzeit?', a: 'Das hängt vom Tarif ab: Es gibt monatlich kündbare Tarife sowie Tarife mit 12 oder 24 Monaten Laufzeit.' },
    { q: 'Kann ich den Tarif wechseln?', a: 'Ja. Ein Upgrade ist jederzeit möglich. Ein Wechsel in einen günstigeren Tarif ist nach Ablauf der Mindestlaufzeit möglich.' },
    { q: 'Kann ich alle Standorte nutzen?', a: 'Mit deiner Mitgliedschaft kannst du alle {anzahl} Studios nutzen. Frag im Studio gern nach den Details deines Tarifs.' },
    { q: 'Was kostet ein Probetraining?', a: 'Das Probetraining ist kostenlos und unverbindlich. Du lernst das Studio kennen und wir besprechen gemeinsam, was zu dir passt.' },
    { q: 'Gibt es eine Aufnahmegebühr?', a: 'Bitte frag direkt im Studio nach – das können wir dir beim Probetraining genau sagen.' },
  ].map((f, i) => ({ _key: k(i), ...f })),
}

// Source: Impressum on fitnessworldstudios.de
const siteSettings = {
  _id: 'siteSettings', _type: 'siteSettings',
  companyName: 'E.M.A. Fitness World GmbH',
  managingDirector: 'Erkan Asam',
  street: 'Am Lagerweg 23',
  zipCity: '49451 Holdorf',
  country: 'Deutschland',
  phone: '05494 / 980 12 63',
  email: 'info@fitnessworld-vechta.de',
  registerCourt: 'Amtsgericht Oldenburg',
  registerNumber: 'HRB 217894',
  taxNumber: '68/217/03667',
  vatId: 'DE350911270',
  responsible: 'Erkan Asam (info@fitnessworld-vechta.de)',
}

// ─── Leistungs-Seiten & Seitentexte (aus src/data/pages.js) ──────────────────
// Sanity needs a _key on every array item; the fallback data only has them on
// the top-level sections.
let keySeq = 0
const withKeys = (value) => {
  if (Array.isArray(value)) return value.map((v) => (v && typeof v === 'object' ? { _key: v._key || `k${++keySeq}`, ...withKeys(v) } : v))
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withKeys(v)]))
  }
  return value
}

// Fields that only exist in the code fallback (placeholder image paths) are
// dropped — in Sanity the editor uploads a real image instead.
const stripLocal = ({ heroImageLabel, imageLabel, imageAlt, ...rest }) => rest

const servicePageDocs = Object.values(servicePages).map((page) => ({
  _id: `servicePage-${page.slug}`,
  _type: 'servicePage',
  ...stripLocal(withKeys(page)),
  sections: (withKeys(page.sections) || []).map(stripLocal),
}))

const pageCopyDocs = Object.entries(pageCopy).map(([name, copy]) => ({
  _id: `pageCopy-${name}`,
  _type: 'pageCopy',
  page: name,
  ...withKeys(copy),
}))

const tx = client.transaction()
for (const doc of [...courses, ...schedule, membershipPage, siteSettings, ...servicePageDocs, ...pageCopyDocs]) {
  for (const key of Object.keys(doc)) if (doc[key] === undefined) delete doc[key]
  tx.createIfNotExists(doc)
}
const res = await tx.commit()
console.log(`Done — transaction ${res.transactionId}, ${res.results.length} document(s) checked (existing ones untouched).`)
