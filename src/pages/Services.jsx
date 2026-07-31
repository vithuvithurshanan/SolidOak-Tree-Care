import { business } from '../data/business'
import { services } from '../data/services'
import ArrowButton from '../components/ArrowButton'
import './Services.css'

function Services() {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container page-hero-card">
          <div className="pill">Our Services</div>
          <h1>Tree Care for Every Property</h1>
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
          <ArrowButton to="/contact" variant="light">
            Get a Free Quote
          </ArrowButton>
        </div>
      </section>
    </div>
  )
}

export default Services
