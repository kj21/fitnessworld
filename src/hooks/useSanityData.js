import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanity.js'

// Components mounted at the same time (Header + Home + StudioRoute all need the
// studio list) share one in-flight request per query instead of firing three.
const inflight = new Map()
function fetchQuery(query) {
  if (!inflight.has(query)) {
    const p = sanityClient.fetch(query).finally(() => inflight.delete(query))
    inflight.set(query, p)
  }
  return inflight.get(query)
}

/**
 * Fetch Sanity data with a site.js fallback.
 *
 * @param {string}   query     — GROQ query string from src/lib/queries.js
 * @param {*}        fallback  — value from site.js used while loading or on error
 * @param {function} [transform] — optional fn to reshape the raw Sanity result
 *                                 (e.g. studiosFromSanity in src/lib/studios.js)
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

    fetchQuery(query)
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
