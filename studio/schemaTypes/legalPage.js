import { defineType, defineField } from 'sanity'

// Rechtstexte: Impressum (Zusatztext), Datenschutz, AGB, Hausordnung.
export default defineType({
  name:  'legalPage',
  title: 'Rechtstext',
  type:  'document',
  fields: [
    defineField({
      name: 'page', title: 'Seite', type: 'string',
      options: {
        list: [
          { title: 'Impressum (Zusatztext unter den Firmenangaben)', value: 'impressum' },
          { title: 'Datenschutz', value: 'datenschutz' },
          { title: 'AGB', value: 'agb' },
          { title: 'Hausordnung', value: 'hausordnung' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'title', title: 'Seitentitel', type: 'string' }),
    defineField({
      name: 'body', title: 'Text', type: 'array',
      description: 'Überschriften, Absätze, Listen und Links. Text kann direkt aus Word oder einer Webseite eingefügt werden.',
      of: [{
        type: 'block',
        styles: [
          { title: 'Absatz', value: 'normal' },
          { title: 'Überschrift', value: 'h2' },
          { title: 'Zwischenüberschrift', value: 'h3' },
        ],
        lists: [{ title: 'Aufzählung', value: 'bullet' }, { title: 'Nummeriert', value: 'number' }],
        marks: {
          decorators: [{ title: 'Fett', value: 'strong' }, { title: 'Kursiv', value: 'em' }],
          annotations: [{
            name: 'link', type: 'object', title: 'Link',
            fields: [{ name: 'href', type: 'url', title: 'URL', validation: Rule => Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true }) }],
          }],
        },
      }],
    }),
  ],
  preview: {
    select: { page: 'page', title: 'title' },
    prepare: ({ page, title }) => ({ title: title || page, subtitle: `/${page}` }),
  },
})
