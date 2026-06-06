import { defineType, defineField } from 'sanity'

export default defineType({
  name:  'studioContact',
  title: 'Studio Kontakt & Öffnungszeiten',
  type:  'document',
  fields: [
    defineField({ name: 'name',  title: 'Studioname (kurz, z.B. Holdorf)', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'addr',  title: 'Adresse', type: 'text', rows: 2 }),
    defineField({ name: 'tel',   title: 'Telefon', type: 'string', description: 'z.B. +49 5494 123456' }),
    defineField({ name: 'email', title: 'E-Mail',  type: 'string' }),
    defineField({
      name: 'hours', title: 'Öffnungszeiten / Hinweis',
      type: 'text', rows: 2,
      description: 'z.B. Mo–Fr 06:00–22:00, Sa–So 08:00–20:00, 24/7 Kartenzugang',
    }),
    defineField({ name: 'sortOrder', title: 'Reihenfolge', type: 'number', initialValue: 1 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'addr' },
  },
})
