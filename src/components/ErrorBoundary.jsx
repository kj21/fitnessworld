import { Component } from 'react'
import Button from './Button'

/**
 * Keeps one broken page (e.g. an unexpected empty field from Sanity) from
 * blanking the whole site. Header and footer stay; the page area shows a
 * friendly message. `resetKey` (the pathname) clears the error on navigation.
 */
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[Page error]', error, info?.componentStack)
  }

  componentDidUpdate(prev) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) this.setState({ error: null })
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <main>
        <section className="hero" aria-label="Fehler">
          <div className="hero__bg" />
          <div className="hero__inner">
            <p className="eyebrow">Hoppla</p>
            <h1 className="display"><span>Diese Seite</span><span className="blue">klemmt gerade.</span></h1>
            <p className="lede">Bitte lade die Seite neu oder versuch es gleich noch einmal.</p>
            <div className="hero__cta">
              <Button to="/">Zur Startseite</Button>
              <Button to="/kontakt" variant="ghost-light">Kontakt</Button>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
