import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import { useSanityData } from '../hooks/useSanityData.js'
import { STUDIO_CONTACTS_QUERY } from '../lib/queries.js'

const studiosFallback = [
  { name: 'Holdorf', addr: 'Musterstraße 1, 49451 Holdorf', tel: '+49 5494 000000', email: 'holdorf@fitness-world-studios.de', hours: 'Mo–Fr 06:00–22:00, Sa–So 08:00–20:00, 24/7 Kartenzugang' },
  { name: 'Goldenstedt', addr: 'Musterstraße 2, 49424 Goldenstedt', tel: '+49 4444 000000', email: 'goldenstedt@fitness-world-studios.de', hours: 'Mo–Fr 06:00–22:00, Sa–So 08:00–20:00, 24/7 Kartenzugang' },
  { name: 'Twistringen', addr: 'Musterstraße 3, 27239 Twistringen', tel: '+49 4243 000000', email: 'twistringen@fitness-world-studios.de', hours: 'Mo–Fr 06:00–22:00, Sa–So 08:00–20:00, 24/7 Kartenzugang' },
]

export default function Kontakt() {
  const { data: studios } = useSanityData(STUDIO_CONTACTS_QUERY, studiosFallback)
  const [form, setForm] = useState({ name: '', email: '', nachricht: '', datenschutz: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { document.title = 'Kontakt | Fitness World Studios' }, [])

  const set = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: val }))
    if (errors[field]) setErrors((err) => ({ ...err, [field]: null }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name erforderlich'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Gültige E-Mail erforderlich'
    if (!form.nachricht.trim()) e.nachricht = 'Nachricht erforderlich'
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
        eyebrow="Kontakt"
        title="WIR SIND FÜR DICH DA."
        sub="Frage, Feedback oder einfach mal hallo sagen – wir freuen uns von dir zu hören."
        img="/images/contact/kontakt-hero.jpg"
        alt="Kontakt Fitness World Studios"
      />

      <section className="section section--light">
        <div className="wrap kontakt-wrap">
          {/* FORM */}
          <Reveal className="probe-form-col">
            <p className="eyebrow">Schreib uns</p>
            <h2 className="display" style={{ marginBottom: 30 }}>DEINE<br /><span className="blue">NACHRICHT.</span></h2>

            {submitted ? (
              <div className="form-success" role="alert">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <circle cx="20" cy="20" r="20" fill="var(--fw-blue-soft)" />
                  <path d="M12 20l6 6 10-10" stroke="var(--fw-blue)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3>Nachricht gesendet!</h3>
                <p>Wir melden uns so schnell wie möglich bei dir.</p>
              </div>
            ) : (
              <form className="lead-form" onSubmit={handleSubmit} noValidate aria-label="Kontaktformular">
                <div className="form-field">
                  <label htmlFor="k-name">Name *</label>
                  <input id="k-name" type="text" value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} />
                  {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="k-email">E-Mail *</label>
                  <input id="k-email" type="email" value={form.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} />
                  {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="k-nachricht">Nachricht *</label>
                  <textarea id="k-nachricht" rows={5} value={form.nachricht} onChange={set('nachricht')} aria-invalid={!!errors.nachricht} />
                  {errors.nachricht && <span className="form-error" role="alert">{errors.nachricht}</span>}
                </div>
                <div className="form-check">
                  <input id="k-daten" type="checkbox" checked={form.datenschutz} onChange={set('datenschutz')} aria-invalid={!!errors.datenschutz} />
                  <label htmlFor="k-daten">
                    Ich habe die <a href="/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> gelesen und stimme zu. *
                  </label>
                </div>
                {errors.datenschutz && <span className="form-error" role="alert">{errors.datenschutz}</span>}
                <button type="submit" className="btn btn--primary" style={{ marginTop: 8 }}>
                  Nachricht senden <span className="arr">→</span>
                </button>
              </form>
            )}
          </Reveal>

          {/* STUDIOS */}
          <Reveal className="kontakt-studios" delay={0.1}>
            <p className="eyebrow">Unsere Studios</p>
            <h2 className="display" style={{ marginBottom: 28 }}>DIREKT<br /><span className="blue">VOR ORT.</span></h2>
            {studios.map((s) => (
              <div key={s.name} className="studio-contact-card">
                <strong>{s.name}</strong>
                <p>{s.addr}</p>
                <p><a href={`tel:${s.tel.replace(/\s/g, '')}`}>{s.tel}</a></p>
                <p><a href={`mailto:${s.email}`}>{s.email}</a></p>
                <p className="muted" style={{ fontSize: '.88rem' }}>{s.hours}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
