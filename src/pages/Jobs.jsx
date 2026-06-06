import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import { useSanityData } from '../hooks/useSanityData.js'
import { JOB_LISTINGS_QUERY } from '../lib/queries.js'

const jobsFallback = [
  {
    title: 'Trainer / Trainerin (m/w/d)',
    type: 'Teilzeit / Vollzeit',
    loc: 'Holdorf oder Goldenstedt',
    text: 'Du betreust Mitglieder auf der Fläche, leitest Kurse und trägst zur positiven Studioatmosphäre bei.',
    tasks: ['Betreuung auf der Trainingsfläche', 'Kursleitung', 'Einweisung neuer Mitglieder', 'Mitarbeit an der Rezeption'],
  },
  {
    title: 'Box- / Kickboxtrainer (m/w/d)',
    type: 'Minijob / Teilzeit',
    loc: 'Holdorf',
    text: 'Du leitest Boxkurse für Anfänger und Fortgeschrittene und vermittelst Technik, Kondition und Freude an der Bewegung.',
    tasks: ['Leitung von Boxkursen', 'Techniktraining', 'Anfängereinführung', 'Kursplanung'],
  },
  {
    title: 'Rezeption & Service (m/w/d)',
    type: 'Minijob',
    loc: 'Alle Standorte',
    text: 'Du bist das erste Gesicht für unsere Mitglieder und Interessenten – zuvorkommend, freundlich und zuverlässig.',
    tasks: ['Mitgliederempfang', 'Check-in & Verwaltung', 'Interessentenberatung', 'Studioorganisation'],
  },
]

export default function Jobs() {
  const { data: jobs } = useSanityData(JOB_LISTINGS_QUERY, jobsFallback)
  useEffect(() => { document.title = 'Stellenangebote | Fitness World Studios' }, [])

  return (
    <main>
      <PageHero
        eyebrow="Karriere"
        title="ARBEITE, WO ANDERE TRAINIEREN."
        sub="Wir suchen Menschen, die Fitness leben, nicht nur vermitteln. Werde Teil des Fitness World Teams."
        img="/images/jobs/jobs-hero.jpg"
        alt="Fitness World Studios Team"
      />

      {/* WARUM FW */}
      <section className="section section--light">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">Warum Fitness World?</p>
              <h2 className="display">Ein Team.<br /><span className="blue">Vier Standorte.</span></h2>
            </div>
          </Reveal>
          <div className="steps-grid" style={{ marginTop: 0 }}>
            {[
              { title: 'Echtes Team', text: 'Keine anonyme Kette. Bei uns kennt jeder jeden – und wir arbeiten gemeinsam an unserer Mission.' },
              { title: 'Flexible Modelle', text: 'Von Minijob bis Vollzeit: Wir finden ein Modell, das zu deinem Leben passt.' },
              { title: 'Training als Job', text: 'Du lebst, was du lehrst. Dein Arbeitsumfeld ist das Studio – mit allem, was dazu gehört.' },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07} className="step-card step-card--light">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STELLENANGEBOTE */}
      <section className="section section--white">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Offene Stellen</p>
            <h2 className="display" style={{ marginBottom: 40 }}>Dein nächster<br /><span className="blue">Schritt.</span></h2>
          </Reveal>
          <div className="jobs-list">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.06} className="job-card">
                <div className="job-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span>{job.type}</span>
                      <span>·</span>
                      <span>{job.loc}</span>
                    </div>
                  </div>
                  <Button to="/kontakt" variant="ghost-dark">Bewerben</Button>
                </div>
                <p>{job.text}</p>
                <ul className="job-tasks">
                  {job.tasks.map((t) => (
                    <li key={t}>
                      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <circle cx="9" cy="9" r="9" fill="var(--fw-blue-soft)" />
                        <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INITIATIVBEWERBUNG */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">Keine passende Stelle?</p>
              <h2 className="display">INITIATIV-<br /><span className="blue">BEWERBUNG.</span></h2>
              <p>Wenn du keine passende Stelle siehst, aber trotzdem Teil des Teams werden willst: Schreib uns. Wir freuen uns über motivierte Menschen.</p>
              <Button to="/kontakt">Initiativ bewerben</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
