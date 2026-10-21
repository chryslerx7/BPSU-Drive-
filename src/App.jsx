import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AppPreview from './components/AppPreview'
import About from './components/About'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <AppPreview />
        <About />
        <FAQ />
        <CallToAction />
      </main>

      <Footer />
    </>
  )
}

export default App
