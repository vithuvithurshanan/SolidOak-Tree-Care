import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { services } from '../data/services'
import './Home.css'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Trusted Tree Care in Buffalo, NY</h1>
          <p>
            {business.name} provides professional tree removal, trimming,
            stump grinding, and emergency storm cleanup for homes and
            businesses throughout the Buffalo area.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <a href={business.phoneHref} className="btn btn-outline">
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From routine pruning to emergency storm response, our certified
            crew handles every job with safety and care.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.slug}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container why-us-grid">
          <div>
            <h2>Why Choose {business.name}?</h2>
            <ul className="checklist">
              <li>Licensed, insured, and experienced tree care professionals</li>
              <li>Prompt emergency response for storm damage</li>
              <li>Upfront, honest pricing with free estimates</li>
              <li>Full cleanup after every job — we leave your property spotless</li>
              <li>Proudly serving Buffalo and the surrounding communities</li>
            </ul>
          </div>
          <div className="why-us-card">
            <h3>Request a Free Estimate</h3>
            <p>
              Call, text, or send us a message and we'll get back to you
              quickly to schedule your service.
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={business.phoneHref}>{business.phone}</a>
            </p>
            <p>
              <strong>Address:</strong> {business.addressFull}
            </p>
            <p>
              <strong>Hours:</strong> {business.hours}
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Need Tree Service Today?</h2>
          <p>Our team is ready to help with your tree care needs.</p>
          <a href={business.phoneHref} className="btn btn-outline">
            Call {business.phone}
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
