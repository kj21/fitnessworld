import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/index.js'

export default defineConfig({
  name:    'fitness-world-studios',
  title:   'Fitness World Studios',

  // ← Replace with your real project ID from sanity.io/manage
  projectId: 'u4s4v1t1',
  dataset:   'production',

  plugins: [
    structureTool(),
    visionTool(), // GROQ playground — remove before going to production if desired
  ],

  schema: {
    types: schemaTypes,
  },
})
