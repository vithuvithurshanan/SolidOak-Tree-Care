import { useState } from 'react'
import { business } from '../data/business'
import { services } from '../data/services'
import { stats } from '../data/stats'
import { testimonials } from '../data/testimonials'
import { projects } from '../data/projects'
import ArrowButton from '../components/ArrowButton'
import './Home.css'

const tileColors = ['green', 'rust', 'olive']

function Home() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: 'Tree Removal',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Tree Service Quote Request: ${formState.service} (${formState.name})`
    )
    const body = encodeURIComponent(
      `Name: ${formState.name}\nPhone: ${formState.phone}\nService Needed: ${formState.service}\n\nNotes:\n${formState.message}`
    )
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section id="hero" className="hero">
        <div className="container hero-flex">
          {/* Main Left Hero Card */}
          <div className="hero-media">
            <div className="pill pill-light">Buffalo, NY Tree Care</div>
            <h1>
              Rooted care,
              <br />
              trusted results.
            </h1>
            <p>
              City Roots Tree Services keeps Buffalo properties safe and
              beautiful with expert tree removal, trimming, stump grinding, and
              emergency storm response.
            </p>
            <button
              type="button"
              className="scroll-btn"
              aria-label="Scroll down to services"
              onClick={() =>
                document
                  .getElementById('services-showcase')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="scroll-btn-circle">↓</span>
            </button>
          </div>

          {/* Right Hero Details Stack */}
          <div className="hero-details">
            {/* Top Stats Card with CALL NOW */}
            <div className="hero-stats-card">
              <div className="stats-card-header">
                <ArrowButton href={business.phoneHref} variant="dark">
                  CALL NOW
                </ArrowButton>
              </div>

              <div className="stats-list">
                {stats.map((stat) => (
                  <div className="hero-stat" key={stat.label}>
                    <span className="hero-stat-value">{stat.value}</span>
                    <span className="hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Olive CTA Card */}
            <div className="hero-cta-card">
              <h5>Want tree work done? Click here.</h5>
              <ArrowButton
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                variant="light"
              >
                GET A FREE QUOTE
              </ArrowButton>
            </div>
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
                <p className="service-tile-summary">{service.summary}</p>
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

      <section id="about-section" className="feature-band">
        <div className="container">
          <div className="feature-card">
            <div className="pill pill-light">Why Choose Us</div>
            <h2>Built on Safety, Speed &amp; Integrity</h2>
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

      <section id="testimonials" className="testimonials-grid">
        <div className="container">
          <div className="pill">What Buffalo Says</div>
          <div className="testimonials-bento">
            <div className="testimonial-cell testimonial-cell-rust">
              <div className="testimonial-medallion">🌳</div>
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

      <section id="projects" className="projects-slider">
        <div className="container">
          <div className="pill" style={{ marginBottom: '16px' }}>Our Work</div>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Recent Buffalo Projects</h2>
          <div className="scroll-gallery projects-gallery">
            {projects.map((project) => (
              <div className="project-pair" key={project.title}>
                <div className="project-image-block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                </div>
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


      <section id="contact" className="estimate-band">
        <div className="container">
          <div className="estimate-card">
            <div className="estimate-copy">
              <div className="pill pill-light">Free Estimate</div>
              <h3>Get on our schedule. Reach out today.</h3>
              <p>
                Tell us what you need and we'll follow up quickly with a free
                estimate.
              </p>

              <form className="home-quick-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                  />
                </div>
                <div className="form-row">
                  <select
                    value={formState.service}
                    onChange={(e) =>
                      setFormState({ ...formState, service: e.target.value })
                    }
                  >
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  <textarea
                    rows="3"
                    placeholder="Describe your tree job..."
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  />
                </div>
                <ArrowButton type="submit" variant="light">
                  Request Free Estimate
                </ArrowButton>

                {sent && (
                  <p className="form-sent-msg">
                    Opening your email app! Or call us directly at{' '}
                    <a href={business.phoneHref} style={{ color: '#fff', underline: 'always' }}>
                      {business.phone}
                    </a>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

