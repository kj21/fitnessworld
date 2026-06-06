/**
 * Fitness World Studios — design tokens wired into Tailwind.
 * Source of truth mirrors content/design-tokens.json.
 * Use these tokens for any NEW component (e.g. bg-navy-900, text-fw-blue, font-display).
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fw: {
          blue: '#1A91D5',
          'blue-hover': '#1479B3',
          dark: '#373737',
          grey: '#DDDDDC',
          light: '#ECECEC',
        },
        navy: {
          900: '#07111C',
          800: '#0B1724',
          700: '#102437',
        },
        ink: '#111827',
        muted: '#667085',
        offwhite: '#F7F9FC',
        line: '#E6EBF1',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1240px',
      },
      borderRadius: {
        s: '10px',
        m: '18px',
        l: '28px',
      },
      boxShadow: {
        card: '0 18px 44px rgba(16,36,55,.10)',
        menu: '0 24px 60px rgba(0,0,0,.45)',
      },
      transitionTimingFunction: {
        fw: 'cubic-bezier(.22,.61,.36,1)',
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
