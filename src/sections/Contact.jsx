
import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <p className="section-label">LET'S CONNECT</p>

        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <p className="contact-intro">
          I'm interested in software engineering opportunities
          and collaborations. Feel free to reach out!
        </p>

        <div className="contact-cards">
          <a
            className="contact-card"
            href="mailto:sahanavinash00@gmail.com"
          >
            <span className="contact-icon">✉️</span>
            <span className="contact-label">Email Me</span>
            <span className="contact-value">
              sahanavinash00@gmail.com
            </span>
          </a>

          <a
            className="contact-card"
            href="https://linkedin.com/in/sahan-avinash"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">💼</span>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">Connect with me ↗</span>
          </a>

          <a
            className="contact-card"
            href="https://github.com/SahanAvinash"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">💻</span>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">View my repositories ↗</span>
          </a>
        </div>

        <a
          className="contact-email-button"
          href="mailto:sahanavinash00@gmail.com"
        >
          Send Me an Email ↗
        </a>
      </div>

      <footer className="portfolio-footer">
        <p>Designed & Built by Sahan Avinash</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
