import { defineType, defineField, defineArrayMember } from 'sanity'

// Ein Beitrag im Magazin (/blog). Ohne Beiträge zeigt die Website Beispiel-
// artikel als Platzhalter.
export default defineType({
  name: 'blogPost',
  title: 'Blog-Beitrag',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: (R) => R.required() }),
    defineField({
      name: 'slug', title: 'Slug (Adresse)', type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Ergibt die Adresse /blog/…',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'category', title: 'Kategorie', type: 'string', description: 'z.B. Training, Gesundheit, Reha, Ernährung, Motivation, Community' }),
    defineField({ name: 'excerpt', title: 'Kurzbeschreibung (Teaser)', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Beitragsbild', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Veröffentlicht am', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'featured', title: 'Als Hauptbeitrag oben zeigen', type: 'boolean', initialValue: false }),
    defineField({
      name: 'body', title: 'Artikeltext', type: 'array',
      of: [defineArrayMember({
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
            fields: [{ name: 'href', type: 'url', title: 'URL', validation: (R) => R.uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true }) }],
          }],
        },
      })],
    }),
  ],
  orderings: [{ title: 'Neueste zuerst', name: 'newest', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image', featured: 'featured' },
    prepare: ({ title, subtitle, media, featured }) => ({ title: featured ? `★ ${title}` : title, subtitle, media }),
  },
})
