import content from '../content.js'
import Interlace from './Interlace.jsx'

export default function Hero() {
  const { church, festival, event } = content

  return (
    <header className="hero">
      <nav className="hero__nav">
        <span className="hero__church-name">{church.shortName}</span>
        <a className="hero__nav-link" href="#tours">Tours</a>
        <a className="hero__nav-link" href="#sponsors">Sponsors</a>
      </nav>

      <div className="hero__content">
        <p className="eyebrow">{church.name}</p>
        <h1 className="hero__title">{festival.name}</h1>
        <p className="hero__tagline">{festival.tagline}</p>

        <div className="hero__details">
          <div className="hero__detail">
            <span className="hero__detail-label">Date</span>
            <span className="hero__detail-value">{event.dateLabel}</span>
          </div>
          <div className="hero__detail-rule" />
          <div className="hero__detail">
            <span className="hero__detail-label">Time</span>
            <span className="hero__detail-value">{event.timeLabel}</span>
          </div>
          <div className="hero__detail-rule" />
          <div className="hero__detail">
            <span className="hero__detail-label">Location</span>
            <a className="hero__detail-value hero__detail-value--link" href={event.mapUrl} target="_blank" rel="noreferrer">
              {event.locationName}
            </a>
          </div>
        </div>
      </div>

      <Interlace tone="gold" />
    </header>
  )
}
