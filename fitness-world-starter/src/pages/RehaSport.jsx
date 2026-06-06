import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import PageHero from '../components/PageHero'

const steps = [
  { n: '1', title: 'Verordnung erhalten', text: 'Sprich mit deinem Arzt oder deiner Ärztin über eine Reha-Sport-Verordnung.' },
  { n: '2', title: 'Termin vereinbaren', text: 'Melde dich bei uns und wir besprechen, welcher Kurs und Standort zu dir passt.' },
  { n: '3', title: 'Kurs starten', text: 'Du trainierst in einer festen Gruppe mit klarer Anleitung und sicherer Struktur.' },
  { n: '4', title: 'Dranbleiben', text: 'Wir begleiten dich dabei, wieder mehr Bewegung in deinen Alltag zu bringen.' },
]

const faq = [
  { q: 'Brauche ich eine ärztliche Verordnung?', a: 'Für Reha-Sport ist in der Regel eine ärztliche Verordnung notwendig. Wir erklären dir gern, wie der Ablauf funktioniert.' },
  { q: 'Kann ich auch ohne Erfahrung teilnehmen?', a: 'Ja. Die Kurse sind so aufgebaut, dass auch Einsteiger gut mitkommen.' },
  { q: 'An welchem Standort findet Reha-Sport statt?', a: 'Das hängt vom aktuellen Kursangebot ab. Kontaktiere uns, dann nennen wir dir die passenden Termine.' },
  { q: 'Was muss ich zum ersten Termin mitbringen?', a: 'Bequeme Sportkleidung, saubere Sportschuhe, etwas zu trinken und falls vorhanden deine Verordnung.' },
]

const forWhom = [
  'Rückenbeschwerden', 'Gelenkprobleme', 'Wiedereinstieg nach längerer Pause',
  'Aufbau von Stabilität und Beweglichkeit', 'Mehr Vertrauen in den eigenen Körper',
]

export default function RehaSport() {
  useEffect(() => { document.title = 'Reha-Sport & AOK-Kurse | Fitness World Studios' }, [])

  return (
    <main>
      <PageHero
        eyebrow="Reha-Sport & AOK"
        title="BEWEGUNG, DIE DICH WIEDER STÄRKER MACHT."
        sub="Unsere gesundheitsorientierten Kurse unterstützen dich dabei, sicher in Bewegung zu kommen, Beschwerden vorzubeugen und neue Stabilität aufzubauen."
        primaryCta="Beratungstermin vereinbaren"
        primaryTo="/probetraining?interesse=reha"
        img="/images/services/reha-hero.jpg"
        alt="Reha-Sport Kurs bei Fitness World Studios"
      />

      {/* FÜR WEN */}
      <section className="section section--light">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Für wen geeignet?</p>
            <h2 className="display">FÜR MEHR SICHERHEIT<br /><span className="blue">IM ALLTAG.</span></h2>
            <p className="lede" style={{ margin: '22px 0 24px' }}>
              Reha-Sport richtet sich an Menschen, die nach Verletzungen, Operationen oder bei körperlichen Beschwerden wieder mehr Sicherheit, Kraft und Beweglichkeit aufbauen möchten. Das Training findet in der Gruppe statt und orientiert sich an gesundheitlichen Zielen.
            </p>
            <ul className="check-list">
              {forWhom.map((item) => (
                <li key={item}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="9" fill="var(--fw-blue-soft)" />
                    <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="split__media imgph" role="img" aria-label="Reha-Sport Gruppentraining">
              <span className="imgph__tag">/images/services/reha.jpg</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SO FUNKTIONIERT ES */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">Ablauf</p>
              <h2 className="display">SO<br /><span className="blue">FUNKTIONIERT ES.</span></h2>
            </div>
          </Reveal>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="step-card">
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AOK RÜCKEN-FIT */}
      <section className="section section--white">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">AOK-Kurs</p>
            <h2 className="display">AOK <span className="blue">RÜCKEN-FIT.</span></h2>
            <p className="lede" style={{ margin: '22px 0 28px' }}>
              Der AOK Rücken-Fit Kurs unterstützt dich dabei, Rücken, Rumpf und Haltung gezielt zu stärken. Der Kurs ist ideal für alle, die Beschwerden vorbeugen oder mehr Stabilität im Alltag aufbauen möchten.
            </p>
            <ul className="check-list">
              {['8 Wochen', '1× pro Woche', 'Geschlossene Gruppe', 'Klare Übungsstruktur', 'Geeignet für Einsteiger'].map((item) => (
                <li key={item}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="9" fill="var(--fw-blue-soft)" />
                    <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* VERTRAUEN */}
      <section className="section section--darker">
        <div className="wrap">
          <Reveal className="trust-block">
            <div>
              <p className="eyebrow">Vertrauen</p>
              <h2 className="display">DU BIST<br /><span className="blue">NICHT ALLEIN.</span></h2>
              <p style={{ marginTop: 22, maxWidth: '54ch', color: 'rgba(255,255,255,.82)' }}>
                Gerade beim gesundheitsorientierten Training zählt Vertrauen. Wir nehmen uns Zeit, erklären die Übungen verständlich und achten darauf, dass du dich sicher fühlst.
              </p>
            </div>
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
              <p className="eyebrow">Jetzt starten</p>
              <h2 className="display">STARTE JETZT<br /><span className="blue">DEINEN REHA-SPORT.</span></h2>
              <p>Wir helfen dir beim Einstieg und finden den passenden Kurs für dich.</p>
              <Button to="/probetraining?interesse=reha">Beratungstermin vereinbaren</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
