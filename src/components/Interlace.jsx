// A repeating interlace/knotwork band, inspired by Coptic textile and
// manuscript border patterns. Used as a section divider throughout the
// page — this is the page's one recurring signature element.
export default function Interlace({ tone = 'gold', flip = false }) {
  const id = `interlace-${tone}-${flip ? 'f' : 'n'}`
  return (
    <div className={`interlace interlace--${tone}`} aria-hidden="true">
      <svg width="100%" height="28" preserveAspectRatio="none" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} width="30" height="28" patternUnits="userSpaceOnUse" patternTransform={flip ? 'scale(1,-1) translate(0,-28)' : ''}>
            <path
              d="M0,14 C4,4 11,4 15,14 C19,24 26,24 30,14
                 M0,14 C4,24 11,24 15,14 C19,4 26,4 30,14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="15" cy="14" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="120" height="28" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
