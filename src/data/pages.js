// ─── Fallback content for the Sanity-editable pages ──────────────────────────
// Used while Sanity loads, when a document has not been created yet, or when
// Sanity is unreachable. Sanity documents override these completely.
//
// Headlines follow the site convention: "\n" = new line, *word* = blue.

// Leistungs-Seiten (/kurse/reha-sport, /kurse/boxen, /kurse/personal-training)
export const servicePages = {
  'training-247': {
    slug: 'training-247',
    eyebrow: '24/7 Training',
    title: 'TRAINIERE, WENN ES FÜR DICH PASST.',
    sub: 'Frühschicht, Spätschicht, Familie oder voller Kalender: Mit 24/7 Zugang trainierst du unabhängig von klassischen Öffnungszeiten.',
    primaryCta: { label: 'Studio & Probetraining finden', to: '/probetraining?interesse=24-7' },
    secondaryCta: { label: 'Standorte ansehen', to: '/#standorte' },
    heroImagePlaceholder: '/images/services/24-7-hero.jpg',
    seoTitle: '24/7 Training | Fitness World Studios',
    metaDesc: 'Mit Transponder rund um die Uhr ins Studio, persönliche Betreuung zu den Trainerzeiten deines Standorts.',
    sections: [
      {
        _type: 'split', _key: 'wie', tone: 'light',
        eyebrow: 'So funktioniert der Zugang',
        headline: 'DEIN TRANSPONDER.\n*DEIN RHYTHMUS.*',
        text: 'Beim Start bekommst du deinen Transponder und eine Einweisung. Danach entscheidest du, wann du trainierst – auch außerhalb der betreuten Zeiten.',
        items: ['Zugang per Transponder', 'Rund um die Uhr geöffnet', 'Ideal für Schichtarbeit', 'Kein Warten auf Öffnungszeiten'],
        imagePlaceholder: '/images/services/24-7-zugang.jpg', imageAlt: 'Zugang per Transponder',
      },
      {
        _type: 'steps', _key: 'einstieg', tone: 'dark',
        eyebrow: 'Dein Einstieg', headline: 'IN DREI SCHRITTEN\n*STARTKLAR.*',
        items: [
          { title: 'Termin vereinbaren', text: 'Wir zeigen dir dein Studio und klären, was du für den Start brauchst.' },
          { title: 'Einweisung & Transponder', text: 'Du bekommst deine Geräteeinweisung und deinen Zugang.' },
          { title: 'Trainieren, wann du willst', text: 'Ab jetzt bestimmst du die Uhrzeit – dein Transponder öffnet die Tür.' },
        ],
      },
      {
        _type: 'note', _key: 'trainerzeiten', tone: 'white',
        text: '24/7 Zugang heißt: Du kommst rund um die Uhr ins Studio. Persönliche Betreuung, Einweisungen und Trainingsplanung gibt es zu den ausgewiesenen Trainerzeiten deines Standorts.',
      },
      {
        _type: 'faq', _key: 'faq', tone: 'light', eyebrow: 'Häufige Fragen', headline: 'FAQ',
        items: [
          { q: 'Ist immer ein Trainer vor Ort?', a: 'Nein. Der Zugang ist rund um die Uhr möglich, persönliche Betreuung gibt es zu den Trainerzeiten deines Standorts. Die aktuellen Zeiten findest du auf der Seite deines Studios.' },
          { q: 'Wie komme ich nachts ins Studio?', a: 'Mit deinem persönlichen Transponder. Er ist deinem Vertrag zugeordnet und darf nicht weitergegeben werden.' },
          { q: 'Kann ich alle Standorte nutzen?', a: 'Das hängt von deinem Tarif ab. Beim Probetraining sagen wir dir genau, was für dich gilt.' },
          { q: 'Was ist, wenn ich noch nie trainiert habe?', a: 'Dann starten wir zu einer Trainerzeit: Einweisung, erster Plan und danach trainierst du so flexibel, wie du möchtest.' },
        ],
      },
      {
        _type: 'cta', _key: 'cta', tone: 'dark',
        eyebrow: 'Probetraining', headline: 'FINDE DEINEN *STARTPUNKT.*',
        text: 'Sag uns deinen Wunschstandort und wie du trainieren möchtest. Wir melden uns mit dem passenden Einstieg.',
        button: { label: 'Probetraining anfragen', to: '/probetraining?interesse=24-7' },
      },
    ],
  },

  'reha-sport': {
    slug: 'reha-sport',
    eyebrow: 'Reha & Gesundheit',
    title: 'REHA-SPORT, DER DICH WIEDER IN BEWEGUNG BRINGT.',
    sub: 'Mit ärztlicher Verordnung, qualifizierter Betreuung und klarer Kursstruktur.',
    primaryCta: { label: 'Beratung vereinbaren', to: '/probetraining?interesse=reha' },
    heroImagePlaceholder: '/images/services/reha-hero.jpg',
    seoTitle: 'Reha-Sport & Gesundheit | Fitness World Studios',
    metaDesc: 'Reha-Sport mit ärztlicher Verordnung: feste Gruppen, qualifizierte Betreuung und ein klarer Einstieg an deinem Standort.',
    sections: [
      {
        _type: 'split', _key: 'fuer-wen', tone: 'light',
        eyebrow: 'Für wen geeignet?',
        headline: 'GESUNDHEITLICH BEGLEITET\n*TRAINIEREN.*',
        text: 'Reha-Sport richtet sich an Menschen, die nach Verletzungen, Operationen oder bei körperlichen Beschwerden wieder sicher in Bewegung kommen möchten. Du trainierst in einer festen Gruppe, angeleitet und in deinem Tempo.',
        items: ['Rückenbeschwerden', 'Gelenkprobleme', 'Wiedereinstieg nach längerer Pause', 'Aufbau von Stabilität und Beweglichkeit', 'Mehr Vertrauen in den eigenen Körper'],
        imagePlaceholder: '/images/services/reha.jpg', imageAlt: 'Reha-Sport Gruppentraining',
      },
      {
        _type: 'steps', _key: 'einstieg', tone: 'white',
        eyebrow: 'So funktioniert der Einstieg', headline: 'VON DER VERORDNUNG\n*ZUM KURS.*',
        items: [
          { title: 'Verordnung erhalten', text: 'Dein Arzt stellt die Verordnung für Reha-Sport aus (Muster 56).' },
          { title: 'Beratung vereinbaren', text: 'Wir klären Ablauf, Kurszeiten und welcher Standort zu dir passt.' },
          { title: 'Kurs starten', text: 'Du trainierst in einer festen Gruppe mit qualifizierter Anleitung.' },
          { title: 'Fortschritt aufbauen', text: 'Wir begleiten dich, bis Bewegung wieder zu deinem Alltag gehört.' },
        ],
      },
      {
        _type: 'split', _key: 'verordnung', tone: 'light',
        eyebrow: 'Ärztliche Verordnung',
        headline: 'MUSTER 56:\n*DEIN TICKET IN DEN KURS.*',
        text: 'Die Verordnung für Reha-Sport bekommst du von deinem Arzt. Sie hält fest, wie viele Einheiten dir zustehen und in welchem Zeitraum du sie nutzen kannst. Bring sie einfach zur Beratung mit – den Rest klären wir gemeinsam.',
        items: ['Vom Arzt ausgestellt', 'Feste Anzahl an Einheiten', 'Gültig für einen festen Zeitraum', 'Wir helfen beim Papierkram'],
        imagePlaceholder: '/images/services/reha-verordnung.jpg', imageAlt: 'Beratung zur Reha-Sport-Verordnung',
      },
      {
        _type: 'faq', _key: 'faq', tone: 'white', eyebrow: 'Häufige Fragen', headline: 'FAQ',
        items: [
          { q: 'Brauche ich eine ärztliche Verordnung?', a: 'Für Reha-Sport ist in der Regel eine ärztliche Verordnung notwendig. Wir erklären dir gern, wie der Ablauf funktioniert.' },
          { q: 'Kann ich auch ohne Erfahrung teilnehmen?', a: 'Ja. Die Kurse sind so aufgebaut, dass auch Einsteiger gut mitkommen.' },
          { q: 'An welchem Standort findet Reha-Sport statt?', a: 'Das hängt vom aktuellen Kursangebot ab. Melde dich bei uns, dann nennen wir dir die passenden Termine.' },
          { q: 'Was muss ich zum ersten Termin mitbringen?', a: 'Bequeme Sportkleidung, saubere Sportschuhe, etwas zu trinken und falls vorhanden deine Verordnung.' },
        ],
      },
      {
        _type: 'cta', _key: 'cta', tone: 'dark',
        eyebrow: 'Beratung', headline: 'STARTE GESUNDHEITLICH\n*BEGLEITET.*',
        text: 'Wir besprechen deine Verordnung, den passenden Kurs und deinen Einstieg – in Ruhe und ohne Druck.',
        button: { label: 'Beratung vereinbaren', to: '/probetraining?interesse=reha' },
      },
    ],
  },

  'fighter-world': {
    slug: 'fighter-world',
    eyebrow: 'Fighter World',
    title: 'FIGHTER WORLD: TECHNIK. KONDITION. FOKUS.',
    sub: 'Boxen, Kickboxen und Frauenboxen für alle, die mehr wollen als nur Geräte.',
    primaryCta: { label: 'Fighter World testen', to: '/probetraining?interesse=boxen' },
    secondaryCta: { label: 'Kursplan ansehen', to: '/kurse' },
    heroImagePlaceholder: '/images/services/fighter-world-hero.jpg',
    seoTitle: 'Fighter World | Boxen, Kickboxen & Frauenboxen',
    metaDesc: 'Fighter World bei Fitness World Studios: Boxen, Kickboxen und Frauenboxen mit sauberer Technik, Kondition und klarer Anleitung.',
    sections: [
      {
        _type: 'split', _key: 'fuer-wen', tone: 'darker',
        eyebrow: 'Für wen ist es geeignet?',
        headline: 'VOM ERSTEN SCHLAG\n*BIS ZUR ROUTINE.*',
        text: 'Du brauchst keine Vorerfahrung. In der Fighter World lernst du Technik von Grund auf, baust Kondition auf und findest deinen eigenen Rhythmus – vom ruhigen Einstieg bis zur intensiven Einheit.',
        items: ['Anfänger ohne Vorerfahrung', 'Fortgeschrittene mit Technikfokus', 'Frauenboxen in eigener Gruppe', 'Alle, die Kondition und Körpergefühl verbessern wollen', 'Mitglieder, die Abwechslung zum Gerätetraining suchen'],
        imagePlaceholder: '/images/services/fighter-world.jpg', imageAlt: 'Boxtraining in der Fighter World',
      },
      {
        _type: 'twoLists', _key: 'training', tone: 'dark',
        leftEyebrow: 'Das Training', leftTitle: 'WAS DICH ERWARTET.',
        leftItems: ['Grundtechniken', 'Schlag- und Beinarbeit', 'Partner- und Pratzenarbeit', 'Kondition & Koordination', 'Core Training', 'Kontrollierte Intensität'],
        rightEyebrow: 'Das brauchst du', rightTitle: 'ZUM START.',
        rightItems: ['Sportkleidung und saubere Hallenschuhe', 'Handtuch und Getränk', 'Bandagen, wenn vorhanden', 'Eigene Handschuhe später sinnvoll', 'Fragen? Wir leihen dir für den Einstieg aus'],
      },
      {
        _type: 'note', _key: 'trainer', tone: 'white',
        text: 'Unsere Trainer achten auf saubere Technik, klare Abläufe und ein sicheres Trainingsumfeld. Du wirst gefordert, aber nicht überfordert.',
      },
      {
        _type: 'faq', _key: 'faq', tone: 'light', eyebrow: 'Häufige Fragen', headline: 'FAQ',
        items: [
          { q: 'Brauche ich eigene Handschuhe?', a: 'Für den Einstieg nicht zwingend – frag einfach vorher nach, was vor Ort verfügbar ist. Langfristig sind eigene Handschuhe sinnvoll.' },
          { q: 'Kann ich als Anfänger teilnehmen?', a: 'Ja. Sag uns beim Probetraining, dass du neu bist, dann führen wir dich passend ein.' },
          { q: 'Gibt es Frauenboxen?', a: 'Ja. Frauenboxen läuft in eigenen Einheiten mit ruhigem Einstieg und klarer Struktur.' },
          { q: 'Wann finden die Einheiten statt?', a: 'Die aktuellen Zeiten stehen im Kursplan und am Standort. Frag uns gern nach dem nächsten Einstiegstermin.' },
        ],
      },
      {
        _type: 'cta', _key: 'cta', tone: 'dark',
        eyebrow: 'Probetraining', headline: 'TESTE DEINE ERSTE\n*EINHEIT.*',
        text: 'Komm vorbei, lern die Trainer kennen und finde heraus, wie viel in diesem Training steckt.',
        button: { label: 'Probetraining anfragen', to: '/probetraining?interesse=boxen' },
      },
    ],
  },

  'personal-training': {
    slug: 'personal-training',
    eyebrow: 'Personal Training',
    title: 'TRAINING, DAS WIRKLICH ZU DIR PASST.',
    sub: 'Individuelle Betreuung, klare Ziele und ein Plan, der auf dich zugeschnitten ist. Kein Standard. Kein Raten. Nur Training, das funktioniert.',
    primaryCta: { label: 'Personal Training anfragen', to: '/probetraining?interesse=personal-training' },
    secondaryCta: { label: 'Preise ansehen', to: '/mitgliedschaft' },
    heroImagePlaceholder: '/images/services/personal-training.jpg',
    seoTitle: 'Personal Training | Fitness World Studios',
    sections: [
      {
        _type: 'steps', _key: 'benefits', tone: 'light', numbered: false,
        eyebrow: 'Warum Personal Training?', headline: 'Dein Trainer.\n*Dein Plan.*',
        items: [
          { title: 'Klare Ziele', text: 'Wir definieren gemeinsam, was du erreichen willst – und bauen deinen Plan darauf auf.' },
          { title: 'Persönliche Betreuung', text: 'Du trainierst nicht alleine. Dein Trainer ist dabei, gibt Feedback und passt das Training an.' },
          { title: 'Messbare Fortschritte', text: 'Du siehst, was sich verändert – weil wir tracken, analysieren und anpassen.' },
        ],
      },
      {
        _type: 'split', _key: 'fuer-wen', tone: 'dark',
        eyebrow: 'Für wen geeignet?', headline: 'FÜR ALLE,\n*DIE MEHR WOLLEN.*',
        items: ['Menschen mit klaren Zielen und wenig Zeit', 'Einsteiger, die sicher starten wollen', 'Wiedereinsteiger nach längerer Pause', 'Fortgeschrittene mit Trainingsplateau', 'Alle, die gezielter und effizienter trainieren wollen'],
        imagePlaceholder: '/images/services/personal-training.jpg', imageAlt: 'Personal Training Betreuung',
      },
      {
        _type: 'steps', _key: 'ablauf', tone: 'white',
        eyebrow: 'Ablauf', headline: 'SO STARTEST\n*DU DURCH.*',
        items: [
          { title: 'Erstgespräch', text: 'Wir lernen uns kennen, besprechen deine Ziele und schauen, wo du gerade stehst.' },
          { title: 'Trainingsplan', text: 'Dein Trainer erstellt einen Plan, der exakt auf dich und dein Ziel zugeschnitten ist.' },
          { title: 'Training & Feedback', text: 'Wir trainieren gemeinsam und passen laufend an – damit du kontinuierlich Fortschritte machst.' },
        ],
      },
      {
        _type: 'cta', _key: 'cta', tone: 'dark',
        eyebrow: 'Jetzt starten', headline: 'BEREIT FÜR\n*DEIN ZIEL?*',
        text: 'Frage jetzt dein Personal Training an und wir besprechen zusammen, wie wir dich am besten begleiten können.',
        button: { label: 'Personal Training anfragen', to: '/probetraining?interesse=personal-training' },
      },
    ],
  },
}

// Kopf-/Einleitungs-/Abschlusstexte der übrigen Seiten (Sanity: "Seitentext")
export const pageCopy = {
  kurse: {
    eyebrow: 'Kurse & Angebote',
    title: 'FINDE DEN KURS, DER ZU DIR PASST.',
    sub: 'Ob Gesundheit, Kraft, Ausdauer oder Technik: Unsere Kurse geben dir Struktur, Motivation und die richtige Unterstützung.',
    primaryCta: { label: 'Kursplan ansehen', to: '#kursplan' },
    secondaryCta: { label: 'Probetraining vereinbaren', to: '/probetraining' },
    seoTitle: 'Kurse bei Fitness World Studios | Reha, Boxen, Functional & mehr',
    faq: [
      { q: 'Muss ich Mitglied sein, um einen Kurs zu testen?', a: 'Nein. Du kannst viele Angebote im Rahmen eines Probetrainings kennenlernen.' },
      { q: 'Sind die Kurse für Anfänger geeignet?', a: 'Ja. Viele Kurse sind für Einsteiger geeignet. Bei intensiveren Angeboten sagen wir dir vorher, was du mitbringen solltest.' },
      { q: 'Muss ich mich anmelden?', a: 'Für viele Kurse ist eine Anmeldung sinnvoll, damit wir die Gruppengröße planen können.' },
    ],
    ctaEyebrow: 'Probetraining',
    ctaHeadline: 'DU WILLST EINEN\n*KURS TESTEN?*',
    ctaText: 'Vereinbare dein kostenloses Probetraining und finde den Kurs, der zu dir passt.',
    ctaButton: { label: 'Probetraining vereinbaren', to: '/probetraining' },
  },
  team: {
    eyebrow: 'Unser Team',
    title: 'MENSCHEN, DIE FÜR TRAINING BRENNEN.',
    sub: 'Hinter Fitness World stehen Trainerinnen und Trainer, die ihren Job ernst nehmen und dich nicht vergessen, sobald du durch die Tür gehst.',
    seoTitle: 'Unser Team | Fitness World Studios',
    introEyebrow: 'Wer wir sind',
    introHeadline: 'DEIN TRAINING\nIST *UNSER JOB.*',
    introText: 'Wir sind kein anonymes Fitnessstudio. Wir sind ein Team, das sich Zeit nimmt, deine Ziele kennt und dich auf deinem Weg begleitet. Ob erster Tag oder hundertster Besuch – wir sind da.',
    introCta: { label: 'Uns kennenlernen', to: '/probetraining' },
    ctaEyebrow: 'Karriere',
    ctaHeadline: 'WERDE TEIL\n*DES TEAMS.*',
    ctaText: 'Du teilst unsere Leidenschaft für Training und Menschen? Dann schau dir unsere offenen Stellen an.',
    ctaButton: { label: 'Stellenangebote ansehen', to: '/jobs' },
  },
  jobs: {
    eyebrow: 'Karriere',
    title: 'ARBEITE, WO ANDERE TRAINIEREN.',
    sub: 'Wir suchen Menschen, die Fitness leben, nicht nur vermitteln. Werde Teil des Fitness World Teams.',
    seoTitle: 'Stellenangebote | Fitness World Studios',
    ctaEyebrow: 'Keine passende Stelle?',
    ctaHeadline: 'INITIATIV-\n*BEWERBUNG.*',
    ctaText: 'Wenn du keine passende Stelle siehst, aber trotzdem Teil des Teams werden willst: Schreib uns. Wir freuen uns über motivierte Menschen.',
    ctaButton: { label: 'Initiativ bewerben', to: '/kontakt' },
  },
  probetraining: {
    eyebrow: 'Kostenloses Probetraining',
    title: 'FINDE DEINEN STARTPUNKT.',
    sub: 'Sag uns, wo und wie du trainieren möchtest. Wir helfen dir, den passenden Einstieg zu finden.',
    seoTitle: 'Kostenloses Probetraining | Fitness World Studios',
    faq: [
      { q: 'Kostet das Probetraining wirklich nichts?', a: 'Ja. Das Probetraining ist kostenlos und unverbindlich.' },
      { q: 'Muss ich Sportsachen mitbringen?', a: 'Ja. Bring bequeme Sportkleidung, saubere Sportschuhe, ein Handtuch und etwas zu trinken mit.' },
      { q: 'Wie lange dauert ein Probetraining?', a: 'Plane ungefähr 60 bis 90 Minuten ein, damit genug Zeit für Studioführung, Fragen und Training bleibt.' },
      { q: 'Kann ich jemanden mitbringen?', a: 'Frag uns vorher kurz an. In vielen Fällen ist das möglich.' },
    ],
  },
  kontakt: {
    eyebrow: 'Kontakt',
    title: 'WIR SIND FÜR DICH DA.',
    sub: 'Frage, Feedback oder einfach mal hallo sagen – wir freuen uns von dir zu hören.',
    seoTitle: 'Kontakt | Fitness World Studios',
  },
  blog: {
    eyebrow: 'News & Tipps',
    title: 'WISSEN. MOTIVATION. INSPIRATION.',
    sub: 'Alles, was dir hilft, besser zu trainieren, gesünder zu leben und langfristig dranzubleiben.',
    seoTitle: 'Fitness World Magazin | Training, Gesundheit & Motivation',
    ctaEyebrow: 'Newsletter',
    ctaHeadline: 'BLEIB IN\n*BEWEGUNG.*',
    ctaText: 'Erhalte Tipps, Angebote und News aus der Fitness World Community.',
  },
}

// Beispiel-Beiträge, bis echte Blog-Beiträge in Sanity liegen
export const blogPosts = [
  { slug: 'wiedereinstieg-training', category: 'Motivation', featured: true, title: 'So startest du wieder mit dem Training, ohne dich zu überfordern', excerpt: 'Der Wiedereinstieg muss nicht perfekt sein. Wichtig ist, dass du realistisch startest, deinen Körper ernst nimmst und eine Routine findest, die du wirklich halten kannst.' },
  { slug: 'fehler-krafttraining', category: 'Training', title: '5 Fehler beim Einstieg ins Krafttraining', excerpt: 'Viele starten zu schnell, zu schwer oder ohne Plan. Wir zeigen dir, wie du sicher und sinnvoll beginnst.' },
  { slug: 'reha-sport-mehr-als-gymnastik', category: 'Gesundheit', title: 'Warum Reha-Sport mehr ist als Gymnastik', excerpt: 'Reha-Sport kann dir helfen, wieder Vertrauen in Bewegung aufzubauen und deine Belastbarkeit zu verbessern.' },
  { slug: 'boxen-als-workout', category: 'Training', title: 'Boxen als Fitness-Workout: Für wen es geeignet ist', excerpt: 'Boxtraining fordert Körper und Kopf. Du brauchst keine Vorerfahrung, sondern nur die Bereitschaft, dich einzulassen.' },
  { slug: 'trainingsroutine-aufbauen', category: 'Motivation', title: 'Wie du eine Trainingsroutine aufbaust, die bleibt', excerpt: 'Motivation ist gut. Struktur ist besser. So machst du Training zu einem festen Teil deines Alltags.' },
]
