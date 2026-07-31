import { business } from '../data/business'
import ArrowButton from '../components/ArrowButton'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container page-hero-card">
          <div className="pill">About Us</div>
          <h1>Buffalo's Trusted Local Tree Care Team</h1>
        </div>
      </section>

      <section>
        <div className="container about-grid">
          <div>
            <h2>Our Story</h2>
            <p>
              {business.name} was built on a simple idea: give homeowners and
              businesses in the Buffalo area honest, high-quality tree care
              they can count on. From routine pruning to emergency storm
              cleanup, our crew treats every property like our own.
            </p>
            <p>
              We combine hands-on arborist knowledge with modern equipment
              and safety practices to get the job done right the first time —
              on schedule, on budget, and with a clean site when we leave.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Commitment</h3>
            <ul className="checklist">
              <li>Licensed and insured tree care professionals</li>
              <li>Safety-first approach on every job site</li>
              <li>Clear, upfront estimates — no surprises</li>
              <li>Respect for your property and landscaping</li>
              <li>Locally owned and operated in Buffalo, NY</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Ready to Work With Us?</h2>
          <p>Reach out today for a free, no-obligation estimate.</p>
          <ArrowButton to="/contact" variant="light">
            Contact Us
          </ArrowButton>
        </div>
      </section>
    </div>
  )
}

export default About
