
import './Projects.css'


const projects = [
  {
    number: '01',
    title: 'SWS-LMS',
    category: 'Learning Management System',
    description:
      'A MERN stack learning management system designed to support students and administrators with online learning resources and academic management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: [
      {
        label: 'Live Demo',
        url: 'https://samindawithscience.lk',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/SahanAvinash/SWS-LMS',
      },
    ],
  },
  {
    number: '02',
    title: 'Tours For Sri Lanka',
    category: 'Tourism Management & Trip Planning',
    description:
      'A full-stack tourism platform for planning trips across Sri Lanka, exploring travel routes, discovering hotels, and managing tourism-related services.',
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    links: [
      {
        label: 'Live Demo',
        url: 'https://tour-for-sri-lanka-front-end-three.vercel.app',
      },
      {
        label: 'Frontend GitHub',
        url: 'https://github.com/SahanAvinash/TourForSriLanka-FrontEnd',
      },
      {
        label: 'Backend GitHub',
        url: 'https://github.com/SahanAvinash/TourForSriLanka-Backend',
      },
    ],
  },
]


function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <p className="section-label">WHAT I'VE BUILT</p>

        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <p className="projects-intro">
          Here are some projects I've developed while learning
          and applying my software development skills.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
