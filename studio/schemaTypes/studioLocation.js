import { defineType, defineField } from 'sanity'

export default defineType({
  name:  'studioLocation',
  title: 'Studio Standort',
  type:  'document',
  fields: [
    defineField({
      name: 'slug', title: 'Slug (URL-Kürzel)', type: 'slug',
      options: { source: 'eyebrow', maxLength: 96 },
      description: 'z.B. holdorf, goldenstedt, twistringen, vechta',
      validation: Rule => Rule.required(),
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
