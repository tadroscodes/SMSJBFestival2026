import content from '../content.js'

export default function History() {
  const { history } = content

  return (
    <section className="history" id="history">
      <div className="history__media">
        {/* Drop a photo of your church into public/images/ and update the src below */}
        <img
          className="history__image"
          src="images/church-photo.jpg"
          alt="Our church"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>
      <div className="history__text">
        <p className="eyebrow">{history.heading}</p>
        {history.body.map((para, i) => (
          <p className="history__para" key={i}>{para}</p>
        ))}
        <blockquote className="history__blurb">
          {history.festivalBlurb}
        </blockquote>
      </div>
    </section>
  )
}
