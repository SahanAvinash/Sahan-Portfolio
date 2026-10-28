
import './About.css'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <p className="section-label">GET TO KNOW ME</p>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <p className="about-description">
          I'm Sahan Avinash, a Physical Science graduate from the
          University of Ruhuna, with a strong interest in software
          development and modern web technologies.
        </p>

        <p className="about-description">
          I enjoy building practical web applications, learning new
          technologies, and turning ideas into useful digital solutions.
          Through my projects, I've gained hands-on experience in
          full-stack web development.
        </p>

        <div className="about-highlights">
          <div className="about-card">
            <h3>02+</h3>
            <p>Completed Projects</p>
          </div>

          <div className="about-card">
            <h3>MERN</h3>
            <p>Full-Stack Development</p>
          </div>

          <div className="about-card">
            <h3>Always</h3>
            <p>Learning & Improving</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
