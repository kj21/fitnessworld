// Central content + structure. Mirrors content/sitemap.json and pages/*.md.
// Build remaining routes by reading content/pages/*.md (see CLAUDE.md).

export const brand = {
  name: 'Fitness World',
  sub: 'Studios',
  claim: 'Stärker. Gesünder. Gemeinsam.',
}

// Full route table (from content/sitemap.json). Home is built; rest are stubs.
export const routes = [
  { path: '/', label: 'Startseite', template: 'home' },
  // Studio pages are dynamic: /<slug> for every studio published in Sanity
  // (src/lib/studios.js + src/pages/StudioRoute.jsx). Nothing to list here.
  { path: '/kurse', label: 'Kursplan & Angebote', template: 'course-overview' },
  { path: '/kurse/reha-sport', label: 'Reha-Sport & AOK', template: 'health-landing' },
  { path: '/kurse/personal-training', label: 'Personal Training', template: 'service-landing' },
  { path: '/kurse/boxen', label: 'Boxen & Kickboxen', template: 'service-landing' },
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
  { label: 'Standorte', to: '/holdorf', studios: true },
  {
    label: 'Kurse', to: '/kurse',
    children: [
      { label: 'Kursplan & Angebote', to: '/kurse' },
      { label: 'Reha-Sport & AOK', to: '/kurse/reha-sport' },
      { label: 'Personal Training', to: '/kurse/personal-training' },
      { label: 'Boxen & Kickboxen', to: '/kurse/boxen' },
    ],
  },
  { label: 'Mitgliedschaft', to: '/mitgliedschaft' },
  { label: 'Team', to: '/team' },
  { label: 'Blog', to: '/blog' },
  { label: 'Kontakt', to: '/kontakt' },
]

export const marqueeItems = [
  '24/7 Training', 'Reha-Sport', 'AOK-Kurse', 'Boxen', 'Kickboxen',
  'Personal Training', 'Kurse', 'Wellness', 'Community',
]

export const heroStats = ['4 Standorte', '24/7 Training', 'Reha-Sport & AOK', 'Persönliche Betreuung']

// Offline safety net only. Sanity is the source of truth for studios — when it
// answers, this list is NOT merged in (see src/lib/studios.js).
export const locations = [
  { slug: 'holdorf',     name: 'Holdorf',     to: '/holdorf',     cardImg: 'studios/holdorf-card.jpg',     features: ['24/7 Training', 'Boxen', 'Wellness', 'Parkplätze'] },
  { slug: 'goldenstedt', name: 'Goldenstedt', to: '/goldenstedt', cardImg: 'studios/goldenstedt-card.jpg', features: ['24/7 Training', 'Reha-Sport', 'Kurse', 'Lounge'] },
  { slug: 'twistringen', name: 'Twistringen', to: '/twistringen', cardImg: 'studios/twistringen-card.jpg', features: ['24/7 Training', 'Functional', 'Community', 'Solarium'] },
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
    seoTitle: 'Fitness World Studios | 24/7 Fitness, Reha-Sport & Kurse',
    metaDesc: `24/7 Training, Reha-Sport, Kurse und persönliche Betreuung an ${word.toLowerCase()} Standorten. Kostenloses Probetraining bei Fitness World Studios.`,

    heroEyebrow: 'Fitness World Studios',
    heroHeadline: 'Stärker.\n*Gesünder.*\nGemeinsam.',
    heroLede: `24/7 Training, Reha-Sport, Kurse und persönliche Betreuung an ${word.toLowerCase()} Standorten. Für deinen Start, deinen Wiedereinstieg und dein nächstes Ziel.`,
    heroPrimaryCta:   { label: 'Kostenloses Probetraining', to: '/probetraining' },
    heroSecondaryCta: { label: 'Studio finden', to: '/holdorf' },
    heroStats: [`${studioCount} Standorte`, ...heroStats.slice(1)],

    marqueeItems,

    whyEyebrow: 'Warum Fitness World?',
    whyHeadline: 'Training allein\nreicht *nicht.*',
    whyLede: 'Wir glauben, dass langfristige Erfolge dort entstehen, wo professionelle Betreuung, moderne Trainingsmöglichkeiten und echte Gemeinschaft zusammenkommen.',
    whyText: 'Egal ob du gerade erst anfängst, nach einer Pause zurückkommst oder gezielt stärker werden willst: Bei Fitness World findest du einen Ort, der zu deinem Alltag passt und dich nicht alleine lässt.',
    whyLink: { label: 'Mehr über uns', to: '/team' },

    studiosEyebrow: 'Unsere Studios',
    studiosHeadline: `${word} Standorte.\nEine *Community.*`,
    studiosText: 'Wähle dein Studio in deiner Nähe und finde heraus, welche Angebote, Kurse und Trainingsmöglichkeiten vor Ort auf dich warten.',

    servicesEyebrow: 'Unsere Leistungen',
    servicesHeadline: 'Alles für *dein Ziel.*',
    servicesText: 'Ob Kraft, Ausdauer, Gesundheit oder Technik: Wir bieten dir Training, das zu deinem Ziel und deinem Level passt.',
    services,

    communityEyebrow: 'Community',
    communityHeadline: 'Fitness ist besser *gemeinsam.*',
    communityText: 'Bei Fitness World trainierst du nicht anonym. Du wirst Teil einer Gemeinschaft, die sich gegenseitig motiviert, unterstützt und gemeinsam besser wird.',
    communityCta: { label: 'Community entdecken', to: '/team' },

    numbers: numbers.map((n) => (n.label === 'Standorte' ? { ...n, count: studioCount } : n)),

    testimonialsEyebrow: 'Das sagen unsere Mitglieder',
    testimonialsHeadline: 'Echte Stimmen.\nEchtes *Vertrauen.*',

    ctaEyebrow: 'Probetraining',
    ctaHeadline: 'Finde heraus,\nwas in dir *steckt.*',
    ctaText: 'Vereinbare jetzt dein kostenloses Probetraining und lerne Fitness World persönlich kennen.',
    ctaButton: { label: 'Probetraining vereinbaren', to: '/probetraining' },
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
      { title: 'Reha-Sport & AOK', text: 'Gesundheitsorientiertes Training mit Betreuung und klarer Struktur.' },
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

export const mitgliedschaftFAQ = [
  { q: 'Wie lange ist die Mindestlaufzeit?', a: 'Beim Flex-Tarif gibt es keine Mindestlaufzeit – du kannst monatlich kündigen. Standard und Premium haben eine Laufzeit von 12 Monaten.' },
  { q: 'Kann ich den Tarif wechseln?', a: 'Ja. Ein Upgrade ist jederzeit möglich. Ein Wechsel in einen günstigeren Tarif ist nach Ablauf der Mindestlaufzeit möglich.' },
  { q: 'Kann ich alle Standorte nutzen?', a: 'Mit Standard und Premium hast du Zugang zu allen vier Standorten. Der Flex-Tarif gilt für einen Standort deiner Wahl.' },
  { q: 'Was kostet ein Probetraining?', a: 'Das Probetraining ist kostenlos und unverbindlich. Du lernst das Studio kennen und wir besprechen gemeinsam, was zu dir passt.' },
  { q: 'Gibt es eine Aufnahmegebühr?', a: 'Bitte frag direkt im Studio nach – das können wir dir beim Probetraining genau sagen.' },
]

export const footer = {
  // {standorte} → number word of open studios, filled in by Footer.jsx
  text: 'Dein Training. Deine Gesundheit. Deine Community. An {standorte} Standorten für dich da – rund um die Uhr.',
  columns: [
    // `studios: true` → Footer fills the links from Sanity (useStudios).
    { title: 'Standorte', studios: true, links: [] },
    { title: 'Leistungen', links: [['Kurse', '/kurse'], ['Reha-Sport & AOK', '/kurse/reha-sport'], ['Personal Training', '/kurse/personal-training'], ['Boxen & Kickboxen', '/kurse/boxen']] },
    { title: 'Service', links: [['Probetraining', '/probetraining'], ['Mitgliedschaft', '/mitgliedschaft'], ['Team', '/team'], ['Jobs', '/jobs'], ['Kontakt', '/kontakt']] },
    { title: 'Rechtliches', links: [['Impressum', '/impressum'], ['Datenschutz', '/datenschutz'], ['AGB', '/agb'], ['Hausordnung', '/hausordnung']] },
  ],
}
