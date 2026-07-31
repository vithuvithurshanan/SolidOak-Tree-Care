import { Link } from 'react-router-dom'
import { business } from '../data/business'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>{business.name}</h3>
          <p>
            Professional, reliable tree care serving Buffalo, NY and the
            surrounding communities.
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <a href={business.phoneHref}>{business.phone}</a>
          </p>
          <p>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <p>{business.addressFull}</p>
          <p>{business.hours}</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>
            <Link to="/services">Services</Link>
          </p>
          <p>
            <Link to="/about">About Us</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <p>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
          <p>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          &copy; {year} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
