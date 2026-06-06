import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button'
import { routes } from '../data/site'

// Temporary page for routes not yet built. Replace by building the real
// template (see CLAUDE.md + content/pages/*.md). Keeps every nav link alive.
export default function Placeholder() {
  const { pathname } = useLocation()
  const route = routes.find((r) => r.path === pathname)
  const label = route?.label || 'Seite'
  useEffect(() => { document.title = `${label} | Fitness World Studios` }, [label])

  return (
    <main>
      <section className="hero" aria-label={label}>
        <div className="hero__bg" />
        <div className="hero__inner">
          <p className="eyebrow">In Arbeit</p>
          <h1 className="display"><span>{label}</span></h1>
          <p className="lede">Diese Seite ist noch nicht gebaut. Template:&nbsp;
            <span className="blue">{route?.template || 'unbekannt'}</span>. Inhalt liegt in
            &nbsp;<code>content/pages/</code>.</p>
          <div className="hero__cta">
            <Button to="/">Zur Startseite</Button>
            <Button to="/probetraining" variant="ghost-light">Kostenloses Probetraining</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
