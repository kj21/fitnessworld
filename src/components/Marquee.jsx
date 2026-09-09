import { marqueeItems } from '../data/site'

export default function Marquee({ items: source = marqueeItems }) {
  const items = [...source, ...source]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
