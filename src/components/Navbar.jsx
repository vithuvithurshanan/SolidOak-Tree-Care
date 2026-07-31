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
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <LogoMark />
          <span>{business.name}</span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="nav-cta">
            <ArrowButton href={business.phoneHref}>Call {business.phone}</ArrowButton>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
