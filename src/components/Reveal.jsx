import { useEffect, useRef, useState } from 'react'

function shouldRevealImmediately() {
  if (typeof window === 'undefined') return false

  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  )
}

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(shouldRevealImmediately)

  useEffect(() => {
    const element = elementRef.current
    if (!element || isVisible) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <Tag
      ref={elementRef}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export default Reveal
