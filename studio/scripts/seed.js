/**
 * Seed script — populates Sanity with Phase 1 data from the existing hardcoded values.
 *
 * Prerequisites:
 *   1. Set SANITY_WRITE_TOKEN in your shell:
 *      export SANITY_WRITE_TOKEN=sk...  (Editor token from sanity.io/manage → API → Tokens)
 *   2. Replace YOUR_PROJECT_ID below with the real project ID.
 *   3. Run from the studio/ folder:
 *      node scripts/seed.js
 *
 * The script uses createOrReplace with fixed _id values so it's safe to re-run.
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'u4s4v1t1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

// ─── Data (transcribed from src/data/site.js and page files) ─────────────────

const studioLocations = [
  {
    _id: 'studioLocation-holdorf',
    _type: 'studioLocation',
    slug: { _type: 'slug', current: 'holdorf' },
    eyebrow: 'Studio Holdorf',
    title: 'FITNESS WORLD HOLDORF',
    sub: 'Dein Studio für Kraft, Boxen und Wellness. 24/7 Zugang, kostenlose Parkplätze und ein Team, das dich kennt.',
    seoTitle: 'Fitness World Holdorf | 24/7 Fitness, Boxen & Wellness',
    metaDesc: 'Trainiere im Fitness World Studio Holdorf. 24/7 Zugang, Boxen, Wellness, kostenlose Parkplätze und persönliche Betreuung.',
    keyFacts: ['24/7 Training', 'Boxen & Kickboxen', 'Wellness', 'Kostenlose Parkplätze'],
    intro: { headline: 'DEIN HEIMSTUDIO IN HOLDORF.', text: 'In Holdorf findest du ein Studio, das sich mit deinem Alltag verbindet. Egal wann du kommst: Die Geräte sind modern, das Team ist da und du hast Platz, um wirklich zu trainieren. Boxen, Kraft, Ausdauer oder einfach mal abschalten – bei uns geht das alles.' },
    ausstattung: ['Kraftbereich', 'Cardio-Bereich', 'Boxbereich', 'Wellness', 'Umkleiden & Duschen', 'Aufenthaltsbereich', 'Kostenlose Parkplätze'],
    kurse: [
      { _key: 'k1', title: 'Boxen & Kickboxen', text: 'Technik, Kondition und Fokus für Anfänger und Fortgeschrittene.' },
      { _key: 'k2', title: 'Kraft & Ausdauer',  text: 'Strukturiertes Training auf modernen Geräten mit klarer Anleitung.' },
      { _key: 'k3', title: 'Community-Kurse',   text: 'Gemeinsam trainieren, Routine aufbauen und durchhalten.' },
    ],
    ctaHeadline: 'KOMM ZUM PROBETRAINING NACH HOLDORF.',
    ctaText: 'Lerne das Studio kennen und starte mit einem Training, das zu dir passt.',
  },
  {
    _id: 'studioLocation-goldenstedt',
    _type: 'studioLocation',
    slug: { _type: 'slug', current: 'goldenstedt' },
    eyebrow: 'Studio Goldenstedt',
    title: 'FITNESS WORLD GOLDENSTEDT',
    sub: 'Dein Studio für Kraft, Reha-Sport, Kurse und echte Community. 24/7 Training und persönliche Betreuung.',
    seoTitle: 'Fitness World Goldenstedt | 24/7 Fitness, Reha-Sport & Kurse',
    metaDesc: 'Trainiere im Fitness World Studio Goldenstedt. 24/7 Zugang, Reha-Sport, Kurse, Lounge und persönliche Betreuung.',
    keyFacts: ['24/7 Training', 'Reha-Sport', 'Kurse', 'Getränke & Lounge'],
    intro: { headline: 'MEHR ALS EIN FITNESSSTUDIO.', text: 'Goldenstedt ist einer unserer vielseitigsten Standorte. Ob du Kraft aufbauen, gesundheitsorientiert trainieren oder einfach in Bewegung bleiben willst – wir haben das passende Angebot. Reha-Sport, Kurse und offene Trainingsflächen unter einem Dach.' },
    ausstattung: ['Kraftbereich', 'Cardio-Bereich', 'Kursraum', 'Reha-Sport Bereich', 'Getränkelounge', 'Umkleiden & Duschen', 'Aufenthaltsbereich'],
    kurse: [
      { _key: 'k1', title: 'Reha-Sport & AOK',        text: 'Gesundheitsorientiertes Training mit Betreuung und klarer Struktur.' },
      { _key: 'k2', title: 'Kurse für alle Level',     text: 'Gruppentraining mit Motivation, Abwechslung und klarer Anleitung.' },
      { _key: 'k3', title: 'Kraft & Ausdauer',         text: 'Modern ausgestattet und für jedes Trainingsziel geeignet.' },
    ],
    ctaHeadline: 'STARTE DEIN PROBETRAINING IN GOLDENSTEDT.',
    ctaText: 'Lerne das Studio kennen und finde heraus, welches Angebot am besten zu dir passt.',
  },
  {
    _id: 'studioLocation-twistringen',
    _type: 'studioLocation',
    slug: { _type: 'slug', current: 'twistringen' },
    eyebrow: 'Studio Twistringen',
    title: 'FITNESS WORLD TWISTRINGEN',
    sub: 'Dein Studio für Kraft, Ausdauer, Functional Training und Community. Flexibel trainieren, besser werden und gemeinsam dranbleiben.',
    seoTitle: 'Fitness World Twistringen | 24/7 Fitness, Kurse & Functional Training',
    metaDesc: 'Trainiere im Fitness World Studio Twistringen. 24/7 Zugang, Functional Training, Kraft, Kurse, Community und Regeneration.',
    keyFacts: ['24/7 Training', 'Functional Training', 'Kurse', 'Community'],
    intro: { headline: 'FÜR DEINEN ALLTAG. FÜR DEIN ZIEL.', text: 'In Twistringen findest du ein Studio, das dich flexibel unterstützt: vor der Arbeit, nach der Arbeit oder wann immer dein Alltag es zulässt. Moderne Trainingsflächen, betreute Angebote und eine motivierende Atmosphäre machen es einfacher, regelmäßig zu trainieren.' },
    ausstattung: ['Kraftbereich', 'Cardio-Bereich', 'Functional Training', 'Kursbereich', 'Solarium', 'Umkleiden & Duschen', 'Aufenthaltsbereich'],
    kurse: [
      { _key: 'k1', title: 'Functional Training',             text: 'Ganzkörpertraining für Kraft, Stabilität und Beweglichkeit.' },
      { _key: 'k2', title: 'Kurse für jedes Level',            text: 'Gemeinsam trainieren und mit Struktur motiviert bleiben.' },
      { _key: 'k3', title: 'Gesundheitsorientiertes Training', text: 'Sicher bewegen, Belastbarkeit aufbauen und langfristig fitter werden.' },
    ],
    ctaHeadline: 'KOMM ZUM PROBETRAINING NACH TWISTRINGEN.',
    ctaText: 'Lerne das Studio kennen und starte mit einem Training, das zu dir passt.',
  },
  {
    _id: 'studioLocation-vechta',
    _type: 'studioLocation',
    slug: { _type: 'slug', current: 'vechta' },
    eyebrow: 'Studio Vechta',
    title: 'FITNESS WORLD VECHTA',
    sub: 'Dein Studio für Performance, persönliche Betreuung und Training auf einem neuen Level. Modern, klar strukturiert und mit Raum für dein Ziel.',
    seoTitle: 'Fitness World Vechta | Premium Fitness, Coaching & Wellness',
    metaDesc: 'Fitness World Vechta: modernes Training, Premium Equipment, Personal Training, Wellness und Community.',
    keyFacts: ['Premium Equipment', 'Personal Training', 'Performance Training', 'Wellness'],
    intro: { headline: 'DEIN TRAINING AUF DEM NÄCHSTEN LEVEL.', text: 'Fitness World Vechta richtet sich an alle, die ihr Training ernst nehmen, aber nicht anonym trainieren wollen. Wir verbinden hochwertige Ausstattung, Betreuung und eine starke Community zu einem Studioerlebnis, das dich langfristig weiterbringt.' },
    ausstattung: ['Premium Kraftgeräte', 'Freihantelbereich', 'Cardio', 'Functional Zone', 'Personal Training', 'Wellness & Regeneration', 'Umkleiden & Duschen'],
    kurse: [
      { _key: 'k1', title: 'Performance Training', text: 'Strukturiertes Training für mehr Kraft, Kondition und Fortschritt.' },
      { _key: 'k2', title: 'Personal Training',    text: 'Individuelle Betreuung für klare Ziele und messbare Ergebnisse.' },
      { _key: 'k3', title: 'Wellness',             text: 'Regeneration, Entspannung und Ausgleich nach dem Training.' },
    ],
    ctaHeadline: 'STARTE IN VECHTA.',
    ctaText: 'Vereinbare dein Probetraining und finde heraus, wie Fitness World Vechta zu deinem Ziel passt.',
  },
]

const pricingPlans = [
  { _id: 'pricingPlan-flex',     _type: 'pricingPlan', name: 'Flex',     price: '24,90', period: 'pro Monat', desc: 'Für alle, die flexibel bleiben und ohne lange Bindung trainieren wollen.', features: ['Zugang zu einem Standort', 'Trainingsfläche & Geräte', 'Monatlich kündbar', 'App-Zugang'], cta: 'Jetzt Flex starten',    highlight: false, sortOrder: 1 },
  { _id: 'pricingPlan-standard', _type: 'pricingPlan', name: 'Standard', price: '34,90', period: 'pro Monat', desc: 'Unser beliebtester Tarif: alle Standorte, Kurse und voller Zugang.',            features: ['Zugang zu allen 4 Standorten', 'Trainingsfläche & Geräte', 'Kursflat inklusive', 'App-Zugang', '12 Monate Laufzeit'], cta: 'Jetzt Mitglied werden', highlight: true,  badge: 'Beliebt', sortOrder: 2 },
  { _id: 'pricingPlan-premium',  _type: 'pricingPlan', name: 'Premium',  price: '54,90', period: 'pro Monat', desc: 'Für alle, die das Komplettpaket wollen – inklusive Personal Training.',            features: ['Alles aus Standard', '2× Personal Training / Monat', 'Wellness & Regeneration', 'Persönlicher Trainingsplan', '12 Monate Laufzeit'], cta: 'Premium starten', highlight: false, sortOrder: 3 },
]

const teamMembers = [
  { _id: 'teamMember-andreas', _type: 'teamMember', name: 'Andreas M.', role: 'Geschäftsführer & Trainer', loc: 'Holdorf',      initial: 'A', text: 'Andreas hat Fitness World von Anfang an aufgebaut und lebt für das, was er tut. Er steht regelmäßig selbst auf der Trainingsfläche.', sortOrder: 1 },
  { _id: 'teamMember-sarah',   _type: 'teamMember', name: 'Sarah K.',   role: 'Trainerin & Kursleitung',    loc: 'Goldenstedt',  initial: 'S', text: 'Sarah leitet unsere Gesundheitskurse und Reha-Sport-Angebote. Ihre ruhige Art und ihr Fachwissen machen sie zum Anker für viele Mitglieder.', sortOrder: 2 },
  { _id: 'teamMember-felix',   _type: 'teamMember', name: 'Felix B.',   role: 'Box- & Kickboxtrainer',      loc: 'Holdorf',      initial: 'F', text: 'Felix bringt technisches Boxwissen und viel Energie mit. Er macht auch absolute Anfänger schnell fit und sicher.', sortOrder: 3 },
  { _id: 'teamMember-lisa',    _type: 'teamMember', name: 'Lisa T.',    role: 'Personal Trainerin',          loc: 'Vechta',       initial: 'L', text: 'Lisa entwickelt individuelle Trainingspläne und begleitet ihre Klienten mit klarem Fokus auf Ziele und nachhaltige Fortschritte.', sortOrder: 4 },
  { _id: 'teamMember-marco',   _type: 'teamMember', name: 'Marco H.',   role: 'Trainer & Rezeption',         loc: 'Twistringen',  initial: 'M', text: 'Marco ist das freundliche Gesicht am Eingang und auf der Fläche. Er hilft bei Gerätenfragen und sorgt dafür, dass das Studio läuft.', sortOrder: 5 },
  { _id: 'teamMember-jana',    _type: 'teamMember', name: 'Jana W.',    role: 'Trainerin & Kursleiterin',    loc: 'Goldenstedt',  initial: 'J', text: 'Jana leitet Kurse, hilft Einsteigern beim Start und sorgt dafür, dass Training Spaß macht – auch wenn es anstrengend wird.', sortOrder: 6 },
]

const jobListings = [
  { _id: 'job-trainer',   _type: 'jobListing', title: 'Trainer / Trainerin (m/w/d)',    type: 'Teilzeit / Vollzeit', loc: 'Holdorf oder Goldenstedt', text: 'Du betreust Mitglieder auf der Fläche, leitest Kurse und trägst zur positiven Studioatmosphäre bei.', tasks: ['Betreuung auf der Trainingsfläche', 'Kursleitung', 'Einweisung neuer Mitglieder', 'Mitarbeit an der Rezeption'], active: true, sortOrder: 1 },
  { _id: 'job-boxtrainer', _type: 'jobListing', title: 'Box- / Kickboxtrainer (m/w/d)', type: 'Minijob / Teilzeit',  loc: 'Holdorf',                  text: 'Du leitest Boxkurse für Anfänger und Fortgeschrittene und vermittelst Technik, Kondition und Freude an der Bewegung.', tasks: ['Leitung von Boxkursen', 'Techniktraining', 'Anfängereinführung', 'Kursplanung'], active: true, sortOrder: 2 },
  { _id: 'job-rezeption',  _type: 'jobListing', title: 'Rezeption & Service (m/w/d)',   type: 'Minijob',             loc: 'Alle Standorte',            text: 'Du bist das erste Gesicht für unsere Mitglieder und Interessenten – zuvorkommend, freundlich und zuverlässig.', tasks: ['Mitgliederempfang', 'Check-in & Verwaltung', 'Interessentenberatung', 'Studioorganisation'], active: true, sortOrder: 3 },
]

const testimonials = [
  { _id: 'testimonial-julia', _type: 'testimonial', name: 'Julia M.', initial: 'J', loc: 'Holdorf',      quote: 'Zum ersten Mal fühle ich mich in einem Studio wirklich wohl. Das Team ist aufmerksam, die Stimmung ist gut und ich weiß endlich, was ich trainieren soll.', sortOrder: 1 },
  { _id: 'testimonial-tobias', _type: 'testimonial', name: 'Tobias K.', initial: 'T', loc: 'Vechta',     quote: 'Die Trainer kennen meinen Namen und helfen mir bei jedem Schritt. Genau das hat mir in anderen Studios immer gefehlt.', sortOrder: 2 },
  { _id: 'testimonial-maria', _type: 'testimonial', name: 'Maria S.',  initial: 'M', loc: 'Goldenstedt', quote: 'Durch den Reha-Sport habe ich wieder mehr Vertrauen in meinen Körper bekommen. Danke für die kompetente Betreuung.', sortOrder: 3 },
]

const studioContacts = [
  { _id: 'contact-holdorf',      _type: 'studioContact', name: 'Holdorf',      addr: 'Musterstraße 1, 49451 Holdorf',      tel: '+49 5494 000000', email: 'holdorf@fitness-world-studios.de',      hours: 'Mo–Fr 06:00–22:00, Sa–So 08:00–20:00, 24/7 Kartenzugang', sortOrder: 1 },
  { _id: 'contact-goldenstedt',  _type: 'studioContact', name: 'Goldenstedt',  addr: 'Musterstraße 2, 49424 Goldenstedt',  tel: '+49 4444 000000', email: 'goldenstedt@fitness-world-studios.de',  hours: 'Mo–Fr 06:00–22:00, Sa–So 08:00–20:00, 24/7 Kartenzugang', sortOrder: 2 },
  { _id: 'contact-twistringen',  _type: 'studioContact', name: 'Twistringen',  addr: 'Musterstraße 3, 27239 Twistringen',  tel: '+49 4243 000000', email: 'twistringen@fitness-world-studios.de',  hours: 'Mo–Fr 06:00–22:00, Sa–So 08:00–20:00, 24/7 Kartenzugang', sortOrder: 3 },
  { _id: 'contact-vechta',       _type: 'studioContact', name: 'Vechta',       addr: 'Musterstraße 4, 49377 Vechta',       tel: '+49 4441 000000', email: 'vechta@fitness-world-studios.de',       hours: 'Mo–Fr 06:00–22:00, Sa–So 08:00–20:00, 24/7 Kartenzugang', sortOrder: 4 },
]

// ─── Seed runner ──────────────────────────────────────────────────────────────

async function seed() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌  SANITY_WRITE_TOKEN is not set. Export it before running this script.')
    process.exit(1)
  }

  const allDocs = [
    ...studioLocations,
    ...pricingPlans,
    ...teamMembers,
    ...jobListings,
    ...testimonials,
    ...studioContacts,
  ]

  console.log(`Seeding ${allDocs.length} documents to Sanity…\n`)

  for (const doc of allDocs) {
    try {
      await client.createOrReplace(doc)
      console.log(`✅  ${doc._type}  →  ${doc._id}`)
    } catch (err) {
      console.error(`❌  ${doc._id}: ${err.message}`)
    }
  }

  console.log('\nDone!')
}

seed()
