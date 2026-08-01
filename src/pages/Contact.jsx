import { useEffect } from 'react'
import { business } from '../data/business'
import { usePageTitle } from '../hooks/usePageTitle'
import './Contact.css'

function Contact() {
  usePageTitle('Contact Us — Free Estimate')

  // Load KDLead embed script once
  useEffect(() => {
    const existing = document.getElementById('kdlead-embed-script')
    if (existing) return
    const script = document.createElement('script')
    script.id = 'kdlead-embed-script'
    script.src = 'https://link.kdlead.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container page-hero-card contact-hero-card">
          <div className="pill pill-light">Contact Us</div>
          <h1>Get a Free Estimate</h1>
          <p>Reach out and we'll follow up quickly.</p>
        </div>
      </section>

      <section>
        <div className="container contact-grid">

          {/* Left — contact info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={business.phoneHref}>{business.phone}</a>
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              {business.address.line1}
              <br />
              {business.address.city}, {business.address.state}{' '}
              {business.address.zip}
              <br />
              {business.address.country}
            </p>
            <p>
              <strong>Hours:</strong> {business.hours}
            </p>
          </div>

          {/* Right — KDLead embedded form */}
          <div className="contact-form-wrap">
            <iframe
              src="https://link.kdlead.com/widget/form/WYr7Z9l4MmFaS5Ov88km"
              style={{ width: '100%', height: '877px', border: 'none', borderRadius: '8px' }}
              id="inline-WYr7Z9l4MmFaS5Ov88km"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="SolidOak Tree Care"
              data-height="877"
              data-layout-iframe-id="inline-WYr7Z9l4MmFaS5Ov88km"
              data-form-id="WYr7Z9l4MmFaS5Ov88km"
              title="SolidOak Tree Care"
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
