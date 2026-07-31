import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { business } from '../data/business'
import ScrollProgress from './ScrollProgress'
import ArrowButton from './ArrowButton'
import LogoMark from './LogoMark'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <ScrollProgress />

      <div className="container navbar-bar">
        <NavLink to="/" className="logo-tab" onClick={() => setOpen(false)}>
          <LogoMark size={28} />
          <span>{business.name}</span>
        </NavLink>

        <button
          className="nav-toggle-chip"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className="nav-pill">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="nav-pill-cta">
            <ArrowButton href={business.phoneHref}>Call Now</ArrowButton>
          </div>
        </nav>
      </div>

      {open && (
        <div className="nav-overlay">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="nav-overlay-cta">
            <ArrowButton href={business.phoneHref}>
              Call {business.phone}
            </ArrowButton>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
