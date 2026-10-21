import { useEffect, useRef, useState } from 'react'
import { appDownload } from '../data/appDownload'
import DownloadIcon from './DownloadIcon'
import Logo from './Logo'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'App Preview', id: 'app-preview' },
  { label: 'About', id: 'about' },
  { label: 'FAQ', id: 'faq' },
]

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path
        d="m6 6 12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuButtonRef = useRef(null)
  const restoreMenuFocusRef = useRef(false)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -52% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen && restoreMenuFocusRef.current) {
      restoreMenuFocusRef.current = false
      const timer = window.setTimeout(() => {
        menuButtonRef.current?.focus()
      }, 0)

      return () => window.clearTimeout(timer)
    }

    return undefined
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function handleNavigation(id) {
    setActiveSection(id)

    if (isMenuOpen) {
      restoreMenuFocusRef.current = true
      setIsMenuOpen(false)
    }
  }

  function handleDownload() {
    if (isMenuOpen) {
      restoreMenuFocusRef.current = true
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#home" className="brand-link" onClick={closeMenu}>
          <Logo />
        </a>

        {isMenuOpen && (
          <div
            className="nav-backdrop"
            aria-hidden="true"
            onClick={closeMenu}
          />
        )}

        <nav
          id="primary-navigation"
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  onClick={() => handleNavigation(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={appDownload.href}
            className="btn btn-primary nav-cta"
            download={appDownload.fileName}
            type="application/vnd.android.package-archive"
            onClick={handleDownload}
          >
            Download APK
            <DownloadIcon />
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
