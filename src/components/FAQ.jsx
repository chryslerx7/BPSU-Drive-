import { useState } from 'react'
import { appDownload } from '../data/appDownload'
import Reveal from './Reveal'

const faqs = [
  {
    question: 'What is BPSU Drive?',
    answer:
      'BPSU Drive is a student-focused Android application concept for organizing campus service requests. It brings service browsing, request details, cashier receipt photo submission, and request status tracking into one mobile experience. This website only introduces the concept and does not connect to the app or university systems.',
  },
  {
    question: 'Who is the application intended for?',
    answer:
      'The application is intended for BPSU students who need to organize campus service requests and submit cashier receipt photos for review. The student interface is the focus of this landing page.',
  },
  {
    question: 'How do I create a service request?',
    answer:
      'In the application flow, a student signs in, browses the available service catalog, selects the needed service, completes the required request information, and reviews the request before submitting it.',
  },
  {
    question: 'Can I submit a cashier receipt photo?',
    answer:
      'Yes. For services that require payment, the app concept supports capturing or selecting a photo of a physical cashier receipt and submitting it for staff review. BPSU Drive does not process online payments itself.',
  },
  {
    question: 'Does submitting a receipt mean it has been verified?',
    answer:
      'No. Submitting a receipt only sends it for review. It does not automatically confirm payment, verify the receipt, or approve the service request. The recorded status changes only after the appropriate review step.',
  },
  {
    question: 'Can I check my request status?',
    answer:
      'The app concept includes request history and request detail screens where the current recorded request and receipt statuses can be reviewed. The specific statuses available depend on how the application is deployed and configured.',
  },
  {
    question: 'Where can I download the Android application?',
    answer: (
      <>
        You can download the current Android app directly:{' '}
        <a
          href={appDownload.href}
          download={appDownload.fileName}
          type="application/vnd.android.package-archive"
        >
          BPSU Drive v{appDownload.version} APK
        </a>
        . This is the official release build. Android may ask you to allow
        installation from your browser. The app is not connected to university
        systems, and its screens contain demo content.
      </>
    ),
  },
]

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  function toggleItem(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-lede">
            Quick answers about the BPSU Drive application concept and how the
            request workflow is presented.
          </p>
        </Reveal>

        <Reveal className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            const buttonId = `faq-question-${index}`

            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <PlusIcon />
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

export default FAQ
