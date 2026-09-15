import { Link } from 'react-router-dom'
import Logo from './Logo'
import { footer, brand, numberWord } from '../data/site'
import { useStudios } from '../lib/studios.js'
import { useCourses } from '../lib/content.js'

function Social({ label, href, children }) {
  return (
    <a href={href} aria-label={`${label} (öffnet in neuem Tab)`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default function Footer() {
  const { studios } = useStudios()
  const { featured } = useCourses()
  const openCount = studios.filter((s) => !s.comingSoon).length
  const text = footer.text.replace('{standorte}', numberWord(openCount).toLowerCase())
  const columns = footer.columns.map((col) => {
    if (col.studios) return { ...col, links: studios.map((s) => [s.comingSoon ? `${s.name} (demnächst)` : s.name, s.to]) }
    if (col.courses) {
      const own = new Set(col.links.map(([, to]) => to))
      return { ...col, links: [...col.links, ...featured.filter((f) => !own.has(f.to)).map((f) => [f.label, f.to])] }
    }
    return col
  })
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link className="brand" to="/" aria-label="Fitness World Studios">
                <Logo className="mark" />
                <span className="brand__txt">
                  <span className="brand__name">{brand.name}</span>
                  <span className="brand__sub">{brand.sub}</span>
                </span>
              </Link>
              <p>{text}</p>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map(([label, to]) => (
                    <li key={to + label}><Link to={to}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4>Folgen</h4>
              <div className="socials">
                <Social label="Instagram" href="https://www.instagram.com/fitnessworlddeutschland/">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                </Social>
                <Social label="Facebook" href="https://www.facebook.com/FitnessWorldDeutschland/">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5z" /></svg>
                </Social>
                <Social label="TikTok" href="https://www.tiktok.com/@fitnessworlddeutschland">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2 1.6 3.4 3.5 3.6v2.6c-1.3 0-2.5-.4-3.5-1v5.6c0 3-2.4 5.4-5.4 5.4S5.2 19.4 5.2 16.4c0-2.8 2.2-5.2 5-5.4v2.7c-1.2.2-2.1 1.2-2.1 2.5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V3H16z" /></svg>
                </Social>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Fitness World Studios</span>
            <span>{brand.claim}</span>
          </div>
        </div>
      </footer>

      <div className="mcta">
        <Link className="btn btn--primary" to="/probetraining">
          Kostenloses Probetraining <span className="arr">→</span>
        </Link>
      </div>
    </>
  )
}
