import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal'

const content = {
  '/impressum': {
    title: 'Impressum',
    body: [
      { h: 'Angaben gemäß § 5 TMG' },
      { p: 'Fitness World Studios GmbH\nMusterstraße 1\n49451 Holdorf\nDeutschland' },
      { h: 'Vertreten durch' },
      { p: '[Geschäftsführer Name]\n[Geschäftsführer Name]' },
      { h: 'Kontakt' },
      { p: 'Telefon: +49 XXXX XXXXXX\nE-Mail: info@fitness-world-studios.de' },
      { h: 'Handelsregister' },
      { p: 'Registergericht: Amtsgericht [Ort]\nRegisternummer: HRB XXXXX' },
      { h: 'Umsatzsteuer-ID' },
      { p: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:\nDE XXXXXXXXX' },
      { h: 'Verantwortlicher für den Inhalt gemäß § 18 Abs. 2 MStV' },
      { p: '[Name]\n[Adresse]' },
      { note: 'Bitte alle Angaben vor Veröffentlichung mit dem Mandanten finalisieren.' },
    ],
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung',
    body: [
      { h: '1. Datenschutz auf einen Blick' },
      { p: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.' },
      { h: '2. Verantwortliche Stelle' },
      { p: 'Fitness World Studios GmbH, Musterstraße 1, 49451 Holdorf\nE-Mail: datenschutz@fitness-world-studios.de' },
      { h: '3. Erhebung und Speicherung personenbezogener Daten' },
      { p: 'Beim Besuch der Website werden durch den Browser automatisch Informationen an den Server übermittelt. Diese werden temporär in einem sog. Logfile gespeichert.' },
      { h: '4. Kontaktformular' },
      { p: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.' },
      { h: '5. Ihre Rechte' },
      { p: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Bei Fragen wenden Sie sich an datenschutz@fitness-world-studios.de.' },
      { note: 'Diese Datenschutzerklärung ist ein Platzhalter und muss vor Veröffentlichung von einem Rechtsanwalt geprüft und finalisiert werden.' },
    ],
  },
  '/agb': {
    title: 'Allgemeine Geschäftsbedingungen',
    body: [
      { h: '§ 1 Geltungsbereich' },
      { p: 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Mitgliedschaftsverträge zwischen Fitness World Studios GmbH und ihren Mitgliedern.' },
      { h: '§ 2 Mitgliedschaft' },
      { p: 'Die Mitgliedschaft beginnt mit Vertragsunterzeichnung. Der Mitgliedsbeitrag ist monatlich im Voraus fällig.' },
      { h: '§ 3 Laufzeit und Kündigung' },
      { p: 'Die Mindestvertragslaufzeit ergibt sich aus dem gewählten Tarif. Die Kündigung hat schriftlich zu erfolgen. Die Kündigungsfrist beträgt 4 Wochen zum Monatsende.' },
      { h: '§ 4 Beitragsanpassung' },
      { p: 'Fitness World Studios behält sich das Recht vor, Mitgliedsbeiträge mit einer Ankündigungsfrist von 6 Wochen anzupassen.' },
      { h: '§ 5 Hausordnung' },
      { p: 'Mitglieder sind verpflichtet, die jeweils gültige Hausordnung einzuhalten.' },
      { note: 'Diese AGB sind ein Platzhalter und müssen vor Veröffentlichung von einem Rechtsanwalt geprüft und finalisiert werden.' },
    ],
  },
  '/hausordnung': {
    title: 'Hausordnung',
    body: [
      { h: 'Allgemeine Verhaltensregeln' },
      { p: 'Alle Mitglieder und Gäste sind angehalten, rücksichtsvoll und respektvoll miteinander umzugehen. Das Studio steht allen zur Verfügung.' },
      { h: 'Hygiene' },
      { p: 'Bitte immer ein sauberes Handtuch mitbringen und die Geräte nach der Nutzung abwischen. Saubere Sportschuhe sind Pflicht.' },
      { h: 'Geräte und Gewichte' },
      { p: 'Gewichte nach der Nutzung zurückräumen. Auf andere Mitglieder Rücksicht nehmen und Geräte nicht unnötig blockieren.' },
      { h: 'Handys und Fotos' },
      { p: 'Telefonieren bitte außerhalb der Trainingsfläche. Fotos von anderen Personen ohne deren Zustimmung sind untersagt.' },
      { h: 'Schäden und Störungen' },
      { p: 'Defekte Geräte oder Schäden bitte sofort dem Personal melden.' },
      { note: 'Bitte vor Veröffentlichung mit dem Mandanten abstimmen.' },
    ],
  },
}

export default function Legal() {
  const { pathname } = useLocation()
  const page = content[pathname] || content['/impressum']

  useEffect(() => { document.title = `${page.title} | Fitness World Studios` }, [page.title])

  return (
    <main>
      <section className="section section--dark" style={{ paddingTop: 140, paddingBottom: 64 }}>
        <div className="wrap">
          <Reveal>
            <h1 className="display">{page.title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section--white" style={{ paddingTop: 64 }}>
        <div className="wrap legal-wrap">
          <Reveal>
            {page.body.map((block, i) => {
              if (block.h) return <h2 key={i} className="legal-h">{block.h}</h2>
              if (block.p) return <p key={i} className="legal-p">{block.p}</p>
              if (block.note) return (
                <div key={i} className="legal-note" role="note">
                  <strong>Hinweis:</strong> {block.note}
                </div>
              )
              return null
            })}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
