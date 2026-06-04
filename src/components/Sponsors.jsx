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
  { key: 'alvarez-marsal',  name: 'Alvarez & Marsal',                  logo: alvarezMarsal, size: 'mark' },
  { key: 'american-paints', name: 'American Paints',                   logo: americanPaints, size: 'wide' },
  { key: 'poytaxt',         name: 'Poytaxt Qurilish va Xizmat'                              },
  { key: 'grant-thornton',  name: 'Grant Thornton',                    logo: grantThornton, size: 'wide' },
  { key: 'sun-petroleum',   name: 'Sun Petroleum Georgia',             logo: sunPetroleum, dark: true },
  { key: 'asia-star-plaza', name: 'Asia Star Plaza'                                         },
  { key: 'balton',          name: 'Balton Trading',                    logo: balton, size: 'balanced' },
  { key: 'aut',             name: 'American University of Technology', logo: aut, size: 'wide' },
  { key: 'franklin',        name: 'Franklin Templeton',                logo: franklin, size: 'wide' },
  { key: 'abbott',          name: 'Abbott',                            logo: abbott, size: 'tall' },
  { key: 'valley',          name: 'Valley by Valmont',                 logo: valley, size: 'wide' },
  { key: 'cnh',             name: 'CNH Industrial'                                          },
  { key: 'constant',        name: 'Constant Holdings'                                       },
  { key: 'mig',             name: 'Mosaic Insurance Group',            logo: mig, size: 'wide' },
  { key: 'traxys',          name: 'Traxys',                            logo: traxys, size: 'wide' },
  { key: 'hyatt',           name: 'Hyatt Regency Tashkent',            logo: hyatt, size: 'tall' },
  { key: 'hampton',         name: 'Hampton by Hilton',                 logo: hampton, size: 'balanced' },
  { key: 'webster',         name: 'Webster University',                logo: webster },
  { key: 'pg',              name: 'Procter & Gamble',                  logo: pg, size: 'mark' },
  { key: 'honeywell',       name: 'Honeywell',                         logo: honeywell, size: 'wide' },
  { key: 'google',          name: 'Google'                                                  },
  { key: 'usapeec',         name: 'USA Poultry & Egg Export Council',  logo: usapeec },
  { key: 'airproducts',     name: 'Air Products',                      logo: airProducts, dark: true },
  { key: 'wendys',          name: "Wendy's",                           logo: wendys },
  { key: 'pepsi',           name: 'Pepsi',                             logo: pepsi, dark: true },
  { key: 'coca-cola',       name: 'Coca-Cola',                         logo: cocaCola, size: 'mark' },
  { key: 'papa-johns',      name: "Papa John's",                       logo: papaJohns, dark: true },
  { key: 'kfc',             name: 'KFC',                               logo: kfc, dark: true },
  { key: 'krispy',          name: 'Krispy Kreme',                      logo: krispyKreme, dark: true },
  { key: 'burger-king',     name: 'Burger King',                       logo: burgerKing },
  { key: 'boeing',          name: 'Boeing',                            logo: boeing, size: 'wide' },
  { key: 'us-beef',         name: 'US Meat Export Federation',         logo: usBeef },
  { key: 'amcham',          name: 'AmCham Uzbekistan',                 logo: amcham },
  { key: 'jpmorgan',        name: 'JPMorgan Chase',                    logo: jpmorgan, dark: true },
  { key: 'crowe',           name: 'Crowe',                             logo: crowe, size: 'wide' },
]

function SponsorTile({ sponsor }) {
  const classes = [
    'sponsor-chip',
    sponsor.size ? `sponsor-chip-${sponsor.size}` : '',
    sponsor.logo ? '' : 'sponsor-chip-missing',
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} title={sponsor.name}>
      {sponsor.logo ? (
        <span className="sponsor-logo-stage">
          <img className="sponsor-logo" src={sponsor.logo} alt={sponsor.name} loading="lazy" />
        </span>
      ) : (
        <span className="sponsor-logo-stage sponsor-logo-stage-missing">
          <span className="sponsor-text">{sponsor.name}</span>
        </span>
      )}
    </div>
  )
}

export default function Sponsors() {
  const rollingSponsors = [...SPONSORS, ...SPONSORS]

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

      <div className="sponsor-wall" role="region" aria-label="Sponsor logos">
        <div className="sponsor-rail">
          {rollingSponsors.map((sponsor, index) => (
            <SponsorTile sponsor={sponsor} key={`${sponsor.key}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
