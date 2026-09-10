import { assetUrl } from '../utils.js'
 
export default function FestivalMap() {
  return (
    <section className="festival-map" id="map">
      <div className="festival-map__inner">
        <p className="eyebrow">Find Your Way</p>
        <h2 className="section-title">Festival Map</h2>
        <img
          className="festival-map__image"
          src={assetUrl('images/Festival Map.png')}
          alt="Map of the festival grounds"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>
    </section>
  )
}
 