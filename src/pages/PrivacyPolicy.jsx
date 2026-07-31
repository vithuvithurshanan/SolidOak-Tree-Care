import { business } from '../data/business'

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="legal-dates">
          Effective Date: {business.effectiveDate} | Last Updated:{' '}
          {business.lastUpdated}
        </p>

        <p>
          {business.name} ("we," "us," or "our") respects your privacy and is
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website, contact us,
          or use our tree care services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Contact Information:</strong> Name, phone number, email
            address, and mailing/service address.
          </li>
          <li>
            <strong>Service Information:</strong> Details about the tree care
            services you request or have received from us.
          </li>
          <li>
            <strong>Communication Records:</strong> Records of calls, emails,
            text messages, and other correspondence with us.
          </li>
          <li>
            <strong>Website Usage Data:</strong> Information collected
            automatically through cookies and similar technologies, such as
            IP address, browser type, and pages visited.
          </li>
        </ul>

        <h2>2. SMS/Text Message Communications</h2>

        <h3>2a. How We Collect Your Mobile Number</h3>
        <p>
          We collect your mobile phone number when you provide it to us
          directly, such as through our website contact form, over the
          phone, or in person, for the purpose of scheduling and following up
          on tree care services.
        </p>

        <h3>2b. Types of Messages We Send</h3>
        <p>
          If you opt in to receive text messages from us, you may receive
          messages related to appointment confirmations and reminders,
          service updates, quote follow-ups, and customer service
          communications.
        </p>

        <h3>2c. Message Frequency</h3>
        <p>
          Message frequency may vary depending on your interactions with us,
          but you can generally expect to receive approximately 4–8 messages
          per month.
        </p>

        <h3>2d. Message & Data Rates</h3>
        <p>
          Message and data rates may apply, depending on your mobile carrier
          and plan. {business.name} is not responsible for any charges
          incurred from your carrier.
        </p>

        <h3>2e. How to Opt Out</h3>
        <p>
          You can opt out of receiving text messages from us at any time by
          replying <strong>STOP</strong> to any message you receive. After
          you send the STOP message, we will confirm your opt-out status and
          send no further messages, unless you opt in again.
        </p>

        <h3>2f. How to Get Help</h3>
        <p>
          If you need assistance, reply <strong>HELP</strong> to any message,
          or contact us directly at{' '}
          <a href={business.phoneHref}>{business.phone}</a> or{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>

        <h2>3. Mobile Information &amp; SMS Consent — No Third-Party Sharing</h2>
        <p>
          No mobile information will be shared with third parties or
          affiliates for marketing or promotional purposes. Text messaging
          originator opt-in data and consent will not be shared with any
          third parties, except as required to provide the SMS service
          through our messaging platform provider (e.g., message delivery).
        </p>

        <h2>4. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Schedule, perform, and follow up on tree care services</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Send appointment reminders and service-related updates</li>
          <li>Process billing and payments</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to
          enhance your browsing experience, analyze site traffic, and
          understand where our visitors come from. You can control cookie
          preferences through your browser settings.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical
          safeguards to help protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is completely
          secure.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain personal information for as long as necessary to fulfill
          the purposes described in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>

        <h2>8. Your Privacy Rights</h2>
        <p>
          Depending on your state of residence, you may have rights under
          applicable privacy laws, including the California Consumer Privacy
          Act (CCPA) and, where applicable, the General Data Protection
          Regulation (GDPR). These rights may include the right to access,
          correct, or delete your personal information, and the right to opt
          out of certain uses of your data. To exercise any of these rights,
          please contact us using the information below.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page with an updated "Last Updated" date.
          Your continued use of our website or services after any changes
          indicates your acceptance of the updated policy.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us:
        </p>
        <p>
          <strong>{business.name}</strong>
          <br />
          {business.addressFull}
          <br />
          Phone: <a href={business.phoneHref}>{business.phone}</a>
          <br />
          Email: <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
