import content from '../content.js'
import Interlace from './Interlace.jsx'

export default function Activities() {
  return (
    <section className="activities" id="activities">
      <Interlace tone="cream" />
      <div className="activities__inner">
        <p className="eyebrow eyebrow--on-dark">What's Happening</p>
        <h2 className="section-title section-title--on-dark">Festival Activities</h2>

        <div className="activities__grid">
          {content.activities.map((a, i) => (
            <div className="activity-card" key={i}>
              <span className="activity-card__time">{a.time}</span>
              <h3 className="activity-card__title">{a.title}</h3>
              <p className="activity-card__desc">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Interlace tone="cream" flip />
    </section>
  )
}
