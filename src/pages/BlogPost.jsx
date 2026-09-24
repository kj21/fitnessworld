import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PortableText from '../components/PortableText'
import Placeholder from './Placeholder'
import { useBlogPosts } from '../lib/content.js'

const isUrl = (s) => /^https?:\/\//.test(String(s || ''))

export default function BlogPost() {
  const { slug = '' } = useParams()
  const { posts, loading } = useBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) document.title = `${post.title} | Fitness World Studios`
  }, [post])

  if (!post) return loading ? null : <Placeholder />

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })
    : null

  return (
    <main>
      <section className="section section--dark" style={{ paddingTop: 140, paddingBottom: 56 }}>
        <div className="wrap legal-wrap">
          <Reveal>
            {post.category && <p className="eyebrow">{post.category}</p>}
            <h1 className="display">{post.title}</h1>
            {date && <p className="muted" style={{ marginTop: 16 }}>{date}</p>}
          </Reveal>
        </div>
      </section>

      <section className="section section--white" style={{ paddingTop: 56 }}>
        <div className="wrap legal-wrap">
          <Reveal>
            {isUrl(post.image) && (
              <img
                className="article-img"
                src={`${post.image}?w=1400&auto=format`}
                alt={post.title}
                loading="lazy"
              />
            )}
            {post.excerpt && <p className="lede" style={{ marginBottom: 28 }}>{post.excerpt}</p>}
            <PortableText value={post.body} />
            <p style={{ marginTop: 40 }}><Link className="textlink" to="/blog">Zurück zum Magazin <span className="arr">→</span></Link></p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
