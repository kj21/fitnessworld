import { Fragment } from 'react'

// Minimal renderer for Sanity block content (legal pages): paragraphs,
// h2/h3, bullet/number lists, bold/italic and links. No dependency needed.

function Spans({ block }) {
  const defs = Object.fromEntries((block.markDefs || []).map((d) => [d._key, d]))
  return (block.children || []).map((child, i) => {
    let node = String(child.text || '').split('\n').map((line, j, arr) => (
      <Fragment key={j}>{line}{j < arr.length - 1 && <br />}</Fragment>
    ))
    for (const mark of child.marks || []) {
      if (mark === 'strong') node = <strong>{node}</strong>
      else if (mark === 'em') node = <em>{node}</em>
      else if (defs[mark]?._type === 'link' && defs[mark].href) {
        const href = defs[mark].href
        const external = /^https?:/.test(href)
        node = <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{node}</a>
      }
    }
    return <Fragment key={child._key || i}>{node}</Fragment>
  })
}

export default function PortableText({ value }) {
  if (!Array.isArray(value)) return null
  const out = []
  let list = null
  const flush = () => {
    if (!list) return
    const Tag = list.type === 'number' ? 'ol' : 'ul'
    out.push(<Tag key={`list-${out.length}`} className="legal-list">{list.items}</Tag>)
    list = null
  }
  value.forEach((block, i) => {
    if (block?._type !== 'block') return
    const key = block._key || i
    if (block.listItem) {
      if (!list || list.type !== block.listItem) { flush(); list = { type: block.listItem, items: [] } }
      list.items.push(<li key={key}><Spans block={block} /></li>)
      return
    }
    flush()
    if (block.style === 'h2') out.push(<h2 key={key} className="legal-h"><Spans block={block} /></h2>)
    else if (block.style === 'h3') out.push(<h3 key={key} className="legal-h legal-h--sub"><Spans block={block} /></h3>)
    else out.push(<p key={key} className="legal-p"><Spans block={block} /></p>)
  })
  flush()
  return out
}
