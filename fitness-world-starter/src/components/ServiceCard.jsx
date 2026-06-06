import Icon from './Icon'
import { TextLink } from './Button'

export default function ServiceCard({ icon, title, text, to }) {
  return (
    <div className="svc-card">
      <div className="ico"><Icon name={icon} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <TextLink to={to}>Mehr</TextLink>
    </div>
  )
}
