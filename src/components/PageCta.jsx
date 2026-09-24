import Reveal from './Reveal'
import Button from './Button'
import Headline from './Headline'

/** Closing call-to-action band, driven by "Seitentext" fields in Sanity. */
export default function PageCta({ copy, tone = 'dark' }) {
  if (!copy?.ctaHeadline && !copy?.ctaText) return null
  return (
    <section className={`section section--${tone}`}>
      <div className="wrap">
        <Reveal className="finalcta">
          <div className="finalcta__in">
            {copy.ctaEyebrow && <p className="eyebrow">{copy.ctaEyebrow}</p>}
            {copy.ctaHeadline && <h2 className="display"><Headline text={copy.ctaHeadline} /></h2>}
            {copy.ctaText && <p>{copy.ctaText}</p>}
            {copy.ctaButton?.label && <Button to={copy.ctaButton.to || '/probetraining'}>{copy.ctaButton.label}</Button>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
