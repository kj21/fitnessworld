import { Link } from 'react-router-dom'
import Icon from './Icon'

/** "Ich will … → dieser Weg" card from the Einstieg section. */
export default function DecisionCard({ goal, title, text, icon, to, linkLabel }) {
  return (
    <article className="decide-card">
      <span className="decide-card__ico"><Icon name={icon || 'route'} /></span>
      {goal && <span className="decide-card__goal">{goal}</span>}
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      {to && (
        <Link className="textlink" to={to}>
          {linkLabel || 'Mehr erfahren'} <span className="arr">→</span>
        </Link>
      )}
    </article>
  )
}
