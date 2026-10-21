import Logo from './Logo'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'App Preview', href: '#app-preview' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand-link">
              <Logo />
            </a>
            <p>
              BPSU Drive is a student-focused Android application concept for
              organizing campus service requests, cashier receipt photos, and
              request status tracking in one place.
            </p>
            <p className="footer-note">
              This is an informational landing page for the application concept,
              not an official university website.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <h2 className="footer-heading">Explore</h2>
              <ul className="footer-links">
                {footerLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="footer-heading">Learn more</h2>
              <ul className="footer-links">
                {footerLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BPSU Drive. All rights reserved.</p>
          <p>Informational landing page · Android app concept</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
