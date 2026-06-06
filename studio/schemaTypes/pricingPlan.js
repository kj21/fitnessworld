import { defineType, defineField } from 'sanity'

export default defineType({
  name:  'pricingPlan',
  title: 'Tarif',
  type:  'document',
  fields: [
    defineField({ name: 'name',      title: 'Tarifname (z.B. Standard)', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'price',     title: 'Preis (z.B. 34,90)', type: 'string', description: 'Nur die Zahl mit Komma, ohne €' }),
    defineField({ name: 'period',    title: 'Zeitraum (z.B. pro Monat)', type: 'string' }),
    defineField({ name: 'desc',      title: 'Kurzbeschreibung', type: 'text', rows: 2 }),
    defineField({
      name: 'features', title: 'Features',
      type: 'array', of: [{ type: 'string' }],
      description: 'Jede Zeile = ein Feature-Punkt',
    }),
    defineField({ name: 'cta',       title: 'Button-Text', type: 'string' }),
    defineField({ name: 'highlight', title: 'Hervorgehoben (dunkle Karte)?', type: 'boolean', initialValue: false }),
    defineField({ name: 'badge',     title: 'Badge-Text (z.B. Beliebt)', type: 'string', description: 'Leer lassen wenn kein Badge gewünscht' }),
    defineField({ name: 'sortOrder', title: 'Reihenfolge (1 = links)', type: 'number', initialValue: 1 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'price' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `${subtitle} €` : '' }
    },
  },
})
