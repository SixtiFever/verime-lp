import './Footer.css'

const footerLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#', label: '© 2026' }
]

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <span className="site-footer__logo">VeriMe</span>
            <p className="site-footer__tagline">
              hello@verime.co.uk
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            <ul className="site-footer__links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
