import { defineType, defineField } from 'sanity'

export default defineType({
  name:  'teamMember',
  title: 'Team-Mitglied',
  type:  'document',
  fields: [
    defineField({ name: 'name',  title: 'Name',      type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'role',  title: 'Funktion',  type: 'string' }),
    defineField({ name: 'loc',   title: 'Standort',  type: 'string', description: 'z.B. Holdorf' }),
    defineField({
      name: 'initial', title: 'Avatar-Buchstabe',
      type: 'string', description: 'Einzelner Großbuchstabe für den Avatar-Kreis (solange kein Foto hochgeladen)',
    }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'text',  title: 'Bio', type: 'text', rows: 3 }),
    defineField({ name: 'sortOrder', title: 'Reihenfolge', type: 'number', initialValue: 1 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
})
