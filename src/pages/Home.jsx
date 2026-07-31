import { useEffect, useState } from 'react'
import { business } from '../data/business'
import { services } from '../data/services'
import { stats, testimonialTicker } from '../data/stats'
import { testimonials } from '../data/testimonials'
import { projects } from '../data/projects'
import ArrowButton from '../components/ArrowButton'
import './Home.css'

function Home() {
  const [tickerIndex, setTickerIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % testimonialTicker.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-title">
            <h1>Rooted care, trusted results.</h1>
            <p>
              {business.name} keeps Buffalo, NY properties safe and beautiful
              with expert tree removal, trimming, and emergency storm
              response.
            </p>
            <button
              type="button"
              className="scroll-btn"
              onClick={() =>
                document
                  .getElementById('services-showcase')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="scroll-btn-circle">↓</span>
              <span>See our services</span>
            </button>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-cta-strip">
          <div className="container hero-cta-strip-inner">
            <h5>Need tree work done? Click here.</h5>
            <ArrowButton to="/contact" variant="light">
              Get a Free Quote
            </ArrowButton>
          </div>
        </div>

        <div className="hero-ticker">
          <div className="container">
            <p key={tickerIndex} className="hero-ticker-text">
              {testimonialTicker[tickerIndex]}
            </p>
          </div>
        </div>
      </section>

      <section className="intro-statement">
        <div className="container narrow">
          <h2>
            We remove, prune, and protect trees so your property stays safe,
            healthy, and beautiful.
          </h2>
        </div>
      </section>

      <section id="services-showcase" className="services-showcase">
        <div className="container">
          <div className="pill">Our Services</div>
        </div>
        <div className="container">
          <div className="scroll-gallery services-gallery">
            {services.map((service) => (
              <div className="service-tile" key={service.slug}>
                <div className="service-tile-image">
                  <span aria-hidden="true">{service.icon}</span>
                </div>
                <h4>{service.title}</h4>
                <ArrowButton to="/services" variant="light">
                  Learn More
                </ArrowButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="container feature-inner">
          <ul className="feature-checklist">
            <li>
              <h4>Licensed, insured tree care professionals</h4>
            </li>
            <li>
              <h4>Same-day emergency storm response</h4>
            </li>
            <li>
              <h4>Upfront pricing, free estimates</h4>
            </li>
            <li>
              <h4>Full cleanup — we leave it spotless</h4>
            </li>
          </ul>
          <ArrowButton to="/about" variant="light">
            How We Help
          </ArrowButton>
        </div>
      </section>

      <section className="testimonials-grid">
        <div className="container">
          <div className="pill">What Buffalo Says</div>
        </div>
        <div className="container testimonials-cols">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <p>{item.quote}</p>
              <span className="testimonial-name">— {item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-slider">
        <div className="container">
          <h2 className="section-title">Recent Work</h2>
        </div>
        <div className="container">
          <div className="scroll-gallery projects-gallery">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="pill">{project.category}</div>
                <h4>{project.title}</h4>
                <p>{project.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="projects-cta">
            <ArrowButton to="/services">See All Services</ArrowButton>
          </div>
        </div>
      </section>

      <section className="estimate-band">
        <div className="container estimate-inner">
          <div className="estimate-copy">
            <h3>Get on our schedule. Reach out today.</h3>
            <p>
              Tell us what you need and we'll follow up quickly with a free
              estimate.
            </p>
          </div>
          <ArrowButton to="/contact" variant="light">
            Request a Quote
          </ArrowButton>
        </div>
      </section>
    </>
  )
}

export default Home
