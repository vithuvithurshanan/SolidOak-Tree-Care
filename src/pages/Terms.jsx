import { business } from '../data/business'

function Terms() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-dates">
          Effective Date: {business.effectiveDate} | Last Updated:{' '}
          {business.lastUpdated}
        </p>

        <p>
          Please read these Terms &amp; Conditions ("Terms") carefully before
          using the website or services of {business.name}. By accessing our
          website or engaging our services, you agree to be bound by these
          Terms.
        </p>

        <h2>1. Business Identity</h2>
        <p>
          <strong>{business.name}</strong>
          <br />
          {business.addressFull}
          <br />
          Phone: <a href={business.phoneHref}>{business.phone}</a>
          <br />
          Email: <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>

        <h2>2. Age Requirement</h2>
        <p>
          You must be at least 18 years old to use our website or engage our
          services. By using our website, you represent and warrant that you
          meet this age requirement.
        </p>

        <h2>3. Terminology</h2>
        <p>
          The following terminology applies to these Terms &amp; Conditions:
          "Client," "You," and "Your" refers to you, the person accessing
          this website and accepting these Terms. "The Company," "Ourselves,"
          "We," "Our," and "Us" refers to {business.name}. "Party,"
          "Parties," or "Us" refers to both the Client and ourselves.
        </p>

        <h2>4. SMS Messaging Terms of Service</h2>

        <h3>4a. Program Description &amp; Message Types</h3>
        <p>
          By providing your mobile number and opting in, you agree to receive
          text messages from {business.name} related to appointment
          confirmations and reminders, service updates, quote follow-ups, and
          customer service communications.
        </p>

        <h3>4b. Message Frequency</h3>
        <p>
          Message frequency varies based on your interactions with us but is
          typically around 4–8 messages per month.
        </p>

        <h3>4c. Message &amp; Data Rates</h3>
        <p>
          Message and data rates may apply. Please check with your mobile
          carrier for details regarding your specific mobile plan.
        </p>

        <h3>4d. How to Opt Out</h3>
        <p>
          You may opt out of receiving text messages at any time by replying{' '}
          <strong>STOP</strong> to any message. You will receive a one-time
          confirmation message, and no further messages will be sent unless
          you opt back in.
        </p>

        <h3>4e. How to Get Help</h3>
        <p>
          For help at any time, reply <strong>HELP</strong> to any message,
          or contact us directly at{' '}
          <a href={business.phoneHref}>{business.phone}</a> or{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>

        <h3>4f. Carrier Liability Disclaimer</h3>
        <p>
          Carriers are not liable for delayed or undelivered messages.
          {' '}{business.name} is not responsible for any delays or failures in
          message delivery caused by your mobile carrier.
        </p>

        <h3>4g. Supported Carriers</h3>
        <p>
          Our SMS program is supported by major U.S. wireless carriers.
          Carrier coverage and message delivery may vary.
        </p>

        <h2>5. Cookies</h2>
        <p>
          We employ the use of cookies on our website. By using our website,
          you consent to the use of cookies in accordance with our Privacy
          Policy.
        </p>

        <h2>6. Intellectual Property &amp; License</h2>
        <p>
          Unless otherwise stated, {business.name} and/or its licensors own
          the intellectual property rights for all material on this website.
          All intellectual property rights are reserved. You may access this
          material for your own personal use, subject to restrictions set in
          these Terms.
        </p>

        <h2>7. Comments &amp; User Content</h2>
        <p>
          Certain parts of this website may allow users to post comments or
          reviews. {business.name} does not filter, edit, publish, or review
          comments prior to their presence on the website, and comments do
          not reflect the views or opinions of {business.name}. We reserve
          the right to monitor and remove any comments deemed inappropriate,
          offensive, or in violation of these Terms.
        </p>

        <h2>8. Content Liability</h2>
        <p>
          We shall not be held responsible for any content that appears on
          your website (if linked to ours) or for any claims arising from
          your use of our website content.
        </p>

        <h2>9. Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties, and conditions relating to our website
          and the use of this website. Nothing in this disclaimer will limit
          or exclude our or your liability for death or personal injury
          caused by negligence, or any liability that cannot be excluded or
          limited under applicable law.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We may revise these Terms at any time. By using this website, you
          are expected to review these Terms periodically. Continued use of
          the website following any changes constitutes your acceptance of
          the revised Terms.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          If you have any questions about these Terms &amp; Conditions,
          please contact us:
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

export default Terms
