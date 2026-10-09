import Reveal from './Reveal'

/** Numbered route steps connected by the blue path (Reha-Einstieg). */
export default function PathSteps({ steps = [] }) {
  if (!steps.length) return null
  return (
    <div className="bp-steps">
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.07} className="bp-step">
          <div className="bp-step__num">{i + 1}</div>
          <h3>{step.title}</h3>
          {step.text && <p>{step.text}</p>}
        </Reveal>
      ))}
    </div>
  )
}

/** Vertical route list used for the 24/7 and Fighter World detail points. */
export function PathTrack({ items = [] }) {
  if (!items.length) return null
  return (
    <div className="bp-track">
      {items.map((item) => (
        <div className="bp-node" key={item.title}>
          <h3>{item.title}</h3>
          {item.text && <p>{item.text}</p>}
        </div>
      ))}
    </div>
  )
}
