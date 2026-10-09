import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button, { TextLink } from '../components/Button'
import Headline from '../components/Headline'
import BlueLabel from '../components/BlueLabel'
import AccessBar from '../components/AccessBar'
import DecisionCard from '../components/DecisionCard'
import FinderCard from '../components/FinderCard'
import PathSteps, { PathTrack } from '../components/PathSteps'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { homeContent } from '../data/site'
import { useSanityData } from '../hooks/useSanityData.js'
import { HOME_PAGE_QUERY, PRICING_PLANS_QUERY } from '../lib/queries.js'
import { mergeHomePage } from '../lib/home.js'
import { useStudios } from '../lib/studios.js'
import { fillCount } from '../lib/content.js'

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
 * Startseite — "Blue Access System".
 * Hero → Access Bar → Einstieg → Studio Finder → 24/7 → Reha → Fighter World
 * → Mitgliedschaft → Probetraining. Every text comes from the Sanity
 * "Startseite" document, layered over the fallback in src/data/site.js.
 */
export default function Home() {
  const { studios } = useStudios()
  const { data: sanityHome } = useSanityData(HOME_PAGE_QUERY, null)
  const { data: plans } = useSanityData(PRICING_PLANS_QUERY, [])

  const openCount = studios.filter((s) => !s.comingSoon).length
  const c = fillCount(mergeHomePage(homeContent(openCount), sanityHome), openCount)

  useEffect(() => {
    document.title = c.seoTitle
    setMetaDescription(c.metaDesc)
  }, [c.seoTitle, c.metaDesc])

  return (
    <main>
      {/* 1 — HERO */}
      <section className="hero" aria-label="Intro">
        <div className="hero__bg" />
        <div className="hero__inner">
          <Reveal><BlueLabel>{c.heroEyebrow}</BlueLabel></Reveal>
          <Reveal as="h1" className="display" delay={0.05} style={{ marginTop: 22 }}>
            <Headline text={c.heroHeadline} block />
          </Reveal>
          <Reveal as="p" className="lede" delay={0.12}>{c.heroLede}</Reveal>
          <Reveal className="hero__cta" delay={0.18}>
            <Button to={c.heroPrimaryCta.to}>{c.heroPrimaryCta.label}</Button>
            <Button to={c.heroSecondaryCta.to} variant="ghost-light">{c.heroSecondaryCta.label}</Button>
          </Reveal>
          <Reveal className="hero__stats" delay={0.24}>
            {c.heroStats.map((s) => <div key={s}><span className="dot" />{s}</div>)}
          </Reveal>
        </div>
        <div className="scrollcue" aria-hidden="true">Scroll</div>
      </section>

      {/* 2 — BLUE ACCESS BAR */}
      <section className="section section--dark" style={{ paddingTop: 48, paddingBottom: 48 }} aria-label="Leistungen im Überblick">
        <div className="wrap">
          <AccessBar items={c.accessBar} />
        </div>
      </section>

      {/* 3 — EINSTIEG WÄHLEN */}
      <section className="section section--light" id="einstieg">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <BlueLabel>{c.decisionEyebrow}</BlueLabel>
              <h2 className="display" style={{ marginTop: 18 }}><Headline text={c.decisionHeadline} /></h2>
            </div>
            <p className="muted" style={{ maxWidth: '46ch' }}>{c.decisionText}</p>
          </Reveal>
          <div className="decide-grid">
            {c.decisionCards.map((card, i) => (
              <Reveal key={card.title} delay={(i % 3) * 0.05}><DecisionCard {...card} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — STUDIO FINDER */}
      <section className="section section--dark" id="standorte">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <BlueLabel>{c.studiosEyebrow}</BlueLabel>
              <h2 className="display" style={{ marginTop: 18 }}><Headline text={c.studiosHeadline} /></h2>
            </div>
            <p className="muted" style={{ maxWidth: '42ch' }}>{c.studiosText}</p>
          </Reveal>
          <div className="finder-grid">
            {studios.map((studio, i) => (
              <Reveal key={studio.slug} delay={(i % 3) * 0.06}><FinderCard {...studio} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — 24/7 TRAINING */}
      <section className="section section--white" id="24-7">
        <div className="wrap panel">
          <Reveal>
            <BlueLabel>{c.access247Eyebrow}</BlueLabel>
            <h2 className="display" style={{ margin: '18px 0 20px' }}><Headline text={c.access247Headline} /></h2>
            <p className="lede" style={{ marginBottom: 30 }}>{c.access247Text}</p>
            <PathTrack items={c.access247Points} />
            {c.access247Note?.text && (
              <div className="panel__frame" style={{ marginTop: 30 }}>
                <strong>{c.access247Note.title}</strong>
                <p>{c.access247Note.text}</p>
              </div>
            )}
            {c.access247Cta?.label && (
              <div style={{ marginTop: 30 }}>
                <Button to={c.access247Cta.to} variant="ghost-dark">{c.access247Cta.label}</Button>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <ImagePlaceholder className="panel__media" label="/images/sections/24-7-zugang.jpg" alt="Zugang per Transponder außerhalb der Trainerzeiten" />
          </Reveal>
        </div>
      </section>

      {/* 6 — REHA & GESUNDHEIT */}
      <section className="section section--light" id="reha">
        <div className="wrap">
          <Reveal>
            <BlueLabel>{c.rehaEyebrow}</BlueLabel>
            <h2 className="display" style={{ margin: '18px 0 18px', maxWidth: '22ch' }}><Headline text={c.rehaHeadline} /></h2>
            <p className="lede" style={{ maxWidth: '58ch' }}>{c.rehaText}</p>
          </Reveal>
          <PathSteps steps={c.rehaSteps} />
          {c.rehaCta?.label && (
            <Reveal style={{ marginTop: 44 }}>
              <Button to={c.rehaCta.to}>{c.rehaCta.label}</Button>
            </Reveal>
          )}
        </div>
      </section>

      {/* 7 — FIGHTER WORLD */}
      <section className="section section--darker" id="fighter-world">
        <div className="wrap panel">
          <Reveal delay={0.05}>
            <ImagePlaceholder className="panel__media" label="/images/sections/fighter-world.jpg" alt="Boxtraining in der Fighter World" />
          </Reveal>
          <Reveal>
            <BlueLabel>{c.fighterEyebrow}</BlueLabel>
            <h2 className="display" style={{ margin: '18px 0 20px' }}><Headline text={c.fighterHeadline} /></h2>
            <p className="lede" style={{ marginBottom: 30 }}>{c.fighterText}</p>
            <PathTrack items={c.fighterPoints} />
            {c.fighterCta?.label && (
              <div style={{ marginTop: 30 }}>
                <Button to={c.fighterCta.to}>{c.fighterCta.label}</Button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* 8 — MITGLIEDSCHAFT */}
      <section className="section section--dark" id="mitgliedschaft">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <BlueLabel>{c.membershipEyebrow}</BlueLabel>
              <h2 className="display" style={{ marginTop: 18 }}><Headline text={c.membershipHeadline} /></h2>
            </div>
            <p className="muted" style={{ maxWidth: '42ch' }}>{c.membershipText}</p>
          </Reveal>
          {plans.length > 0 && (
            <div className="plan-grid">
              {plans.slice(0, 3).map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.06} className="plan-card">
                  <span className="plan-card__kind">{plan.badge || 'Tarif'}</span>
                  <h3>{plan.name}</h3>
                  {plan.price && <div className="plan-card__price">{plan.price} €<span>{plan.period || 'pro Monat'}</span></div>}
                  {plan.desc && <p>{plan.desc}</p>}
                  <TextLink to="/mitgliedschaft">Details ansehen</TextLink>
                </Reveal>
              ))}
            </div>
          )}
          <Reveal style={{ marginTop: 40 }}>
            <Button to={c.membershipCta.to}>{c.membershipCta.label}</Button>
          </Reveal>
        </div>
      </section>

      {/* 9 — PROBETRAINING */}
      <section className="section section--light" id="probetraining">
        <div className="wrap">
          <Reveal className="entry">
            <BlueLabel>{c.ctaEyebrow}</BlueLabel>
            <h2 className="display" style={{ margin: '18px 0 16px' }}><Headline text={c.ctaHeadline} /></h2>
            <p className="lede" style={{ maxWidth: '56ch' }}>{c.ctaText}</p>
            {Array.isArray(c.ctaSteps) && c.ctaSteps.length > 0 && (
              <div className="entry__steps">
                {c.ctaSteps.map((step, i) => (
                  <span className="entry__step" key={step}><i>{i + 1}</i>{step}</span>
                ))}
              </div>
            )}
            <Button to={c.ctaButton.to}>{c.ctaButton.label}</Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
