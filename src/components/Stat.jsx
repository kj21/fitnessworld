import { useEffect, useRef, useState } from 'react'

const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches

export default function Stat({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        io.unobserve(el)
        if (reduce) { setN(value); return }
        const dur = 1400, t0 = performance.now()
        const step = (t) => {
          const p = Math.min(1, (t - t0) / dur)
          setN(value * (1 - Math.pow(1 - p, 3)))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  const formatted = n.toLocaleString('de-DE', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  return <span ref={ref}>{formatted}{suffix}</span>
}
