import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

// Sticky bottom CTA — only visible on mobile (≤860px via CSS), hidden on /probetraining
function StickyCTA() {
  const { pathname } = useLocation()
  if (pathname === '/probetraining') return null
  return (
    <div className="mcta">
      <Link to="/probetraining" className="btn btn--primary">
        Kostenloses Probetraining <span className="arr">→</span>
      </Link>
    </div>
  )
}
import Home from './pages/Home'
import StudioDetailPage from './pages/StudioDetail'
import Kurse from './pages/Kurse'
import RehaSport from './pages/RehaSport'
import PersonalTraining from './pages/PersonalTraining'
import Boxen from './pages/Boxen'
import Mitgliedschaft from './pages/Mitgliedschaft'
import Probetraining from './pages/Probetraining'
import Team from './pages/Team'
import Jobs from './pages/Jobs'
import Blog from './pages/Blog'
import Kontakt from './pages/Kontakt'
import Legal from './pages/Legal'
import Placeholder from './pages/Placeholder'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Studios */}
        <Route path="/holdorf"     element={<StudioDetailPage studio="holdorf" />} />
        <Route path="/goldenstedt" element={<StudioDetailPage studio="goldenstedt" />} />
        <Route path="/twistringen" element={<StudioDetailPage studio="twistringen" />} />
        <Route path="/vechta"      element={<StudioDetailPage studio="vechta" />} />
        {/* Kurse */}
        <Route path="/kurse"                  element={<Kurse />} />
        <Route path="/kurse/reha-sport"       element={<RehaSport />} />
        <Route path="/kurse/personal-training" element={<PersonalTraining />} />
        <Route path="/kurse/boxen"            element={<Boxen />} />
        {/* Service */}
        <Route path="/mitgliedschaft" element={<Mitgliedschaft />} />
        <Route path="/probetraining"  element={<Probetraining />} />
        {/* Info */}
        <Route path="/team"    element={<Team />} />
        <Route path="/jobs"    element={<Jobs />} />
        <Route path="/blog"    element={<Blog />} />
        <Route path="/kontakt" element={<Kontakt />} />
        {/* Legal */}
        <Route path="/impressum"   element={<Legal />} />
        <Route path="/datenschutz" element={<Legal />} />
        <Route path="/agb"         element={<Legal />} />
        <Route path="/hausordnung" element={<Legal />} />
        {/* Fallback */}
        <Route path="*" element={<Placeholder />} />
      </Routes>
      <Footer />
      <StickyCTA />
    </>
  )
}
