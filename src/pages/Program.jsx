import { Link } from 'react-router-dom'
import { getProgramRundown } from '../api'
import Sponsors from '../components/Sponsors'

const CATEGORY_LABEL = {
  ceremony:      'Ceremony',
  entertainment: 'Show',
  logistics:     'Doors',
}

export default function Program() {
  const { blocks, note } = getProgramRundown()

  return (
    <main className="program">
      <div className="program-hero">
        <Link to="/" className="program-back" aria-label="Back to home">← Back</Link>
        <div className="program-hero-overlay">
          <h1 className="program-hero-title">Program Information</h1>
          <p className="program-hero-sub">June 10, 2026 · Uzexpocentre, Tashkent</p>
        </div>
      </div>

      <section className="program-body">
        {note && <p className="program-note">{note}</p>}

        <ol className="program-list">
          {blocks.map((block, i) => (
            <li className={`program-row cat-${block.category}`} key={i}>
              <span className="program-row-rail" aria-hidden="true" />
              <time className="program-row-time">{block.time}</time>
              <div className="program-row-content">
                <p className="program-row-item">{block.item}</p>
                <span className="program-row-tag">
                  {CATEGORY_LABEL[block.category] ?? block.category}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Sponsors />
    </main>
  )
}
