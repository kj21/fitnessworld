import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'

const categories = ['Alle', 'Training', 'Gesundheit', 'Reha', 'Ernährung', 'Motivation', 'Community']

const featured = {
  cat: 'Motivation',
  title: 'So startest du wieder mit dem Training, ohne dich zu überfordern',
  excerpt: 'Der Wiedereinstieg muss nicht perfekt sein. Wichtig ist, dass du realistisch startest, deinen Körper ernst nimmst und eine Routine findest, die du wirklich halten kannst.',
}

const articles = [
  { cat: 'Training', title: '5 Fehler beim Einstieg ins Krafttraining', excerpt: 'Viele starten zu schnell, zu schwer oder ohne Plan. Wir zeigen dir, wie du sicher und sinnvoll beginnst.' },
  { cat: 'Gesundheit', title: 'Warum Reha-Sport mehr ist als Gymnastik', excerpt: 'Reha-Sport kann dir helfen, wieder Vertrauen in Bewegung aufzubauen und deine Belastbarkeit zu verbessern.' },
  { cat: 'Training', title: 'Boxen als Fitness-Workout: Für wen es geeignet ist', excerpt: 'Boxtraining fordert Körper und Kopf. Du brauchst keine Vorerfahrung, sondern nur die Bereitschaft, dich einzulassen.' },
  { cat: 'Motivation', title: 'Wie du eine Trainingsroutine aufbaust, die bleibt', excerpt: 'Motivation ist gut. Struktur ist besser. So machst du Training zu einem festen Teil deines Alltags.' },
]

export default function Blog() {
  useEffect(() => { document.title = 'Fitness World Magazin | Training, Gesundheit & Motivation' }, [])

  return (
    <main>
      <PageHero
        eyebrow="News & Tipps"
        title="WISSEN. MOTIVATION. INSPIRATION."
        sub="Alles, was dir hilft, besser zu trainieren, gesünder zu leben und langfristig dranzubleiben."
        img="/images/blog/blog-hero.jpg"
        alt="Fitness World Blog und Magazin"
      />

      {/* KATEGORIEN */}
      <section className="section section--light" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Reveal className="filter-bar">
            {categories.map((c) => (
              <button key={c} className="filter-btn">{c}</button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section section--light">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Featured</p>
          </Reveal>
          <Reveal delay={0.05} className="featured-article">
            <div className="featured-img imgph" role="img" aria-label="Artikel Beitragsbild">
              <span className="imgph__tag">/images/blog/featured.jpg</span>
            </div>
            <div className="featured-body">
              <span className="blog-cat">{featured.cat}</span>
              <h2 className="display" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.8rem)', marginTop: 12 }}>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <button className="btn btn--primary" style={{ marginTop: 8 }}>
                Artikel lesen <span className="arr">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTIKEL */}
      <section className="section section--white">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Alle Artikel</p>
            <h2 className="display" style={{ marginBottom: 40 }}>Weitere <span className="blue">Beiträge.</span></h2>
          </Reveal>
          <div className="blog-grid">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 0.06} className="blog-card">
                <div className="blog-card__img imgph" role="img" aria-label={a.title}>
                  <span className="imgph__tag">/images/blog/article-{i + 1}.jpg</span>
                </div>
                <div className="blog-card__body">
                  <span className="blog-cat">{a.cat}</span>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <button className="textlink">Weiterlesen <span className="arr">→</span></button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              <p className="eyebrow">Newsletter</p>
              <h2 className="display">BLEIB IN<br /><span className="blue">BEWEGUNG.</span></h2>
              <p>Erhalte Tipps, Angebote und News aus der Fitness World Community.</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  aria-label="E-Mail-Adresse für Newsletter"
                  className="newsletter-input"
                />
                <button className="btn btn--primary">Abonnieren <span className="arr">→</span></button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
