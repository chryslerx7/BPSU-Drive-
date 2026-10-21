import Logo from './Logo'
import Reveal from './Reveal'

const principles = [
  {
    icon: 'convenience',
    title: 'Convenience',
    description: 'Keep request-related information organized in one place.',
  },
  {
    icon: 'visibility',
    title: 'Visibility',
    description: 'Make recorded request statuses easier to review.',
  },
  {
    icon: 'clarity',
    title: 'Clarity',
    description: 'Present the request and receipt workflow in clear steps.',
  },
]

function PrincipleIcon({ name }) {
  const icons = {
    convenience: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 9h8M8 12.5h6M8 16h4" />
      </>
    ),
    visibility: (
      <>
        <path d="M3.2 12s3.2-5.5 8.8-5.5 8.8 5.5 8.8 5.5-3.2 5.5-8.8 5.5S3.2 12 3.2 12Z" />
        <circle cx="12" cy="12" r="2.6" />
      </>
    ),
    clarity: (
      <>
        <circle cx="12" cy="12" r="8.4" />
        <path d="m8.4 12.1 2.4 2.4 4.8-5" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
      <path
        d="m5.5 12.3 4.1 4.1 8.9-9.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function About() {
  return (
    <section
      id="about"
      className="section section--tint about"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <Reveal className="about-copy">
          <p className="eyebrow">About BPSU Drive</p>
          <h2 id="about-title" className="section-title">
            A More Organized Campus Service Experience
          </h2>
          <p className="section-lede">
            BPSU Drive is a student-focused Android application concept designed
            to organize campus service requests and cashier receipt submissions in
            one accessible experience. It brings together service discovery,
            request details, receipt submission, and request status tracking.
          </p>

          <div className="principles">
            {principles.map((principle) => (
              <article className="principle" key={principle.title}>
                <span className="principle-icon">
                  <PrincipleIcon name={principle.icon} />
                </span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-visual" delay={120}>
          <div className="about-panel">
            <div className="about-panel-top">
              <span className="about-panel-mark">
                <Logo variant="inverse" showWordmark={false} />
              </span>
              <span className="about-panel-kicker">Application concept</span>
            </div>

            <div className="about-panel-body">
              <p className="about-panel-title">
                One organized place for campus service requests.
              </p>
              <p className="about-panel-text">
                Service discovery, request details, receipt submission, and
                recorded status updates in one student-focused experience.
              </p>
              <div className="about-chips" aria-label="BPSU Drive focus areas">
                <span className="about-chip">Requests</span>
                <span className="about-chip">Receipts</span>
                <span className="about-chip">Status updates</span>
              </div>
            </div>

            <div className="about-panel-footer">
              <span>Android app concept</span>
              <span>Debug APK available</span>
            </div>
          </div>

          <div className="about-float-card">
            <span className="about-float-icon">
              <CheckIcon />
            </span>
            <span>
              <strong>Clear, step-by-step flow</strong>
              <span>From request to receipt review</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
