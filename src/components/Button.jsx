import { Link } from 'react-router-dom'

// variant: 'primary' | 'ghost-light' | 'ghost-dark'
export default function Button({ to = '#', variant = 'primary', children, className = '' }) {
  return (
    <Link to={to} className={`btn btn--${variant} ${className}`}>
      {children} <span className="arr">→</span>
    </Link>
  )
}

export function TextLink({ to = '#', children, className = '' }) {
  return (
    <Link to={to} className={`textlink ${className}`}>
      {children} <span className="arr">→</span>
    </Link>
  )
}
