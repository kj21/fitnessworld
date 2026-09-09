import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/index.js'

const SINGLETONS = ['homePage']

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
            // "Startseite" is a singleton: one fixed document, no list.
            S.listItem()
              .title('Startseite')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => !SINGLETONS.includes(item.getId())),
          ]),
    }),
    visionTool(), // GROQ playground — remove before going to production if desired
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Hide singletons from the global "new document" menu.
    newDocumentOptions: (prev) => prev.filter((t) => !SINGLETONS.includes(t.templateId)),
  },
})
