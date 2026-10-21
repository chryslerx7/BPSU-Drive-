export const appScreens = {
  home: {
    label: 'Student Home',
    src: '/images/home.png',
    alt: 'BPSU Drive student home screen with request totals, recent requests, and available services',
    caption: 'Greeting, request summary, and quick access to services.',
  },
  services: {
    label: 'Service Catalog',
    src: '/images/services.png',
    alt: 'BPSU Drive service catalog listing certificate, document, ID concern, and general inquiry services',
    caption: 'Browse available services, descriptions, and fees.',
  },
  requests: {
    label: 'My Requests',
    src: '/images/my-requests.png',
    alt: 'BPSU Drive request list showing request numbers, request statuses, and receipt statuses',
    caption: 'Keep submitted requests organized in one list.',
  },
  requestDetails: {
    label: 'Request Details',
    src: '/images/request-details.png',
    alt: 'BPSU Drive request details screen showing a status timeline and receipt verification notice',
    caption: 'Review request information and recorded progress.',
  },
  receiptPreview: {
    label: 'Receipt Preview',
    src: '/images/receipt-preview.png',
    alt: 'BPSU Drive receipt preview screen with a sample receipt and a submit receipt button',
    caption: 'Check a receipt photo before submitting it for review.',
  },
}

export const heroScreens = [
  appScreens.home,
  appScreens.services,
  appScreens.requestDetails,
  appScreens.receiptPreview,
]

export const previewScreens = [
  appScreens.home,
  appScreens.services,
  appScreens.requests,
  appScreens.requestDetails,
  appScreens.receiptPreview,
]
