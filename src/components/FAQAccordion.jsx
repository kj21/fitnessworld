import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="faq">
      {items.map((item, i) => {
        const id = `faq-${i}`
        const panelId = `faq-panel-${i}`
        const expanded = open === i
        return (
          <div key={i} className={`faq__item ${expanded ? 'open' : ''}`}>
            <h3>
              <button
                id={id}
                aria-expanded={expanded}
                aria-controls={panelId}
                className="faq__trigger"
                onClick={() => setOpen(expanded ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">{expanded ? '−' : '+'}</span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={id}
              hidden={!expanded}
              className="faq__panel"
            >
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
