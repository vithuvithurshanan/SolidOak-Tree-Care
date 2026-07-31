import { useEffect, useState } from 'react'
import { business } from '../data/business'
import { services } from '../data/services'
import { stats, testimonialTicker } from '../data/stats'
import { testimonials } from '../data/testimonials'
import { projects } from '../data/projects'
import ArrowButton from '../components/ArrowButton'
import './Home.css'

const tileColors = ['green', 'rust', 'olive']

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
        <div className="container hero-flex">
          <div className="hero-media">
            <h1>Rooted care, trusted results.</h1>
            <p>
              {business.name} keeps Buffalo, NY properties safe and
              beautiful with expert tree removal, trimming, and emergency
              storm response.
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
            </button>
          </div>

          <div className="hero-details">
            <div className="hero-stats-card">
              {stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta-card">
              <h5>Want tree work done? Click here.</h5>
              <ArrowButton to="/contact" variant="light">
                Get a Free Quote
              </ArrowButton>
            </div>
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
          <div className="scroll-gallery services-gallery">
            {services.map((service, index) => (
              <div
                className={`service-tile service-tile-${tileColors[index % tileColors.length]}`}
                key={service.slug}
              >
                <div className="service-tile-medallion">
                  <span aria-hidden="true">{service.icon}</span>
                </div>
                <h4>{service.title}</h4>
                <div className="service-tile-btn">
                  <ArrowButton to="/services" variant="light">
                    Learn More
                  </ArrowButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="container">
          <div className="feature-card">
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
            <div className="feature-button">
              <ArrowButton to="/about" variant="light">
                How we help
              </ArrowButton>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-grid">
        <div className="container">
          <div className="pill">What Buffalo Says</div>
          <div className="testimonials-bento">
            <div className="testimonial-cell testimonial-cell-rust">
              <div className="testimonial-medallion" />
              <p>{testimonials[0].quote}</p>
              <span className="testimonial-name">— {testimonials[0].name}</span>
            </div>
            <div className="testimonial-cell testimonial-cell-green">
              <p>{testimonials[1].quote}</p>
              <span className="testimonial-name">— {testimonials[1].name}</span>
            </div>
            <div className="testimonial-cell testimonial-cell-olive">
              <p>{testimonials[2].quote}</p>
              <span className="testimonial-name">— {testimonials[2].name}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-slider">
        <div className="container">
          <h2 className="section-title">Recent Work</h2>
          <div className="scroll-gallery projects-gallery">
            {projects.map((project) => (
              <div className="project-pair" key={project.title}>
                <div className="project-image-block" />
                <div className="project-detail-block">
                  <div className="pill">{project.category}</div>
                  <h4>{project.title}</h4>
                  <p>{project.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="estimate-band">
        <div className="container">
          <div className="estimate-card">
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
        </div>
      </section>
    </>
  )
}

export default Home
