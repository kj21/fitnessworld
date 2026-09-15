import { defineType, defineField } from 'sanity'

// Ein Kurs / Angebot. Erscheint als Karte auf /kurse. Mit "In Navigation &
// Footer zeigen" zusätzlich im Kurse-Menü oben und in der Footer-Spalte.
export default defineType({
  name:  'course',
  title: 'Kurs',
  type:  'document',
  fields: [
    defineField({ name: 'title', title: 'Kursname', type: 'string', validation: Rule => Rule.required() }),
    defineField({
      name: 'category', title: 'Kategorie', type: 'string',
      description: 'Filter-Button auf der Kurse-Seite. Eigene Kategorien sind möglich.',
      options: { list: ['Gesundheit', 'Kraft & Ausdauer', 'Boxen', 'Individuell'] },
    }),
    defineField({ name: 'text', title: 'Kurzbeschreibung', type: 'text', rows: 3 }),
    defineField({
      name: 'link', title: 'Link „Mehr erfahren“', type: 'string',
      description: 'z.B. /kurse/reha-sport, /kurse/boxen, /kurse/personal-training oder /probetraining. Leer → /probetraining',
    }),
    defineField({
      name: 'active', title: 'Aktiv (auf der Website sichtbar)', type: 'boolean', initialValue: true,
      description: 'Häkchen entfernen, um einen Kurs auszublenden, ohne ihn zu löschen.',
    }),
    defineField({
      name: 'featured', title: 'In Navigation & Footer zeigen', type: 'boolean', initialValue: false,
    }),
    defineField({
      name: 'navLabel', title: 'Name in Navigation & Footer (optional)', type: 'string',
      description: 'z.B. „Boxen & Kickboxen“. Leer → Kursname.',
      hidden: ({ document }) => !document?.featured,
    }),
    defineField({ name: 'sortOrder', title: 'Reihenfolge', type: 'number', description: 'Kleinere Zahl = weiter vorne.' }),
  ],
  orderings: [{ title: 'Reihenfolge', name: 'sort', by: [{ field: 'sortOrder', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', category: 'category', active: 'active' },
    prepare: ({ title, category, active }) => ({
      title: active === false ? `${title} (ausgeblendet)` : title,
      subtitle: category,
    }),
  },
})
