import { useRef, useEffect, useState } from 'react'
import { business } from '../data/business'
import { services } from '../data/services'
import { stats } from '../data/stats'
import { testimonials } from '../data/testimonials'
import { projects } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import ArrowButton from '../components/ArrowButton'
import './Home.css'

const tileColors = ['green', 'rust', 'olive']

function Home() {
  usePageTitle('Buffalo Tree Care — Removal, Trimming & Emergency Service')

  // Scroll-scrubbed sticky notes for Why Choose Us
  const sectionRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(0)

  const checklistItems = [
    'Licensed, insured tree care professionals',
    'Same-day emergency storm response',
    'Upfront pricing, free estimates',
    'Full cleanup — we leave it spotless',
  ]

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const sectionH = el.offsetHeight
      const winH = window.innerHeight
      const scrolled = -rect.top
      const scrollable = sectionH - winH
      const progress = Math.max(0, Math.min(1, scrolled / scrollable))
      const count = Math.min(
        checklistItems.length,
        Math.floor(progress * (checklistItems.length + 1))
      )
      setVisibleCount(count)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [checklistItems.length])

  return (
    <>
      {/* Hero */}
      <section id="hero" className="hero">
        <div className="container hero-flex">
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

          <div className="hero-details">
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

      {/* Intro */}
      <section className="intro-statement">
        <div className="container narrow">
          <h2>
            We remove, prune, and protect trees so your property stays safe,
            healthy, and beautiful.
          </h2>
        </div>
      </section>

      {/* Services showcase */}
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

      {/* Why Choose Us — sticky scroll */}
      <section id="about-section" className="feature-band" ref={sectionRef}>
        <div className="feature-sticky-wrap">
          <div className="container">
            <div className="feature-card">
              <div className="pill pill-light">Why Choose Us</div>
              <h2>Built on Safety, Speed &amp; Integrity</h2>
              <ul className="feature-checklist">
                {checklistItems.map((text, i) => (
                  <li
                    key={text}
                    className={`sticky-note sticky-note-${i} ${i < visibleCount ? 'checklist-visible' : ''}`}
                    style={{
                      transitionDelay: i < visibleCount
                        ? `${i * 100}ms`
                        : `${(checklistItems.length - 1 - i) * 60}ms`,
                    }}
                  >
                    <h4>{text}</h4>
                  </li>
                ))}
              </ul>
              <div className={`feature-button ${visibleCount === checklistItems.length ? 'checklist-visible' : ''}`}>
                <ArrowButton to="/about" variant="light">
                  How we help
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Projects */}
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
    </>
  )
}

export default Home
