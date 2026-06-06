import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import { useSanityData } from '../hooks/useSanityData.js'
import { TEAM_MEMBERS_QUERY } from '../lib/queries.js'

// Fallback — used while Sanity loads or if credentials are not yet configured
const teamFallback = [
  { initial: 'A', name: 'Andreas M.', role: 'Geschäftsführer & Trainer', loc: 'Holdorf', text: 'Andreas hat Fitness World von Anfang an aufgebaut und lebt für das, was er tut. Er steht regelmäßig selbst auf der Trainingsfläche.' },
  { initial: 'S', name: 'Sarah K.', role: 'Trainerin & Kursleitung', loc: 'Goldenstedt', text: 'Sarah leitet unsere Gesundheitskurse und Reha-Sport-Angebote. Ihre ruhige Art und ihr Fachwissen machen sie zum Anker für viele Mitglieder.' },
  { initial: 'F', name: 'Felix B.', role: 'Box- & Kickboxtrainer', loc: 'Holdorf', text: 'Felix bringt technisches Boxwissen und viel Energie mit. Er macht auch absolute Anfänger schnell fit und sicher.' },
  { initial: 'L', name: 'Lisa T.', role: 'Personal Trainerin', loc: 'Vechta', text: 'Lisa entwickelt individuelle Trainingspläne und begleitet ihre Klienten mit klarem Fokus auf Ziele und nachhaltige Fortschritte.' },
  { initial: 'M', name: 'Marco H.', role: 'Trainer & Rezeption', loc: 'Twistringen', text: 'Marco ist das freundliche Gesicht am Eingang und auf der Fläche. Er hilft bei Gerätenfragen und sorgt dafür, dass das Studio läuft.' },
  { initial: 'J', name: 'Jana W.', role: 'Trainerin & Kursleiterin', loc: 'Goldenstedt', text: 'Jana leitet Kurse, hilft Einsteigern beim Start und sorgt dafür, dass Training Spaß macht – auch wenn es anstrengend wird.' },
]

export default function Team() {
  const { data: team } = useSanityData(TEAM_MEMBERS_QUERY, teamFallback)
  useEffect(() => { document.title = 'Unser Team | Fitness World Studios' }, [])

  return (
    <main>
      <PageHero
        eyebrow="Unser Team"
        title="MENSCHEN, DIE FÜR TRAINING BRENNEN."
        sub="Hinter Fitness World stehen Trainerinnen und Trainer, die ihren Job ernst nehmen und dich nicht vergessen, sobald du durch die Tür gehst."
        img="/images/team/team-hero.jpg"
        alt="Das Team von Fitness World Studios"
      />

      {/* INTRO */}
      <section className="section section--light">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Wer wir sind</p>
            <h2 className="display">DEIN TRAINING<br />IST <span className="blue">UNSER JOB.</span></h2>
            <p className="lede" style={{ marginTop: 22 }}>
              Wir sind kein anonymes Fitnessstudio. Wir sind ein Team, das sich Zeit nimmt, deine Ziele kennt und dich auf deinem Weg begleitet. Ob erster Tag oder hundertster Besuch – wir sind da.
            </p>
            <div style={{ marginTop: 28 }}>
              <Button to="/probetraining">Uns kennenlernen</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="split__media imgph" role="img" aria-label="Trainer bei Fitness World Studios">
              <span className="imgph__tag">/images/team/team-group.jpg</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="section section--white">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">Das Team</p>
              <h2 className="display">Lerne uns<br /><span className="blue">kennen.</span></h2>
            </div>
          </Reveal>
          <div className="team-grid">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.06} className="team-card">
                <div className="team-avatar">{member.initial}</div>
                <div className="team-info">
                  <strong className="team-name">{member.name}</strong>
                  <span className="team-role">{member.role}</span>
                  <span className="team-loc">{member.loc}</span>
                </div>
                <p className="team-bio">{member.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS CTA */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">Karriere</p>
              <h2 className="display">WERDE TEIL<br /><span className="blue">DES TEAMS.</span></h2>
              <p>Du teilst unsere Leidenschaft für Training und Menschen? Dann schau dir unsere offenen Stellen an.</p>
              <Button to="/jobs">Stellenangebote ansehen</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
