import content from '../content.js'
import Interlace from './Interlace.jsx'
import { assetUrl } from '../utils.js'

export default function Sponsors() {
  const { sponsors } = content

  return (
    <section className="sponsors" id="sponsors">
      <Interlace tone="cream" />
      <div className="sponsors__inner">
        <p className="eyebrow eyebrow--on-dark">{sponsors.heading}</p>
        <h2 className="section-title section-title--on-dark">Thank You</h2>
        <p className="sponsors__body">{sponsors.body}</p>
        
        <div className="sponsors__divider" />

        {sponsors.tiers.map((tier, i) => (
          <div className="sponsor-tier" key={i}>
            <span className="sponsor-tier__label">{tier.tier}</span>
            <div className="sponsor-tier__row">
              {tier.names.map((s, j) => (
                <div className="sponsor-item" key={j}>
                  <div className="sponsor-item__logo-slot">
                    {s.logo ? (
                      <img
                        className="sponsor-item__logo"
                        src={assetUrl(s.logo)}
                        alt={s.name}
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                    ) : null}
                  </div>
                  <span className="sponsor-item__name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}