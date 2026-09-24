import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import Sections from '../components/Sections'
import Placeholder from './Placeholder'
import { useServicePage } from '../lib/content.js'

function setMetaDescription(content) {
  if (!content) return
  let el = document.querySelector('meta[name="description"]')
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Reha-Sport, Boxen & Kickboxen and Personal Training.
 * Hero + freely arranged sections, all editable in Sanity ("Leistungs-Seite").
 */
export default function ServicePage({ slug }) {
  const { page, loading } = useServicePage(slug)

  useEffect(() => {
    if (!page) return
    document.title = page.seoTitle || `${page.eyebrow} | Fitness World Studios`
    setMetaDescription(page.metaDesc || page.sub)
  }, [page])

  if (!page) return loading ? null : <Placeholder />

  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        sub={page.sub}
        primaryCta={page.primaryCta?.label}
        primaryTo={page.primaryCta?.to}
        secondaryCta={page.secondaryCta?.label}
        secondaryTo={page.secondaryCta?.to}
        img={page.heroImage || page.heroImageLabel}
        alt={page.eyebrow}
      />
      <Sections blocks={page.sections} />
    </main>
  )
}
