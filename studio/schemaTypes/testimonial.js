import { defineType, defineField } from 'sanity'

export default defineType({
  name:  'testimonial',
  title: 'Kundenstimme',
  type:  'document',
  fields: [
    defineField({ name: 'name',    title: 'Name (z.B. Julia M.)', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'initial', title: 'Avatar-Buchstabe',    type: 'string', description: 'Einzelner Großbuchstabe' }),
    defineField({ name: 'loc',     title: 'Standort',            type: 'string' }),
    defineField({ name: 'quote',   title: 'Zitat',               type: 'text', rows: 4 }),
    defineField({ name: 'sortOrder', title: 'Reihenfolge',       type: 'number', initialValue: 1 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'quote' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle?.slice(0, 60) + '…' }
    },
  },
})
