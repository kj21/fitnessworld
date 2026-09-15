import { defineType, defineField } from 'sanity'

const DAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

// Eine Zeile im Wochenplan auf /kurse.
export default defineType({
  name:  'scheduleEntry',
  title: 'Kursplan-Eintrag',
  type:  'document',
  fields: [
    defineField({
      name: 'day', title: 'Tag', type: 'string',
      options: { list: DAYS, layout: 'radio', direction: 'horizontal' },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'time', title: 'Uhrzeit (z.B. 18:30)', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'course', title: 'Kurs', type: 'string', description: 'Name wie auf der Kurskarte, z.B. Functional Training', validation: Rule => Rule.required() }),
    defineField({ name: 'studio', title: 'Standort', type: 'string', description: 'z.B. Holdorf' }),
    defineField({
      name: 'level', title: 'Level', type: 'string',
      options: { list: ['Alle Level', 'Einsteiger', 'Anfänger', 'Fortgeschrittene'] },
    }),
    defineField({ name: 'trainer', title: 'Trainer', type: 'string', initialValue: 'Team FW' }),
    defineField({ name: 'active', title: 'Aktiv', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { day: 'day', time: 'time', course: 'course', studio: 'studio', active: 'active' },
    prepare: ({ day, time, course, studio, active }) => ({
      title: `${day || '?'} ${time || ''} · ${course || ''}${active === false ? ' (ausgeblendet)' : ''}`,
      subtitle: studio,
    }),
  },
})
