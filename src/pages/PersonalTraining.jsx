import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import PageHero from '../components/PageHero'

const benefits = [
  { title: 'Klare Ziele', text: 'Wir definieren gemeinsam, was du erreichen willst – und bauen deinen Plan darauf auf.' },
  { title: 'Persönliche Betreuung', text: 'Du trainierst nicht alleine. Dein Trainer ist dabei, gibt Feedback und passt das Training an.' },
  { title: 'Messbare Fortschritte', text: 'Du siehst, was sich verändert – weil wir tracken, analysieren und anpassen.' },
]

const forWhom = [
  'Menschen mit klaren Zielen und wenig Zeit',
  'Einsteiger, die sicher starten wollen',
  'Wiedereinsteiger nach längerer Pause',
  'Fortgeschrittene mit Trainingsplateau',
  'Alle, die gezielter und effizienter trainieren wollen',
]

export default function PersonalTraining() {
  useEffect(() => { document.title = 'Personal Training | Fitness World Studios' }, [])

  return (
    <main>
      <PageHero
        eyebrow="Personal Training"
        title="TRAINING, DAS WIRKLICH ZU DIR PASST."
        sub="Individuelle Betreuung, klare Ziele und ein Plan, der auf dich zugeschnitten ist. Kein Standard. Kein Raten. Nur Training, das funktioniert."
        primaryCta="Personal Training anfragen"
        primaryTo="/probetraining?interesse=personal-training"
        secondaryCta="Preise ansehen"
        secondaryTo="/mitgliedschaft"
        img="/images/services/personal-training.jpg"
        alt="Personal Training Session bei Fitness World Studios"
      />

      {/* BENEFITS */}
      <section className="section section--light">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">Warum Personal Training?</p>
              <h2 className="display">Dein Trainer.<br /><span className="blue">Dein Plan.</span></h2>
            </div>
          </Reveal>
          <div className="steps-grid">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} className="step-card step-card--light">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR WEN */}
      <section className="section section--dark">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Für wen geeignet?</p>
            <h2 className="display">FÜR ALLE,<br /><span className="blue">DIE MEHR WOLLEN.</span></h2>
            <ul className="check-list check-list--light" style={{ marginTop: 26 }}>
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
          <Reveal delay={0.1}>
            <div className="split__media imgph" role="img" aria-label="Personal Training Betreuung">
              <span className="imgph__tag">/images/services/personal-training.jpg</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="section section--white">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Ablauf</p>
            <h2 className="display">SO STARTEST<br /><span className="blue">DU DURCH.</span></h2>
          </Reveal>
          <div className="steps-grid" style={{ marginTop: 40 }}>
            {[
              { n: '1', title: 'Erstgespräch', text: 'Wir lernen uns kennen, besprechen deine Ziele und schauen, wo du gerade stehst.' },
              { n: '2', title: 'Trainingsplan', text: 'Dein Trainer erstellt einen Plan, der exakt auf dich und dein Ziel zugeschnitten ist.' },
              { n: '3', title: 'Training & Feedback', text: 'Wir trainieren gemeinsam und passen laufend an – damit du kontinuierlich Fortschritte machst.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="step-card step-card--light">
                <div className="step-num step-num--dark">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">Jetzt starten</p>
              <h2 className="display">BEREIT FÜR<br /><span className="blue">DEIN ZIEL?</span></h2>
              <p>Frage jetzt dein Personal Training an und wir besprechen zusammen, wie wir dich am besten begleiten können.</p>
              <Button to="/probetraining?interesse=personal-training">Personal Training anfragen</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
