import Reveal from './Reveal'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CallToAction() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className="cta-panel">
            <span className="cta-ring cta-ring--one" aria-hidden="true" />
            <span className="cta-ring cta-ring--two" aria-hidden="true" />

            <p className="eyebrow eyebrow--light">Get to know BPSU Drive</p>
            <h2 id="cta-title">Make Your Campus Requests Easier to Manage.</h2>
            <p>
              Explore how BPSU Drive organizes service requests and receipt
              submissions in one student-focused experience.
            </p>
            <a href="#features" className="btn btn-light">
              Explore Features
              <ArrowIcon />
            </a>
            <p className="cta-note">Informational page · No account required</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CallToAction
