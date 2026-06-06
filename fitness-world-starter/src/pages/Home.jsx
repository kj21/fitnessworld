import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import Button, { TextLink } from '../components/Button'
import ImagePlaceholder from '../components/ImagePlaceholder'
import LocationCard from '../components/LocationCard'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import Stat from '../components/Stat'
import { heroStats, locations, services, numbers, testimonials } from '../data/site'

export default function Home() {
  useEffect(() => { document.title = 'Fitness World Studios | 24/7 Fitness, Reha-Sport & Kurse' }, [])

  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-label="Intro">
        <div className="hero__bg" />
        <div className="hero__inner">
          <Reveal as="p" className="eyebrow">Fitness World Studios</Reveal>
          <Reveal as="h1" className="display" delay={0.05}>
            <span>Stärker.</span>
            <span className="blue">Gesünder.</span>
            <span>Gemeinsam.</span>
          </Reveal>
          <Reveal as="p" className="lede" delay={0.12}>
            24/7 Training, Reha-Sport, Kurse und persönliche Betreuung an vier Standorten.
            Für deinen Start, deinen Wiedereinstieg und dein nächstes Ziel.
          </Reveal>
          <Reveal className="hero__cta" delay={0.18}>
            <Button to="/probetraining">Kostenloses Probetraining</Button>
            <Button to="/holdorf" variant="ghost-light">Studio finden</Button>
          </Reveal>
          <Reveal className="hero__stats" delay={0.24}>
            {heroStats.map((s) => <div key={s}><span className="dot" />{s}</div>)}
          </Reveal>
        </div>
        <div className="scrollcue" aria-hidden="true">Scroll</div>
      </section>

      <Marquee />

      {/* WARUM */}
      <section className="section section--light">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Warum Fitness World?</p>
            <h2 className="display">Training allein<br />reicht <span className="blue">nicht.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede" style={{ marginBottom: 18 }}>Wir glauben, dass langfristige Erfolge dort entstehen, wo professionelle Betreuung, moderne Trainingsmöglichkeiten und echte Gemeinschaft zusammenkommen.</p>
            <p className="muted" style={{ marginBottom: 28 }}>Egal ob du gerade erst anfängst, nach einer Pause zurückkommst oder gezielt stärker werden willst: Bei Fitness World findest du einen Ort, der zu deinem Alltag passt und dich nicht alleine lässt.</p>
            <TextLink to="/team">Mehr über uns</TextLink>
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
              <p className="eyebrow">Unsere Studios</p>
              <h2 className="display">Vier Standorte.<br />Eine <span className="blue">Community.</span></h2>
            </div>
            <p className="muted" style={{ maxWidth: '42ch' }}>Wähle dein Studio in deiner Nähe und finde heraus, welche Angebote, Kurse und Trainingsmöglichkeiten vor Ort auf dich warten.</p>
          </Reveal>
          <div className="loc-grid">
            {locations.map((loc, i) => (
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
              <p className="eyebrow">Unsere Leistungen</p>
              <h2 className="display">Alles für <span className="blue">dein Ziel.</span></h2>
            </div>
            <p className="muted" style={{ maxWidth: '46ch' }}>Ob Kraft, Ausdauer, Gesundheit oder Technik: Wir bieten dir Training, das zu deinem Ziel und deinem Level passt.</p>
          </Reveal>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.05}><ServiceCard {...s} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="section section--darker" id="community">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <Reveal>
            <p className="eyebrow">Community</p>
            <h2 className="display">Fitness ist besser <span className="blue">gemeinsam.</span></h2>
            <p className="muted" style={{ margin: '22px 0 28px', maxWidth: '42ch' }}>Bei Fitness World trainierst du nicht anonym. Du wirst Teil einer Gemeinschaft, die sich gegenseitig motiviert, unterstützt und gemeinsam besser wird.</p>
            <Button to="/team" variant="ghost-light">Community entdecken</Button>
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
            {numbers.map((num) => (
              <div key={num.label}>
                <div className="n">
                  {num.static
                    ? <>24<span className="blue">/</span>7</>
                    : <Stat value={num.count} decimals={num.decimals || 0} suffix={num.suffix || ''} />}
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
              <p className="eyebrow">Das sagen unsere Mitglieder</p>
              <h2 className="display">Echte Stimmen.<br />Echtes <span className="blue">Vertrauen.</span></h2>
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
              <p className="eyebrow">Probetraining</p>
              <h2 className="display">Finde heraus,<br />was in dir <span className="blue">steckt.</span></h2>
              <p>Vereinbare jetzt dein kostenloses Probetraining und lerne Fitness World persönlich kennen.</p>
              <Button to="/probetraining">Probetraining vereinbaren</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
