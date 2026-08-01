import { business } from '../data/business'
import { usePageTitle } from '../hooks/usePageTitle'
import ArrowButton from '../components/ArrowButton'
import './About.css'

const milestones = [
  { value: '12+', label: 'Years in Business' },
  { value: '500+', label: 'Trees Removed' },
  { value: '4.9★', label: 'Customer Rating' },
  { value: '100%', label: 'Licensed & Insured' },
]

const certifications = [
  { icon: '🏆', title: 'Fully Licensed', desc: 'NY State licensed tree care operators on every job.' },
  { icon: '🛡️', title: 'Fully Insured', desc: 'General liability + workers\' comp — protecting you and our crew.' },
  { icon: '🌿', title: 'ISA-Trained Crew', desc: 'Our team follows International Society of Arboriculture standards.' },
  { icon: '⚡', title: '24/7 Emergency', desc: 'Storm response available around the clock, year-round.' },
]

function About() {
  usePageTitle('About Us')

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container page-hero-card about-hero-card">
          <div className="pill pill-light">About Us</div>
          <h1>Buffalo's Trusted Local Tree Care Team</h1>
          <p>Locally owned and operated — serving Western New York for over 12 years.</p>
        </div>
      </section>

      {/* Stats band */}
      <section className="about-stats-band">
        <div className="container">
          <div className="about-stats-grid">
            {milestones.map((m) => (
              <div className="about-stat-card" key={m.label}>
                <span className="about-stat-value">{m.value}</span>
                <span className="about-stat-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="container about-story-grid">
          <div className="about-story-text">
            <div className="pill">Our Story</div>
            <h2>Built on Honest Work</h2>
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
            <p>
              We're your neighbors. We live and work in the same neighborhoods
              we service, which means we care about the result as much as you do.
            </p>
          </div>
          <div className="about-image-block" aria-hidden="true">
            <div className="about-image-placeholder">
              <span>🌳</span>
              <p>Serving Buffalo since 2013</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <div className="container">
          <div className="pill" style={{ marginBottom: '32px' }}>Why Trust Us</div>
          <div className="about-cert-grid">
            {certifications.map((c) => (
              <div className="about-cert-card" key={c.title}>
                <span className="about-cert-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment checklist */}
      <section>
        <div className="container">
          <div className="about-commitment-card">
            <div className="about-commitment-text">
              <div className="pill pill-light">Our Promise</div>
              <h2>What You Can Always Expect</h2>
              <ul className="checklist">
                <li>Licensed and insured tree care professionals</li>
                <li>Safety-first approach on every job site</li>
                <li>Clear, upfront estimates — no surprises</li>
                <li>Respect for your property and landscaping</li>
                <li>Full debris cleanup before we leave</li>
                <li>Locally owned and operated in Buffalo, NY</li>
              </ul>
            </div>
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
