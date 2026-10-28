
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-content">
        <p className="hero-greeting">
          <span className="greeting-line"></span>
          Hello, I'm
        </p>

        <h1 className="hero-title">
          Sahan <span>Avinash</span>
        </h1>

        <h2 className="hero-role">
          <span className="role-bracket">{'<'}</span>
          Aspiring Software Developer
          <span className="role-bracket">{'/>'}</span>
        </h2>

        <p className="hero-description">
          I build modern web applications with clean code,
          thoughtful design, and a passion for solving problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn hero-btn-primary">
            View My Projects <span>↗</span>
          </a>

          <a href="#contact" className="hero-btn hero-btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-social-proof">
          <span className="hero-status-dot"></span>
          Open to Software Engineering Opportunities
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-orbit orbit-one"></div>
        <div className="hero-image-orbit orbit-two"></div>

        <div className="hero-image-glow"></div>

        <div className="hero-image-frame">
          <img src="/profile.png" alt="Sahan Avinash" />
        </div>

        <div className="hero-floating-badge badge-top">
          <span>✦</span> Problem Solver
        </div>

        <div className="hero-floating-badge badge-bottom">
          <span>⌘</span> Full Stack Developer
        </div>
      </div>

      <a href="#about" className="hero-scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  )
}

export default Hero
