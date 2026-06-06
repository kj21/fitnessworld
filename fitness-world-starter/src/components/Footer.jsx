import { Link } from 'react-router-dom'
import Logo from './Logo'
import { footer, brand } from '../data/site'

function Social({ label, children }) {
  return <a href="#" aria-label={label}>{children}</a>
}

export default function Footer() {
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
              <p>{footer.text}</p>
            </div>

            {footer.columns.map((col) => (
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
                <Social label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                </Social>
                <Social label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5z" /></svg>
                </Social>
                <Social label="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2 1.6 3.4 3.5 3.6v2.6c-1.3 0-2.5-.4-3.5-1v5.6c0 3-2.4 5.4-5.4 5.4S5.2 19.4 5.2 16.4c0-2.8 2.2-5.2 5-5.4v2.7c-1.2.2-2.1 1.2-2.1 2.5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V3H16z" /></svg>
                </Social>
                <Social label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 2 12a31 31 0 0 0 .1 3.8 3 3 0 0 0 2.1 2.1c1.9.6 7.8.6 7.8.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0 0-3.8zM10 15V9l5.2 3z" /></svg>
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
