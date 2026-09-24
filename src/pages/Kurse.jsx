import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { useCourses, useSchedule, usePageCopy } from '../lib/content.js'
import PageCta from '../components/PageCta'


export default function Kurse() {
  const [active, setActive] = useState('Alle')
  const { courses, categories } = useCourses()
  const { schedule } = useSchedule()
  const copy = usePageCopy('kurse')
  const filters = ['Alle', ...categories]

  useEffect(() => { document.title = copy.seoTitle }, [copy.seoTitle])

  const visible = active === 'Alle' || !categories.includes(active) ? courses : courses.filter((c) => c.category === active)

  return (
    <main>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        sub={copy.sub}
        primaryCta={copy.primaryCta?.label}
        primaryTo={copy.primaryCta?.to}
        secondaryCta={copy.secondaryCta?.label}
        secondaryTo={copy.secondaryCta?.to}
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
            <FAQAccordion items={copy.faq || []} />
          </Reveal>
        </div>
      </section>

      <PageCta copy={copy} />
    </main>
  )
}
