// ─── Shared Sanity-backed content hooks ───────────────────────────────────────
// Each hook returns Sanity data when available and the site.js fallback
// otherwise. Like studios, lists from Sanity are authoritative (never merged
// with the fallback), so removing an item in Sanity removes it from the site.

import { useSanityData } from '../hooks/useSanityData.js'
import {
  COURSES_QUERY, SCHEDULE_QUERY, MEMBERSHIP_PAGE_QUERY, SITE_SETTINGS_QUERY, LEGAL_PAGES_QUERY,
} from './queries.js'
import {
  courses as coursesFallback, schedule as scheduleFallback,
  mitgliedschaftBenefits, mitgliedschaftFAQ, company as companyFallback, numberWord,
} from '../data/site'

const nonEmpty = (v) => v != null && !(typeof v === 'string' && v.trim() === '') && !(Array.isArray(v) && v.length === 0)

/** Field-wise merge: non-empty Sanity values win over the fallback. */
export function mergeFields(fallback, sanity) {
  if (!sanity || typeof sanity !== 'object') return fallback
  const out = { ...fallback }
  for (const [k, v] of Object.entries(sanity)) if (nonEmpty(v)) out[k] = v
  return out
}

/**
 * Replace {anzahl} with the open-studio count. At the start of a string or
 * line it becomes the capitalised number word ("Fünf Standorte"), elsewhere a
 * digit ("alle 5 Studios"). Works on strings, arrays and plain objects.
 */
export function fillCount(value, count) {
  if (typeof value === 'string') {
    return value
      .replace(/(^|\n)\{anzahl\}/g, (_, pre) => pre + numberWord(count))
      .replace(/\{anzahl\}/g, String(count))
  }
  if (Array.isArray(value)) return value.map((v) => fillCount(v, count))
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fillCount(v, count)]))
  }
  return value
}

// ── Kurse ────────────────────────────────────────────────────────────────────
const normalizeCourse = (c) => ({
  ...c,
  title: String(c?.title || '').trim(),
  category: String(c?.category || '').trim() || 'Weitere',
  text: c?.text || '',
  link: String(c?.link || '').trim() || '/probetraining',
})

export function useCourses() {
  const { data } = useSanityData(COURSES_QUERY, [])
  const fromSanity = Array.isArray(data) && data.length > 0
  const courses = (fromSanity ? data : coursesFallback).map(normalizeCourse).filter((c) => c.title)

  // Featured courses for nav + footer, one entry per link.
  const seen = new Set()
  const featured = courses
    .filter((c) => c.featured)
    .map((c) => ({ label: String(c.navLabel || '').trim() || c.title, to: c.link }))
    .filter((l) => (seen.has(l.to) ? false : (seen.add(l.to), true)))

  const categories = [...new Set(courses.map((c) => c.category))]
  return { courses, featured, categories, fromSanity }
}

const DAY_ORDER = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
const timeKey = (t) => {
  const m = String(t || '').match(/(\d{1,2})[:.](\d{2})/)
  return m ? Number(m[1]) * 60 + Number(m[2]) : 9999
}

export function useSchedule() {
  const { data } = useSanityData(SCHEDULE_QUERY, [])
  const fromSanity = Array.isArray(data) && data.length > 0
  const rows = [...(fromSanity ? data : scheduleFallback)].sort((a, b) =>
    (DAY_ORDER.indexOf(a.day) + 1 || 99) - (DAY_ORDER.indexOf(b.day) + 1 || 99) ||
    timeKey(a.time) - timeKey(b.time))
  return { schedule: rows, fromSanity }
}

// ── Mitgliedschaft-Seite ─────────────────────────────────────────────────────
export function useMembershipPage() {
  const { data } = useSanityData(MEMBERSHIP_PAGE_QUERY, null)
  return mergeFields({
    heroSub: 'Klar strukturierte Tarife ohne versteckte Kosten. Finde die Mitgliedschaft, die zu deinem Alltag und deinen Zielen passt.',
    pricingNote: 'Alle Preise sind Richtwerte. Die verbindlichen Konditionen erhältst du beim Probetraining oder auf Anfrage.\nBitte Preise und Laufzeiten vor Vertragsabschluss im Studio bestätigen lassen.',
    benefits: mitgliedschaftBenefits,
    faq: mitgliedschaftFAQ,
  }, data)
}

// ── Unternehmen & Rechtstexte ────────────────────────────────────────────────
export function useCompany() {
  const { data } = useSanityData(SITE_SETTINGS_QUERY, null)
  return mergeFields(companyFallback, data)
}

export function useLegalPages() {
  const { data } = useSanityData(LEGAL_PAGES_QUERY, [])
  const byPage = {}
  ;(Array.isArray(data) ? data : []).forEach((d) => { if (d?.page) byPage[d.page] = d })
  return byPage
}
