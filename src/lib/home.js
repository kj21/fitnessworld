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
