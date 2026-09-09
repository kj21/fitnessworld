import { defineType, defineField } from 'sanity'

// ─── Startseite (Singleton) ──────────────────────────────────────────────────
// Every field is optional. Anything left empty falls back to the hardcoded
// copy in src/data/site.js (homeContent), so a half-filled document never
// produces an empty section on the live site.

const HEADLINE_HINT =
  'Zeilenumbruch = neue Zeile. Ein Wort zwischen *Sternchen* wird blau, z.B. "Alles für *dein Ziel.*"'

const ICONS = ['dumbbell', 'pulse', 'heart', 'glove', 'users', 'target']

const headline = (name, title, group) =>
  defineField({ name, title, type: 'text', rows: 2, description: HEADLINE_HINT, group })

const cta = (name, title, group) =>
  defineField({
    name, title, type: 'object', group,
    fields: [
      defineField({ name: 'label', title: 'Button-Text', type: 'string' }),
      defineField({ name: 'to',    title: 'Link (z.B. /probetraining)', type: 'string' }),
    ],
  })

export default defineType({
  name:  'homePage',
  title: 'Startseite',
  type:  'document',
  groups: [
    { name: 'hero',         title: 'Hero', default: true },
    { name: 'marquee',      title: 'Laufband' },
    { name: 'why',          title: 'Warum Fitness World' },
    { name: 'studios',      title: 'Studios' },
    { name: 'services',     title: 'Leistungen' },
    { name: 'community',    title: 'Community' },
    { name: 'numbers',      title: 'Zahlen' },
    { name: 'testimonials', title: 'Kundenstimmen' },
    { name: 'cta',          title: 'Abschluss-CTA' },
    { name: 'seo',          title: 'SEO' },
  ],
  fields: [
    // Hero
    defineField({ name: 'heroEyebrow', title: 'Eyebrow', type: 'string', group: 'hero' }),
    headline('heroHeadline', 'Headline (3 Zeilen, eine blau)', 'hero'),
    defineField({ name: 'heroLede', title: 'Einleitung', type: 'text', rows: 3, group: 'hero' }),
    cta('heroPrimaryCta',   'Primärer Button',   'hero'),
    cta('heroSecondaryCta', 'Sekundärer Button', 'hero'),
    defineField({
      name: 'heroStats', title: 'Hero-Fakten (4 Stück)', type: 'array', of: [{ type: 'string' }], group: 'hero',
      description: 'Leer lassen → "N Standorte" wird automatisch aus den Studios berechnet.',
    }),

    // Marquee
    defineField({ name: 'marqueeItems', title: 'Laufband-Begriffe', type: 'array', of: [{ type: 'string' }], group: 'marquee' }),

    // Warum
    defineField({ name: 'whyEyebrow', title: 'Eyebrow', type: 'string', group: 'why' }),
    headline('whyHeadline', 'Headline', 'why'),
    defineField({ name: 'whyLede', title: 'Einleitung', type: 'text', rows: 3, group: 'why' }),
    defineField({ name: 'whyText', title: 'Text',       type: 'text', rows: 4, group: 'why' }),
    cta('whyLink', 'Textlink', 'why'),

    // Studios — the cards themselves come from the "Studio Standort" documents.
    defineField({ name: 'studiosEyebrow', title: 'Eyebrow', type: 'string', group: 'studios' }),
    headline('studiosHeadline', 'Headline', 'studios'),
    defineField({
      name: 'studiosText', title: 'Text', type: 'text', rows: 3, group: 'studios',
      description: 'Die Studio-Karten werden automatisch aus den "Studio Standort"-Dokumenten gebaut.',
    }),

    // Leistungen
    defineField({ name: 'servicesEyebrow', title: 'Eyebrow', type: 'string', group: 'services' }),
    headline('servicesHeadline', 'Headline', 'services'),
    defineField({ name: 'servicesText', title: 'Text', type: 'text', rows: 3, group: 'services' }),
    defineField({
      name: 'services', title: 'Leistungen (6 Karten)', type: 'array', group: 'services',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon',  title: 'Icon',  type: 'string', options: { list: ICONS, layout: 'radio', direction: 'horizontal' } }),
          defineField({ name: 'title', title: 'Titel', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'text',  title: 'Text',  type: 'text', rows: 2 }),
          defineField({ name: 'to',    title: 'Link (z.B. /kurse)', type: 'string' }),
        ],
        preview: { select: { title: 'title', subtitle: 'to' } },
      }],
    }),

    // Community
    defineField({ name: 'communityEyebrow', title: 'Eyebrow', type: 'string', group: 'community' }),
    headline('communityHeadline', 'Headline', 'community'),
    defineField({ name: 'communityText', title: 'Text', type: 'text', rows: 3, group: 'community' }),
    cta('communityCta', 'Button', 'community'),

    // Zahlen
    defineField({
      name: 'numbers', title: 'Zahlen (4 Stück)', type: 'array', group: 'numbers',
      description: 'Leer lassen → Standard-Zahlen; "Standorte" wird dann automatisch gezählt.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label',    title: 'Beschriftung', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'count',    title: 'Zahl (zählt hoch)', type: 'number' }),
          defineField({ name: 'decimals', title: 'Nachkommastellen', type: 'number', initialValue: 0 }),
          defineField({ name: 'suffix',   title: 'Suffix (z.B. +)', type: 'string' }),
          defineField({ name: 'text',     title: 'Fester Text statt Zahl', type: 'string', description: 'z.B. 24*/*7 — Sternchen = blau. Hat Vorrang vor der Zahl.' }),
        ],
        preview: {
          select: { title: 'label', count: 'count', text: 'text' },
          prepare: ({ title, count, text }) => ({ title, subtitle: text || String(count ?? '') }),
        },
      }],
    }),

    // Kundenstimmen — the quotes come from "Kundenstimme" documents.
    defineField({ name: 'testimonialsEyebrow', title: 'Eyebrow', type: 'string', group: 'testimonials' }),
    headline('testimonialsHeadline', 'Headline', 'testimonials'),

    // Abschluss-CTA
    defineField({ name: 'ctaEyebrow', title: 'Eyebrow', type: 'string', group: 'cta' }),
    headline('ctaHeadline', 'Headline', 'cta'),
    defineField({ name: 'ctaText', title: 'Text', type: 'text', rows: 2, group: 'cta' }),
    cta('ctaButton', 'Button', 'cta'),

    // SEO
    defineField({ name: 'seoTitle', title: 'SEO-Titel (Browser-Tab)', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDesc', title: 'Meta-Beschreibung', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare: () => ({ title: 'Startseite' }),
  },
})
