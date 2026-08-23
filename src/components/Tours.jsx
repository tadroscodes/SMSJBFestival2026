import content from '../content.js'

export default function Tours() {
  const { tours } = content

  return (
    <section className="tours" id="tours">
      <div className="tours__inner">
        <p className="eyebrow">{tours.heading}</p>
        <h2 className="section-title">Walk Through Our Church</h2>
        <p className="tours__body">{tours.body}</p>

        <div className="tours__schedule">
          {tours.schedule.map((day, i) => (
            <div className="tours__day" key={i}>
              <span className="tours__day-name">{day.day}</span>
              <div className="tours__times">
                {day.times.map((t, j) => (
                  <span className="tours__time" key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="tours__note">{tours.note}</p>
      </div>
    </section>
  )
}
