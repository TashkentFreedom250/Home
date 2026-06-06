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
        Thanks to all of our sponsors, vendors, contractors, and volunteers for
        making this event successful and to all of our guests for joining us to
        celebrate the 250th anniversary of the United States of America's
        Independence.
      </p>
      <p className="sponsors-thanks sponsors-thanks-coda">
        Happy Birthday, America! And enjoy the rest of the week — have a good evening!
      </p>
    </section>
  )
}
