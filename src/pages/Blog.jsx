import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import Headline from '../components/Headline'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { useBlogPosts, usePageCopy } from '../lib/content.js'

const isUrl = (s) => /^https?:\/\//.test(String(s || ''))

function PostImage({ post, className, fallbackLabel }) {
  if (isUrl(post.image)) {
    return (
      <div className={className}>
        <img src={`${post.image}?w=1200&auto=format`} alt={post.title} loading="lazy" />
      </div>
    )
  }
  return <ImagePlaceholder className={className} label={fallbackLabel} alt={post.title} />
}

/** Links only to posts that exist in Sanity (the examples have no article page). */
function ReadMore({ post, className = 'textlink', children }) {
  if (!post._id || !post.slug) return <span className={`${className} is-disabled`}>{children} <span className="arr">→</span></span>
  return <Link className={className} to={`/blog/${post.slug}`}>{children} <span className="arr">→</span></Link>
}

export default function Blog() {
  const copy = usePageCopy('blog')
  const { featured, rest, categories } = useBlogPosts()
  const [active, setActive] = useState('Alle')

  useEffect(() => { document.title = copy.seoTitle }, [copy.seoTitle])

  const filters = ['Alle', ...categories]
  const visible = active === 'Alle' ? rest : rest.filter((p) => p.category === active)

  return (
    <main>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        sub={copy.sub}
        img="/images/blog/blog-hero.jpg"
        alt="Fitness World Blog und Magazin"
      />

      {filters.length > 1 && (
        <section className="section section--light" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <Reveal className="filter-bar">
              {filters.map((c) => (
                <button
                  key={c}
                  className={`filter-btn ${active === c ? 'active' : ''}`}
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                >
                  {c}
                </button>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {featured && (
        <section className="section section--light">
          <div className="wrap">
            <Reveal><p className="eyebrow">Featured</p></Reveal>
            <Reveal delay={0.05} className="featured-article">
              <PostImage post={featured} className="featured-img imgph" fallbackLabel="/images/blog/featured.jpg" />
              <div className="featured-body">
                {featured.category && <span className="blog-cat">{featured.category}</span>}
                <h2 className="display" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.8rem)', marginTop: 12 }}>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <ReadMore post={featured} className="btn btn--primary">Artikel lesen</ReadMore>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {visible.length > 0 && (
        <section className="section section--white">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Alle Artikel</p>
              <h2 className="display" style={{ marginBottom: 40 }}>Weitere <span className="blue">Beiträge.</span></h2>
            </Reveal>
            <div className="blog-grid">
              {visible.map((post, i) => (
                <Reveal key={post._id || post.slug || post.title} delay={(i % 2) * 0.06} className="blog-card">
                  <PostImage post={post} className="blog-card__img imgph" fallbackLabel={`/images/blog/article-${i + 1}.jpg`} />
                  <div className="blog-card__body">
                    {post.category && <span className="blog-cat">{post.category}</span>}
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <ReadMore post={post}>Weiterlesen</ReadMore>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="finalcta__in">
              {copy.ctaEyebrow && <p className="eyebrow">{copy.ctaEyebrow}</p>}
              {copy.ctaHeadline && <h2 className="display"><Headline text={copy.ctaHeadline} /></h2>}
              {copy.ctaText && <p>{copy.ctaText}</p>}
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
