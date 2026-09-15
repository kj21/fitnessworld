import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { useCourses, useSchedule } from '../lib/content.js'

const faq = [
  { q: 'Muss ich Mitglied sein, um einen Kurs zu testen?', a: 'Nein. Du kannst viele Angebote im Rahmen eines Probetrainings kennenlernen.' },
  { q: 'Sind die Kurse für Anfänger geeignet?', a: 'Ja. Viele Kurse sind für Einsteiger geeignet. Bei intensiveren Angeboten sagen wir dir vorher, was du mitbringen solltest.' },
  { q: 'Muss ich mich anmelden?', a: 'Für viele Kurse ist eine Anmeldung sinnvoll, damit wir die Gruppengröße planen können.' },
]

export default function Kurse() {
  const [active, setActive] = useState('Alle')
  const { courses, categories } = useCourses()
  const { schedule } = useSchedule()
  const filters = ['Alle', ...categories]

  useEffect(() => { document.title = 'Kurse bei Fitness World Studios | Reha, Boxen, Functional & mehr' }, [])

  const visible = active === 'Alle' || !categories.includes(active) ? courses : courses.filter((c) => c.category === active)

  return (
    <main>
      <PageHero
        eyebrow="Kurse & Angebote"
        title="FINDE DEN KURS, DER ZU DIR PASST."
        sub="Ob Gesundheit, Kraft, Ausdauer oder Technik: Unsere Kurse geben dir Struktur, Motivation und die richtige Unterstützung."
        primaryCta="Kursplan ansehen"
        primaryTo="#kursplan"
        secondaryCta="Probetraining vereinbaren"
        secondaryTo="/probetraining"
        img="/images/courses/kurse-hero.jpg"
        alt="Kursbereich Fitness World Studios"
      />

      {/* FILTER + KURSKARTEN */}
      <section className="section section--light" id="kurse">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Unsere Kurse</p>
            <h2 className="display">Kurs wählen.</h2>
          </Reveal>
          <Reveal className="filter-bar" delay={0.05}>
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
              >
                {f}
              </button>
            ))}
          </Reveal>
          <div className="course-grid">
            {visible.map((c, i) => (
              <Reveal key={c._id || c.title} delay={(i % 3) * 0.05}>
                <article className="course-card">
                  <span className="course-cat">{c.category}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  {/^https?:/.test(c.link)
                    ? <a href={c.link} className="textlink" target="_blank" rel="noopener noreferrer">Mehr erfahren <span className="arr">→</span></a>
                    : <Link to={c.link} className="textlink">Mehr erfahren <span className="arr">→</span></Link>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WOCHENPLAN */}
      <section className="section section--white" id="kursplan">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">Wochenplan</p>
              <h2 className="display">Dein <span className="blue">Wochenplan.</span></h2>
            </div>
            <p className="muted" style={{ maxWidth: '38ch' }}>Aktueller Musterkursplan. Die finalen Zeiten erfährst du direkt im Studio.</p>
          </Reveal>
          <Reveal>
            <div className="table-wrap">
              <table className="schedule-table" aria-label="Wöchentlicher Kursplan">
                <thead>
                  <tr>
                    <th scope="col">Tag</th>
                    <th scope="col">Uhrzeit</th>
                    <th scope="col">Kurs</th>
                    <th scope="col">Standort</th>
                    <th scope="col">Level</th>
                    <th scope="col">Trainer</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr key={row._id || i}>
                      <td><strong>{row.day}</strong></td>
                      <td>{row.time}</td>
                      <td>{row.course}</td>
                      <td>{row.studio}</td>
                      <td>{row.level && <span className="level-badge">{row.level}</span>}</td>
                      <td>{row.trainer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="wrap faq-wrap">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="display" style={{ marginBottom: 40 }}>Häufige <span className="blue">Fragen.</span></h2>
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
              <p className="eyebrow">Probetraining</p>
              <h2 className="display">DU WILLST EINEN<br /><span className="blue">KURS TESTEN?</span></h2>
              <p>Vereinbare dein kostenloses Probetraining und finde den Kurs, der zu dir passt.</p>
              <Button to="/probetraining">Probetraining vereinbaren</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
