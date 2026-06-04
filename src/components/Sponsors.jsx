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
  { key: 'alvarez-marsal',  name: 'Alvarez & Marsal',                  logo: alvarezMarsal },
  { key: 'american-paints', name: 'American Paints',                   logo: americanPaints },
  { key: 'poytaxt',         name: 'Poytaxt Qurilish va Xizmat'                              },
  { key: 'grant-thornton',  name: 'Grant Thornton',                    logo: grantThornton },
  { key: 'sun-petroleum',   name: 'Sun Petroleum Georgia',             logo: sunPetroleum, dark: true },
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
  { key: 'hyatt',           name: 'Hyatt Regency Tashkent',            logo: hyatt },
  { key: 'hampton',         name: 'Hampton by Hilton',                 logo: hampton },
  { key: 'webster',         name: 'Webster University',                logo: webster },
  { key: 'pg',              name: 'Procter & Gamble',                  logo: pg },
  { key: 'honeywell',       name: 'Honeywell',                         logo: honeywell },
  { key: 'google',          name: 'Google'                                                  },
  { key: 'usapeec',         name: 'USA Poultry & Egg Export Council',  logo: usapeec },
  { key: 'airproducts',     name: 'Air Products',                      logo: airProducts, dark: true },
  { key: 'wendys',          name: "Wendy's",                           logo: wendys },
  { key: 'pepsi',           name: 'Pepsi',                             logo: pepsi, dark: true },
  { key: 'coca-cola',       name: 'Coca-Cola',                         logo: cocaCola },
  { key: 'papa-johns',      name: "Papa John's",                       logo: papaJohns, dark: true },
  { key: 'kfc',             name: 'KFC',                               logo: kfc, dark: true },
  { key: 'krispy',          name: 'Krispy Kreme',                      logo: krispyKreme, dark: true },
  { key: 'burger-king',     name: 'Burger King',                       logo: burgerKing },
  { key: 'boeing',          name: 'Boeing',                            logo: boeing },
  { key: 'us-beef',         name: 'US Meat Export Federation',         logo: usBeef },
  { key: 'amcham',          name: 'AmCham Uzbekistan',                 logo: amcham },
  { key: 'jpmorgan',        name: 'JPMorgan Chase',                    logo: jpmorgan, dark: true },
  { key: 'crowe',           name: 'Crowe',                             logo: crowe },
]

function SponsorTile({ sponsor, duplicate = false }) {
  const classes = [
    'sponsor-chip',
    sponsor.dark ? 'sponsor-chip-dark' : '',
    sponsor.logo ? '' : 'sponsor-chip-missing',
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} title={sponsor.name} aria-hidden={duplicate ? 'true' : undefined}>
      {sponsor.logo ? (
        <img className="sponsor-logo" src={sponsor.logo} alt={duplicate ? '' : sponsor.name} loading="lazy" />
      ) : (
        <span className="sponsor-text">{sponsor.name}</span>
      )}
    </div>
  )
}

export default function Sponsors() {
  const splitAt = Math.ceil(SPONSORS.length / 2)
  const rows = [
    SPONSORS.slice(0, splitAt),
    SPONSORS.slice(splitAt),
  ]

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
        {rows.map((row, rowIndex) => (
          <div className="sponsor-rail" key={rowIndex}>
            <div className={`sponsor-rail-track sponsor-rail-track-${rowIndex + 1}`}>
              {[...row, ...row].map((sponsor, index) => (
                <SponsorTile
                  sponsor={sponsor}
                  duplicate={index >= row.length}
                  key={`${sponsor.key}-${rowIndex}-${index}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
