import { useState } from 'react'
import { business } from '../data/business'
import ArrowButton from '../components/ArrowButton'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Quote Request from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <div className="pill">Contact Us</div>
          <h1>Get a Free Estimate</h1>
          <p>Reach out and we'll follow up quickly.</p>
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={business.phoneHref}>{business.phone}</a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${business.email}`}>{business.email}</a>
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Request a Free Estimate</h2>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
            />

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
            />

            <label htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
            />

            <ArrowButton type="submit">Send Request</ArrowButton>

            {sent && (
              <p className="form-note">
                Your email app should now be open with your message ready to
                send. Prefer to talk now? Call us at{' '}
                <a href={business.phoneHref}>{business.phone}</a>.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
