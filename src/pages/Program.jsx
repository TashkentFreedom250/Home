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
      <Link to="/" className="program-hero" aria-label="Back to home">
        <span className="program-back">← Back</span>
      </Link>

      <section className="program-body">
        <h1 className="program-title">Program</h1>
        <p className="program-sub">June 10, 2026 · Uzexpocentre, Tashkent</p>
        {note && <p className="program-note">{note}</p>}

        <ol className="program-list">
          {blocks.map((block, i) => (
            <li className={`program-row cat-${block.category}`} key={i}>
              <time className="program-time">{block.time}</time>
              <div className="program-item">
                <span className="program-item-text">{block.item}</span>
                <span className="program-tag">
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
