import { defineType, defineField, defineArrayMember } from 'sanity'

// Kopfbereich, Einleitung und Abschluss-Text der übrigen Seiten.
// Jedes Feld ist optional — leer bedeutet: Standardtext der Website.
const PAGES = [
  { title: 'Kurse (/kurse)', value: 'kurse' },
  { title: 'Team (/team)', value: 'team' },
  { title: 'Jobs (/jobs)', value: 'jobs' },
  { title: 'Probetraining (/probetraining)', value: 'probetraining' },
  { title: 'Kontakt (/kontakt)', value: 'kontakt' },
  { title: 'Magazin (/blog)', value: 'blog' },
]

const cta = (name, title) =>
  defineField({
    name, title, type: 'object',
    fields: [
      defineField({ name: 'label', title: 'Button-Text', type: 'string' }),
      defineField({ name: 'to', title: 'Link', type: 'string' }),
    ],
  })

export default defineType({
  name: 'pageCopy',
  title: 'Seitentext',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Kopfbereich', default: true },
    { name: 'intro', title: 'Einleitung' },
    { name: 'faq', title: 'FAQ' },
    { name: 'cta', title: 'Abschluss' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'page', title: 'Seite', type: 'string', options: { list: PAGES }, validation: (R) => R.required(), group: 'hero' }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', group: 'hero' }),
    defineField({ name: 'title', title: 'Überschrift (Großbuchstaben)', type: 'string', group: 'hero' }),
    defineField({ name: 'sub', title: 'Untertitel', type: 'text', rows: 3, group: 'hero' }),
    defineField({ ...cta('primaryCta', 'Primärer Button'), group: 'hero' }),
    defineField({ ...cta('secondaryCta', 'Sekundärer Button'), group: 'hero' }),

    defineField({ name: 'introEyebrow', title: 'Eyebrow', type: 'string', group: 'intro' }),
    defineField({
      name: 'introHeadline', title: 'Überschrift', type: 'text', rows: 2, group: 'intro',
      description: 'Zeilenumbruch = neue Zeile. Ein Wort zwischen *Sternchen* wird blau.',
    }),
    defineField({ name: 'introText', title: 'Text', type: 'text', rows: 4, group: 'intro' }),
    defineField({ ...cta('introCta', 'Button'), group: 'intro' }),

    defineField({
      name: 'faq', title: 'Häufige Fragen', type: 'array', group: 'faq',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'q', title: 'Frage', type: 'string', validation: (R) => R.required() }),
          defineField({ name: 'a', title: 'Antwort', type: 'text', rows: 3 }),
        ],
        preview: { select: { title: 'q', subtitle: 'a' } },
      })],
    }),

    defineField({ name: 'ctaEyebrow', title: 'Eyebrow', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaHeadline', title: 'Überschrift', type: 'text', rows: 2, group: 'cta', description: 'Zeilenumbruch = neue Zeile. *Sternchen* = blau.' }),
    defineField({ name: 'ctaText', title: 'Text', type: 'text', rows: 2, group: 'cta' }),
    defineField({ ...cta('ctaButton', 'Button'), group: 'cta' }),

    defineField({ name: 'seoTitle', title: 'SEO-Titel (Browser-Tab)', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDesc', title: 'Meta-Beschreibung', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    select: { page: 'page', title: 'title' },
    prepare: ({ page, title }) => ({ title: (PAGES.find((p) => p.value === page)?.title || page), subtitle: title }),
  },
})
