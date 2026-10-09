import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button, { TextLink } from '../components/Button'
import ImagePlaceholder from '../components/ImagePlaceholder'
import PageHero from '../components/PageHero'
import BlueLabel from '../components/BlueLabel'
import Headline from '../components/Headline'
import { useSchedule, useCourses } from '../lib/content.js'
import { useSanityData } from '../hooks/useSanityData.js'
import { STUDIO_CONTACTS_QUERY } from '../lib/queries.js'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="var(--fw-blue-soft)" />
      <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function setMetaDescription(content) {
  if (!content) return
  let el = document.querySelector('meta[name="description"]')
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Studio page. `data` is one normalized studio from useStudios() — Sanity when
 * available, site.js otherwise. Sections whose data is empty are skipped, so a
 * freshly created studio with only a title and a teaser still renders cleanly.
 * Coming-soon studios get a "Demnächst" hero and a contact CTA instead of the
 * trial-training CTA.
 */
export default function StudioDetail({ data: d }) {
  const { schedule } = useSchedule()
  const { courses } = useCourses()
  const { data: contacts } = useSanityData(STUDIO_CONTACTS_QUERY, [])
  const soon = d.comingSoon
  const trialTo = `/probetraining?studio=${d.slug}`
  const title = d.title || `FITNESS WORLD ${d.name.toUpperCase()}`

  useEffect(() => {
    document.title = d.seoTitle || `${d.eyebrow} | Fitness World Studios`
    setMetaDescription(d.metaDesc || d.sub)
  }, [d])

  return (
    <main>
      <PageHero
        eyebrow={soon ? `${d.eyebrow} · Demnächst` : d.eyebrow}
        title={title}
        sub={d.sub}
        primaryCta={soon ? 'Kontakt aufnehmen' : 'Probetraining vereinbaren'}
        primaryTo={soon ? '/kontakt' : trialTo}
        secondaryCta={soon ? 'Alle Studios' : 'Kursplan ansehen'}
        secondaryTo={soon ? '/#standorte' : '/kurse'}
        img={d.img || `/images/studios/${d.slug}-hero.jpg`}
        alt={`${d.eyebrow} Eingangsbereich`}
      />

      {/* QUICK DECISION BAR — what this location is good for */}
      {(d.bestFor || d.access || d.trainerHours || d.features?.length > 0) && (
        <section className="section section--dark" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="wrap">
            <Reveal className="finder-card__tags" style={{ marginBottom: d.bestFor ? 18 : 0 }}>
              {(d.features || []).map((f) => <span key={f}>{f}</span>)}
            </Reveal>
            {d.bestFor && <Reveal className="finder-card__best" delay={0.05}>Passt zu: {d.bestFor}</Reveal>}
          </div>
        </section>
      )}

      {/* PASST DIESER STANDORT ZU DIR? — access vs. staffed trainer hours.
          Always shown on open studios so nobody reads 24/7 access as 24/7 staffing. */}
      {!soon && (
        <section className="section section--white">
          <div className="wrap">
            <Reveal>
              <BlueLabel>Standort-Check</BlueLabel>
              <h2 className="display" style={{ marginTop: 18 }}>
                <Headline text={'PASST DIESER STANDORT\n*ZU DIR?*'} />
              </h2>
            </Reveal>
            <div className="panel" style={{ marginTop: 36, gridTemplateColumns: '1fr 1fr' }}>
              <Reveal className="panel__frame">
                <strong>24/7 Zugang</strong>
                <p>{d.access || 'Zugang per Transponder rund um die Uhr. Die Details zu deinem Vertrag klären wir beim Probetraining.'}</p>
              </Reveal>
              <Reveal className="panel__frame" delay={0.06}>
                <strong>Betreuung zu Trainerzeiten</strong>
                <p>{d.trainerHours
                  ? `Persönliche Betreuung, Einweisung und Trainingsplanung: ${d.trainerHours}.`
                  : 'Persönliche Betreuung, Einweisung und Trainingsplanung gibt es zu den Trainerzeiten dieses Standorts. Die aktuellen Zeiten nennen wir dir gern.'}</p>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* KEY FACTS */}
      {d.keyFacts.length > 0 && (
        <section className="section section--dark" style={{ padding: '36px 0' }}>
          <div className="wrap">
            <Reveal className="keyfacts">
              {d.keyFacts.map((f) => (
                <div key={f} className="keyfact">
                  <span className="dot" />
                  {f}
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* INTRO */}
      {(d.intro?.headline || d.intro?.text) && (
        <section className="section section--light">
          <div className="wrap split">
            <Reveal>
              {d.intro.headline && <h2 className="display">{d.intro.headline}</h2>}
              {d.intro.text && <p className="lede" style={{ marginTop: 22 }}>{d.intro.text}</p>}
              {!soon && (
                <div style={{ marginTop: 28 }}>
                  <Button to={trialTo}>Probetraining vereinbaren</Button>
                </div>
              )}
            </Reveal>
            <Reveal delay={0.1}>
              <ImagePlaceholder
                className="split__media"
                label={`/images/studios/${d.slug}-intro.jpg`}
                alt={`Trainingsfläche ${d.eyebrow}`}
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* AUSSTATTUNG */}
      {d.ausstattung.length > 0 && (
        <section className="section section--white">
          <div className="wrap">
            <Reveal className="head-row">
              <div>
                <p className="eyebrow">Ausstattung</p>
                <h2 className="display">Alles, was du<br /><span className="blue">brauchst.</span></h2>
              </div>
            </Reveal>
            <Reveal>
              <ul className="equip-list">
                {d.ausstattung.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* KURSE */}
      {d.kurse.length > 0 && (
        <section className="section section--dark">
          <div className="wrap">
            <Reveal className="head-row">
              <div>
                <p className="eyebrow">Kurse & Angebote</p>
                <h2 className="display">Training,<br />das <span className="blue">zu dir passt.</span></h2>
              </div>
              <TextLink to="/kurse">Alle Kurse ansehen</TextLink>
            </Reveal>
            <div className="svc-grid">
              {d.kurse.map((k, i) => (
                <Reveal key={k.title} delay={i * 0.06} className="svc-card svc-card--dark">
                  <h3>{k.title}</h3>
                  <p>{k.text}</p>
                  <TextLink to="/kurse">Mehr erfahren</TextLink>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* KURSE AN DIESEM STANDORT */}
      {(() => {
        const rows = schedule.filter((r) => String(r.studio || '').toLowerCase() === d.name.toLowerCase())
        if (!rows.length) return null
        return (
          <section className="section section--light">
            <div className="wrap">
              <Reveal className="head-row">
                <div>
                  <BlueLabel>Kurse vor Ort</BlueLabel>
                  <h2 className="display" style={{ marginTop: 18 }}>
                    <Headline text={`KURSE IN\n*${d.name.toUpperCase()}.*`} />
                  </h2>
                </div>
                <TextLink to="/kurse">Ganzen Kursplan ansehen</TextLink>
              </Reveal>
              <Reveal className="table-wrap">
                <table className="schedule-table" aria-label={`Kursplan ${d.name}`}>
                  <thead>
                    <tr><th scope="col">Tag</th><th scope="col">Uhrzeit</th><th scope="col">Kurs</th><th scope="col">Level</th></tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={r._id || i}>
                        <td><strong>{r.day}</strong></td>
                        <td>{r.time}</td>
                        <td>{r.course}</td>
                        <td>{r.level && <span className="level-badge">{r.level}</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
            </div>
          </section>
        )
      })()}

      {/* KONTAKT & ANFAHRT */}
      {(() => {
        const contact = (Array.isArray(contacts) ? contacts : []).find(
          (c) => String(c.name || '').toLowerCase() === d.name.toLowerCase()
        )
        if (!contact) return null
        const mapQuery = encodeURIComponent(`Fitness World ${d.name} ${contact.addr || ''}`)
        return (
          <section className="section section--white">
            <div className="wrap panel">
              <Reveal>
                <BlueLabel>Kontakt & Anfahrt</BlueLabel>
                <h2 className="display" style={{ margin: '18px 0 24px' }}>
                  <Headline text={'SO ERREICHST\n*DU UNS.*'} />
                </h2>
                <div className="finder-card__rows" style={{ borderTop: 0, paddingTop: 0 }}>
                  {contact.addr && <div className="finder-card__row"><b>Adresse</b><span style={{ color: 'var(--text-muted)' }}>{contact.addr}</span></div>}
                  {contact.tel && <div className="finder-card__row"><b>Telefon</b><a href={`tel:${String(contact.tel).replace(/[^\d+]/g, '')}`}>{contact.tel}</a></div>}
                  {contact.email && <div className="finder-card__row"><b>E-Mail</b><a href={`mailto:${contact.email}`}>{contact.email}</a></div>}
                  {contact.hours && <div className="finder-card__row"><b>Zeiten</b><span style={{ color: 'var(--text-muted)' }}>{contact.hours}</span></div>}
                </div>
                <div style={{ marginTop: 26 }}>
                  <a className="textlink" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer">
                    Route planen <span className="arr">→</span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <ImagePlaceholder className="panel__media" label={`/images/studios/${d.slug}-karte.jpg`} alt={`Anfahrt ${d.eyebrow}`} />
              </Reveal>
            </div>
          </section>
        )
      })()}

      {/* GALLERY */}
      <section className="section section--darker">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Einblicke</p>
            <h2 className="display" style={{ marginBottom: 36 }}>Das Studio<br /><span className="blue">in Bildern.</span></h2>
          </Reveal>
          <Reveal className="studio-gallery">
            <ImagePlaceholder className="sg-main" label={`/images/studios/${d.slug}-gallery-1.jpg`} alt={`${d.eyebrow} Trainingsfläche`} />
            <ImagePlaceholder label={`/images/studios/${d.slug}-gallery-2.jpg`} alt={`${d.eyebrow} Kraftbereich`} />
            <ImagePlaceholder label={`/images/studios/${d.slug}-gallery-3.jpg`} alt={`${d.eyebrow} Cardio`} />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">{soon ? 'Demnächst' : 'Probetraining'}</p>
              <h2 className="display">
                {d.ctaHeadline || (soon ? `BALD AUCH IN ${d.name.toUpperCase()}.` : `PROBETRAINING IN ${d.name.toUpperCase()} ANFRAGEN.`)}
              </h2>
              <p>
                {d.ctaText || (soon
                  ? 'Wir informieren dich, sobald es losgeht. Melde dich gern schon jetzt bei uns.'
                  : 'Lerne das Studio kennen und starte mit einem Training, das zu dir passt.')}
              </p>
              {soon
                ? <Button to="/kontakt">Kontakt aufnehmen</Button>
                : <Button to={trialTo}>{`Probetraining in ${d.name} anfragen`}</Button>}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
