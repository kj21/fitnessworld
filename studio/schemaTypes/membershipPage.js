import { defineType, defineField } from 'sanity'

const COUNT_HINT = 'Tipp: {anzahl} wird automatisch durch die Zahl der geöffneten Studios ersetzt (z.B. „alle {anzahl} Studios“ → „alle 5 Studios“).'

// Mitgliedschaft-Seite (Singleton). Die Tarife selbst kommen aus „Tarif“.
// Leere Felder → Standardtexte der Website.
export default defineType({
  name:  'membershipPage',
  title: 'Mitgliedschaft-Seite',
  type:  'document',
  groups: [
    { name: 'hero',     title: 'Kopfbereich', default: true },
    { name: 'benefits', title: 'Vorteile' },
    { name: 'faq',      title: 'FAQ' },
  ],
  fields: [
    defineField({ name: 'heroSub', title: 'Untertitel oben', type: 'text', rows: 3, group: 'hero' }),
    defineField({ name: 'pricingNote', title: 'Hinweis unter den Tarifen', type: 'text', rows: 3, group: 'hero' }),
    defineField({
      name: 'benefits', title: 'Vorteile („Mehr als eine Mitgliedschaft“)', type: 'array', group: 'benefits',
      description: COUNT_HINT,
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
      name: 'faq', title: 'Häufige Fragen', type: 'array', group: 'faq',
      description: COUNT_HINT,
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'q', title: 'Frage',   type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'a', title: 'Antwort', type: 'text', rows: 3 }),
        ],
        preview: { select: { title: 'q', subtitle: 'a' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Mitgliedschaft-Seite' }) },
})
