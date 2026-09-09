import { defineType, defineField } from 'sanity'

export default defineType({
  name:  'studioLocation',
  title: 'Studio Standort',
  type:  'document',
  fields: [
    defineField({
      name: 'slug', title: 'Slug (URL-Kürzel)', type: 'slug',
      options: {
        source: 'eyebrow', maxLength: 96,
        // "Studio Neuenkirchen-Vörden" → "neuenkirchen-voerden"
        slugify: (input) => String(input || '')
          .toLowerCase()
          .replace(/^studio\s+/, '')
          .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')
          .slice(0, 96),
      },
      description: 'Wird zur Adresse der Studio-Seite: /holdorf, /delmenhorst … Nur Kleinbuchstaben, Zahlen und Bindestriche. "Demnächst" bitte über das Häkchen unten setzen, nicht im Slug.',
      validation: Rule => Rule.required().custom((slug) => {
        const v = slug?.current || ''
        return /^[a-z0-9-]+$/.test(v)
          ? true
          : 'Bitte nur Kleinbuchstaben, Zahlen und Bindestriche verwenden (z.B. delmenhorst). Die Website korrigiert das automatisch, aber die Adresse wird dann unschön.'
      }).warning(),
    }),
    defineField({ name: 'eyebrow',  title: 'Eyebrow (z.B. "Studio Holdorf")', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'title',    title: 'Seitentitel (Großbuchstaben)', type: 'string', description: 'z.B. FITNESS WORLD HOLDORF' }),
    defineField({ name: 'sub',      title: 'Untertitel', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', title: 'Hero-Bild', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'seoTitle', title: 'SEO-Titel (Browser-Tab)', type: 'string' }),
    defineField({ name: 'metaDesc', title: 'Meta-Beschreibung', type: 'text', rows: 2 }),
    defineField({
      name: 'keyFacts', title: 'Key Facts (max. 4)',
      type: 'array', of: [{ type: 'string' }],
      description: 'z.B. 24/7 Training, Boxen & Kickboxen',
    }),
    defineField({
      name: 'cardFeatures', title: 'Startseiten-Karte: Merkmale (max. 4)',
      type: 'array', of: [{ type: 'string' }],
      validation: Rule => Rule.max(4),
      description: 'Kurze Tags auf der Studio-Karte der Startseite. Leer lassen → Key Facts werden verwendet.',
    }),
    defineField({
      name: 'comingSoon', title: 'Demnächst (noch nicht eröffnet)', type: 'boolean', initialValue: false,
      description: 'Zeigt "Demnächst" auf der Website (Startseite, Navigation, Studio-Seite) und zählt nicht als geöffneter Standort. Im Probetraining-Formular ist das Studio dann nicht wählbar.',
    }),
    defineField({
      name: 'sortOrder', title: 'Reihenfolge auf der Startseite', type: 'number',
      description: 'Kleinere Zahl = weiter vorne.',
    }),
    defineField({
      name: 'intro', title: 'Intro-Bereich', type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline (Großbuchstaben)', type: 'string' }),
        defineField({ name: 'text',     title: 'Text', type: 'text', rows: 4 }),
      ],
    }),
    defineField({
      name: 'ausstattung', title: 'Ausstattung',
      type: 'array', of: [{ type: 'string' }],
    }),
    defineField({
      name: 'kurse', title: 'Kurs-Angebote (3 Stück)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Titel', type: 'string' }),
          defineField({ name: 'text',  title: 'Text',  type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'title' } },
      }],
    }),
    defineField({ name: 'ctaHeadline', title: 'CTA Headline', type: 'string' }),
    defineField({ name: 'ctaText',     title: 'CTA Text', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'eyebrow', subtitle: 'slug.current' },
  },
})
