// ─── Homepage merge helpers ──────────────────────────────────────────────────
// Sanity content is layered OVER the site.js fallback, field by field, so an
// editor can fill in only what they need and everything else keeps rendering.

const isPlainObject = (v) => v != null && typeof v === 'object' && !Array.isArray(v)

const isEmpty = (v) =>
  v == null ||
  (typeof v === 'string' && v.trim() === '') ||
  (Array.isArray(v) && v.length === 0)

/**
 * Deep-merge `sanity` over `fallback`, ignoring empty Sanity values.
 * Arrays are taken wholesale from Sanity when non-empty (an editor who adds
 * their own service list wants exactly that list, not a mix).
 */
export function mergeHomePage(fallback, sanity) {
  if (!isPlainObject(sanity)) return fallback
  const out = { ...fallback }
  for (const [key, value] of Object.entries(sanity)) {
    if (isEmpty(value)) continue
    out[key] = isPlainObject(value) && isPlainObject(fallback?.[key])
      ? mergeHomePage(fallback[key], value)
      : value
  }
  return out
}

/** "Studio Holdorf" → "Holdorf"; "FITNESS WORLD HOLDORF" → "Holdorf" */
function studioName(s, key) {
  const fromEyebrow = String(s?.eyebrow || '').replace(/^studio\s+/i, '').trim()
  if (fromEyebrow) return fromEyebrow
  const fromTitle = String(s?.title || '').replace(/^fitness\s+world\s+/i, '').trim()
  if (fromTitle) return fromTitle.charAt(0) + fromTitle.slice(1).toLowerCase()
  return key.charAt(0).toUpperCase() + key.slice(1)
}

/**
 * Build the homepage studio cards.
 *
 * - Sanity studios override the site.js fallback per slug (case-insensitive).
 * - Fallback studios missing from Sanity (e.g. Vechta) still render.
 * - Studios that exist only in Sanity are appended, so a new location shows
 *   up on the homepage the moment it is published.
 * - A studio without a matching route (no page yet) or with `comingSoon`
 *   ticked is shown as "Demnächst", has no link, and is not counted.
 * - Order: Sanity `sortOrder` if set, otherwise site.js order, then new ones.
 *
 * @param {Array}  fallback   — `locations` from site.js
 * @param {Array}  sanity     — result of HOME_STUDIOS_QUERY
 * @param {string[]} routePaths — every known route path ("/holdorf", …)
 */
export function mergeHomeStudios(fallback, sanity, routePaths = []) {
  const cards = new Map()
  ;(fallback || []).forEach((l, i) => {
    cards.set(l.name.toLowerCase(), { ...l, comingSoon: false, _order: i })
  })

  const extraBase = cards.size + 100
  ;(Array.isArray(sanity) ? sanity : []).forEach((s, i) => {
    const key = String(s?.slug || '').trim().toLowerCase()
    if (!key) return
    const fb = cards.get(key)
    const route = `/${key}`
    const to = routePaths.includes(route) ? route : (fb?.to ?? null)
    const comingSoon = Boolean(s.comingSoon) || !to
    const features =
      (Array.isArray(s.cardFeatures) && s.cardFeatures.length && s.cardFeatures) ||
      (Array.isArray(s.keyFacts) && s.keyFacts.length && s.keyFacts.slice(0, 4)) ||
      fb?.features || []

    cards.set(key, {
      name: studioName(s, key),
      to: comingSoon ? null : to,
      img: s.img || fb?.img || `studios/${key}-card.jpg`,
      features,
      comingSoon,
      _order: typeof s.sortOrder === 'number' ? s.sortOrder : (fb?._order ?? extraBase + i),
    })
  })

  return [...cards.values()]
    .sort((a, b) => a._order - b._order)
    .map(({ _order, ...card }) => card)
}
