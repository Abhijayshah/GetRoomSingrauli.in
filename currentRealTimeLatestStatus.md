# currentRealTimeLatestStatus.md

Updated: 2025-10-25 23:41:35 UTC

## 1. Tech Stack

### Frontend
- HTML5 (`index.html`)
- CSS3 (`styles.css`), using CSS variables for responsiveness (e.g., `--poster-max-width`)
- Vanilla JavaScript (`script.js`)
- SVG icons and JPEG/PNG images under `images/` and `posters/`
- No external UI frameworks; no build tooling

### Backend
- None — static site, client-only rendering

### Hosting / Deployment
- GitHub Pages; `.nojekyll` present to bypass Jekyll processing

### Tools
- Git and GitHub for version control
- Local preview using `python3 -m http.server`

### Libraries
- None at runtime; previously added Google Maps iframe embed, now removed via revert

-  Latest Change: Removed Google Maps iframe and directions button in the latest commit (revert), keeping stack purely static.

## 2. File Structure

```text
// Project root
├── .nojekyll                      # Disable Jekyll on GitHub Pages
├── README.md                      # Project readme and basic usage
├── _config.yml                    # GitHub Pages/Jekyll config (unused due to .nojekyll)
├── index.html                     # Main landing page markup
├── styles.css                     # Site-wide styles
├── script.js                      # Minimal client-side interactions
├── proompt.md                     # Prompt/notes used during development
├── currentRealTimeLatestStatus.md # Project status (THIS FILE)
├── images/                        # Image & SVG assets for the UI
│   ├── facilities-video.svg
│   ├── family-room.svg
│   ├── image-1.jpeg
│   ├── image-2.jpeg
│   ├── image-3.jpeg
│   ├── image-4.jpeg
│   ├── image-5.jpeg
│   ├── image-6.jpeg
│   ├── image-7.jpg
│   ├── image-8.jpg
│   ├── image-9.jpg
│   ├── room-tour-video.svg
│   ├── room1.svg
│   ├── room2.svg
│   └── waiting-room.svg
├── posters/                       # Promotional posters and print assets
│   ├── poster-1.png
│   ├── poster-2.png
│   ├── poster-4.png
│   ├── poster-5.png
│   ├── poster1.svg
│   ├── poster2.svg
│   ├── postar.pdf
│   └── postar100.pdf
└── videos/                        # Video assets used on the site
    └── facilities-video.mp4
```

-  Latest Change: Added `currentRealTimeLatestStatus.md` at project root; no structural changes in the latest revert.

## 3. Recent Updates / Latest Changes

- `deb6847` — Revert: removed Google Maps iframe and directions button to return to static-only UI.
- `7de37ad` — Embed Google Maps link (maps.app.goo.gl) in iframe and add directions button.
- `895eebd` — Add more posters and make poster sizing responsive via `--poster-max-width`.
- `3d6aed3` — Add new promotional poster image to posters grid.
- `dcc6b07` — Organize assets into `images/`, `posters/`, `videos/` and update paths in `index.html`.
- `37593c2` — Fix CTA button text color to remain visible on dark backgrounds.
- `1e03c87` — Refactor: extract gallery/card inline styles into CSS classes.
- `d3772a3` — Refactor: extract CSS and JS into external files.

--- "THis is the last changes made"