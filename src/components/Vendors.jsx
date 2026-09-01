import content from '../content.js'
 
export default function Vendors() {
  const { vendors } = content
 
  return (
    <section className="vendors" id="vendors">
      <div className="vendors__inner">
        <p className="eyebrow">{vendors.heading}</p>
        <h2 className="section-title">Meet Our Vendors</h2>
        <p className="vendors__body">{vendors.body}</p>
 
        <ul className="vendors__list">
          {vendors.list.map((v, i) => (
            <li className="vendor-item" key={i}>
              <span className="vendor-item__name">{v.name}</span>
              {v.url ? (
                <a
                  className="vendor-item__link"
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              ) : (
                <span className="vendor-item__link vendor-item__link--none">—</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}