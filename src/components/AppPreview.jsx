import { previewScreens } from '../data/appScreens'
import Reveal from './Reveal'

function PhoneFrame({ screen }) {
  return (
    <div className="preview-frame">
      <div className="preview-screen">
        <img
          src={screen.src}
          alt={screen.alt}
          width="412"
          height="940"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function AppPreview() {
  return (
    <section
      id="app-preview"
      className="section app-preview"
      aria-labelledby="preview-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">App experience</p>
          <h2 id="preview-title" className="section-title">
            Designed Around Your Campus Needs
          </h2>
          <p className="section-lede">
            A closer look at the student screens that bring services, requests,
            receipts, and status updates together.
          </p>
        </Reveal>

        <div
          className="preview-grid"
          role="group"
          aria-label="BPSU Drive interface preview gallery"
          tabIndex={0}
        >
          {previewScreens.map((screen, index) => (
            <Reveal
              as="figure"
              key={screen.label}
              className="preview-card"
              delay={(index % 3) * 70}
            >
              <PhoneFrame screen={screen} />
              <figcaption>
                <strong>{screen.label}</strong>
                <span>{screen.caption}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="preview-note" delay={100}>
          <span className="preview-note-dot" aria-hidden="true" />
          These screens are interface previews from the BPSU Drive Android app
          concept. Demo content is shown.
        </Reveal>
      </div>
    </section>
  )
}

export default AppPreview
