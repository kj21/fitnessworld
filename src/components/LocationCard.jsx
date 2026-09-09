import { TextLink } from './Button'

const isUrl = (s) => /^https?:\/\//.test(String(s || ''))

export default function LocationCard({ name, to, cardImg, img, features = [], comingSoon = false }) {
  const image = cardImg || img
  return (
    <article className="loc-card">
      {isUrl(image) ? (
        <div className="loc-card__bg">
          <img src={`${image}?w=900&auto=format`} alt={`Studio ${name}`} loading="lazy" />
        </div>
      ) : (
        <div className="loc-card__bg imgph" role="img" aria-label={`Studio ${name}`}>
          <span className="imgph__tag">{image}</span>
        </div>
      )}
      <div className="loc-card__body">
        <h3>{name}</h3>
        <div className="loc-card__line" />
        {features.length > 0 && <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>}
        {comingSoon && <span className="loc-card__soon">Demnächst</span>}
        {to && <TextLink to={to}>{comingSoon ? 'Mehr erfahren' : 'Studio entdecken'}</TextLink>}
      </div>
    </article>
  )
}
