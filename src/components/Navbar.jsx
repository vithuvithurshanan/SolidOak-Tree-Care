import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { business } from '../data/business'
import ScrollProgress from './ScrollProgress'
import LogoMark from './LogoMark'
import ArrowButton from './ArrowButton'
import './Navbar.css'

const navItems = [
  { label: 'Home',     path: '/',         hash: '#hero' },
  { label: 'Services', path: '/services', hash: null },
  { label: 'About',    path: '/about',    hash: null },
  { label: 'Reviews',  path: '/reviews',  hash: null },
  { label: 'Work',     path: '/work',     hash: null },
  { label: 'Contact',  path: '/contact',  hash: null },
]

// Home page scroll sections (no longer includes Reviews/Work)
const HOME_SECTIONS = [
  { id: 'hero',              label: 'Home' },
  { id: 'services-showcase', label: 'Home' },
  { id: 'contact',           label: 'Home' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeLabel, setActiveLabel] = useState('Home')
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll spy — which section's top is just above the 40% line of the viewport
  useEffect(() => {
    if (location.pathname !== '/') return

    let rafId = null

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        const trigger = window.innerHeight * 0.4
        let found = HOME_SECTIONS[0]
        for (let i = HOME_SECTIONS.length - 1; i >= 0; i--) {
          const el = document.getElementById(HOME_SECTIONS[i].id)
          if (!el) continue
          if (el.getBoundingClientRect().top <= trigger) {
            found = HOME_SECTIONS[i]
            break
          }
        }
        setActiveLabel(found.label)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [location.pathname])

  // Reset when leaving home
  useEffect(() => {
    if (location.pathname !== '/') setActiveLabel('Home')
  }, [location.pathname])

  const getIsActive = (item) => {
    if (item.hash) {
      // Home link — active when on '/'
      return location.pathname === '/'
    }
    return location.pathname === item.path
  }

  const handleNavClick = (e, item) => {
    e.preventDefault()
    setOpen(false)

    if (item.hash) {
      if (location.pathname === '/') {
        const el = document.querySelector(item.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/')
        const tryScroll = (attemptsLeft) => {
          const el = document.querySelector(item.hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          } else if (attemptsLeft > 0) {
            requestAnimationFrame(() => tryScroll(attemptsLeft - 1))
          }
        }
        requestAnimationFrame(() => requestAnimationFrame(() => tryScroll(10)))
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
        <div className="header-logo" data-title="BUFFALO, NY">
          <svg className="tab-curve-bottom" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M100,0 H0 v100 C0,44.77 44.77,0 100,0 Z" fill="#f9f8f6" />
          </svg>
          <NavLink
            to="/"
            className="logo-link"
            onClick={(e) => handleNavClick(e, { path: '/', hash: '#hero' })}
          >
            <LogoMark size={90} />
          </NavLink>
          <svg className="tab-curve-right" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M100,0 H0 v100 C0,44.77 44.77,0 100,0 Z" fill="#f9f8f6" />
          </svg>
        </div>

        <nav className="header-nav">
          <ul>
            {navItems.map((item) => {
              const isActive = getIsActive(item)
              return (
                <li key={item.label}>
                  <a
                    href={getHref(item)}
                    onClick={(e) => handleNavClick(e, item)}
                    className={isActive ? 'active' : ''}
                  >
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-label-clone" aria-hidden="true">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

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




