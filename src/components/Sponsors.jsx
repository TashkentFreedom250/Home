import { freedomIconGold } from '../assets/freedom250'
import boeing from '../assets/sponsors/boeing.png'
import pg from '../assets/sponsors/pg.jpg'
import grantThornton from '../assets/sponsors/grant-thornton.jpg'
import honeywell from '../assets/sponsors/honeywell.svg'
import abbott from '../assets/sponsors/abbott.jpg'
import franklin from '../assets/sponsors/franklin-templeton.png'
import alvarezMarsal from '../assets/sponsors/alvarez-marsal.jpg'
import hyatt from '../assets/sponsors/hyatt-regency.png'
import hampton from '../assets/sponsors/hampton.png'
import webster from '../assets/sponsors/webster.png'
import aut from '../assets/sponsors/aut.svg'
import wendys from '../assets/sponsors/wendys.png'
import usapeec from '../assets/sponsors/usapeec.jpg'
import valley from '../assets/sponsors/valley.jpg'
import usBeef from '../assets/sponsors/us-beef.png'
import burgerKing from '../assets/sponsors/burger-king.png'
import mig from '../assets/sponsors/mig.png'
import balton from '../assets/sponsors/balton.png'
import americanPaints from '../assets/sponsors/american-paints.png'

const SPONSORS = [
  { key: 'boeing',          name: 'Boeing',                          logo: boeing },
  { key: 'pg',              name: 'Procter & Gamble',                logo: pg },
  { key: 'grant-thornton',  name: 'Grant Thornton',                  logo: grantThornton },
  { key: 'honeywell',       name: 'Honeywell',                       logo: honeywell },
  { key: 'abbott',          name: 'Abbott',                          logo: abbott },
  { key: 'franklin',        name: 'Franklin Templeton',              logo: franklin },
  { key: 'alvarez-marsal',  name: 'Alvarez & Marsal',                logo: alvarezMarsal },
  { key: 'hyatt',           name: 'Hyatt Regency Tashkent',          logo: hyatt },
  { key: 'hampton',         name: 'Hampton by Hilton',               logo: hampton },
  { key: 'webster',         name: 'Webster University Tashkent',     logo: webster },
  { key: 'aut',             name: 'American University of Technology',logo: aut },
  { key: 'wendys',          name: "Wendy's",                         logo: wendys },
  { key: 'usapeec',         name: 'USA Poultry & Egg Export Council', logo: usapeec },
  { key: 'valley',          name: 'Valley by Valmont',               logo: valley },
  { key: 'us-beef',         name: 'US Meat Export Federation',       logo: usBeef },
  { key: 'burger-king',     name: 'Burger King',                     logo: burgerKing },
  { key: 'mig',             name: 'Mosaic Insurance Group',          logo: mig },
  { key: 'balton',          name: 'Balton Trading',                  logo: balton },
  { key: 'american-paints', name: 'American Paints',                 logo: americanPaints },
]

function SponsorTile({ sponsor }) {
  return (
    <div className="sponsor-chip" title={sponsor.name}>
      <img className="sponsor-logo" src={sponsor.logo} alt={sponsor.name} loading="lazy" />
    </div>
  )
}

export default function Sponsors() {
  const loop = [...SPONSORS, ...SPONSORS]

  return (
    <section className="sponsors enter d2" aria-labelledby="sponsors-heading">
      <header className="sponsors-head">
        <span className="sponsors-eyebrow">
          <img src={freedomIconGold} alt="" aria-hidden="true" />
          Powered by our partners
        </span>
        <h2 id="sponsors-heading" className="sponsors-title">
          Official sponsors of <em>Freedom 250</em>
        </h2>
      </header>

      <div className="sponsor-rail" role="region" aria-label="Sponsor logos">
        <div className="sponsor-rail-track">
          {loop.map((sponsor, index) => (
            <SponsorTile sponsor={sponsor} key={`${sponsor.key}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
