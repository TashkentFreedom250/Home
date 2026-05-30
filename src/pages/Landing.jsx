import { Link } from 'react-router-dom'
import { freedomLogoGold } from '../assets/freedom250'
import banner from '../assets/banner/freedom250-banner.jpg'

export default function Landing() {
  return (
    <main className="landing">
      <div className="landing-top">
        <div className="landing-stage">
          <div className="landing-halo" aria-hidden="true" />
          <img className="landing-logo" src={freedomLogoGold} alt="Freedom 250" />
        </div>
      </div>

      <img className="landing-banner" src={banner} alt="" aria-hidden="true" />

      <div className="landing-bottom">
        <p className="landing-meta">June 10, 2026 · Tashkent</p>
        <Link to="/program" className="landing-cta">Program Overview</Link>
      </div>
    </main>
  )
}
