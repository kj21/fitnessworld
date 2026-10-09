const PATHS = {
  dumbbell: 'M6.5 6.5 17.5 17.5M4 8l1-1M20 16l-1 1M5 5l3 3-2 2-3-3zM19 19l-3-3 2-2 3 3z',
  pulse: 'M3 12h4l2-6 4 12 2-6h6',
  heart: 'M12 20s-7-4.5-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7-2.3C19 10.5 12 20 12 20z',
  glove: 'M7 11V7a2 2 0 0 1 4 0v3m0 0V5a2 2 0 0 1 4 0v6h1a3 3 0 0 1 3 3v3a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-3l-1-3a2 2 0 0 1 3-2z',
  target: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  // Blue Access System
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4v5l3.5 2',
  card: 'M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5zM3 10h18M7 14.5h4',
  pin: 'M12 21s6.5-6.1 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 14.9 12 21 12 21zm0-8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  spa: 'M12 21c0-5 3-8 7-9-1 5-3.5 8-7 9zm0 0c0-5-3-8-7-9 1 5 3.5 8 7 9zm0-9c1.8-1.6 2.6-3.6 2-6-2 .9-3 2.4-3 4s.4 1.6 1 2z',
  shield: 'M12 3l7 3v5.5c0 4.3-2.9 7.6-7 9.5-4.1-1.9-7-5.2-7-9.5V6l7-3zm-2.5 8.5 2 2 3.5-3.5',
  route: 'M6.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm11-11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 2.5c0 4-11 1.5-11 6',
}

export default function Icon({ name, className = '' }) {
  if (name === 'users' || name === 'community') {
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
