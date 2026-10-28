
import './Skills.css'


const skillGroups = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MongoDB Atlas', 'MySQL'],
  },
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: ['Java', 'JavaScript', 'R'],
  },
  {
    title: 'Computer Science',
    icon: '🧠',
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Management',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      'Git',
      'GitHub',
      'Cloudinary',
      'Figma',
      'Linux',
    ],
  },
]


function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <p className="section-label">MY TECHNICAL TOOLKIT</p>

        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>

        <p className="skills-intro">
          Technologies and tools I have worked with while
          building projects and developing my skills.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-heading">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
