import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PortableText from '../components/PortableText'
import { useCompany, useLegalPages } from '../lib/content.js'

// Placeholder text shown only until a "Rechtstext" exists in Sanity.
const placeholders = {
  datenschutz: {
    title: 'Datenschutzerklärung',
    body: [
      { h: '1. Datenschutz auf einen Blick' },
      { p: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.' },
      { h: '2. Verantwortliche Stelle' },
      { p: '{company}' },
      { h: '3. Erhebung und Speicherung personenbezogener Daten' },
      { p: 'Beim Besuch der Website werden durch den Browser automatisch Informationen an den Server übermittelt. Diese werden temporär in einem sog. Logfile gespeichert.' },
      { h: '4. Kontaktformular' },
      { p: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.' },
      { h: '5. Ihre Rechte' },
      { p: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.' },
      { note: 'Platzhalter – bitte in Sanity unter „Rechtstext → Datenschutz“ den finalen Text einfügen.' },
    ],
  },
  agb: {
    title: 'Allgemeine Geschäftsbedingungen',
    body: [
      { h: '§ 1 Geltungsbereich' },
      { p: 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Mitgliedschaftsverträge zwischen {companyName} und ihren Mitgliedern.' },
      { h: '§ 2 Mitgliedschaft' },
      { p: 'Die Mitgliedschaft beginnt mit Vertragsunterzeichnung. Der Mitgliedsbeitrag ist monatlich im Voraus fällig.' },
      { h: '§ 3 Laufzeit und Kündigung' },
      { p: 'Die Mindestvertragslaufzeit ergibt sich aus dem gewählten Tarif.' },
      { note: 'Platzhalter – bitte in Sanity unter „Rechtstext → AGB“ den finalen Text einfügen.' },
    ],
  },
  hausordnung: {
    title: 'Hausordnung',
    body: [
      { h: 'Allgemeine Verhaltensregeln' },
      { p: 'Alle Mitglieder und Gäste sind angehalten, rücksichtsvoll und respektvoll miteinander umzugehen.' },
      { h: 'Hygiene' },
      { p: 'Bitte immer ein sauberes Handtuch mitbringen und die Geräte nach der Nutzung abwischen. Saubere Sportschuhe sind Pflicht.' },
      { h: 'Geräte und Gewichte' },
      { p: 'Gewichte nach der Nutzung zurückräumen. Auf andere Mitglieder Rücksicht nehmen und Geräte nicht unnötig blockieren.' },
      { note: 'Platzhalter – bitte in Sanity unter „Rechtstext → Hausordnung“ den finalen Text einfügen.' },
    ],
  },
}

const lines = (...parts) => parts.filter((p) => p && String(p).trim()).join('\n')

/** Impressum blocks built from "Unternehmen & Impressum". Empty groups are skipped. */
function impressumBlocks(c) {
  const blocks = [
    ['Angaben gemäß § 5 DDG', lines(c.companyName, c.street, c.zipCity, c.country)],
    ['Vertreten durch', lines(c.managingDirector && `Geschäftsführer: ${c.managingDirector}`)],
    ['Kontakt', lines(c.phone && `Telefon: ${c.phone}`, c.email && `E-Mail: ${c.email}`)],
    ['Handelsregister', lines(c.registerCourt && `Registergericht: ${c.registerCourt}`, c.registerNumber && `Registernummer: ${c.registerNumber}`)],
    ['Steuern', lines(c.taxNumber && `Steuernummer: ${c.taxNumber}`, c.vatId && `Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${c.vatId}`)],
    ['Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV', lines(c.responsible)],
  ]
  return blocks.filter(([, text]) => text).flatMap(([h, p]) => [{ h }, { p }])
}

function SimpleBlocks({ blocks, company }) {
  const fill = (t) => t
    .replace('{company}', lines(company.companyName, company.street, company.zipCity, company.email && `E-Mail: ${company.email}`))
    .replace('{companyName}', company.companyName || 'Fitness World')
  return blocks.map((block, i) => {
    if (block.h) return <h2 key={i} className="legal-h">{block.h}</h2>
    if (block.p) return <p key={i} className="legal-p">{fill(block.p)}</p>
    if (block.note) return <div key={i} className="legal-note" role="note"><strong>Hinweis:</strong> {block.note}</div>
    return null
  })
}

export default function Legal() {
  const { pathname } = useLocation()
  const key = pathname.replace(/^\/+|\/+$/g, '') || 'impressum'
  const company = useCompany()
  const sanityPages = useLegalPages()
  const doc = sanityPages[key]
  const hasBody = Array.isArray(doc?.body) && doc.body.length > 0

  const title = doc?.title || (key === 'impressum' ? 'Impressum' : placeholders[key]?.title || 'Rechtliches')
  useEffect(() => { document.title = `${title} | Fitness World Studios` }, [title])

  return (
    <main>
      <section className="section section--dark" style={{ paddingTop: 140, paddingBottom: 64 }}>
        <div className="wrap">
          <Reveal>
            <h1 className="display">{title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section--white" style={{ paddingTop: 64 }}>
        <div className="wrap legal-wrap">
          <Reveal>
            {key === 'impressum' && <SimpleBlocks blocks={impressumBlocks(company)} company={company} />}
            {hasBody
              ? <PortableText value={doc.body} />
              : key !== 'impressum' && <SimpleBlocks blocks={(placeholders[key] || placeholders.datenschutz).body} company={company} />}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
