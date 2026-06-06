const PATHS = {
  dumbbell: 'M6.5 6.5 17.5 17.5M4 8l1-1M20 16l-1 1M5 5l3 3-2 2-3-3zM19 19l-3-3 2-2 3 3z',
  pulse: 'M3 12h4l2-6 4 12 2-6h6',
  heart: 'M12 20s-7-4.5-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7-2.3C19 10.5 12 20 12 20z',
  glove: 'M7 11V7a2 2 0 0 1 4 0v3m0 0V5a2 2 0 0 1 4 0v6h1a3 3 0 0 1 3 3v3a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-3l-1-3a2 2 0 0 1 3-2z',
  target: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
}

export default function Icon({ name, className = '' }) {
  if (name === 'users') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a5 5 0 0 0-4-5" />
      </svg>
    )
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={PATHS[name]} />
    </svg>
  )
}

export function Star({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.8.7-5.1 4.6 1.5 6.7L12 17.8 5.9 20.3l1.5-6.7L2.3 9l6.8-.7z" />
    </svg>
  )
}
