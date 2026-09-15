import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import PageHero from '../components/PageHero'
import { pricingPlans as pricingPlansFallback } from '../data/site'
import { useSanityData } from '../hooks/useSanityData.js'
import { PRICING_PLANS_QUERY } from '../lib/queries.js'
import { useMembershipPage, fillCount } from '../lib/content.js'
import { useStudios } from '../lib/studios.js'

function CheckIcon({ light }) {
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill={light ? 'rgba(255,255,255,.18)' : 'var(--fw-blue-soft)'} />
      <path d="M5 9l3 3 5-5" stroke={light ? '#fff' : 'var(--fw-blue)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Mitgliedschaft() {
  const { data: pricingPlans } = useSanityData(PRICING_PLANS_QUERY, pricingPlansFallback)
  const { studios } = useStudios()
  // Benefits + FAQ editable in Sanity ("Mitgliedschaft-Seite"); {anzahl} → open studios
  const page = fillCount(useMembershipPage(), studios.filter((s) => !s.comingSoon).length)
  useEffect(() => { document.title = 'Mitgliedschaft & Preise | Fitness World Studios' }, [])

  return (
    <main>
      <PageHero
        eyebrow="Mitgliedschaft"
        title="DEIN PLAN. DEIN PREIS."
        sub={page.heroSub}
        img="/images/membership/mitgliedschaft-hero.jpg"
        alt="Fitness World Mitgliedschaft"
      />

      {/* PRICING */}
      <section className="section section--light" id="preise">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">Unsere Tarife</p>
              <h2 className="display">Einfach.<br /><span className="blue">Transparent.</span></h2>
            </div>
            <p className="muted" style={{ maxWidth: '40ch' }}>Alle Preise verstehen sich als monatliche Kosten. Kein versteckter Kleindruck.</p>
          </Reveal>
          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.07}>
                <div className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}>
                  {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
                  <div className="pricing-name">{plan.name}</div>
                  <div className="pricing-price">
                    <span className="pricing-amount">{plan.price} €</span>
                    <span className="pricing-period">{plan.period}</span>
                  </div>
                  <p className="pricing-desc">{plan.desc}</p>
                  <ul className="pricing-features">
                    {(plan.features || []).map((f) => (
                      <li key={f}>
                        <CheckIcon light={plan.highlight} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    to="/probetraining"
                    variant={plan.highlight ? 'primary' : 'ghost-dark'}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="pricing-note" style={{ whiteSpace: 'pre-line' }}>{page.pricingNote}</p>
          </Reveal>
        </div>
      </section>

      {/* VORTEILE */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">Deine Vorteile</p>
              <h2 className="display">Mehr als<br /><span className="blue">eine Mitgliedschaft.</span></h2>
            </div>
          </Reveal>
          <div className="svc-grid">
            {page.benefits.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.05} className="svc-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
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
            <FAQAccordion items={page.faq} />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">Noch unsicher?</p>
              <h2 className="display">TESTE UNS<br /><span className="blue">ZUERST.</span></h2>
              <p>Kein Risiko, kein Druck. Komm zum kostenlosen Probetraining und entscheide danach in Ruhe.</p>
              <Button to="/probetraining">Kostenloses Probetraining</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
