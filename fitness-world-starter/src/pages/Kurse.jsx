import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import PageHero from '../components/PageHero'

const courses = [
  { cat: 'Gesundheit', title: 'Reha-Sport', text: 'Gezielte Bewegung in der Gruppe. Ideal für den Wiedereinstieg nach Verletzungen, Operationen oder bei chronischen Beschwerden.', to: '/kurse/reha-sport' },
  { cat: 'Gesundheit', title: 'AOK Rücken-Fit', text: 'Ein strukturierter Kurs für mehr Stabilität, Beweglichkeit und ein besseres Körpergefühl im Alltag.', to: '/kurse/reha-sport' },
  { cat: 'Kraft & Ausdauer', title: 'Functional Training', text: 'Ganzkörpertraining mit Fokus auf Kraft, Stabilität, Koordination und Beweglichkeit.', to: '/probetraining' },
  { cat: 'Kraft & Ausdauer', title: 'Zirkeltraining', text: 'Effizient trainieren mit klaren Stationen und motivierender Struktur.', to: '/probetraining' },
  { cat: 'Boxen', title: 'Boxen', text: 'Technik, Kondition und mentale Stärke in einer intensiven Einheit.', to: '/kurse/boxen' },
  { cat: 'Boxen', title: 'Kickboxen', text: 'Dynamisches Training für Ausdauer, Kraft, Reaktion und Fokus.', to: '/kurse/boxen' },
  { cat: 'Individuell', title: 'Personal Training', text: 'Ein klarer Plan, persönliche Betreuung und Training, das exakt zu deinem Ziel passt.', to: '/kurse/personal-training' },
]

const filters = ['Alle', 'Gesundheit', 'Kraft & Ausdauer', 'Boxen', 'Individuell']

const schedule = [
  { tag: 'Mo', uhrzeit: '09:00', kurs: 'Functional Training', standort: 'Holdorf', level: 'Alle Level', trainer: 'Team FW' },
  { tag: 'Mo', uhrzeit: '18:30', kurs: 'Boxen', standort: 'Holdorf', level: 'Anfänger', trainer: 'Team FW' },
  { tag: 'Di', uhrzeit: '10:00', kurs: 'AOK Rücken-Fit', standort: 'Goldenstedt', level: 'Einsteiger', trainer: 'Team FW' },
  { tag: 'Di', uhrzeit: '19:00', kurs: 'Zirkeltraining', standort: 'Twistringen', level: 'Alle Level', trainer: 'Team FW' },
  { tag: 'Mi', uhrzeit: '09:30', kurs: 'Reha-Sport', standort: 'Goldenstedt', level: 'Einsteiger', trainer: 'Team FW' },
  { tag: 'Mi', uhrzeit: '18:00', kurs: 'Kickboxen', standort: 'Holdorf', level: 'Alle Level', trainer: 'Team FW' },
  { tag: 'Do', uhrzeit: '10:00', kurs: 'Functional Training', standort: 'Vechta', level: 'Alle Level', trainer: 'Team FW' },
  { tag: 'Do', uhrzeit: '19:30', kurs: 'Boxen', standort: 'Twistringen', level: 'Fortgeschrittene', trainer: 'Team FW' },
  { tag: 'Fr', uhrzeit: '09:00', kurs: 'Zirkeltraining', standort: 'Holdorf', level: 'Alle Level', trainer: 'Team FW' },
  { tag: 'Sa', uhrzeit: '10:00', kurs: 'Functional Training', standort: 'Goldenstedt', level: 'Alle Level', trainer: 'Team FW' },
]

const faq = [
  { q: 'Muss ich Mitglied sein, um einen Kurs zu testen?', a: 'Nein. Du kannst viele Angebote im Rahmen eines Probetrainings kennenlernen.' },
  { q: 'Sind die Kurse für Anfänger geeignet?', a: 'Ja. Viele Kurse sind für Einsteiger geeignet. Bei intensiveren Angeboten sagen wir dir vorher, was du mitbringen solltest.' },
  { q: 'Muss ich mich anmelden?', a: 'Für viele Kurse ist eine Anmeldung sinnvoll, damit wir die Gruppengröße planen können.' },
]

export default function Kurse() {
  const [active, setActive] = useState('Alle')

  useEffect(() => { document.title = 'Kurse bei Fitness World Studios | Reha, Boxen, Functional & mehr' }, [])

  const visible = active === 'Alle' ? courses : courses.filter((c) => c.cat === active)

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
              <Reveal key={c.title} delay={(i % 3) * 0.05}>
                <article className="course-card">
                  <span className="course-cat">{c.cat}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <a href={c.to} className="textlink">
                    Mehr erfahren <span className="arr">→</span>
                  </a>
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
                    <tr key={i}>
                      <td><strong>{row.tag}</strong></td>
                      <td>{row.uhrzeit}</td>
                      <td>{row.kurs}</td>
                      <td>{row.standort}</td>
                      <td><span className="level-badge">{row.level}</span></td>
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
