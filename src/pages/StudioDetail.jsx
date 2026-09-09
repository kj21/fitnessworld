import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button, { TextLink } from '../components/Button'
import ImagePlaceholder from '../components/ImagePlaceholder'
import PageHero from '../components/PageHero'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="var(--fw-blue-soft)" />
      <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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
 * Studio page. `data` is one normalized studio from useStudios() — Sanity when
 * available, site.js otherwise. Sections whose data is empty are skipped, so a
 * freshly created studio with only a title and a teaser still renders cleanly.
 * Coming-soon studios get a "Demnächst" hero and a contact CTA instead of the
 * trial-training CTA.
 */
export default function StudioDetail({ data: d }) {
  const soon = d.comingSoon
  const trialTo = `/probetraining?studio=${d.slug}`
  const title = d.title || `FITNESS WORLD ${d.name.toUpperCase()}`

  useEffect(() => {
    document.title = d.seoTitle || `${d.eyebrow} | Fitness World Studios`
    setMetaDescription(d.metaDesc || d.sub)
  }, [d])

  return (
    <main>
      <PageHero
        eyebrow={soon ? `${d.eyebrow} · Demnächst` : d.eyebrow}
        title={title}
        sub={d.sub}
        primaryCta={soon ? 'Kontakt aufnehmen' : 'Probetraining vereinbaren'}
        primaryTo={soon ? '/kontakt' : trialTo}
        secondaryCta={soon ? 'Alle Studios' : 'Kursplan ansehen'}
        secondaryTo={soon ? '/#standorte' : '/kurse'}
        img={d.img || `/images/studios/${d.slug}-hero.jpg`}
        alt={`${d.eyebrow} Eingangsbereich`}
      />

      {/* KEY FACTS */}
      {d.keyFacts.length > 0 && (
        <section className="section section--dark" style={{ padding: '36px 0' }}>
          <div className="wrap">
            <Reveal className="keyfacts">
              {d.keyFacts.map((f) => (
                <div key={f} className="keyfact">
                  <span className="dot" />
                  {f}
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* INTRO */}
      {(d.intro?.headline || d.intro?.text) && (
        <section className="section section--light">
          <div className="wrap split">
            <Reveal>
              {d.intro.headline && <h2 className="display">{d.intro.headline}</h2>}
              {d.intro.text && <p className="lede" style={{ marginTop: 22 }}>{d.intro.text}</p>}
              {!soon && (
                <div style={{ marginTop: 28 }}>
                  <Button to={trialTo}>Probetraining vereinbaren</Button>
                </div>
              )}
            </Reveal>
            <Reveal delay={0.1}>
              <ImagePlaceholder
                className="split__media"
                label={`/images/studios/${d.slug}-intro.jpg`}
                alt={`Trainingsfläche ${d.eyebrow}`}
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* AUSSTATTUNG */}
      {d.ausstattung.length > 0 && (
        <section className="section section--white">
          <div className="wrap">
            <Reveal className="head-row">
              <div>
                <p className="eyebrow">Ausstattung</p>
                <h2 className="display">Alles, was du<br /><span className="blue">brauchst.</span></h2>
              </div>
            </Reveal>
            <Reveal>
              <ul className="equip-list">
                {d.ausstattung.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* KURSE */}
      {d.kurse.length > 0 && (
        <section className="section section--dark">
          <div className="wrap">
            <Reveal className="head-row">
              <div>
                <p className="eyebrow">Kurse & Angebote</p>
                <h2 className="display">Training,<br />das <span className="blue">zu dir passt.</span></h2>
              </div>
              <TextLink to="/kurse">Alle Kurse ansehen</TextLink>
            </Reveal>
            <div className="svc-grid">
              {d.kurse.map((k, i) => (
                <Reveal key={k.title} delay={i * 0.06} className="svc-card svc-card--dark">
                  <h3>{k.title}</h3>
                  <p>{k.text}</p>
                  <TextLink to="/kurse">Mehr erfahren</TextLink>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      <section className="section section--darker">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Einblicke</p>
            <h2 className="display" style={{ marginBottom: 36 }}>Das Studio<br /><span className="blue">in Bildern.</span></h2>
          </Reveal>
          <Reveal className="studio-gallery">
            <ImagePlaceholder className="sg-main" label={`/images/studios/${d.slug}-gallery-1.jpg`} alt={`${d.eyebrow} Trainingsfläche`} />
            <ImagePlaceholder label={`/images/studios/${d.slug}-gallery-2.jpg`} alt={`${d.eyebrow} Kraftbereich`} />
            <ImagePlaceholder label={`/images/studios/${d.slug}-gallery-3.jpg`} alt={`${d.eyebrow} Cardio`} />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">{soon ? 'Demnächst' : 'Probetraining'}</p>
              <h2 className="display">
                {d.ctaHeadline || (soon ? `BALD AUCH IN ${d.name.toUpperCase()}.` : 'KOMM ZUM PROBETRAINING.')}
              </h2>
              <p>
                {d.ctaText || (soon
                  ? 'Wir informieren dich, sobald es losgeht. Melde dich gern schon jetzt bei uns.'
                  : 'Lerne das Studio kennen und starte mit einem Training, das zu dir passt.')}
              </p>
              {soon
                ? <Button to="/kontakt">Kontakt aufnehmen</Button>
                : <Button to={trialTo}>Probetraining buchen</Button>}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
