import content from '../content.js'

function CrossIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 L12 22 M12 2 C9 4 8 6 8 8 M12 2 C15 4 16 6 16 8 M5 9 H19 M5 9 C6 6 8.5 9 8 9 M19 9 C18 6 15.5 9 16 9"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Footer() {
  const { church, social } = content

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span>{church.shortName}</span>
        </div>

        <div className="footer__links">
          <a href={social.youtube} target="_blank" rel="noreferrer">YouTube</a>
          <a href={social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={social.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={social.website} target="_blank" rel="noreferrer">SMSJB Website</a>
        </div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {church.name}. All are welcome.
        </p>
      </div>
    </footer>
  )
}
