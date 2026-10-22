import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/index.js'

// Fixed one-of-a-kind documents, pinned at the top of the "Inhalt" list.
const SINGLETONS = [
  { type: 'homePage',       title: 'Startseite' },
  { type: 'membershipPage', title: 'Mitgliedschaft-Seite' },
  { type: 'siteSettings',   title: 'Unternehmen & Impressum' },
]
const SINGLETON_TYPES = SINGLETONS.map((s) => s.type)

// Fixed Leistungs-Seiten, listed by name in the studio sidebar.
const SERVICE_PAGES = [
  { id: 'servicePage-training-247',     title: '24/7 Training' },
  { id: 'servicePage-reha-sport',       title: 'Reha & Gesundheit' },
  { id: 'servicePage-fighter-world',    title: 'Fighter World' },
  { id: 'servicePage-personal-training', title: 'Personal Training' },
  { id: 'servicePage-sauna-spa',        title: 'Sauna & Spa' },
]

export default defineConfig({
  name:    'fitness-world-studios',
  title:   'Fitness World Studios',

  projectId: 'u4s4v1t1',
  dataset:   'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Inhalt')
          .items([
            // Singletons: one fixed document each, no list.
            ...SINGLETONS.map(({ type, title }) =>
              S.listItem()
                .title(title)
                .id(type)
                .child(S.document().schemaType(type).documentId(type))
            ),
            S.divider(),
            // Leistungs-Seiten by name — otherwise "24/7 Training" hides behind
            // a generic list and is hard to find.
            S.listItem()
              .title('Leistungs-Seiten')
              .child(
                S.list()
                  .title('Leistungs-Seiten')
                  .items([
                    ...SERVICE_PAGES.map(({ id, title }) =>
                      S.listItem()
                        .title(title)
                        .id(id)
                        .child(S.document().schemaType('servicePage').documentId(id))
                    ),
                    S.divider(),
                    S.documentTypeListItem('servicePage').title('Alle Leistungs-Seiten'),
                  ])
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => ![...SINGLETON_TYPES, 'servicePage'].includes(item.getId())
            ),
          ]),
    }),
    visionTool(), // GROQ playground — remove before going to production if desired
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Hide singletons from the global "new document" menu.
    newDocumentOptions: (prev) => prev.filter((t) => !SINGLETON_TYPES.includes(t.templateId)),
  },
})
