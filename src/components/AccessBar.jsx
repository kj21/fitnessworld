import Icon from './Icon'
import Reveal from './Reveal'

/**
 * Blue Access Bar — the service system as one connected strip, not a loose
 * feature list. Each item carries an optional short qualifier ("meta") so
 * 24/7 access and staffed trainer times stay distinguishable.
 */
export default function AccessBar({ items = [] }) {
  if (!items.length) return null
  return (
    <Reveal className="access-bar">
      {items.map((item) => (
        <div className="access-bar__item" key={item.label}>
          <span className="access-bar__ico"><Icon name={item.icon || 'route'} /></span>
          <span className="access-bar__label">{item.label}</span>
          {item.meta && <span className="access-bar__meta">{item.meta}</span>}
        </div>
      ))}
    </Reveal>
  )
}
