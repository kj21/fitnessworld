// ─── Fallback content for the Sanity-editable pages ──────────────────────────
// Used while Sanity loads, when a document has not been created yet, or when
// Sanity is unreachable. Sanity documents override these completely.
//
// Headlines follow the site convention: "\n" = new line, *word* = blue.

// Leistungs-Seiten (/kurse/reha-sport, /kurse/boxen, /kurse/personal-training)
export const servicePages = {
  'reha-sport': {
    slug: 'reha-sport',
    eyebrow: 'Reha-Sport',
    title: 'BEWEGUNG, DIE DICH WIEDER STÄRKER MACHT.',
    sub: 'Unsere gesundheitsorientierten Kurse unterstützen dich dabei, sicher in Bewegung zu kommen, Beschwerden vorzubeugen und neue Stabilität aufzubauen.',
    primaryCta: { label: 'Beratungstermin vereinbaren', to: '/probetraining?interesse=reha' },
    heroImageLabel: '/images/services/reha-hero.jpg',
    seoTitle: 'Reha-Sport | Fitness World Studios',
    sections: [
      {
        _type: 'split', _key: 'fuer-wen', tone: 'light',
        eyebrow: 'Für wen geeignet?',
        headline: 'FÜR MEHR SICHERHEIT\n*IM ALLTAG.*',
        text: 'Reha-Sport richtet sich an Menschen, die nach Verletzungen, Operationen oder bei körperlichen Beschwerden wieder mehr Sicherheit, Kraft und Beweglichkeit aufbauen möchten. Das Training findet in der Gruppe statt und orientiert sich an gesundheitlichen Zielen.',
        items: ['Rückenbeschwerden', 'Gelenkprobleme', 'Wiedereinstieg nach längerer Pause', 'Aufbau von Stabilität und Beweglichkeit', 'Mehr Vertrauen in den eigenen Körper'],
        imagePlaceholder: '/images/services/reha.jpg', imageAlt: 'Reha-Sport Gruppentraining',
      },
      {
        _type: 'steps', _key: 'ablauf', tone: 'dark',
        eyebrow: 'Ablauf', headline: 'SO\n*FUNKTIONIERT ES.*',
        items: [
          { title: 'Verordnung erhalten', text: 'Sprich mit deinem Arzt oder deiner Ärztin über eine Reha-Sport-Verordnung.' },
          { title: 'Termin vereinbaren', text: 'Melde dich bei uns und wir besprechen, welcher Kurs und Standort zu dir passt.' },
          { title: 'Kurs starten', text: 'Du trainierst in einer festen Gruppe mit klarer Anleitung und sicherer Struktur.' },
          { title: 'Dranbleiben', text: 'Wir begleiten dich dabei, wieder mehr Bewegung in deinen Alltag zu bringen.' },
        ],
      },
      {
        _type: 'split', _key: 'vertrauen', tone: 'darker',
        eyebrow: 'Vertrauen', headline: 'DU BIST\n*NICHT ALLEIN.*',
        text: 'Gerade beim gesundheitsorientierten Training zählt Vertrauen. Wir nehmen uns Zeit, erklären die Übungen verständlich und achten darauf, dass du dich sicher fühlst.',
      },
      {
        _type: 'faq', _key: 'faq', tone: 'light', eyebrow: 'Häufige Fragen', headline: 'FAQ',
        items: [
          { q: 'Brauche ich eine ärztliche Verordnung?', a: 'Für Reha-Sport ist in der Regel eine ärztliche Verordnung notwendig. Wir erklären dir gern, wie der Ablauf funktioniert.' },
          { q: 'Kann ich auch ohne Erfahrung teilnehmen?', a: 'Ja. Die Kurse sind so aufgebaut, dass auch Einsteiger gut mitkommen.' },
          { q: 'An welchem Standort findet Reha-Sport statt?', a: 'Das hängt vom aktuellen Kursangebot ab. Kontaktiere uns, dann nennen wir dir die passenden Termine.' },
          { q: 'Was muss ich zum ersten Termin mitbringen?', a: 'Bequeme Sportkleidung, saubere Sportschuhe, etwas zu trinken und falls vorhanden deine Verordnung.' },
        ],
      },
      {
        _type: 'cta', _key: 'cta', tone: 'dark',
        eyebrow: 'Jetzt starten', headline: 'STARTE JETZT\n*DEINEN REHA-SPORT.*',
        text: 'Wir helfen dir beim Einstieg und finden den passenden Kurs für dich.',
        button: { label: 'Beratungstermin vereinbaren', to: '/probetraining?interesse=reha' },
      },
    ],
  },

  boxen: {
    slug: 'boxen',
    eyebrow: 'Boxen & Kickboxen',
    title: 'KRAFT. AUSDAUER. FOKUS.',
    sub: 'Boxtraining bringt dich körperlich und mental nach vorne. Lerne Technik, verbessere deine Kondition und trainiere mit Energie.',
    primaryCta: { label: 'Boxtraining testen', to: '/probetraining?interesse=boxen' },
    secondaryCta: { label: 'Kurse ansehen', to: '/kurse' },
    heroImageLabel: '/images/services/boxen-hero.jpg',
    seoTitle: 'Boxen & Kickboxen | Fitness World Studios',
    sections: [
      {
        _type: 'split', _key: 'intro', tone: 'light',
        eyebrow: 'Das Training', headline: 'MEHR ALS\n*EIN WORKOUT.*',
        text: 'Boxen und Kickboxen verbinden Technik, Ausdauer, Kraft und Konzentration. Du brauchst keine Vorerfahrung. Wichtig ist nur, dass du bereit bist, dich zu bewegen, Neues zu lernen und dranzubleiben.',
        imagePlaceholder: '/images/services/boxen.jpg', imageAlt: 'Boxtraining Fitness World',
      },
      {
        _type: 'twoLists', _key: 'listen', tone: 'dark',
        leftEyebrow: 'Für wen', leftTitle: 'FÜR WEN GEEIGNET?',
        leftItems: ['Anfänger ohne Vorerfahrung', 'Fortgeschrittene mit Technikfokus', 'Menschen, die intensiver trainieren wollen', 'Alle, die Kondition und Körpergefühl verbessern möchten', 'Mitglieder, die Abwechslung zum Gerätetraining suchen'],
        rightEyebrow: 'Inhalte', rightTitle: 'WAS DICH ERWARTET.',
        rightItems: ['Grundtechniken', 'Schlag- und Beinarbeit', 'Partnerübungen', 'Kondition', 'Koordination', 'Core Training', 'Kontrollierte Intensität'],
      },
      {
        _type: 'note', _key: 'note', tone: 'white',
        text: 'Unsere Trainer achten auf saubere Technik, klare Abläufe und ein sicheres Trainingsumfeld. Du wirst gefordert, aber nicht überfordert.',
      },
      {
        _type: 'faq', _key: 'faq', tone: 'light', eyebrow: 'Häufige Fragen', headline: 'FAQ',
        items: [
          { q: 'Brauche ich eigene Handschuhe?', a: 'Für den Einstieg kannst du zunächst nachfragen, was vor Ort möglich ist. Langfristig sind eigene Handschuhe sinnvoll.' },
          { q: 'Kann ich als Anfänger teilnehmen?', a: 'Ja. Sag uns beim Probetraining einfach, dass du neu bist, dann führen wir dich passend ein.' },
          { q: 'Ist Boxen auch für Frauen geeignet?', a: 'Ja. Boxen ist für jedes Geschlecht geeignet. Entscheidend ist dein Ziel und dein Level.' },
        ],
      },
      {
        _type: 'cta', _key: 'cta', tone: 'dark',
        eyebrow: 'Jetzt einsteigen', headline: 'TESTE DEIN ERSTES\n*BOXTRAINING.*',
        text: 'Vereinbare dein Probetraining und erlebe, wie viel Energie in diesem Training steckt.',
        button: { label: 'Probetraining vereinbaren', to: '/probetraining?interesse=boxen' },
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
    heroImageLabel: '/images/services/personal-training.jpg',
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
    title: 'TESTE UNS. FINDE DEIN TRAINING.',
    sub: 'Lerne Fitness World persönlich kennen. Wir zeigen dir das Studio, beantworten deine Fragen und helfen dir beim passenden Einstieg.',
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
