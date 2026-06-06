import { TextLink } from './Button'

export default function LocationCard({ name, to, img, features }) {
  return (
    <article className="loc-card">
      <div className="loc-card__bg imgph" role="img" aria-label={`Studio ${name}`}>
        <span className="imgph__tag">{img}</span>
      </div>
      <div className="loc-card__body">
        <h3>{name}</h3>
        <div className="loc-card__line" />
        <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>
        <TextLink to={to}>Studio entdecken</TextLink>
      </div>
    </article>
  )
}
