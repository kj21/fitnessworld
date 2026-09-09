// ─── Studios: Sanity is the source of truth ──────────────────────────────────
// Every place that lists studios (homepage cards, header nav, footer, trial
// form, studio pages) goes through useStudios(). When Sanity answers, ONLY its
// studios are used. The site.js list is an offline safety net and is never
// merged in — a studio removed in Sanity disappears from the site.

import { useSanityData } from '../hooks/useSanityData.js'
import { STUDIOS_QUERY } from './queries.js'
import { locations, studioData } from '../data/site'

// Editors sometimes encode "coming soon" in the slug. Recognise it, strip it
// from the URL, and treat it like the `comingSoon` checkbox.
const SOON_RE = /\(?\s*(coming\s*soon|demn[äa]chst)\s*\)?/i

/**
 * "Studio-Delmenhorst (Coming soon)" → "delmenhorst", "studio-holdorf" → "holdorf".
 * The studio's "Generate" button builds slugs from the eyebrow ("Studio Holdorf"),
 * so a leading "studio-" is dropped to keep the URLs short and stable (/holdorf).
 */
export function slugify(str) {
  return String(str || '')
    .trim()
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^studio-/, '')
}

/** "Studio Holdorf" → "Holdorf"; "FITNESS WORLD HOLDORF" → "Holdorf" */
export function studioName(s, slug) {
  const fromEyebrow = String(s?.eyebrow || '').replace(/^studio\s+/i, '').trim()
  if (fromEyebrow) return fromEyebrow
  const fromTitle = String(s?.title || '').replace(/^fitness\s+world\s+/i, '').trim()
  if (fromTitle) return fromTitle.charAt(0) + fromTitle.slice(1).toLowerCase()
  return slug.charAt(0).toUpperCase() + slug.slice(1)
}

/** Shape one Sanity (or fallback) studio into what the components expect. */
export function normalizeStudio(s) {
  const rawSlug = String(s?.slug || '')
  const slug = slugify(rawSlug.replace(SOON_RE, ''))
  if (!slug) return null
  const comingSoon = Boolean(s.comingSoon) || SOON_RE.test(rawSlug)
  const features =
    (Array.isArray(s.cardFeatures) && s.cardFeatures.length && s.cardFeatures) ||
    (Array.isArray(s.features) && s.features.length && s.features) ||
    (Array.isArray(s.keyFacts) && s.keyFacts.slice(0, 4)) || []
  return {
    ...s,
    slug,
    to: `/${slug}`,
    name: s.name || studioName(s, slug),
    eyebrow: s.eyebrow || `Studio ${s.name || studioName(s, slug)}`,
    comingSoon,
    img: s.img || null,
    cardImg: s.cardImg || s.img || `studios/${slug}-card.jpg`,
    features,
    keyFacts: Array.isArray(s.keyFacts) ? s.keyFacts : [],
    ausstattung: Array.isArray(s.ausstattung) ? s.ausstattung : [],
    kurse: Array.isArray(s.kurse) ? s.kurse.filter((k) => k && k.title) : [],
    sortOrder: typeof s.sortOrder === 'number' ? s.sortOrder : null,
  }
}

/**
 * sortOrder first, then open studios before coming-soon ones. Ties keep the
 * incoming order (Sanity: creation order, oldest first — Array.sort is stable).
 */
export function sortStudios(list) {
  return [...list].sort((a, b) =>
    (a.sortOrder ?? 999) - (b.sortOrder ?? 999) ||
    Number(a.comingSoon) - Number(b.comingSoon))
}

/** Transform for useSanityData: raw STUDIOS_QUERY result → normalized, sorted list. */
export function studiosFromSanity(result) {
  if (!Array.isArray(result)) return []
  return sortStudios(result.map(normalizeStudio).filter(Boolean))
}

// Fallback: homepage card data joined with the detail-page data from site.js.
export const fallbackStudios = sortStudios(
  locations.map((l) => normalizeStudio({ ...(studioData[l.slug] || {}), ...l })).filter(Boolean)
)

/**
 * The studio list for the whole site.
 * @returns {{ studios: Array, loading: boolean, error: Error|null, fromSanity: boolean }}
 */
export function useStudios() {
  const { data, loading, error } = useSanityData(STUDIOS_QUERY, [], studiosFromSanity)
  const fromSanity = Array.isArray(data) && data.length > 0
  return { studios: fromSanity ? data : fallbackStudios, loading, error, fromSanity }
}
