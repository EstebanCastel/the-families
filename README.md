# THE FAMILIES

An independent fashion house and cultural project built on memory, identity and belonging — a digital exhibition that happens to sell clothes.

> _If Rick Owens, Aitor Throup and an independent art publication built a label around memory and family — this is the album they would leave behind._

## Stack

- **Next.js 16** (App Router, Turbopack, Server Components)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — text/image reveals, mobile menu, lightbox
- **Lenis** — smooth scroll
- Image & font optimization, SEO metadata, responsive / mobile-first, reduced-motion aware

## Structure

| Route | Page |
| --- | --- |
| `/` | Home — cinematic video hero, manifesto, editorial story, selected works, archive teaser, journal |
| `/shop` | Curated gallery of edition pieces |
| `/shop/[slug]` | Product — fullscreen gallery, story, materials, philosophy, sizing, related |
| `/archive` | 45-frame contact sheet with lightbox |
| `/journal` | Independent-publication reading room |
| `/journal/[slug]` | Long-form essay |
| `/about` | Brand statement & emotional pillars |
| `/contact` | Studio channels & enquiry form |

## Design system

- **Palette** — paper `#f3f1ec`, ink `#0b0b0b`, warm ash greys, restrained blood-red accent (from the logo)
- **Type** — Inter Tight, oversized editorial display with tight tracking
- **Photography** — studio grey backdrop, monochrome → colour on hover, contact-sheet rhythm
- **Motion** — slow, intentional, masked reveals; never decorative

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Photography and the brand mark belong to THE FAMILIES.
