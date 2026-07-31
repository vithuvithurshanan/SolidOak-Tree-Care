import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { services } from '../data/services'
import './Services.css'

function Services() {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Tree Care Services</h1>
          <p>
            {business.name} offers a full range of professional tree services
            for residential and commercial properties in Buffalo, NY.
          </p>
        </div>
      </section>

      <section>
        <div className="container services-list">
          {services.map((service) => (
            <div className="service-row" key={service.slug}>
              <div className="service-row-icon">{service.icon}</div>
              <div>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Contact us for a free consultation and estimate.</p>
          <Link to="/contact" className="btn btn-outline">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
