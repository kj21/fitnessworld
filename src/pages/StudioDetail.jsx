import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button, { TextLink } from '../components/Button'
import ImagePlaceholder from '../components/ImagePlaceholder'
import PageHero from '../components/PageHero'
import { studioData as studioDataFallback } from '../data/site'
import { useSanityData, studioArrayToObject } from '../hooks/useSanityData.js'
import { STUDIO_LOCATIONS_QUERY } from '../lib/queries.js'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="var(--fw-blue-soft)" />
      <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function StudioDetail({ studio }) {
  const { data: studioData } = useSanityData(
    STUDIO_LOCATIONS_QUERY,
    studioDataFallback,
    studioArrayToObject
  )
  const d = studioData[studio]

  useEffect(() => {
    document.title = d ? `${d.seoTitle}` : 'Studio | Fitness World Studios'
  }, [d])

  if (!d) return null

  return (
    <main>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        sub={d.sub}
        primaryCta="Probetraining vereinbaren"
        primaryTo={`/probetraining?studio=${d.slug}`}
        secondaryCta="Kursplan ansehen"
        secondaryTo="/kurse"
        img={d.img}
        alt={`${d.eyebrow} Eingangsbereich`}
      />

      {/* KEY FACTS */}
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

      {/* INTRO */}
      <section className="section section--light">
        <div className="wrap split">
          <Reveal>
            <h2 className="display">{d.intro.headline}</h2>
            <p className="lede" style={{ marginTop: 22 }}>{d.intro.text}</p>
            <div style={{ marginTop: 28 }}>
              <Button to={`/probetraining?studio=${d.slug}`}>Probetraining vereinbaren</Button>
            </div>
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

      {/* AUSSTATTUNG */}
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

      {/* KURSE */}
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
              <p className="eyebrow">Probetraining</p>
              <h2 className="display">{d.ctaHeadline}</h2>
              <p>{d.ctaText}</p>
              <Button to={`/probetraining?studio=${d.slug}`}>Probetraining buchen</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
