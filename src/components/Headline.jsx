import { Fragment } from 'react'

/**
 * Renders headline copy written in the editor-friendly convention used by
 * Sanity and site.js:
 *   - a line break ("\n") starts a new line
 *   - *text between asterisks* is rendered blue
 *
 * `block`  → each line becomes its own <span> (hero <h1>, where CSS makes
 *            spans display:block); a line that is entirely blue gets the
 *            class on the span itself.
 * default  → lines are joined with <br />.
 */
export function headlineParts(line) {
  const parts = []
  const re = /\*([^*]+)\*/g
  let last = 0
  let m
  while ((m = re.exec(line))) {
    if (m.index > last) parts.push({ text: line.slice(last, m.index) })
    parts.push({ text: m[1], blue: true })
    last = m.index + m[0].length
  }
  if (last < line.length) parts.push({ text: line.slice(last) })
  return parts
}

export default function Headline({ text = '', block = false }) {
  const lines = String(text).split(/\r?\n/).filter((l) => l.trim() !== '')
  return lines.map((line, i) => {
    const parts = headlineParts(line)
    const wholeLineBlue = block && parts.length === 1 && parts[0].blue
    const inner = parts.map((p, j) =>
      p.blue && !wholeLineBlue
        ? <span key={j} className="blue" style={block ? { display: 'inline' } : undefined}>{p.text}</span>
        : <Fragment key={j}>{p.text}</Fragment>
    )
    return block
      ? <span key={i} className={wholeLineBlue ? 'blue' : undefined}>{inner}</span>
      : <Fragment key={i}>{i > 0 && <br />}{inner}</Fragment>
  })
}
