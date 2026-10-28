
import './Education.css'

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <p className="section-label">MY ACADEMIC BACKGROUND</p>

        <h2 className="section-title">
          Education & <span>Qualifications</span>
        </h2>

        <p className="education-intro">
          My academic journey and the knowledge that supports
          my software development career.
        </p>

        <div className="education-timeline">
          <article className="education-card">
            <div className="education-icon">🎓</div>

            <div className="education-details">
              <span className="education-year">University Education</span>

              <h3>Bachelor of Science in Physical Science</h3>

              <h4>University of Ruhuna</h4>

              <p>
                Studied Mathematics, Applied Mathematics, and
                Computer Science, developing analytical thinking
                and problem-solving skills.
              </p>

              <div className="education-tags">
                <span>GPA: 3.32 / 4.00</span>
                <span>Physical Science</span>
              </div>
            </div>
          </article>

          <article className="education-card">
            <div className="education-icon">📘</div>

            <div className="education-details">
              <span className="education-year">2021</span>

              <h3>G.C.E. Advanced Level</h3>

              <h4>Physical Science Stream</h4>

              <p>
                Combined Mathematics — C
                <br />
                Physics — C
                <br />
                Chemistry — C
              </p>
            </div>
          </article>

          <article className="education-card">
            <div className="education-icon">📜</div>

            <div className="education-details">
              <span className="education-year">2017</span>

              <h3>Additional Qualifications</h3>

              <h4>E-TEC Campus</h4>

              <p>
                Diploma in English, Certificate in Computer
                Hardware with Networking, and Certificate in
                Computer Graphic Design.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education
