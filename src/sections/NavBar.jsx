
import { useEffect, useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160
      let currentSection = 'home'

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.href.slice(1)
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="navbar-logo"
        onClick={() => handleNavClick('home')}
      >
        S<span>A.</span>
      </a>

      <button
        className="navbar-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((previous) => !previous)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => {
          const sectionId = link.href.slice(1)
          const isActive = activeSection === sectionId

          return (
            <a
              key={link.href}
              href={link.href}
              className={isActive ? 'active' : ''}
              aria-current={isActive ? 'location' : undefined}
              onClick={() => handleNavClick(sectionId)}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
