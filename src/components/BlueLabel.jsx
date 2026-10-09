/** Eyebrow with the blue route line + pin that recurs across the site. */
export default function BlueLabel({ children, className = '' }) {
  if (!children) return null
  return (
    <p className={`bp-label ${className}`}>
      <span className="pin" aria-hidden="true" />
      {children}
    </p>
  )
}
