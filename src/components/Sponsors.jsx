import { freedomIconGold } from '../assets/freedom250'

export default function Sponsors() {
  return (
    <section className="sponsors enter d2" aria-labelledby="sponsors-heading">
      <header className="sponsors-head">
        <span className="sponsors-eyebrow">
          <img src={freedomIconGold} alt="" aria-hidden="true" />
          With gratitude
        </span>
        <h2 id="sponsors-heading" className="sponsors-title">
          Thank you to our <em>sponsors</em>
        </h2>
      </header>

      <p className="sponsors-thanks">
        Freedom 250 would not be possible without you. Your generosity, partnership,
        and belief in this celebration are what bring the night to life — from the
        first note of the anthem to the last burst of fireworks over Tashkent.
        Thank you for standing with us.
      </p>
    </section>
  )
}
