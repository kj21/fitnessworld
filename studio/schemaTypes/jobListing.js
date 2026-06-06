import { defineType, defineField } from 'sanity'

export default defineType({
  name:  'jobListing',
  title: 'Stellenangebot',
  type:  'document',
  fields: [
    defineField({ name: 'title', title: 'Stellentitel', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'type',  title: 'Beschäftigungsart', type: 'string', description: 'z.B. Teilzeit / Vollzeit' }),
    defineField({ name: 'loc',   title: 'Standort',          type: 'string', description: 'z.B. Holdorf oder Goldenstedt' }),
    defineField({ name: 'text',  title: 'Kurzbeschreibung',  type: 'text', rows: 3 }),
    defineField({
      name: 'tasks', title: 'Aufgaben',
      type: 'array', of: [{ type: 'string' }],
      description: 'Jede Zeile = eine Aufgabe',
    }),
    defineField({
      name: 'active', title: 'Stelle aktiv / sichtbar?',
      type: 'boolean', initialValue: true,
      description: 'Deaktivieren statt löschen, um die Stelle auszublenden',
    }),
    defineField({ name: 'sortOrder', title: 'Reihenfolge', type: 'number', initialValue: 1 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'loc' },
    prepare({ title, subtitle }) {
      return { title, subtitle }
    },
  },
})
