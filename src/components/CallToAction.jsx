import { appDownload } from '../data/appDownload'
import DownloadIcon from './DownloadIcon'
import Reveal from './Reveal'

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
              Try the current Android demo and see how BPSU Drive organizes
              service requests and receipt submissions.
            </p>
            <a
              href={appDownload.href}
              className="btn btn-light"
              download={appDownload.fileName}
              type="application/vnd.android.package-archive"
            >
              <DownloadIcon />
              Download Android APK
            </a>
            <p className="cta-note">
              v{appDownload.version} {appDownload.buildType} ·{' '}
              {appDownload.minimumAndroid} · {appDownload.size}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CallToAction
