import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal'
import FAQAccordion from '../components/FAQAccordion'
import PageHero from '../components/PageHero'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const vorteile = [
  { title: 'Studio kennenlernen', text: 'Du bekommst einen ersten Eindruck vom Studio, den Trainingsbereichen und der Atmosphäre.' },
  { title: 'Fragen klären', text: 'Wir besprechen deine Ziele und zeigen dir, welche Möglichkeiten zu dir passen.' },
  { title: 'Sicher starten', text: 'Du musst nicht wissen, wo du anfangen sollst. Genau dafür sind wir da.' },
]

const faq = [
  { q: 'Kostet das Probetraining wirklich nichts?', a: 'Ja. Das Probetraining ist kostenlos und unverbindlich.' },
  { q: 'Muss ich Sportsachen mitbringen?', a: 'Ja. Bring bequeme Sportkleidung, saubere Sportschuhe, ein Handtuch und etwas zu trinken mit.' },
  { q: 'Wie lange dauert ein Probetraining?', a: 'Plane ungefähr 60 bis 90 Minuten ein, damit genug Zeit für Studioführung, Fragen und Training bleibt.' },
  { q: 'Kann ich jemanden mitbringen?', a: 'Frag uns vorher kurz an. In vielen Fällen ist das möglich.' },
]

export default function Probetraining() {
  const query = useQuery()
  const defaultStudio = query.get('studio') || ''
  const defaultInteresse = query.get('interesse') || ''

  const [form, setForm] = useState({
    vorname: '', nachname: '', email: '', telefon: '',
    studio: defaultStudio, interesse: defaultInteresse,
    termin: '', nachricht: '', datenschutz: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { document.title = 'Kostenloses Probetraining | Fitness World Studios' }, [])

  const set = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: val }))
    if (errors[field]) setErrors((err) => ({ ...err, [field]: null }))
  }

  const validate = () => {
    const e = {}
    if (!form.vorname.trim()) e.vorname = 'Vorname erforderlich'
    if (!form.nachname.trim()) e.nachname = 'Nachname erforderlich'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Gültige E-Mail erforderlich'
    if (!form.studio) e.studio = 'Bitte einen Standort wählen'
    if (!form.datenschutz) e.datenschutz = 'Bitte Datenschutz bestätigen'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <main>
      <PageHero
        eyebrow="Kostenloses Probetraining"
        title="TESTE UNS. FINDE DEIN TRAINING."
        sub="Lerne Fitness World persönlich kennen. Wir zeigen dir das Studio, beantworten deine Fragen und helfen dir beim passenden Einstieg."
        img="/images/forms/probetraining-hero.jpg"
        alt="Kostenloses Probetraining bei Fitness World Studios"
      />

      <section className="section section--light">
        <div className="wrap probe-wrap">
          {/* FORM */}
          <Reveal className="probe-form-col">
            <p className="eyebrow">Anfrage</p>
            <h2 className="display" style={{ marginBottom: 10 }}>DEIN ERSTER<br /><span className="blue">SCHRITT IST EINFACH.</span></h2>
            <p className="muted" style={{ marginBottom: 36 }}>
              Fülle das Formular aus und wir melden uns, um dein Probetraining zu vereinbaren.
            </p>

            {submitted ? (
              <div className="form-success" role="alert">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <circle cx="20" cy="20" r="20" fill="var(--fw-blue-soft)" />
                  <path d="M12 20l6 6 10-10" stroke="var(--fw-blue)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3>Danke für deine Anfrage!</h3>
                <p>Wir melden uns schnellstmöglich bei dir und vereinbaren dein Probetraining.</p>
              </div>
            ) : (
              <form className="lead-form" onSubmit={handleSubmit} noValidate aria-label="Probetraining anfragen">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="vorname">Vorname *</label>
                    <input id="vorname" type="text" value={form.vorname} onChange={set('vorname')} autoComplete="given-name" aria-invalid={!!errors.vorname} aria-describedby={errors.vorname ? 'err-vorname' : undefined} />
                    {errors.vorname && <span className="form-error" id="err-vorname" role="alert">{errors.vorname}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="nachname">Nachname *</label>
                    <input id="nachname" type="text" value={form.nachname} onChange={set('nachname')} autoComplete="family-name" aria-invalid={!!errors.nachname} aria-describedby={errors.nachname ? 'err-nachname' : undefined} />
                    {errors.nachname && <span className="form-error" id="err-nachname" role="alert">{errors.nachname}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">E-Mail *</label>
                    <input id="email" type="email" value={form.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
                    {errors.email && <span className="form-error" id="err-email" role="alert">{errors.email}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="telefon">Telefon</label>
                    <input id="telefon" type="tel" value={form.telefon} onChange={set('telefon')} autoComplete="tel" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="studio">Wunschstandort *</label>
                    <select id="studio" value={form.studio} onChange={set('studio')} aria-invalid={!!errors.studio} aria-describedby={errors.studio ? 'err-studio' : undefined}>
                      <option value="">Bitte wählen</option>
                      <option value="holdorf">Holdorf</option>
                      <option value="goldenstedt">Goldenstedt</option>
                      <option value="twistringen">Twistringen</option>
                      <option value="vechta">Vechta</option>
                    </select>
                    {errors.studio && <span className="form-error" id="err-studio" role="alert">{errors.studio}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="interesse">Interesse</label>
                    <select id="interesse" value={form.interesse} onChange={set('interesse')}>
                      <option value="">Bitte wählen</option>
                      <option value="allgemein">Allgemeines Probetraining</option>
                      <option value="mitgliedschaft">Mitgliedschaft</option>
                      <option value="reha">Reha-Sport</option>
                      <option value="aok">AOK-Kurs</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="boxen">Boxen & Kickboxen</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="termin">Wunschtermin (optional)</label>
                  <input id="termin" type="date" value={form.termin} onChange={set('termin')} />
                </div>
                <div className="form-field">
                  <label htmlFor="nachricht">Nachricht (optional)</label>
                  <textarea id="nachricht" rows={4} value={form.nachricht} onChange={set('nachricht')} placeholder="Dein Ziel, Fragen, Wünsche..." />
                </div>
                <div className="form-check">
                  <input
                    id="datenschutz"
                    type="checkbox"
                    checked={form.datenschutz}
                    onChange={set('datenschutz')}
                    aria-invalid={!!errors.datenschutz}
                    aria-describedby={errors.datenschutz ? 'err-daten' : undefined}
                  />
                  <label htmlFor="datenschutz">
                    Ich habe die <a href="/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
                  </label>
                </div>
                {errors.datenschutz && <span className="form-error" id="err-daten" role="alert">{errors.datenschutz}</span>}
                <button type="submit" className="btn btn--primary" style={{ marginTop: 8 }}>
                  Probetraining anfragen <span className="arr">→</span>
                </button>
              </form>
            )}
          </Reveal>

          {/* VORTEILE */}
          <Reveal className="probe-info-col" delay={0.1}>
            <p className="eyebrow">Was dich erwartet</p>
            <h2 className="display" style={{ marginBottom: 32 }}>WAS DICH<br /><span className="blue">ERWARTET.</span></h2>
            <div className="vorteil-list">
              {vorteile.map((v) => (
                <div key={v.title} className="vorteil-item">
                  <div className="vorteil-icon" aria-hidden="true">✓</div>
                  <div>
                    <strong>{v.title}</strong>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
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
    </main>
  )
}
