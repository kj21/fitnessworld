// Central content + structure. Mirrors content/sitemap.json and pages/*.md.
// Build remaining routes by reading content/pages/*.md (see CLAUDE.md).

export const brand = {
  name: 'Fitness World',
  sub: 'Studios',
  claim: 'Training nach deinem Lifestyle.',
}

// Full route table (from content/sitemap.json). Home is built; rest are stubs.
export const routes = [
  { path: '/', label: 'Startseite', template: 'home' },
  // Studio pages are dynamic: /<slug> for every studio published in Sanity
  // (src/lib/studios.js + src/pages/StudioRoute.jsx). Nothing to list here.
  { path: '/24-7-training', label: '24/7 Training', template: 'service' },
  { path: '/reha-sport', label: 'Reha-Sport & Gesundheit', template: 'service' },
  { path: '/fighter-world', label: 'Fighter World', template: 'service' },
  { path: '/personal-training', label: 'Personal Training', template: 'service' },
  { path: '/kurse', label: 'Kursplan & Angebote', template: 'course-overview' },
  { path: '/mitgliedschaft', label: 'Mitglied werden / Preise', template: 'pricing' },
  { path: '/probetraining', label: 'Kostenloses Probetraining', template: 'lead-form' },
  { path: '/team', label: 'Unser Team', template: 'team' },
  { path: '/jobs', label: 'Stellenangebote', template: 'jobs' },
  { path: '/blog', label: 'News & Tipps', template: 'blog' },
  { path: '/kontakt', label: 'Kontakt', template: 'contact' },
  { path: '/impressum', label: 'Impressum', template: 'legal' },
  { path: '/datenschutz', label: 'Datenschutz', template: 'legal' },
  { path: '/agb', label: 'AGB', template: 'legal' },
  { path: '/hausordnung', label: 'Hausordnung', template: 'legal' },
]

export const nav = [
  // `studios: true` → Header fills the children from Sanity (useStudios).
  { label: 'Standorte', to: '/standorte', studios: true },
  { label: '24/7 Training', to: '/24-7-training' },
  { label: 'Reha & Gesundheit', to: '/reha-sport' },
  { label: 'Fighter World', to: '/fighter-world' },
  { label: 'Mitgliedschaft', to: '/mitgliedschaft' },
  // External link (http…) → opens in a new tab, see NavLink in Header.jsx
  { label: 'Sauna & Spa', to: 'https://sauna-spa-twistringen.de/' },
]

export const marqueeItems = [
  '24/7 Training', 'Reha-Sport', 'Boxen', 'Kickboxen',
  'Personal Training', 'Kurse', 'Wellness', 'Community',
]

export const heroStats = ['4 Standorte', '24/7 Zugang', 'Betreuung zu Trainerzeiten', 'Reha-Sport mit Verordnung']

// Offline safety net only. Sanity is the source of truth for studios — when it
// answers, this list is NOT merged in (see src/lib/studios.js).
export const locations = [
  { slug: 'holdorf',     name: 'Holdorf',     to: '/holdorf',     cardImg: 'studios/holdorf-card.jpg',     bestFor: '24/7 Training & Fighter World', accessNote: '24/7 mit Transponder', features: ['24/7 Zugang', 'Boxen', 'Wellness', 'Parkplätze'] },
  { slug: 'goldenstedt', name: 'Goldenstedt', to: '/goldenstedt', cardImg: 'studios/goldenstedt-card.jpg', bestFor: 'Reha-Sport & Kurse', accessNote: '24/7 mit Transponder', features: ['24/7 Zugang', 'Reha-Sport', 'Kurse', 'Lounge'] },
  { slug: 'twistringen', name: 'Twistringen', to: '/twistringen', cardImg: 'studios/twistringen-card.jpg', bestFor: 'Kraft, Kurse & Wellness', accessNote: '24/7 mit Transponder', features: ['24/7 Zugang', 'Functional', 'Kurse', 'Solarium'] },
]

export const services = [
  { icon: 'dumbbell', title: 'Krafttraining', to: '/kurse', text: 'Mehr Kraft, mehr Stabilität und sichtbarer Fortschritt mit modernen Geräten und klarer Struktur.' },
  { icon: 'pulse', title: 'Ausdauer', to: '/kurse', text: 'Verbessere Kondition, Energie und Leistungsfähigkeit mit Cardio, das in deinen Alltag passt.' },
  { icon: 'heart', title: 'Reha-Sport', to: '/kurse/reha-sport', text: 'Gesundheitlich orientiertes Training mit klarer Betreuung und strukturierten Kursen.' },
  { icon: 'glove', title: 'Boxen & Kickboxen', to: '/kurse/boxen', text: 'Technik, Fokus und Kondition in intensiven Einheiten für Anfänger und Fortgeschrittene.' },
  { icon: 'users', title: 'Kurse', to: '/kurse', text: 'Gemeinsam trainieren, motiviert bleiben und neue Routinen aufbauen.' },
  { icon: 'target', title: 'Personal Training', to: '/kurse/personal-training', text: 'Individuelle Betreuung, klare Ziele und ein Plan, der wirklich zu dir passt.' },
]

export const numbers = [
  { count: 4, label: 'Standorte' },
  { text: '24*/*7', label: 'Zugang' },
  { count: 1000, suffix: '+', label: 'Aktive Mitglieder' },
  { count: 4.8, decimals: 1, label: 'Google Bewertung' },
]

export const testimonials = [
  { initial: 'J', name: 'Julia M.', loc: 'Holdorf', quote: 'Zum ersten Mal fühle ich mich in einem Studio wirklich wohl. Das Team ist aufmerksam, die Stimmung ist gut und ich weiß endlich, was ich trainieren soll.' },
  { initial: 'T', name: 'Tobias K.', loc: 'Twistringen', quote: 'Die Trainer kennen meinen Namen und helfen mir bei jedem Schritt. Genau das hat mir in anderen Studios immer gefehlt.' },
  { initial: 'M', name: 'Maria S.', loc: 'Goldenstedt', quote: 'Durch den Reha-Sport habe ich wieder mehr Vertrauen in meinen Körper bekommen. Danke für die kompetente Betreuung.' },
]

// ─── Homepage copy (fallback for the Sanity "Startseite" document) ────────────
// Headline convention (same as in Sanity): "\n" = new line, *word* = blue.
const NUMBER_WORDS = ['Null', 'Ein', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn', 'Elf', 'Zwölf']
export const numberWord = (n) => NUMBER_WORDS[n] ?? String(n)

export function homeContent(studioCount = locations.length) {
  const word = numberWord(studioCount)
  return {
    seoTitle: 'Fitness World Studios | 24/7 Training, Reha-Sport, Kurse & Fighter World',
    metaDesc: `24/7 Zugang, persönliche Betreuung, Reha-Sport, Kurse und Fighter World an ${word.toLowerCase()} Standorten. Finde deinen Einstieg beim kostenlosen Probetraining.`,

    // 1 — Hero
    heroEyebrow: 'Fitness World Studios',
    heroHeadline: 'TRAINING NACH\n*DEINEM LIFESTYLE.*',
    heroLede: '24/7 Zugang, persönliche Betreuung, Reha-Sport, Kurse und Fighter World – so flexibel, wie dein Alltag es braucht.',
    heroPrimaryCta:   { label: 'Studio & Probetraining finden', to: '/probetraining' },
    heroSecondaryCta: { label: '24/7 Training entdecken', to: '/24-7-training' },
    heroStats: [`${studioCount} Standorte`, '24/7 Zugang', 'Betreuung zu Trainerzeiten', 'Reha-Sport mit Verordnung'],

    // 2 — Blue Access Bar
    accessBar: [
      { icon: 'clock',  label: '24/7 Zugang',           meta: 'Transponder' },
      { icon: 'target', label: 'Persönliche Betreuung', meta: 'zu Trainerzeiten' },
      { icon: 'heart',  label: 'Reha-Sport',            meta: 'mit Verordnung' },
      { icon: 'glove',  label: 'Boxen & Kickboxen',     meta: 'Fighter World' },
      { icon: 'spa',    label: 'Wellness',              meta: 'Solarium & Sauna' },
      { icon: 'pin',    label: 'Mehrere Standorte',     meta: 'ein Zugang' },
    ],

    // 3 — Einstieg wählen
    decisionEyebrow: 'Dein Einstieg',
    decisionHeadline: 'WÄHLE DEINEN *EINSTIEG.*',
    decisionText: 'Jeder Mensch startet anders. Deshalb findest du bei Fitness World Studios nicht nur Geräte, sondern den Trainingsweg, der zu deinem Alltag, deinem Ziel und deinem Level passt.',
    decisionCards: [
      { icon: 'clock',    goal: 'Flexibel trainieren',   title: '24/7 Zugang',        text: 'Trainiere unabhängig von Öffnungszeiten – früh vor der Schicht, spät nach Feierabend.', to: '/24-7-training' },
      { icon: 'heart',    goal: 'Schmerzfreier werden',  title: 'Reha-Sport',         text: 'Gesundheitlich begleitetes Training in fester Gruppe, mit ärztlicher Verordnung.', to: '/reha-sport' },
      { icon: 'dumbbell', goal: 'Stärker werden',        title: 'Kraft & Geräte',     text: 'Moderne Geräte, klarer Plan und ein Trainer, der dir die Technik zeigt.', to: '/kurse' },
      { icon: 'users',    goal: 'Gemeinsam trainieren',  title: 'Kurse & Zirkel',     text: 'Feste Termine, Gruppendynamik und ein Plan, der dich in Bewegung hält.', to: '/kurse' },
      { icon: 'glove',    goal: 'Auspowern',             title: 'Fighter World',      text: 'Boxen, Kickboxen und Frauenboxen – Technik, Kondition und Fokus.', to: '/fighter-world' },
      { icon: 'spa',      goal: 'Erholen',               title: 'Wellness',           text: 'Solarium, Sauna und Regeneration als fester Teil deines Trainingswegs.', to: '/kontakt' },
    ],

    // 4 — Studio Finder
    studiosEyebrow: 'Standorte',
    studiosHeadline: 'FINDE DEINEN\n*FITNESS WORLD STANDORT.*',
    studiosText: 'Jeder Standort hat seinen eigenen Schwerpunkt – von 24/7 Training über Reha-Sport bis Boxen und Wellness.',

    // 5 — 24/7
    access247Eyebrow: '24/7 Training',
    access247Headline: 'TRAINIERE, WENN ES\n*FÜR DICH PASST.*',
    access247Text: 'Frühschicht, Spätschicht, Familie oder voller Kalender: Mit 24/7 Zugang trainierst du unabhängig von klassischen Öffnungszeiten.',
    access247Points: [
      { title: 'Zugang per Transponder', text: 'Dein Transponder öffnet dein Studio – auch außerhalb der betreuten Zeiten.' },
      { title: 'Flexibel rund um die Uhr', text: 'Kein Warten auf Öffnungszeiten. Du trainierst in deinem Rhythmus.' },
      { title: 'Ideal für Schichtarbeit', text: 'Früh, spät oder zwischendurch: Dein Training passt sich dem Dienstplan an.' },
      { title: 'Betreuung zu Trainerzeiten', text: 'Einweisung, Trainingsplan und Fragen klären wir, wenn ein Trainer da ist.' },
    ],
    access247Note: { title: 'Wichtig zu wissen', text: '24/7 Zugang heißt: Du kommst rund um die Uhr ins Studio. Persönliche Betreuung gibt es zu den ausgewiesenen Trainerzeiten deines Standorts.' },
    access247Cta: { label: '24/7 Training entdecken', to: '/24-7-training' },

    // 6 — Reha & Gesundheit
    rehaEyebrow: 'Reha & Gesundheit',
    rehaHeadline: 'REHA-SPORT, DER DICH WIEDER\n*IN BEWEGUNG BRINGT.*',
    rehaText: 'Mit ärztlicher Verordnung, qualifizierter Betreuung und klarer Kursstruktur.',
    rehaSteps: [
      { title: 'Verordnung erhalten', text: 'Dein Arzt stellt die Verordnung für Reha-Sport aus.' },
      { title: 'Beratung vereinbaren', text: 'Wir klären Ablauf, Kurszeiten und den passenden Standort.' },
      { title: 'Kurs starten', text: 'Du trainierst in einer festen Gruppe mit qualifizierter Anleitung.' },
      { title: 'Fortschritt aufbauen', text: 'Wir begleiten dich, bis Bewegung wieder zu deinem Alltag gehört.' },
    ],
    rehaCta: { label: 'Beratung vereinbaren', to: '/probetraining?interesse=reha' },

    // 7 — Fighter World
    fighterEyebrow: 'Fighter World',
    fighterHeadline: 'TECHNIK. KONDITION.\n*FOKUS.*',
    fighterText: 'Boxen, Kickboxen und Frauenboxen für alle, die mehr wollen als nur Geräte.',
    fighterPoints: [
      { title: 'Technik von Grund auf', text: 'Saubere Schlag- und Beinarbeit, Schritt für Schritt aufgebaut.' },
      { title: 'Kondition mit System', text: 'Intervalle, Pratzen und Partnerübungen statt starrer Geräteabfolge.' },
      { title: 'Frauenboxen', text: 'Eigene Einheiten mit klarer Struktur und ruhigem Einstieg.' },
    ],
    fighterCta: { label: 'Fighter World entdecken', to: '/fighter-world' },

    // 8 — Mitgliedschaft
    membershipEyebrow: 'Mitgliedschaft',
    membershipHeadline: 'STARTE SO FLEXIBEL,\n*WIE DU TRAINIERST.*',
    membershipText: 'Finde die Mitgliedschaft, die zu deinem Alltag, deinem Ziel und deinem Standort passt.',
    membershipCta: { label: 'Mitgliedschaft anfragen', to: '/mitgliedschaft' },

    // 9 — Probetraining
    ctaEyebrow: 'Probetraining',
    ctaHeadline: 'FINDE DEINEN *STARTPUNKT.*',
    ctaText: 'Wähle deinen Standort und sag uns, wie du trainieren möchtest. Wir melden uns mit dem passenden Einstieg.',
    ctaSteps: ['Standort wählen', 'Trainingsart angeben', 'Termin abstimmen'],
    ctaButton: { label: 'Probetraining anfragen', to: '/probetraining' },
  }
}

export const studioData = {
  holdorf: {
    slug: 'holdorf',
    title: 'FITNESS WORLD HOLDORF',
    eyebrow: 'Studio Holdorf',
    sub: 'Dein Studio für Kraft, Boxen und Wellness. 24/7 Zugang, kostenlose Parkplätze und ein Team, das dich kennt.',
    img: '/images/studios/holdorf-hero.jpg',
    seoTitle: 'Fitness World Holdorf | 24/7 Fitness, Boxen & Wellness',
    metaDesc: 'Trainiere im Fitness World Studio Holdorf. 24/7 Zugang, Boxen, Wellness, kostenlose Parkplätze und persönliche Betreuung.',
    keyFacts: ['24/7 Training', 'Boxen & Kickboxen', 'Wellness', 'Kostenlose Parkplätze'],
    intro: {
      headline: 'DEIN HEIMSTUDIO IN HOLDORF.',
      text: 'In Holdorf findest du ein Studio, das sich mit deinem Alltag verbindet. Egal wann du kommst: Die Geräte sind modern, das Team ist da und du hast Platz, um wirklich zu trainieren. Boxen, Kraft, Ausdauer oder einfach mal abschalten – bei uns geht das alles.',
    },
    ausstattung: ['Kraftbereich', 'Cardio-Bereich', 'Boxbereich', 'Wellness', 'Umkleiden & Duschen', 'Aufenthaltsbereich', 'Kostenlose Parkplätze'],
    kurse: [
      { title: 'Boxen & Kickboxen', text: 'Technik, Kondition und Fokus für Anfänger und Fortgeschrittene.' },
      { title: 'Kraft & Ausdauer', text: 'Strukturiertes Training auf modernen Geräten mit klarer Anleitung.' },
      { title: 'Community-Kurse', text: 'Gemeinsam trainieren, Routine aufbauen und durchhalten.' },
    ],
    ctaHeadline: 'KOMM ZUM PROBETRAINING NACH HOLDORF.',
    ctaText: 'Lerne das Studio kennen und starte mit einem Training, das zu dir passt.',
  },
  goldenstedt: {
    slug: 'goldenstedt',
    title: 'FITNESS WORLD GOLDENSTEDT',
    eyebrow: 'Studio Goldenstedt',
    sub: 'Dein Studio für Kraft, Reha-Sport, Kurse und echte Community. 24/7 Training und persönliche Betreuung.',
    img: '/images/studios/goldenstedt-hero.jpg',
    seoTitle: 'Fitness World Goldenstedt | 24/7 Fitness, Reha-Sport & Kurse',
    metaDesc: 'Trainiere im Fitness World Studio Goldenstedt. 24/7 Zugang, Reha-Sport, Kurse, Lounge und persönliche Betreuung.',
    keyFacts: ['24/7 Training', 'Reha-Sport', 'Kurse', 'Getränke & Lounge'],
    intro: {
      headline: 'MEHR ALS EIN FITNESSSTUDIO.',
      text: 'Goldenstedt ist einer unserer vielseitigsten Standorte. Ob du Kraft aufbauen, gesundheitsorientiert trainieren oder einfach in Bewegung bleiben willst – wir haben das passende Angebot. Reha-Sport, Kurse und offene Trainingsflächen unter einem Dach.',
    },
    ausstattung: ['Kraftbereich', 'Cardio-Bereich', 'Kursraum', 'Reha-Sport Bereich', 'Getränkelounge', 'Umkleiden & Duschen', 'Aufenthaltsbereich'],
    kurse: [
      { title: 'Reha-Sport', text: 'Gesundheitsorientiertes Training mit Betreuung und klarer Struktur.' },
      { title: 'Kurse für alle Level', text: 'Gruppentraining mit Motivation, Abwechslung und klarer Anleitung.' },
      { title: 'Kraft & Ausdauer', text: 'Modern ausgestattet und für jedes Trainingsziel geeignet.' },
    ],
    ctaHeadline: 'STARTE DEIN PROBETRAINING IN GOLDENSTEDT.',
    ctaText: 'Lerne das Studio kennen und finde heraus, welches Angebot am besten zu dir passt.',
  },
  twistringen: {
    slug: 'twistringen',
    title: 'FITNESS WORLD TWISTRINGEN',
    eyebrow: 'Studio Twistringen',
    sub: 'Dein Studio für Kraft, Ausdauer, Functional Training und Community. Flexibel trainieren, besser werden und gemeinsam dranbleiben.',
    img: '/images/studios/twistringen-hero.jpg',
    seoTitle: 'Fitness World Twistringen | 24/7 Fitness, Kurse & Functional Training',
    metaDesc: 'Trainiere im Fitness World Studio Twistringen. 24/7 Zugang, Functional Training, Kraft, Kurse, Community und Regeneration.',
    keyFacts: ['24/7 Training', 'Functional Training', 'Kurse', 'Community'],
    intro: {
      headline: 'FÜR DEINEN ALLTAG. FÜR DEIN ZIEL.',
      text: 'In Twistringen findest du ein Studio, das dich flexibel unterstützt: vor der Arbeit, nach der Arbeit oder wann immer dein Alltag es zulässt. Moderne Trainingsflächen, betreute Angebote und eine motivierende Atmosphäre machen es einfacher, regelmäßig zu trainieren.',
    },
    ausstattung: ['Kraftbereich', 'Cardio-Bereich', 'Functional Training', 'Kursbereich', 'Solarium', 'Umkleiden & Duschen', 'Aufenthaltsbereich'],
    kurse: [
      { title: 'Functional Training', text: 'Ganzkörpertraining für Kraft, Stabilität und Beweglichkeit.' },
      { title: 'Kurse für jedes Level', text: 'Gemeinsam trainieren und mit Struktur motiviert bleiben.' },
      { title: 'Gesundheitsorientiertes Training', text: 'Sicher bewegen, Belastbarkeit aufbauen und langfristig fitter werden.' },
    ],
    ctaHeadline: 'KOMM ZUM PROBETRAINING NACH TWISTRINGEN.',
    ctaText: 'Lerne das Studio kennen und starte mit einem Training, das zu dir passt.',
  },
}

export const pricingPlans = [
  {
    name: 'Flex',
    price: '24,90',
    period: 'pro Monat',
    desc: 'Für alle, die flexibel bleiben und ohne lange Bindung trainieren wollen.',
    features: ['Zugang zu einem Standort', 'Trainingsfläche & Geräte', 'Monatlich kündbar', 'App-Zugang'],
    cta: 'Jetzt Flex starten',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '34,90',
    period: 'pro Monat',
    desc: 'Unser beliebtester Tarif: alle Standorte, Kurse und voller Zugang.',
    features: ['Zugang zu allen 4 Standorten', 'Trainingsfläche & Geräte', 'Kursflat inklusive', 'App-Zugang', '12 Monate Laufzeit'],
    cta: 'Jetzt Mitglied werden',
    highlight: true,
    badge: 'Beliebt',
  },
  {
    name: 'Premium',
    price: '54,90',
    period: 'pro Monat',
    desc: 'Für alle, die das Komplettpaket wollen – inklusive Personal Training.',
    features: ['Alles aus Standard', '2× Personal Training / Monat', 'Wellness & Regeneration', 'Persönlicher Trainingsplan', '12 Monate Laufzeit'],
    cta: 'Premium starten',
    highlight: false,
  },
]

// {anzahl} → number of open studios (replaced at render time)
export const mitgliedschaftFAQ = [
  { q: 'Wie lange ist die Mindestlaufzeit?', a: 'Das hängt vom Tarif ab: Es gibt monatlich kündbare Tarife sowie Tarife mit 12 oder 24 Monaten Laufzeit.' },
  { q: 'Kann ich den Tarif wechseln?', a: 'Ja. Ein Upgrade ist jederzeit möglich. Ein Wechsel in einen günstigeren Tarif ist nach Ablauf der Mindestlaufzeit möglich.' },
  { q: 'Kann ich alle Standorte nutzen?', a: 'Mit deiner Mitgliedschaft kannst du alle {anzahl} Studios nutzen. Frag im Studio gern nach den Details deines Tarifs.' },
  { q: 'Was kostet ein Probetraining?', a: 'Das Probetraining ist kostenlos und unverbindlich. Du lernst das Studio kennen und wir besprechen gemeinsam, was zu dir passt.' },
  { q: 'Gibt es eine Aufnahmegebühr?', a: 'Bitte frag direkt im Studio nach – das können wir dir beim Probetraining genau sagen.' },
]

export const mitgliedschaftBenefits = [
  { title: '24/7 Zugang', text: 'Trainiere wann du willst – morgens, abends oder nachts. Dein Studio ist immer offen.' },
  { title: '{anzahl} Standorte', text: 'Mit deiner Mitgliedschaft trainierst du in allen {anzahl} Studios ohne Aufpreis.' },
  { title: 'Persönliche Betreuung', text: 'Wir kennen deinen Namen, dein Ziel und begleiten dich auf deinem Weg.' },
  { title: 'Moderne Ausstattung', text: 'Hochwertige Geräte, gepflegte Anlagen und eine motivierende Atmosphäre.' },
  { title: 'Community', text: 'Du trainierst nicht anonym. Du wirst Teil einer echten Fitness-Community.' },
  { title: 'Kurse inklusive', text: 'Viele Gruppenangebote sind ohne Zusatzkosten dabei.' },
]

// ─── Kurse (fallback for Sanity "Kurs" / "Kursplan-Eintrag") ───────────────────
export const courses = [
  { title: 'Reha-Sport', category: 'Gesundheit', text: 'Gezielte Bewegung in der Gruppe. Ideal für den Wiedereinstieg nach Verletzungen, Operationen oder bei chronischen Beschwerden.', link: '/kurse/reha-sport', featured: true },
  { title: 'Functional Training', category: 'Kraft & Ausdauer', text: 'Ganzkörpertraining mit Fokus auf Kraft, Stabilität, Koordination und Beweglichkeit.', link: '/probetraining' },
  { title: 'Zirkeltraining', category: 'Kraft & Ausdauer', text: 'Effizient trainieren mit klaren Stationen und motivierender Struktur.', link: '/probetraining' },
  { title: 'Boxen', category: 'Boxen', text: 'Technik, Kondition und mentale Stärke in einer intensiven Einheit.', link: '/kurse/boxen', featured: true, navLabel: 'Boxen & Kickboxen' },
  { title: 'Kickboxen', category: 'Boxen', text: 'Dynamisches Training für Ausdauer, Kraft, Reaktion und Fokus.', link: '/kurse/boxen' },
  { title: 'Personal Training', category: 'Individuell', text: 'Ein klarer Plan, persönliche Betreuung und Training, das exakt zu deinem Ziel passt.', link: '/kurse/personal-training', featured: true },
]

export const schedule = [
  { day: 'Mo', time: '09:00', course: 'Functional Training', studio: 'Holdorf', level: 'Alle Level', trainer: 'Team FW' },
  { day: 'Mo', time: '18:30', course: 'Boxen', studio: 'Holdorf', level: 'Anfänger', trainer: 'Team FW' },
  { day: 'Di', time: '19:00', course: 'Zirkeltraining', studio: 'Twistringen', level: 'Alle Level', trainer: 'Team FW' },
  { day: 'Mi', time: '09:30', course: 'Reha-Sport', studio: 'Goldenstedt', level: 'Einsteiger', trainer: 'Team FW' },
  { day: 'Mi', time: '18:00', course: 'Kickboxen', studio: 'Holdorf', level: 'Alle Level', trainer: 'Team FW' },
  { day: 'Do', time: '10:00', course: 'Functional Training', studio: 'Twistringen', level: 'Alle Level', trainer: 'Team FW' },
  { day: 'Do', time: '19:30', course: 'Boxen', studio: 'Twistringen', level: 'Fortgeschrittene', trainer: 'Team FW' },
  { day: 'Fr', time: '09:00', course: 'Zirkeltraining', studio: 'Holdorf', level: 'Alle Level', trainer: 'Team FW' },
  { day: 'Sa', time: '10:00', course: 'Functional Training', studio: 'Goldenstedt', level: 'Alle Level', trainer: 'Team FW' },
]

// ─── Unternehmen & Impressum (fallback for Sanity "Unternehmen & Impressum") ──
// Source: Impressum on fitnessworldstudios.de (Sept 2026).
export const company = {
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

export const footer = {
  // {standorte} → number word of open studios, filled in by Footer.jsx
  text: 'Training nach deinem Lifestyle: 24/7 Zugang, Reha-Sport, Kurse und Fighter World an {standorte} Standorten.',
  columns: [
    // `studios: true` → Footer fills the links from Sanity (useStudios).
    { title: 'Standorte', studios: true, links: [] },
    // `courses: true` → Footer fills the links from Sanity (useCourses).
    { title: 'Training', courses: true, links: [['24/7 Training', '/24-7-training'], ['Reha-Sport', '/reha-sport'], ['Fighter World', '/fighter-world'], ['Kurse', '/kurse']] },
    { title: 'Service', links: [['Probetraining', '/probetraining'], ['Mitgliedschaft', '/mitgliedschaft'], ['Team', '/team'], ['Jobs', '/jobs'], ['Kontakt', '/kontakt']] },
    { title: 'Rechtliches', links: [['Impressum', '/impressum'], ['Datenschutz', '/datenschutz'], ['AGB', '/agb'], ['Hausordnung', '/hausordnung']] },
  ],
}
