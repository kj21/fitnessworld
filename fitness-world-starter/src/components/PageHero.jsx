import Reveal from './Reveal'
import Button from './Button'
import ImagePlaceholder from './ImagePlaceholder'

export default function PageHero({ eyebrow, title, sub, primaryCta, primaryTo, secondaryCta, secondaryTo, img, alt }) {
  return (
    <section className="phero" aria-label={title}>
      <div className="phero__bg" />
      {img && (
        <ImagePlaceholder
          className="phero__img"
          label={img}
          alt={alt || title}
        />
      )}
      <div className="phero__inner">
        <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>
        <Reveal as="h1" className="display" delay={0.05}>{title}</Reveal>
        {sub && <Reveal as="p" className="lede" delay={0.1}>{sub}</Reveal>}
        {(primaryCta || secondaryCta) && (
          <Reveal className="hero__cta" delay={0.15}>
            {primaryCta && <Button to={primaryTo || '#'}>{primaryCta}</Button>}
            {secondaryCta && <Button to={secondaryTo || '#'} variant="ghost-light">{secondaryCta}</Button>}
          </Reveal>
        )}
      </div>
    </section>
  )
}
