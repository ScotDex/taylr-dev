# Landing Page — Modernisation Project

## Overview

Complete ground-up rebuild of the Blank-Space EVE Online corporation landing page. The original codebase dated to approximately 2015-2017 and was built on a deprecated jQuery plugin stack. This project archived the original and replaced it with a clean, maintainable, dependency-light implementation.

---

## Infrastructure Changes

### Hosting Migration
- **Previous:** Static files served from AWS EC2 instance alongside AllianceAuth/Celery stack
- **New:** Cloudflare Pages — global edge deployment, zero server dependency for the landing page
- **Result:** Landing page fully removed from AWS bill, auto-deploys on every git push to main

### Image Delivery
- **Previous:** Images served from AWS EC2 web root
- **New:** Images hosted on Cloudflare R2 object storage, served via custom domain `edge.socketkill.com`
- **Result:** Images served from Cloudflare edge nodes globally, zero egress cost

### SSL
- **Previous:** Certbot managed on AWS EC2
- **New:** Cloudflare handles SSL termination automatically
- **Result:** No certificate renewal management required

### DNS
- CNAME configured to point `taylr.space` at Cloudflare Workers endpoint
- OG tags added for Discord/social share previews
- Favicon configured via R2 edge URL

### TO DO

- CNAME change to repoint to workers
- Caching headers to be configured
- Zipped the landing page - will assign to github and assign to corp.

---

## Codebase Changes

### Original Stack (archived)
| Dependency | Version | Size | Status |
|---|---|---|---|
| jquery.js | 1.x | ~90kb | Removed |
| bootstrap.min.js | 3.x (2013) | ~37kb | Removed |
| owl.carousel.min.js | legacy | ~47kb | Removed |
| modernizr.custom.js | legacy | ~15kb | Removed |
| isotope.pkgd.min.js | legacy | ~60kb | Removed |
| jquery.mb.YTPlayer.js | legacy | ~45kb | Removed |
| jquery.form.js | legacy | ~15kb | Removed |
| jquery.validate.js | 1.11.1 (2013) | ~45kb | Removed |
| styleswitch.js | legacy | ~1kb | Removed |
| classie.js | legacy | ~2kb | Removed |
| pathLoader.js | legacy | ~2kb | Removed |
| jquery.inview.js | legacy | ~5kb | Removed |
| jquery.nav.js | legacy | ~8kb | Removed |
| **Total** | | **~387kb** | **Removed** |

### New Stack
| Dependency | Version | Purpose |
|---|---|---|
| Bootstrap | 5.3.2 CDN | Layout and responsive grid |
| Font Awesome | 6.5.1 CDN | Icons |
| Swiper.js | 11.0.5 CDN | Hero image slider and text carousel |
| main.js | custom | Loader, sticky nav, Swiper initialisation |

### Legacy Code Removed
- IE9 conditional comments (`<!--[if lt IE 9]>`)
- `respond.js` — IE8 media query polyfill (IE8 retired 2016)
- `html5shiv.js` — IE8 HTML5 element polyfill
- `styleswitch.js` — unused theme colour switcher
- All Isotope portfolio filtering code (never implemented on this page)
- All Google Maps code (never implemented on this page)
- All contact form validation code (no forms on page)
- YouTube background player (no video embed on page)
- `lang="es"` incorrect language attribute corrected to `lang="en"`

### File Structure
```
/
├── index.html          # Clean semantic HTML, Bootstrap 5 classes
├── style.css           # All visual styling, CSS custom properties
├── js/
│   └── main.js         # Vanilla JS — loader, nav scroll, Swiper init
└── images/
    └── logo.png        # Local logo assets (slider images on R2)
```

---

## Technical Modernisation

### JavaScript
- Eliminated jQuery entirely — zero jQuery remaining
- 387kb of JavaScript reduced to two CDN libraries plus a small vanilla `main.js`
- Removed 9 dead jQuery plugins that were loading but never called
- Swiper.js replaces Owl Carousel for hero slider and text carousel
- Loader, sticky nav, and Swiper initialisation implemented in vanilla JS

### CSS
- `epic.css` (~1,400 lines) replaced with clean `style.css`
- Bootstrap 3 replaced with Bootstrap 5
- CSS custom properties (variables) used for brand colours and fonts
- CSS Grid used for feature cards — no JavaScript layout library required
- Font Awesome 4 replaced with Font Awesome 6

### HTML
- Bootstrap 3 class names replaced with Bootstrap 5 equivalents
- Semantic structure preserved — loader, nav, hero, about, footer
- Open Graph meta tags added for Discord/social share previews
- Google Fonts URL updated to modern `css2` API with `display=swap`
- Favicon added

### Performance
- All external dependencies served from CDN with long cache headers
- Images served from Cloudflare edge nodes
- No render-blocking jQuery plugin chain
- Page load no longer depends on 13 sequential script evaluations

---

## Deployment

Auto-deploys via Cloudflare Pages on every push to `main` branch. No build step — static files served directly.

```
git push origin main → Cloudflare Pages build → Live at taylr.space

```

---

## Credits

- Redeveloped by: [Dexomus Viliana](https://socketkill.com/)