import Reveal from './Reveal'

const features = [
  {
    icon: 'catalog',
    title: 'Campus Service Catalog',
    description:
      'Browse the services available through the application and view configured service fees and descriptions.',
  },
  {
    icon: 'request',
    title: 'Digital Service Requests',
    description:
      'Enter the information needed for a campus service request and keep every request organized in one place.',
  },
  {
    icon: 'receipt',
    title: 'Receipt Photo Submission',
    description:
      'Capture or select a cashier receipt photo, check it, and submit it for staff review.',
  },
  {
    icon: 'status',
    title: 'Request Status Tracking',
    description:
      'Review the current recorded status of a request and follow progress through supported request stages.',
  },
  {
    icon: 'profile',
    title: 'Student Profile',
    description:
      'View student account and profile information, and manage the profile settings supported by the app.',
  },
  {
    icon: 'history',
    title: 'Request History',
    description:
      'Revisit previously submitted requests to review their recorded details, receipt status, and progress.',
  },
]

function FeatureIcon({ name }) {
  const icons = {
    catalog: (
      <>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
        <path d="M7.5 9h9M7.5 12.5h9M7.5 16h5.5" />
      </>
    ),
    request: (
      <>
        <path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5l-5-5Z" />
        <path d="M14 3.5v5h5M9 14h6M12 11v6" />
      </>
    ),
    receipt: (
      <>
        <path d="M7 3.8h10v16.4l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3V3.8Z" />
        <path d="M9.3 8h5.4M9.3 11.5h5.4M9.3 15h3.2" />
      </>
    ),
    status: (
      <>
        <circle cx="12" cy="12" r="8.3" />
        <path d="M12 7.3V12l3.1 2" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8.2" r="3.3" />
        <path d="M5.4 19.5a6.7 6.7 0 0 1 13.2 0" />
      </>
    ),
    history: (
      <>
        <path d="M4.4 12a7.6 7.6 0 1 0 2.2-5.4" />
        <path d="M4.2 4.6v4.2h4.2M12 7.8V12l3 2" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
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

function Features() {
  return (
    <section id="features" className="section features" aria-labelledby="features-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Features</p>
          <h2 id="features-title" className="section-title">
            Everything You Need to Manage Campus Requests
          </h2>
          <p className="section-lede">
            Explore the key tools designed to make campus service requests easier
            to organize and follow.
          </p>
        </Reveal>

        <div className="features-grid">
          {features.map((feature, index) => (
            <Reveal
              as="article"
              key={feature.title}
              className="feature-card"
              delay={(index % 3) * 70}
            >
              <span className="feature-icon">
                <FeatureIcon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
