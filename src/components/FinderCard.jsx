import { Link } from 'react-router-dom'
import ImagePlaceholder from './ImagePlaceholder'

const isUrl = (s) => /^https?:\/\//.test(String(s || ''))

/**
 * Studio finder card. Leads with practical fit — what the location is best
 * for, how you get in, and when a trainer is on the floor.
 */
export default function FinderCard({ name, to, cardImg, img, bestFor, access, trainerHours, features = [], comingSoon }) {
  const image = cardImg || img
  return (
    <article className="finder-card">
      <div className="finder-card__media">
        <span className="finder-card__pin"><i />{comingSoon ? 'Demnächst' : 'Standort'}</span>
        {isUrl(image)
          ? <img src={`${image}?w=900&auto=format`} alt={`Fitness World ${name}`} loading="lazy" />
          : <ImagePlaceholder className="imgph" label={image} alt={`Fitness World ${name}`} />}
      </div>
      <div className="finder-card__body">
        <h3>{name}</h3>
        {bestFor && <span className="finder-card__best">Passt zu: {bestFor}</span>}
        {(access || trainerHours) && (
          <div className="finder-card__rows">
            {access && <div className="finder-card__row"><b>Zugang</b><span>{access}</span></div>}
            {trainerHours && <div className="finder-card__row"><b>Trainerzeiten</b><span>{trainerHours}</span></div>}
          </div>
        )}
        {features.length > 0 && (
          <div className="finder-card__tags">
            {features.slice(0, 4).map((f) => <span key={f}>{f}</span>)}
          </div>
        )}
        {comingSoon
          ? <span className="finder-card__soon">In Vorbereitung</span>
          : to && <Link className="textlink" to={to}>Standort ansehen <span className="arr">→</span></Link>}
      </div>
    </article>
  )
}
