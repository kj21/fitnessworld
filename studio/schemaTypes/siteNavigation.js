import { defineType, defineField, defineArrayMember } from 'sanity'

// Hauptnavigation im Kopfbereich (Singleton).
// Beschriftung, Ziel und Reihenfolge der Menüpunkte. Ein Punkt, der hier
// gelöscht wird, verschwindet von der Website. Ist die Liste komplett leer,
// zeigt die Website wieder ihre eingebaute Standard-Navigation.

const SUBMENU = [
  { title: 'Kein Untermenü', value: 'none' },
  { title: 'Standorte – alle Studios aus Sanity', value: 'studios' },
  { title: 'Kurse – hervorgehobene Kurse aus Sanity', value: 'courses' },
]

export default defineType({
  name:  'siteNavigation',
  title: 'Navigation',
  type:  'document',
  fields: [
    defineField({
      name:  'items',
      title: 'Menüpunkte',
      type:  'array',
      description:
        'Reihenfolge per Drag & Drop. Ein gelöschter Punkt verschwindet aus dem Menü – ' +
        'die Seite selbst bleibt erhalten und bleibt über ihren Link erreichbar.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label', title: 'Beschriftung', type: 'string',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'to', title: 'Ziel', type: 'string',
              description:
                'Interner Pfad mit Schrägstrich am Anfang (z.B. /24-7-training, /reha-sport, ' +
                '/fighter-world, /sauna-spa, /mitgliedschaft, /kurse, /probetraining, /team, ' +
                '/jobs, /blog, /kontakt) oder eine vollständige Adresse mit https://.',
              validation: (R) =>
                R.required().custom((v) =>
                  !v || v.startsWith('/') || /^https?:\/\//.test(v)
                    ? true
                    : 'Bitte mit / beginnen (interne Seite) oder mit https:// (externe Adresse).'
                ),
            }),
            defineField({
              name: 'submenu', title: 'Untermenü', type: 'string',
              options: { list: SUBMENU, layout: 'radio' },
              initialValue: 'none',
              description:
                'Bei "Standorte" füllt sich das Untermenü automatisch aus den Studios – ' +
                'ein neues Studio erscheint dann von selbst im Menü.',
            }),
          ],
          preview: { select: { title: 'label', subtitle: 'to' } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Navigation' }) },
})
