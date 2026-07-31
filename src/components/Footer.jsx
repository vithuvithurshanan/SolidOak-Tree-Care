import { Link } from 'react-router-dom'
import { business } from '../data/business'
import LogoMark from './LogoMark'
import './Footer.css'

const footerLinks = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-panel">
          <div className="footer-blurb">
            <p>
              Proudly serving Buffalo, NY and the surrounding communities
              with honest, professional tree care.
            </p>
            <div className="footer-location">
              <div>{business.addressFull}</div>
              <a href={business.phoneHref}>{business.phone}</a>
            </div>
          </div>

          <div className="footer-links">
            <nav className="footer-nav">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="footer-bottom">
              <LogoMark size={44} background="#fff" foreground="var(--green)" />
              <span>
                &copy; {year} {business.name}. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
