import { useEffect, useState } from 'react'
import { appDownload } from '../data/appDownload'
import { heroScreens } from '../data/appScreens'
import DownloadIcon from './DownloadIcon'
import Reveal from './Reveal'

function DownArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path
        d="M12 4.5v15m-5-5 5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StatusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false">
      <path
        d="M12 7v5l3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="8.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function ReceiptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false">
      <path
        d="M7 3.8h10v16.4l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3V3.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8h5.4M9.3 11.5h5.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
      <path
        d="M9 7v10M15 7v10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
      <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
    </svg>
  )
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function Hero() {
  const [activeScreen, setActiveScreen] = useState(0)
  const [isPaused, setIsPaused] = useState(prefersReducedMotion)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isPaused || isHovered) return undefined

    const timer = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % heroScreens.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [isPaused, isHovered])

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-glow" />
        <span className="hero-grid-pattern" />
      </div>

      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Campus services, made simpler</p>

          <h1 id="hero-title">
            Your Campus Services, <span>Simplified.</span>
          </h1>

          <p className="hero-lede">
            BPSU Drive helps students organize campus service requests, follow
            request progress, and submit cashier receipt photos for review
            through one convenient mobile application.
          </p>

          <div className="hero-actions">
            <a
              href={appDownload.href}
              className="btn btn-primary"
              download={appDownload.fileName}
              type="application/vnd.android.package-archive"
            >
              <DownloadIcon />
              Download Android APK
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              <DownArrowIcon />
              See How It Works
            </a>
          </div>

          <p className="download-meta">
            <span className="download-status" aria-hidden="true" />
            v{appDownload.version} {appDownload.buildType} · {appDownload.minimumAndroid} ·{' '}
            {appDownload.size}
          </p>

          <ul className="hero-points" aria-label="BPSU Drive at a glance">
            <li>Student-focused</li>
            <li>Simple workflow</li>
            <li>Request tracking</li>
          </ul>
        </Reveal>

        <Reveal className="hero-visual" delay={140}>
          <div className="hero-orbit" aria-hidden="true" />

          <div
            className="hero-preview"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="phone-stage">
              <div className="floating-chip chip-status">
                <span className="chip-icon">
                  <StatusIcon />
                </span>
                <span>
                  <strong>Request tracking</strong>
                  <span>Follow recorded progress</span>
                </span>
              </div>

              <div className="phone-shell">
                <div className="phone-screen">
                  <div
                    className="phone-track"
                    style={{ transform: `translateX(-${activeScreen * 100}%)` }}
                  >
                    {heroScreens.map((screen, index) => (
                      <img
                        key={screen.label}
                        src={screen.src}
                        alt={index === activeScreen ? screen.alt : ''}
                        aria-hidden={index !== activeScreen}
                        className="phone-screen-image"
                        width="412"
                        height="940"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    ))}
                  </div>
                  <span className="phone-gloss" aria-hidden="true" />
                </div>
              </div>

              <div className="floating-chip chip-receipt">
                <span className="chip-icon chip-icon--success">
                  <ReceiptIcon />
                </span>
                <span>
                  <strong>Receipt review</strong>
                  <span>Submit for staff review</span>
                </span>
              </div>
            </div>

            <div className="phone-controls">
              <span className="preview-label">App preview</span>
              <div
                className="phone-dots"
                role="group"
                aria-label="Choose a preview screen"
              >
                {heroScreens.map((screen, index) => (
                  <button
                    key={screen.label}
                    type="button"
                    className={`phone-dot ${index === activeScreen ? 'is-active' : ''}`}
                    aria-label={`Show ${screen.label} preview`}
                    aria-pressed={index === activeScreen}
                    onClick={() => setActiveScreen(index)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="phone-pause"
                aria-label={
                  isPaused ? 'Resume app preview rotation' : 'Pause app preview rotation'
                }
                aria-pressed={isPaused}
                onClick={() => setIsPaused((paused) => !paused)}
              >
                {isPaused ? <ResumeIcon /> : <PauseIcon />}
              </button>
            </div>
          </div>

          <p className="phone-caption">
            Interface preview of the BPSU Drive student app · Demo content shown
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
