// Textured placeholder mapped to a real image path. Swap for a real <img> later.
export default function ImagePlaceholder({ label, alt, className = '' }) {
  return (
    <div className={`imgph ${className}`} role="img" aria-label={alt}>
      {label && <span className="imgph__tag">{label}</span>}
    </div>
  )
}
