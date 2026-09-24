import Reveal from './Reveal'
import Button from './Button'
import Headline from './Headline'
import FAQAccordion from './FAQAccordion'
import ImagePlaceholder from './ImagePlaceholder'

// Renders the section blocks of a "Leistungs-Seite" (src/lib/content.js).
// Unknown or empty blocks are skipped, so a half-filled section never breaks
// the page.

const TONE_CLASS = {
  light: 'section section--light',
  white: 'section section--white',
  dark: 'section section--dark',
  darker: 'section section--darker',
}
const sectionClass = (tone, fallback = 'light') => TONE_CLASS[tone] || TONE_CLASS[fallback]
const isDark = (tone) => tone === 'dark' || tone === 'darker'
const clean = (arr) => (Array.isArray(arr) ? arr.map((s) => String(s || '').trim()).filter(Boolean) : [])

function CheckIcon({ light }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill={light ? 'rgba(26,145,213,.25)' : 'var(--fw-blue-soft)'} />
      <path d="M5 9l3 3 5-5" stroke="var(--fw-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckList({ items, light }) {
  if (!items.length) return null
  return (
    <ul className={`check-list ${light ? 'check-list--light' : ''}`}>
      {items.map((item) => <li key={item}><CheckIcon light={light} />{item}</li>)}
    </ul>
  )
}

function Media({ image, label, alt }) {
  if (image) return <img className="split__media split__media--photo" src={`${image}?w=1200&auto=format`} alt={alt} loading="lazy" />
  return <ImagePlaceholder className="split__media" label={label} alt={alt} />
}

function Split({ block }) {
  const items = clean(block.items)
  const light = isDark(block.tone)
  return (
    <section className={sectionClass(block.tone)}>
      <div className="wrap split">
        <Reveal>
          {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
          {block.headline && <h2 className="display"><Headline text={block.headline} /></h2>}
          {block.text && <p className="lede" style={{ margin: '22px 0 24px' }}>{block.text}</p>}
          <CheckList items={items} light={light} />
        </Reveal>
        {(block.image || block.imageLabel) && (
          <Reveal delay={0.1}>
            <Media image={block.image} label={block.imageLabel} alt={block.imageAlt || block.eyebrow || ''} />
          </Reveal>
        )}
      </div>
    </section>
  )
}

function Steps({ block }) {
  const items = Array.isArray(block.items) ? block.items.filter((s) => s?.title) : []
  if (!items.length) return null
  const light = !isDark(block.tone)
  return (
    <section className={sectionClass(block.tone, 'dark')}>
      <div className="wrap">
        {(block.eyebrow || block.headline) && (
          <Reveal className="head-row">
            <div>
              {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
              {block.headline && <h2 className="display"><Headline text={block.headline} /></h2>}
            </div>
          </Reveal>
        )}
        <div className="steps-grid" style={block.eyebrow || block.headline ? { marginTop: 40 } : undefined}>
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className={`step-card ${light ? 'step-card--light' : ''}`}>
              {block.numbered !== false && <div className={`step-num ${light ? 'step-num--dark' : ''}`}>{i + 1}</div>}
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TwoLists({ block }) {
  const left = clean(block.leftItems)
  const right = clean(block.rightItems)
  if (!left.length && !right.length) return null
  const light = isDark(block.tone)
  const col = (eyebrow, title, items, delay) => (
    <Reveal delay={delay}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h3 className="display" style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', marginBottom: 28 }}>{title}</h3>}
      <CheckList items={items} light={light} />
    </Reveal>
  )
  return (
    <section className={sectionClass(block.tone, 'dark')}>
      <div className="wrap">
        <div className="two-col-lists">
          {col(block.leftEyebrow, block.leftTitle, left, 0)}
          {col(block.rightEyebrow, block.rightTitle, right, 0.08)}
        </div>
      </div>
    </section>
  )
}

function Note({ block }) {
  if (!block.text) return null
  return (
    <section className={sectionClass(block.tone, 'white')}>
      <div className="wrap">
        <Reveal className="trainer-note">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="var(--fw-blue-soft)" />
            <path d="M10 16l4 4 8-8" stroke="var(--fw-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>{block.text}</p>
        </Reveal>
      </div>
    </section>
  )
}

function Faq({ block }) {
  const items = Array.isArray(block.items) ? block.items.filter((i) => i?.q) : []
  if (!items.length) return null
  return (
    <section className={sectionClass(block.tone)}>
      <div className="wrap faq-wrap">
        <Reveal>
          {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
          <h2 className="display" style={{ marginBottom: 40 }}>
            {block.headline ? <Headline text={block.headline} /> : 'FAQ'}
          </h2>
        </Reveal>
        <Reveal delay={0.05}><FAQAccordion items={items} /></Reveal>
      </div>
    </section>
  )
}

function Cta({ block }) {
  if (!block.headline && !block.text) return null
  return (
    <section className={sectionClass(block.tone, 'dark')}>
      <div className="wrap">
        <Reveal className="finalcta">
          <div className="finalcta__in">
            {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
            {block.headline && <h2 className="display"><Headline text={block.headline} /></h2>}
            {block.text && <p>{block.text}</p>}
            {block.button?.label && <Button to={block.button.to || '/probetraining'}>{block.button.label}</Button>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const RENDERERS = { split: Split, steps: Steps, twoLists: TwoLists, note: Note, faq: Faq, cta: Cta }

export default function Sections({ blocks }) {
  if (!Array.isArray(blocks)) return null
  return blocks.map((block, i) => {
    const Renderer = RENDERERS[block?._type]
    return Renderer ? <Renderer key={block._key || i} block={block} /> : null
  })
}
