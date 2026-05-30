import { Link } from 'react-router-dom'
import { freedomLogoGold } from '../assets/freedom250'
import banner from '../assets/banner/freedom250-banner.jpg'
import GlobeLoader from '../components/GlobeLoader'

export default function Landing() {
  return (
    <main className="landing">
      <img className="landing-banner" src={banner} alt="" aria-hidden="true" />

      <div className="landing-hero">
        <div className="landing-stage">
          <GlobeLoader size={320} />
          <img className="landing-logo" src={freedomLogoGold} alt="Freedom 250" />
        </div>
      </div>

      <div className="landing-meta">
        <span className="landing-meta-rule" aria-hidden="true" />
        <p className="landing-date">June 10 · 2026</p>
        <p className="landing-place">Tashkent · Uzexpocentre</p>
      </div>

      <Link className="landing-cta" to="/program">
        <span className="landing-cta-label">Program Overview</span>
        <span className="landing-cta-arrow" aria-hidden="true">→</span>
      </Link>
    </main>
  )
}
