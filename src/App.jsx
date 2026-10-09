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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
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
