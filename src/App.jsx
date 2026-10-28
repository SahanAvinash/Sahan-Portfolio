import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Navbar from './sections/NavBar'
import StarField from './sections/StarField'

function App() {
  return (
    <main className='profile-main'>
      <StarField/>
      <Navbar/>
      <div className="portfolio-content">
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
      </div>
      
    </main>
  )
}

export default App