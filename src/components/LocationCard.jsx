import { TextLink } from './Button'

const isUrl = (s) => /^https?:\/\//.test(String(s || ''))

export default function LocationCard({ name, to, img, features = [], comingSoon = false }) {
  return (
    <article className="loc-card">
      {isUrl(img) ? (
        <div className="loc-card__bg">
          <img src={`${img}?w=900&auto=format`} alt={`Studio ${name}`} loading="lazy" />
        </div>
      ) : (
        <div className="loc-card__bg imgph" role="img" aria-label={`Studio ${name}`}>
          <span className="imgph__tag">{img}</span>
        </div>
      )}
      <div className="loc-card__body">
        <h3>{name}</h3>
        <div className="loc-card__line" />
        {features.length > 0 && <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>}
        {to && !comingSoon
          ? <TextLink to={to}>Studio entdecken</TextLink>
          : <span className="loc-card__soon">Demnächst</span>}
      </div>
    </article>
  )
}
