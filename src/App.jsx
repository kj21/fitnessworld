import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

// Sticky bottom CTA — only visible on mobile (≤860px via CSS), hidden on /probetraining
function StickyCTA() {
  const { pathname } = useLocation()
  if (pathname === '/probetraining') return null
  return (
    <div className="mcta">
      <Link to="/probetraining" className="btn btn--primary">
        Probetraining <span className="arr">→</span>
      </Link>
    </div>
  )
}
import Home from './pages/Home'
import StudioRoute from './pages/StudioRoute'
import Kurse from './pages/Kurse'
import ServicePage from './pages/ServicePage'
import Mitgliedschaft from './pages/Mitgliedschaft'
import Probetraining from './pages/Probetraining'
import Team from './pages/Team'
import Jobs from './pages/Jobs'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Kontakt from './pages/Kontakt'
import Legal from './pages/Legal'
import Placeholder from './pages/Placeholder'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches

// Sticky header height plus a little air, so an anchor never lands underneath it.
const ANCHOR_OFFSET = 104

/**
 * Scroll behaviour for client-side navigation.
 * - A link with a hash (/#standorte, #kursplan) scrolls smoothly to that
 *   section; React Router does not do this on its own.
 * - Any other navigation jumps to the top instantly, so moving between pages
 *   doesn't animate a long rewind.
 *
 * The scroll runs straight from the effect rather than inside
 * requestAnimationFrame: animation frames are suspended in a background tab,
 * which silently skipped the jump. A short retry covers the case where the
 * target section mounts a tick after the route does.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth'

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    const id = decodeURIComponent(hash.slice(1))
    const timers = []

    const scrollToTarget = () => {
      const target = document.getElementById(id)
      if (!target) return false
      const top = target.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET
      window.scrollTo({ top: Math.max(0, top), behavior })
      return true
    }

    if (!scrollToTarget()) {
      // the section may mount a tick later (route change, lazy content)
      timers.push(setTimeout(scrollToTarget, 60), setTimeout(scrollToTarget, 240))
    }

    return () => timers.forEach(clearTimeout)
  }, [pathname, hash, key])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollManager />
      <Header />
      <ErrorBoundary resetKey={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Kurse */}
        <Route path="/kurse"                  element={<Kurse />} />
        {/* Leistungs-Seiten: content + section order come from Sanity */}
        <Route path="/24-7-training"     element={<ServicePage slug="training-247" />} />
        <Route path="/reha-sport"        element={<ServicePage slug="reha-sport" />} />
        <Route path="/fighter-world"     element={<ServicePage slug="fighter-world" />} />
        <Route path="/personal-training" element={<ServicePage slug="personal-training" />} />
        {/* Old URLs stay alive */}
        <Route path="/kurse/reha-sport"        element={<Navigate to="/reha-sport" replace />} />
        <Route path="/kurse/personal-training" element={<Navigate to="/personal-training" replace />} />
        <Route path="/kurse/boxen"             element={<Navigate to="/fighter-world" replace />} />
        <Route path="/boxen"                   element={<Navigate to="/fighter-world" replace />} />
        <Route path="/standorte"               element={<Navigate to="/#standorte" replace />} />
        {/* Service */}
        <Route path="/mitgliedschaft" element={<Mitgliedschaft />} />
        <Route path="/probetraining"  element={<Probetraining />} />
        {/* Info */}
        <Route path="/team"    element={<Team />} />
        <Route path="/jobs"    element={<Jobs />} />
        <Route path="/blog"    element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/kontakt" element={<Kontakt />} />
        {/* Legal */}
        <Route path="/impressum"   element={<Legal />} />
        <Route path="/datenschutz" element={<Legal />} />
        <Route path="/agb"         element={<Legal />} />
        <Route path="/hausordnung" element={<Legal />} />
        {/* Studios: one dynamic route for every studio published in Sanity.
            Static routes above always win; unknown slugs fall through to Placeholder. */}
        <Route path="/:slug" element={<StudioRoute />} />
        {/* Fallback */}
        <Route path="*" element={<Placeholder />} />
      </Routes>
      </ErrorBoundary>
      <Footer />
      <StickyCTA />
    </>
  )
}
