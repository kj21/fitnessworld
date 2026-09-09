import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import Button, { TextLink } from '../components/Button'
import Headline from '../components/Headline'
import ImagePlaceholder from '../components/ImagePlaceholder'
import LocationCard from '../components/LocationCard'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import Stat from '../components/Stat'
import { routes, locations as locationsFallback, testimonials as testimonialsFallback, homeContent } from '../data/site'
import { useSanityData } from '../hooks/useSanityData.js'
import { HOME_PAGE_QUERY, HOME_STUDIOS_QUERY, TESTIMONIALS_QUERY } from '../lib/queries.js'
import { mergeHomePage, mergeHomeStudios } from '../lib/home.js'

const routePaths = routes.map((r) => r.path)

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

export default function Home() {
  // Three Sanity sources, each with a site.js fallback:
  //   studio cards  ← "Studio Standort" documents (shared with StudioDetail)
  //   page copy     ← "Startseite" singleton (every field optional)
  //   testimonials  ← "Kundenstimme" documents
  const { data: sanityStudios } = useSanityData(HOME_STUDIOS_QUERY, [])
  const { data: sanityHome }    = useSanityData(HOME_PAGE_QUERY, null)
  const { data: testimonials }  = useSanityData(TESTIMONIALS_QUERY, testimonialsFallback)

  const studios   = mergeHomeStudios(locationsFallback, sanityStudios, routePaths)
  const openCount = studios.filter((s) => !s.comingSoon).length
  const c         = mergeHomePage(homeContent(openCount), sanityHome)

  useEffect(() => {
    document.title = c.seoTitle
    setMetaDescription(c.metaDesc)
  }, [c.seoTitle, c.metaDesc])

  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-label="Intro">
        <div className="hero__bg" />
        <div className="hero__inner">
          <Reveal as="p" className="eyebrow">{c.heroEyebrow}</Reveal>
          <Reveal as="h1" className="display" delay={0.05}>
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

      <Marquee items={c.marqueeItems} />

      {/* WARUM */}
      <section className="section section--light">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">{c.whyEyebrow}</p>
            <h2 className="display"><Headline text={c.whyHeadline} /></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede" style={{ marginBottom: 18 }}>{c.whyLede}</p>
            <p className="muted" style={{ marginBottom: 28 }}>{c.whyText}</p>
            <TextLink to={c.whyLink.to}>{c.whyLink.label}</TextLink>
          </Reveal>
        </div>
        <div className="wrap" style={{ marginTop: 56 }}>
          <Reveal>
            <ImagePlaceholder className="split__media" label="/images/sections/trainer-floor.jpg" alt="Trainer korrigiert eine Übung auf der Trainingsfläche" />
          </Reveal>
        </div>
      </section>

      {/* STANDORTE */}
      <section className="section section--dark" id="standorte">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">{c.studiosEyebrow}</p>
              <h2 className="display"><Headline text={c.studiosHeadline} /></h2>
            </div>
            <p className="muted" style={{ maxWidth: '42ch' }}>{c.studiosText}</p>
          </Reveal>
          <div className="loc-grid">
            {studios.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 0.07}><LocationCard {...loc} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="section section--white">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">{c.servicesEyebrow}</p>
              <h2 className="display"><Headline text={c.servicesHeadline} /></h2>
            </div>
            <p className="muted" style={{ maxWidth: '46ch' }}>{c.servicesText}</p>
          </Reveal>
          <div className="svc-grid">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.05}><ServiceCard {...s} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="section section--darker" id="community">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <Reveal>
            <p className="eyebrow">{c.communityEyebrow}</p>
            <h2 className="display"><Headline text={c.communityHeadline} /></h2>
            <p className="muted" style={{ margin: '22px 0 28px', maxWidth: '42ch' }}>{c.communityText}</p>
            <Button to={c.communityCta.to} variant="ghost-light">{c.communityCta.label}</Button>
          </Reveal>
          <Reveal className="gallery" delay={0.1}>
            <ImagePlaceholder className="g-tall" label="community-01" alt="Community-Moment 1" />
            <ImagePlaceholder label="community-02" alt="Community-Moment 2" />
            <ImagePlaceholder className="g-wide" label="community-03" alt="Community-Moment 3" />
            <ImagePlaceholder label="community-04" alt="Community-Moment 4" />
          </Reveal>
        </div>
      </section>

      {/* ZAHLEN */}
      <section className="section section--dark" style={{ padding: '72px 0' }}>
        <div className="wrap">
          <Reveal className="nums">
            {c.numbers.map((num) => (
              <div key={num.label}>
                <div className="n">
                  {num.text
                    ? <Headline text={num.text} />
                    : <Stat value={Number(num.count) || 0} decimals={num.decimals || 0} suffix={num.suffix || ''} />}
                </div>
                <div className="l">{num.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--light">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">{c.testimonialsEyebrow}</p>
              <h2 className="display"><Headline text={c.testimonialsHeadline} /></h2>
            </div>
          </Reveal>
          <div className="tst-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.07}><TestimonialCard {...t} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">{c.ctaEyebrow}</p>
              <h2 className="display"><Headline text={c.ctaHeadline} /></h2>
              <p>{c.ctaText}</p>
              <Button to={c.ctaButton.to}>{c.ctaButton.label}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
