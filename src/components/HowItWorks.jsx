import Reveal from './Reveal'

const steps = [
  {
    number: '01',
    title: 'Sign In',
    description: 'Access the application using your student account.',
  },
  {
    number: '02',
    title: 'Choose a Service',
    description:
      'Browse the available services and select the service you need.',
  },
  {
    number: '03',
    title: 'Submit Your Request',
    description:
      'Complete the required information and review your request details.',
  },
  {
    number: '04',
    title: 'Submit Your Receipt',
    description:
      'Follow the payment instructions and submit a cashier receipt photo for review.',
  },
]

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 10.6v5M12 7.7v.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section section--tint how-it-works"
      aria-labelledby="how-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title" className="section-title">
            From Request to Review in Four Simple Steps
          </h2>
          <p className="section-lede">
            A clear path from choosing a service to submitting a receipt for
            review.
          </p>
        </Reveal>

        <ol className="steps">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              className="step"
              delay={index * 90}
            >
              <span className="step-number" aria-hidden="true">
                {step.number}
              </span>
              <div className="step-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="work-note" delay={120}>
          <span className="work-note-icon">
            <InfoIcon />
          </span>
          <p>
            Submitting a receipt does not automatically mean it has been verified
            or that the service request has been approved.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default HowItWorks
