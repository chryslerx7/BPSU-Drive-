# BPSU Drive Landing Page

A responsive, informational landing page for **BPSU Drive**, a student-focused
Android application concept for organizing campus service requests, receipt photo
submissions, and request status tracking.

This repository contains only the public-facing website. It is not the Android
application and has no backend, authentication, payment processing, or university
system integration.

## Tech stack

- React
- Vite
- JavaScript and JSX
- Plain CSS
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

To check a production build:

```bash
npm run build
npm run preview
```

To run the configured linter:

```bash
npm run lint
```

## Project structure

```text
bpsu-drive/
├── public/
│   ├── downloads/
│   │   └── BPSU-Drive-v1.0-debug.apk
│   ├── images/               App interface previews used on the page
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        Sticky navigation, mobile menu, APK CTA
│   │   ├── Hero.jsx          Hero copy, APK download, animated phone preview
│   │   ├── Features.jsx      Six feature cards
│   │   ├── HowItWorks.jsx    Four-step request workflow
│   │   ├── AppPreview.jsx    Five-screen interface gallery
│   │   ├── About.jsx         Concept overview and principles
│   │   ├── FAQ.jsx           Accessible accordion and download answer
│   │   ├── CallToAction.jsx  Final APK download panel
│   │   ├── Footer.jsx        Navigation, description, and copyright
│   │   ├── DownloadIcon.jsx  Shared APK download icon
│   │   ├── Logo.jsx          Custom BPSU Drive wordmark
│   │   └── Reveal.jsx        Small scroll-reveal wrapper
│   ├── data/
│   │   ├── appDownload.js    APK path, version, size, and build metadata
│   │   └── appScreens.js     Screenshot paths, labels, and alt text
│   ├── App.jsx               Page composition
│   ├── main.jsx              React entry point
│   └── index.css             Design tokens, layout, and responsive styles
├── index.html
├── package.json
└── README.md
```

## Replacing the app preview screenshots

The phone in the hero and the App Preview gallery use real screenshot files stored
in `public/images/`. The screenshot metadata is centralized in
`src/data/appScreens.js`.

1. Export or capture new Android screenshots.
2. Keep a consistent phone aspect ratio where possible. The current screenshots
   are `412 × 940`.
3. Save them into `public/images/` using the filenames referenced in
   `src/data/appScreens.js`:
   - `home.png`
   - `services.png`
   - `my-requests.png`
   - `request-details.png`
   - `receipt-preview.png`
4. If you use different filenames, update the `src` values in
   `src/data/appScreens.js`.
5. Update the `alt` text and captions if the screen content changes.
6. The hero rotation uses `heroScreens`, while the gallery uses
   `previewScreens`. Add, remove, or reorder entries in those arrays to control
   what appears in each place.

The phone frames are drawn with CSS, so no image editing is required for the
device bezel.

The hero defines `heroScreens` as a four-screen rotation. It includes a visible
pause control, pauses while hovered, and stays still when the operating system
requests reduced motion. The gallery is a horizontal swipe area on mobile and a
wrapped grid on larger screens.

## Android APK download

The site hosts a direct APK download at:

`public/downloads/BPSU-Drive-v1.0-debug.apk`

Current metadata:

- Package: `com.example.bpsudrive`
- Version: `1.0` (`versionCode 1`)
- Minimum Android version: Android 7.0 (API 24)
- Size: 8.2 MB
- Build: debug/demo build, not a signed production release
- SHA-256: `6E2484DD26A9FDD43A62416E07049F7E9362C3FEC4CB20F561E54AF33D98E82F`

The download path, filename, version, size, and build label are centralized in
`src/data/appDownload.js`. The Navigation, Hero, FAQ, and final call to action all
link to that single file.

To publish a production APK:

1. Build and sign a release APK in Android Studio.
2. Replace the APK in `public/downloads/`.
3. Update `fileName`, `version`, `size`, and `buildType` in
   `src/data/appDownload.js`.
4. Update the hash and metadata in this README.
5. Redeploy the site.

A debug APK may require enabling installation from the browser or file manager
on the Android device. The package ID should also be changed from the example ID
before an official release.

## Placeholders and content notes

- The page uses interface previews from the BPSU Drive Android app concept and
  includes demo content. The screenshots are not presented as live data.
- The page provides a direct download for the current debug APK. It does not
  provide an app-store listing, working login, registration, or payment flow.
- The logo in the navigation is a custom BPSU Drive mark built in
  `src/components/Logo.jsx`; no official university seal is used as a site logo.
- All request, receipt, and account examples visible in the screenshots are demo
  content.
- The copyright year in the footer is generated at runtime.

## Manual review checklist

### Desktop (1440px and around 1024px)

- [ ] The sticky navigation remains readable and the active section is highlighted.
- [ ] Each navigation link scrolls to its section without hiding the heading.
- [ ] The hero phone rotates through four screens and the dots work.
- [ ] Hovering the hero phone pauses the rotation.
- [ ] Feature cards, step cards, and preview frames lift subtly on hover.
- [ ] The App Preview displays five phones in a balanced row with captions.
- [ ] The About panel, FAQ accordion, and final call-to-action render correctly.
- [ ] The navbar, hero, FAQ, and final APK download links serve the APK file.
- [ ] Footer links work and the copyright year is current.

### Tablet (around 768px)

- [ ] Hero content stacks cleanly and the phone remains centered.
- [ ] The mobile menu opens, closes, and closes after a link is selected.
- [ ] Feature cards form two columns, and step cards are readable.
- [ ] App preview screenshots wrap into centered rows.
- [ ] No horizontal page scroll appears.

### Mobile (375px and 430px)

- [ ] The hamburger button is reachable and the menu can be closed with Escape.
- [ ] Buttons are full-width where appropriate and easy to tap.
- [ ] The hero heading, description, and phone fit without clipping.
- [ ] Floating chips are hidden so they cannot overflow the viewport.
- [ ] App Preview can be swiped horizontally and snaps to each card.
- [ ] The APK download starts successfully from the mobile navigation and hero.
- [ ] FAQ answers expand and collapse without keyboard traps.
- [ ] The page can be scrolled with keyboard and touch without horizontal overflow.

### Accessibility and motion

- [ ] Tab through every link, button, dot, and accordion question.
- [ ] Focus outlines are visible on all interactive elements.
- [ ] Enable "Reduce motion" in the operating system; hero rotation stops, and
      scroll reveals appear immediately.
- [ ] Use a screen reader to confirm the accordion reports expanded/collapsed
      state and the phone screenshot changes do not announce unrelated content.
- [ ] Confirm that images have meaningful alt text and decorative elements are
      hidden from assistive technology.
