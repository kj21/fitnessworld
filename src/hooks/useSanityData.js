import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanity.js'

/**
 * Fetch Sanity data with a site.js fallback.
 *
 * @param {string}   query     — GROQ query string from src/lib/queries.js
 * @param {*}        fallback  — value from site.js used while loading or on error
 * @param {function} [transform] — optional fn to reshape the raw Sanity result
 *                                 (e.g. studioArrayToObject for StudioDetail)
 * @returns {{ data, loading, error }}
 *
 * The fallback stays in `data` whenever Sanity is unreachable, ensuring
 * zero white screens if credentials are missing or the network is down.
 */
export function useSanityData(query, fallback, transform) {
  const [data, setData] = useState(fallback)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // If no Sanity client (env vars not configured), stay on fallback silently
    if (!sanityClient) {
      setLoading(false)
      return
    }

    let cancelled = false

    sanityClient
      .fetch(query)
      .then((result) => {
        if (cancelled) return
        const resolved = transform ? transform(result) : result
        // Only replace fallback when Sanity returns non-empty data
        const hasData = Array.isArray(resolved)
          ? resolved.length > 0
          : resolved != null && typeof resolved === 'object' && Object.keys(resolved).length > 0
        if (hasData) setData(resolved)
        setLoading(false)
      })
      .catch((err) => {
        if (cancelled) return
        console.error('[Sanity] fetch error:', err.message)
        setError(err)
        setLoading(false)
        // fallback remains in data — no visual disruption
      })

    return () => { cancelled = true }
  }, [query]) // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error }
}

/**
 * Transform helper for StudioDetail.
 * Converts Sanity's flat array into { holdorf: {...}, goldenstedt: {...}, ... }
 * so StudioDetail.jsx can continue using studioData[studio] unchanged.
 */
export function studioArrayToObject(arr) {
  return arr.reduce((acc, studio) => {
    acc[studio.slug] = studio
    return acc
  }, {})
}
