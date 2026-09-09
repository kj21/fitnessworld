import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { nav, brand } from '../data/site'
import { useStudios } from '../lib/studios.js'

/** nav from site.js, with the "Standorte" children filled from Sanity. */
function useNavItems() {
  const { studios } = useStudios()
  return nav.map((item) => {
    if (!item.studios) return item
    const first = studios.find((s) => !s.comingSoon) || studios[0]
    return {
      ...item,
      to: first?.to || item.to,
      children: studios.map((s) => ({
        label: s.comingSoon ? `${s.name} (demnächst)` : s.name,
        to: s.to,
      })),
    }
  })
}

function Brand({ onClick }) {
  return (
    <Link className="brand" to="/" aria-label="Fitness World Studios Startseite" onClick={onClick}>
      <Logo className="mark" />
      <span className="brand__txt">
        <span className="brand__name">{brand.name}</span>
        <span className="brand__sub">{brand.sub}</span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const items = useNavItems()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu + lock scroll
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header__inner">
          <Brand />
          <nav className="nav" aria-label="Hauptnavigation">
            {items.map((item) => (
              <div className={`nav__item ${item.children ? 'has-menu' : ''}`} key={item.label}>
                <Link to={item.to}>
                  {item.label}{item.children && <span className="chev">▾</span>}
                </Link>
                {item.children?.length > 0 && (
                  <div className="submenu">
                    {item.children.map((c) => <Link key={c.to} to={c.to}>{c.label}</Link>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header__cta">
            <Link className="btn btn--primary" to="/probetraining">
              Kostenloses Probetraining <span className="arr">→</span>
            </Link>
            <button
              className="burger"
              aria-label="Menü öffnen"
              aria-expanded={open}
              aria-controls="mobileMenu"
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobileMenu" className={`mobile ${open ? 'open' : ''}`} aria-hidden={!open}>
        {items.map((item) => (
          <div key={item.label}>
            <Link to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>
            {item.children && (
              <Link className="sub" to={item.to} onClick={() => setOpen(false)}>
                {item.children.map((c) => c.label).join(' · ')}
              </Link>
            )}
          </div>
        ))}
        <Link className="btn btn--primary" to="/probetraining" onClick={() => setOpen(false)}>
          Kostenloses Probetraining <span className="arr">→</span>
        </Link>
      </div>
    </>
  )
}
