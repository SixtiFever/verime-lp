import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useNavScrolled } from '../hooks/useNavScrolled'
import './Nav.css'

const links = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const scrolled = useNavScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="site-header__logo" href="#" onClick={closeMenu}>
          VeriMe
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>

        <nav
          id="primary-nav"
          className={`site-header__nav${menuOpen ? ' site-header__nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-header__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="site-header__cta" href="#waitlist" onClick={closeMenu}>
            Get early access
          </a>
        </nav>
      </div>
    </header>
  )
}
