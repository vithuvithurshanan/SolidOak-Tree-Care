import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { business } from '../data/business'
import ScrollProgress from './ScrollProgress'
import LogoMark from './LogoMark'
import ArrowButton from './ArrowButton'
import './Navbar.css'

const navItems = [
  { label: 'Home', path: '/', hash: '#hero' },
  { label: 'Services', path: '/services', hash: null },
  { label: 'About', path: '/about', hash: null },
  { label: 'Reviews', path: '/', hash: '#testimonials' },
  { label: 'Work', path: '/', hash: '#projects' },
  { label: 'Contact', path: '/contact', hash: null },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (e, item) => {
    e.preventDefault()
    setOpen(false)

    if (item.hash) {
      // Item has a hash target
      if (location.pathname === '/') {
        // Already on home — just scroll
        const el = document.querySelector(item.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        // Navigate to home first, then scroll after paint
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(item.hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      navigate(item.path)
    }
  }

  const getHref = (item) => {
    if (item.hash && location.pathname === '/') return item.hash
    if (item.hash) return `/${item.hash}`
    return item.path
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
              const isActive = item.hash
                ? location.pathname === '/'
                : location.pathname === item.path
              return (
                <li key={item.label}>
                  <a
                    href={getHref(item)}
                    onClick={(e) => handleNavClick(e, item)}
                    className={isActive && !item.hash ? 'active' : ''}
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
                  href={getHref(item)}
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




