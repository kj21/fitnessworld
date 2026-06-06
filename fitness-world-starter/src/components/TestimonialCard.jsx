import { Star } from './Icon'

export default function TestimonialCard({ initial, name, loc, quote }) {
  return (
    <div className="tst">
      <div className="stars" aria-label="5 von 5 Sternen">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
      </div>
      <p>„{quote}“</p>
      <div className="tst__who">
        <div className="tst__av">{initial}</div>
        <div><div className="tst__name">{name}</div><div className="tst__loc">{loc}</div></div>
      </div>
    </div>
  )
}
