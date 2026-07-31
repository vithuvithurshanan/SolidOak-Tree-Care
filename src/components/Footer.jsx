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
      <div className="container footer-top">
        <p>
          Proudly serving Buffalo, NY and the surrounding communities with
          honest, professional tree care.
        </p>
      </div>

      <div className="container footer-main">
        <div className="footer-location">
          <div>{business.addressFull}</div>
          <a href={business.phoneHref}>{business.phone}</a>
        </div>

        <nav className="footer-nav">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <LogoMark size={40} background="var(--bg)" foreground="var(--green)" />
          <span>
            &copy; {year} {business.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
