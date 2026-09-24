import { defineType, defineField, defineArrayMember } from 'sanity'

// Leistungs-Seiten (Reha-Sport, Boxen & Kickboxen, Personal Training).
// Der Inhalt besteht aus Abschnitten, die frei hinzugefügt, sortiert und
// gelöscht werden können. Leere Felder werden auf der Website übersprungen.

const TONES = [
  { title: 'Hell (beige)', value: 'light' },
  { title: 'Weiß', value: 'white' },
  { title: 'Dunkel (navy)', value: 'dark' },
  { title: 'Sehr dunkel', value: 'darker' },
]

const tone = (initial = 'light') =>
  defineField({ name: 'tone', title: 'Hintergrund', type: 'string', options: { list: TONES }, initialValue: initial })

const headline = (name = 'headline', title = 'Überschrift') =>
  defineField({
    name, title, type: 'text', rows: 2,
    description: 'Zeilenumbruch = neue Zeile. Ein Wort zwischen *Sternchen* wird blau.',
  })

const cta = (name, title) =>
  defineField({
    name, title, type: 'object',
    fields: [
      defineField({ name: 'label', title: 'Button-Text', type: 'string' }),
      defineField({ name: 'to', title: 'Link (z.B. /probetraining)', type: 'string' }),
    ],
  })

const faqItems = defineField({
  name: 'items', title: 'Fragen & Antworten', type: 'array',
  of: [defineArrayMember({
    type: 'object',
    fields: [
      defineField({ name: 'q', title: 'Frage', type: 'string', validation: (R) => R.required() }),
      defineField({ name: 'a', title: 'Antwort', type: 'text', rows: 3 }),
    ],
    preview: { select: { title: 'q', subtitle: 'a' } },
  })],
})

export default defineType({
  name: 'servicePage',
  title: 'Leistungs-Seite',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Kopfbereich', default: true },
    { name: 'body', title: 'Abschnitte' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'slug', title: 'Seite', type: 'string', group: 'hero',
      options: {
        list: [
          { title: 'Reha-Sport (/kurse/reha-sport)', value: 'reha-sport' },
          { title: 'Boxen & Kickboxen (/kurse/boxen)', value: 'boxen' },
          { title: 'Personal Training (/kurse/personal-training)', value: 'personal-training' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'eyebrow', title: 'Eyebrow (kleine Zeile über der Überschrift)', type: 'string', group: 'hero' }),
    defineField({ name: 'title', title: 'Überschrift (Großbuchstaben)', type: 'string', group: 'hero' }),
    defineField({ name: 'sub', title: 'Untertitel', type: 'text', rows: 3, group: 'hero' }),
    defineField({ ...cta('primaryCta', 'Primärer Button'), group: 'hero' }),
    defineField({ ...cta('secondaryCta', 'Sekundärer Button'), group: 'hero' }),
    defineField({ name: 'heroImage', title: 'Titelbild', type: 'image', options: { hotspot: true }, group: 'hero' }),

    defineField({
      name: 'sections', title: 'Abschnitte', type: 'array', group: 'body',
      description: 'Abschnitte hinzufügen, sortieren oder löschen. Die Reihenfolge hier ist die Reihenfolge auf der Seite.',
      of: [
        // Text + optionale Checkliste + optionales Bild
        defineArrayMember({
          name: 'split', title: 'Text mit Liste & Bild', type: 'object',
          fields: [
            defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
            headline(),
            defineField({ name: 'text', title: 'Text', type: 'text', rows: 4 }),
            defineField({ name: 'items', title: 'Checkliste (optional)', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'image', title: 'Bild (optional)', type: 'image', options: { hotspot: true } }),
            tone('light'),
          ],
          preview: { select: { title: 'headline', subtitle: 'eyebrow' }, prepare: ({ title, subtitle }) => ({ title: (title || 'Text').split('\n')[0], subtitle: `Text · ${subtitle || ''}` }) },
        }),
        // Nummerierte Schritte
        defineArrayMember({
          name: 'steps', title: 'Schritte (nummeriert)', type: 'object',
          fields: [
            defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
            headline(),
            defineField({
              name: 'items', title: 'Schritte', type: 'array',
              of: [defineArrayMember({
                type: 'object',
                fields: [
                  defineField({ name: 'title', title: 'Titel', type: 'string', validation: (R) => R.required() }),
                  defineField({ name: 'text', title: 'Text', type: 'text', rows: 2 }),
                ],
                preview: { select: { title: 'title', subtitle: 'text' } },
              })],
            }),
            defineField({ name: 'numbered', title: 'Nummern anzeigen', type: 'boolean', initialValue: true }),
            tone('dark'),
          ],
          preview: { select: { title: 'headline', items: 'items' }, prepare: ({ title, items }) => ({ title: (title || 'Schritte').split('\n')[0], subtitle: `Schritte · ${items?.length || 0}` }) },
        }),
        // Zwei Listen nebeneinander
        defineArrayMember({
          name: 'twoLists', title: 'Zwei Listen nebeneinander', type: 'object',
          fields: [
            defineField({ name: 'leftEyebrow', title: 'Links: Eyebrow', type: 'string' }),
            defineField({ name: 'leftTitle', title: 'Links: Überschrift', type: 'string' }),
            defineField({ name: 'leftItems', title: 'Links: Punkte', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'rightEyebrow', title: 'Rechts: Eyebrow', type: 'string' }),
            defineField({ name: 'rightTitle', title: 'Rechts: Überschrift', type: 'string' }),
            defineField({ name: 'rightItems', title: 'Rechts: Punkte', type: 'array', of: [{ type: 'string' }] }),
            tone('dark'),
          ],
          preview: { select: { title: 'leftTitle', subtitle: 'rightTitle' }, prepare: ({ title, subtitle }) => ({ title: 'Zwei Listen', subtitle: [title, subtitle].filter(Boolean).join(' · ') }) },
        }),
        // Hinweis-Kasten
        defineArrayMember({
          name: 'note', title: 'Hinweis-Kasten', type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Text', type: 'text', rows: 3, validation: (R) => R.required() }),
            tone('white'),
          ],
          preview: { select: { subtitle: 'text' }, prepare: ({ subtitle }) => ({ title: 'Hinweis', subtitle }) },
        }),
        // FAQ
        defineArrayMember({
          name: 'faq', title: 'Häufige Fragen', type: 'object',
          fields: [
            defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'Häufige Fragen' }),
            headline('headline', 'Überschrift'),
            faqItems,
            tone('light'),
          ],
          preview: { select: { items: 'items' }, prepare: ({ items }) => ({ title: 'FAQ', subtitle: `${items?.length || 0} Fragen` }) },
        }),
        // Abschluss-CTA
        defineArrayMember({
          name: 'cta', title: 'Abschluss-CTA', type: 'object',
          fields: [
            defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
            headline(),
            defineField({ name: 'text', title: 'Text', type: 'text', rows: 2 }),
            defineField({ ...cta('button', 'Button') }),
            tone('dark'),
          ],
          preview: { select: { title: 'headline' }, prepare: ({ title }) => ({ title: 'Abschluss-CTA', subtitle: (title || '').split('\n')[0] }) },
        }),
      ],
    }),

    defineField({ name: 'seoTitle', title: 'SEO-Titel (Browser-Tab)', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDesc', title: 'Meta-Beschreibung', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    select: { title: 'eyebrow', subtitle: 'slug' },
    prepare: ({ title, subtitle }) => ({ title: title || subtitle, subtitle: `/kurse/${subtitle === 'reha-sport' ? 'reha-sport' : subtitle}` }),
  },
})
