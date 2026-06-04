import { freedomIconGold } from '../assets/freedom250'
import boeing from '../assets/sponsors/boeing.png'
import pg from '../assets/sponsors/pg.jpg'
import grantThornton from '../assets/sponsors/grant-thornton.jpg'
import honeywell from '../assets/sponsors/honeywell.svg'
import abbott from '../assets/sponsors/abbott.jpg'
import franklin from '../assets/sponsors/franklin-templeton.png'
import alvarezMarsal from '../assets/sponsors/alvarez-marsal.jpg'
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
import pepsi from '../assets/sponsors/pepsi.jpg'
import cocaCola from '../assets/sponsors/coca-cola.jpg'
import papaJohns from '../assets/sponsors/papa-johns.jpg'
import kfc from '../assets/sponsors/kfc.jpg'
import krispyKreme from '../assets/sponsors/krispy-kreme.jpg'
import jpmorgan from '../assets/sponsors/jpmorgan.jpg'
import amcham from '../assets/sponsors/amcham.jpg'
import airProducts from '../assets/sponsors/air-products.jpg'
import traxys from '../assets/sponsors/traxys.jpg'
import sunPetroleum from '../assets/sponsors/sun-petroleum.png'
import crowe from '../assets/sponsors/crowe.jpg'

const SPONSORS = [
  { key: 'alvarez-marsal',  name: 'Alvarez & Marsal',                  logo: alvarezMarsal },
  { key: 'american-paints', name: 'American Paints',                   logo: americanPaints },
  { key: 'poytaxt',         name: 'Poytaxt Qurilish va Xizmat'                              },
  { key: 'grant-thornton',  name: 'Grant Thornton',                    logo: grantThornton },
  { key: 'sun-petroleum',   name: 'Sun Petroleum Georgia',             logo: sunPetroleum },
  { key: 'asia-star-plaza', name: 'Asia Star Plaza'                                         },
  { key: 'balton',          name: 'Balton Trading',                    logo: balton },
  { key: 'aut',             name: 'American University of Technology', logo: aut },
  { key: 'franklin',        name: 'Franklin Templeton',                logo: franklin },
  { key: 'abbott',          name: 'Abbott',                            logo: abbott },
  { key: 'valley',          name: 'Valley by Valmont',                 logo: valley },
  { key: 'cnh',             name: 'CNH Industrial'                                          },
  { key: 'constant',        name: 'Constant Holdings'                                       },
  { key: 'mig',             name: 'Mosaic Insurance Group',            logo: mig },
  { key: 'traxys',          name: 'Traxys',                            logo: traxys },
  { key: 'webster',         name: 'Webster University',                logo: webster },
  { key: 'pg',              name: 'Procter & Gamble',                  logo: pg },
  { key: 'honeywell',       name: 'Honeywell',                         logo: honeywell },
  { key: 'google',          name: 'Google'                                                  },
  { key: 'usapeec',         name: 'USA Poultry & Egg Export Council',  logo: usapeec },
  { key: 'airproducts',     name: 'Air Products',                      logo: airProducts },
  { key: 'wendys',          name: "Wendy's",                           logo: wendys },
  { key: 'pepsi',           name: 'Pepsi',                             logo: pepsi },
  { key: 'coca-cola',       name: 'Coca-Cola',                         logo: cocaCola },
  { key: 'papa-johns',      name: "Papa John's",                       logo: papaJohns },
  { key: 'kfc',             name: 'KFC',                               logo: kfc },
  { key: 'krispy',          name: 'Krispy Kreme',                      logo: krispyKreme },
  { key: 'burger-king',     name: 'Burger King',                       logo: burgerKing },
  { key: 'boeing',          name: 'Boeing',                            logo: boeing },
  { key: 'us-beef',         name: 'US Meat Export Federation',         logo: usBeef },
  { key: 'amcham',          name: 'AmCham Uzbekistan',                 logo: amcham },
  { key: 'jpmorgan',        name: 'JPMorgan Chase',                    logo: jpmorgan },
  { key: 'crowe',           name: 'Crowe',                             logo: crowe },
]

function SponsorTile({ sponsor }) {
  return (
    <div className="sponsor-chip" title={sponsor.name}>
      {sponsor.logo ? (
        <img className="sponsor-logo" src={sponsor.logo} alt={sponsor.name} loading="lazy" />
      ) : (
        <span className="sponsor-text">{sponsor.name}</span>
      )}
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
