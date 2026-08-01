import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { business } from '../data/business'
import ScrollProgress from './ScrollProgress'
import LogoMark from './LogoMark'
import ArrowButton from './ArrowButton'
import './Navbar.css'

const navItems = [
  { label: 'Home', path: '/', hash: '#hero' },
  { label: 'Services', path: '/services', hash: '#services-showcase' },
  { label: 'About', path: '/about', hash: '#about-section' },
  { label: 'Reviews', path: '/', hash: '#testimonials' },
  { label: 'Work', path: '/', hash: '#projects' },
  { label: 'Contact', path: '/contact', hash: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (e, item) => {
    setOpen(false)
    if (location.pathname === '/' && item.hash) {
      e.preventDefault()
      const element = document.querySelector(item.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="header-bar">
      <ScrollProgress />

      <div className="container header-cont">
        {/* Signature Inverted Curved Logo Tab */}
        <div className="header-logo" data-title="BUFFALO, NY">
          <svg className="tab-curve-bottom" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M100,0 H0 v100 C0,44.77 44.77,0 100,0 Z" fill="#f9f8f6" />
          </svg>

          <NavLink
            to="/"
            className="logo-link"
            onClick={(e) => handleNavClick(e, { path: '/', hash: '#hero' })}
          >
            <LogoMark size={28} />
            <span className="logo-brand">{business.name}</span>
          </NavLink>

          <svg className="tab-curve-right" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M100,0 H0 v100 C0,44.77 44.77,0 100,0 Z" fill="#f9f8f6" />
          </svg>
        </div>

        {/* Center Floating Glass Menu Capsule */}
        <nav className="header-nav">
          <ul>
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path &&
                (!item.hash || location.hash === item.hash)
              return (
                <li key={item.label}>
                  <a
                    href={location.pathname === '/' ? item.hash : item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={isActive ? 'active' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle-wrap">
          <button
            className="header-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Glass Menu Overlay */}
      {open && (
        <div className="header-mobile-overlay">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={location.pathname === '/' ? item.hash : item.path}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-cta-wrap">
            <ArrowButton href={business.phoneHref} variant="dark">
              Call {business.phone}
            </ArrowButton>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar




