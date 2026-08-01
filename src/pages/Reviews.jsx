import { testimonials } from '../data/testimonials'
import { usePageTitle } from '../hooks/usePageTitle'
import ArrowButton from '../components/ArrowButton'
import { business } from '../data/business'
import './Reviews.css'

const colors = ['rust', 'green', 'olive', 'charcoal']

function Reviews() {
  usePageTitle('Customer Reviews')

  return (
    <div className="reviews-page">
      <section className="page-hero">
        <div className="container page-hero-card reviews-hero-card">
          <div className="pill pill-light">Reviews</div>
          <h1>What Our Customers Say</h1>
          <p>Real reviews from Buffalo homeowners and businesses we've served.</p>
        </div>
      </section>

      <section>
        <div className="container reviews-grid">
          {testimonials.map((t, i) => {
            const color = colors[i % colors.length]
            return (
              <div className={`review-card review-card-${color}`} key={t.name}>
                <div className="review-card-icon" aria-hidden="true">🌳</div>
                <blockquote className="review-quote">"{t.quote}"</blockquote>
                <span className="review-name">— {t.name}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Ready to Join Our Happy Customers?</h2>
          <p>Get a free estimate today — no obligation.</p>
          <ArrowButton href={business.phoneHref} variant="light">
            Call {business.phone}
          </ArrowButton>
        </div>
      </section>
    </div>
  )
}

export default Reviews
