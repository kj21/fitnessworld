import { defineType, defineField } from 'sanity'

// ─── Startseite (Singleton) ──────────────────────────────────────────────────
// Every field is optional. Anything left empty falls back to the hardcoded
// copy in src/data/site.js (homeContent), so a half-filled document never
// produces an empty section on the live site.

const HEADLINE_HINT =
  'Zeilenumbruch = neue Zeile. Ein Wort zwischen *Sternchen* wird blau, z.B. "Alles für *dein Ziel.*" {anzahl} = Zahl der geöffneten Studios, z.B. "{anzahl} Standorte."'

const ICONS = ['dumbbell', 'pulse', 'heart', 'glove', 'users', 'target', 'clock', 'card', 'pin', 'spa', 'shield', 'route']

const headline = (name, title, group) =>
  defineField({ name, title, type: 'text', rows: 2, description: HEADLINE_HINT, group })

const cta = (name, title, group) =>
  defineField({
    name, title, type: 'object', group,
    fields: [
      defineField({ name: 'label', title: 'Button-Text', type: 'string' }),
      defineField({ name: 'to',    title: 'Link (z.B. /probetraining)', type: 'string' }),
    ],
  })

export default defineType({
  name:  'homePage',
  title: 'Startseite',
  type:  'document',
  groups: [
    { name: 'hero',         title: '1 Hero', default: true },
    { name: 'access',       title: '2 Leistungs-Leiste' },
    { name: 'decision',     title: '3 Einstieg wählen' },
    { name: 'studios',      title: '4 Studio Finder' },
    { name: 'access247',    title: '5 24/7 Training' },
    { name: 'reha',         title: '6 Reha & Gesundheit' },
    { name: 'fighter',      title: '7 Fighter World' },
    { name: 'membership',   title: '8 Mitgliedschaft' },
    { name: 'cta',          title: '9 Probetraining' },
    { name: 'seo',          title: 'SEO' },
    { name: 'legacy',       title: 'Nicht mehr verwendet' },
  ],
  fields: [
    // Hero
    defineField({ name: 'heroEyebrow', title: 'Eyebrow', type: 'string', group: 'hero' }),
    headline('heroHeadline', 'Headline (3 Zeilen, eine blau)', 'hero'),
    defineField({ name: 'heroLede', title: 'Einleitung', type: 'text', rows: 3, group: 'hero' }),
    cta('heroPrimaryCta',   'Primärer Button',   'hero'),
    cta('heroSecondaryCta', 'Sekundärer Button', 'hero'),
    defineField({
      name: 'heroStats', title: 'Hero-Fakten (4 Stück)', type: 'array', of: [{ type: 'string' }], group: 'hero',
      description: 'Leer lassen → "N Standorte" wird automatisch aus den Studios berechnet.',
    }),

    // Marquee
    defineField({ name: 'marqueeItems', title: 'Laufband-Begriffe', type: 'array', of: [{ type: 'string' }], group: 'legacy' }),

    // Warum
    defineField({ name: 'whyEyebrow', title: 'Eyebrow', type: 'string', group: 'legacy' }),
    headline('whyHeadline', 'Headline', 'why'),
    defineField({ name: 'whyLede', title: 'Einleitung', type: 'text', rows: 3, group: 'legacy' }),
    defineField({ name: 'whyText', title: 'Text',       type: 'text', rows: 4, group: 'legacy' }),
    cta('whyLink', 'Textlink', 'why'),

    // Studios — the cards themselves come from the "Studio Standort" documents.
    defineField({ name: 'studiosEyebrow', title: 'Eyebrow', type: 'string', group: 'studios' }),
    headline('studiosHeadline', 'Headline', 'studios'),
    defineField({
      name: 'studiosText', title: 'Text', type: 'text', rows: 3, group: 'studios',
      description: 'Die Studio-Karten werden automatisch aus den "Studio Standort"-Dokumenten gebaut.',
    }),

    // Leistungen
    defineField({ name: 'servicesEyebrow', title: 'Eyebrow', type: 'string', group: 'legacy' }),
    headline('servicesHeadline', 'Headline', 'services'),
    defineField({ name: 'servicesText', title: 'Text', type: 'text', rows: 3, group: 'legacy' }),
    defineField({
      name: 'services', title: 'Leistungen (6 Karten)', type: 'array', group: 'legacy',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon',  title: 'Icon',  type: 'string', options: { list: ICONS, layout: 'radio', direction: 'horizontal' } }),
          defineField({ name: 'title', title: 'Titel', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'text',  title: 'Text',  type: 'text', rows: 2 }),
          defineField({ name: 'to',    title: 'Link (z.B. /kurse)', type: 'string' }),
        ],
        preview: { select: { title: 'title', subtitle: 'to' } },
      }],
    }),

    // Community
    defineField({ name: 'communityEyebrow', title: 'Eyebrow', type: 'string', group: 'legacy' }),
    headline('communityHeadline', 'Headline', 'community'),
    defineField({ name: 'communityText', title: 'Text', type: 'text', rows: 3, group: 'legacy' }),
    cta('communityCta', 'Button', 'community'),

    // Zahlen
    defineField({
      name: 'numbers', title: 'Zahlen (4 Stück)', type: 'array', group: 'legacy',
      description: 'Leer lassen → Standard-Zahlen; "Standorte" wird dann automatisch gezählt. Tipp: Bei "Standorte" die Zahl leer lassen, dann zählt die Website selbst.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label',    title: 'Beschriftung', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'count',    title: 'Zahl (zählt hoch)', type: 'number' }),
          defineField({ name: 'decimals', title: 'Nachkommastellen', type: 'number', initialValue: 0 }),
          defineField({ name: 'suffix',   title: 'Suffix (z.B. +)', type: 'string' }),
          defineField({ name: 'text',     title: 'Fester Text statt Zahl', type: 'string', description: 'z.B. 24*/*7 — Sternchen = blau. Hat Vorrang vor der Zahl.' }),
        ],
        preview: {
          select: { title: 'label', count: 'count', text: 'text' },
          prepare: ({ title, count, text }) => ({ title, subtitle: text || String(count ?? '') }),
        },
      }],
    }),

    // Kundenstimmen — the quotes come from "Kundenstimme" documents.
    defineField({ name: 'testimonialsEyebrow', title: 'Eyebrow', type: 'string', group: 'legacy' }),
    headline('testimonialsHeadline', 'Headline', 'testimonials'),

    // Abschluss-CTA
    defineField({ name: 'ctaEyebrow', title: 'Eyebrow', type: 'string', group: 'cta' }),
    headline('ctaHeadline', 'Headline', 'cta'),
    defineField({ name: 'ctaText', title: 'Text', type: 'text', rows: 2, group: 'cta' }),
    cta('ctaButton', 'Button', 'cta'),

    // ── 2 Leistungs-Leiste ───────────────────────────────────────────────
    defineField({
      name: 'accessBar', title: 'Leistungen (6 Einträge)', type: 'array', group: 'access',
      description: 'Die blaue Leiste direkt unter dem Hero.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon',  title: 'Icon', type: 'string', options: { list: ICONS } }),
          defineField({ name: 'label', title: 'Leistung', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'meta',  title: 'Zusatz (klein darunter)', type: 'string', description: 'z.B. "zu Trainerzeiten" oder "mit Verordnung"' }),
        ],
        preview: { select: { title: 'label', subtitle: 'meta' } },
      }],
    }),

    // ── 3 Einstieg wählen ────────────────────────────────────────────────
    defineField({ name: 'decisionEyebrow', title: 'Eyebrow', type: 'string', group: 'decision' }),
    headline('decisionHeadline', 'Headline', 'decision'),
    defineField({ name: 'decisionText', title: 'Text', type: 'text', rows: 3, group: 'decision' }),
    defineField({
      name: 'decisionCards', title: 'Einstiegs-Karten', type: 'array', group: 'decision',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon',  title: 'Icon', type: 'string', options: { list: ICONS } }),
          defineField({ name: 'goal',  title: 'Ziel (kleine blaue Zeile)', type: 'string', description: 'z.B. "Flexibel trainieren"' }),
          defineField({ name: 'title', title: 'Titel', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'text',  title: 'Nutzen in einem Satz', type: 'text', rows: 2 }),
          defineField({ name: 'to',    title: 'Link', type: 'string' }),
          defineField({ name: 'linkLabel', title: 'Link-Text', type: 'string', description: 'Leer → "Mehr erfahren"' }),
        ],
        preview: { select: { title: 'title', subtitle: 'goal' } },
      }],
    }),

    // ── 5 24/7 Training ──────────────────────────────────────────────────
    defineField({ name: 'access247Eyebrow', title: 'Eyebrow', type: 'string', group: 'access247' }),
    headline('access247Headline', 'Headline', 'access247'),
    defineField({ name: 'access247Text', title: 'Text', type: 'text', rows: 3, group: 'access247' }),
    defineField({
      name: 'access247Points', title: 'Punkte entlang der blauen Linie', type: 'array', group: 'access247',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Titel', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'text',  title: 'Text',  type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'title', subtitle: 'text' } },
      }],
    }),

    defineField({
      name: 'access247Note', title: 'Hinweis: Zugang vs. Trainerzeiten', type: 'object', group: 'access247',
      description: 'Trennt den 24/7 Zugang klar von den betreuten Zeiten.',
      fields: [
        defineField({ name: 'title', title: 'Titel', type: 'string' }),
        defineField({ name: 'text',  title: 'Text',  type: 'text', rows: 3 }),
      ],
    }),
    cta('access247Cta', 'Button', 'access247'),

    // ── 6 Reha & Gesundheit ──────────────────────────────────────────────
    defineField({ name: 'rehaEyebrow', title: 'Eyebrow', type: 'string', group: 'reha' }),
    headline('rehaHeadline', 'Headline', 'reha'),
    defineField({ name: 'rehaText', title: 'Text', type: 'text', rows: 3, group: 'reha' }),
    defineField({
      name: 'rehaSteps', title: 'Schritte (nummeriert)', type: 'array', group: 'reha',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Titel', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'text',  title: 'Text',  type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'title', subtitle: 'text' } },
      }],
    }),
    cta('rehaCta', 'Button', 'reha'),

    // ── 7 Fighter World ──────────────────────────────────────────────────
    defineField({ name: 'fighterEyebrow', title: 'Eyebrow', type: 'string', group: 'fighter' }),
    headline('fighterHeadline', 'Headline', 'fighter'),
    defineField({ name: 'fighterText', title: 'Text', type: 'text', rows: 3, group: 'fighter' }),
    defineField({
      name: 'fighterPoints', title: 'Punkte entlang der blauen Linie', type: 'array', group: 'fighter',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Titel', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'text',  title: 'Text',  type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'title', subtitle: 'text' } },
      }],
    }),
    cta('fighterCta', 'Button', 'fighter'),

    // ── 8 Mitgliedschaft ─────────────────────────────────────────────────
    defineField({ name: 'membershipEyebrow', title: 'Eyebrow', type: 'string', group: 'membership' }),
    headline('membershipHeadline', 'Headline', 'membership'),
    defineField({
      name: 'membershipText', title: 'Text', type: 'text', rows: 3, group: 'membership',
      description: 'Die Tarif-Karten darunter kommen automatisch aus den "Tarif"-Dokumenten.',
    }),
    cta('membershipCta', 'Button', 'membership'),

    // ── 9 Probetraining ──────────────────────────────────────────────────
    defineField({
      name: 'ctaSteps', title: 'Schritte im Probetraining-Block', type: 'array', of: [{ type: 'string' }], group: 'cta',
      description: 'z.B. Standort wählen · Trainingsart angeben · Termin abstimmen',
    }),

    // SEO
    defineField({ name: 'seoTitle', title: 'SEO-Titel (Browser-Tab)', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDesc', title: 'Meta-Beschreibung', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare: () => ({ title: 'Startseite' }),
  },
})
