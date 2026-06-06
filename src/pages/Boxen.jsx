import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import PageHero from '../components/PageHero'

const inhalte = [
  'Grundtechniken', 'Schlag- und Beinarbeit', 'Partnerübungen',
  'Kondition', 'Koordination', 'Core Training', 'Kontrollierte Intensität',
]

const forWhom = [
  'Anfänger ohne Vorerfahrung',
  'Fortgeschrittene mit Technikfokus',
  'Menschen, die intensiver trainieren wollen',
  'Alle, die Kondition und Körpergefühl verbessern möchten',
  'Mitglieder, die Abwechslung zum Gerätetraining suchen',
]

const faq = [
  { q: 'Brauche ich eigene Handschuhe?', a: 'Für den Einstieg kannst du zunächst nachfragen, was vor Ort möglich ist. Langfristig sind eigene Handschuhe sinnvoll.' },
  { q: 'Kann ich als Anfänger teilnehmen?', a: 'Ja. Sag uns beim Probetraining einfach, dass du neu bist, dann führen wir dich passend ein.' },
  { q: 'Ist Boxen auch für Frauen geeignet?', a: 'Ja. Boxen ist für jedes Geschlecht geeignet. Entscheidend ist dein Ziel und dein Level.' },
]

export default function Boxen() {
  useEffect(() => { document.title = 'Boxen & Kickboxen | Fitness World Studios' }, [])

  return (
    <main>
      <PageHero
        eyebrow="Boxen & Kickboxen"
        title="KRAFT. AUSDAUER. FOKUS."
        sub="Boxtraining bringt dich körperlich und mental nach vorne. Lerne Technik, verbessere deine Kondition und trainiere mit Energie."
        primaryCta="Boxtraining testen"
        primaryTo="/probetraining?interesse=boxen"
        secondaryCta="Kurse ansehen"
        secondaryTo="/kurse"
        img="/images/services/boxen-hero.jpg"
        alt="Boxtraining bei Fitness World Studios"
      />

      {/* INTRO */}
      <section className="section section--light">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Das Training</p>
            <h2 className="display">MEHR ALS<br /><span className="blue">EIN WORKOUT.</span></h2>
            <p className="lede" style={{ marginTop: 22 }}>
              Boxen und Kickboxen verbinden Technik, Ausdauer, Kraft und Konzentration. Du brauchst keine Vorerfahrung. Wichtig ist nur, dass du bereit bist, dich zu bewegen, Neues zu lernen und dranzubleiben.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="split__media imgph" role="img" aria-label="Boxtraining Fitness World">
              <span className="imgph__tag">/images/services/boxen.jpg</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FÜR WEN + INHALTE */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="two-col-lists">
            <Reveal>
              <p className="eyebrow">Für wen</p>
              <h3 className="display" style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', marginBottom: 28 }}>FÜR WEN GEEIGNET?</h3>
              <ul className="check-list check-list--light">
                {forWhom.map((item) => (
                  <li key={item}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="9" fill="rgba(26,145,213,.25)" />
                      <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow">Inhalte</p>
              <h3 className="display" style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', marginBottom: 28 }}>WAS DICH ERWARTET.</h3>
              <ul className="check-list check-list--light">
                {inhalte.map((item) => (
                  <li key={item}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="9" fill="rgba(26,145,213,.25)" />
                      <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRAINER NOTE */}
      <section className="section section--white">
        <div className="wrap">
          <Reveal className="trainer-note">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="16" fill="var(--fw-blue-soft)" />
              <path d="M10 16l4 4 8-8" stroke="var(--fw-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Unsere Trainer achten auf saubere Technik, klare Abläufe und ein sicheres Trainingsumfeld. Du wirst gefordert, aber nicht überfordert.</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="wrap faq-wrap">
          <Reveal>
            <p className="eyebrow">Häufige Fragen</p>
            <h2 className="display" style={{ marginBottom: 40 }}>FAQ</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <FAQAccordion items={faq} />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">Jetzt einsteigen</p>
              <h2 className="display">TESTE DEIN ERSTES<br /><span className="blue">BOXTRAINING.</span></h2>
              <p>Vereinbare dein Probetraining und erlebe, wie viel Energie in diesem Training steckt.</p>
              <Button to="/probetraining?interesse=boxen">Probetraining vereinbaren</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
