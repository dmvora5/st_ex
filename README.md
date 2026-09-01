# Exclusio Marketing Site (Next.js)

Next.js rebuild of the Exclusio WordPress marketing site formerly at [start.exclusio.io](https://start.exclusio.io). Static, typed content — **no WordPress or PHP at runtime**.

## Stack

- **Next.js** 15 (App Router) + TypeScript
- **Tailwind CSS** 4
- **pnpm** package manager
- **next/font** — Mulish (body) + Poppins (headings)
- **embla-carousel-react** — feature carousel (replaces WP slick)

## Requirements

- Node.js 20+ (developed with Node 22 / pnpm 10)
- pnpm (`corepack enable` or `npm i -g pnpm`)

## Setup

```bash
cd start_exclusio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description                      |
|----------------|----------------------------------|
| `pnpm dev`     | Dev server with Turbopack        |
| `pnpm build`   | Production build                 |
| `pnpm start`   | Serve production build           |
| `pnpm lint`    | ESLint                           |

## Project structure

```
start_exclusio/
├── public/                 # Static assets from WP uploads
│   ├── logo.png
│   ├── og-image.png
│   ├── favicon.png
│   ├── images/             # Hero bg/side, logos
│   ├── icons/              # Feature icons, carousel arrows, FAQ chevron
│   └── slider/             # Feature carousel images
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Fonts, header/footer shell, metadata
│   │   ├── page.tsx        # Home landing
│   │   ├── globals.css     # Brand CSS variables + base styles
│   │   ├── privacy-policy/
│   │   └── terms-of-service/
│   ├── components/         # Header, Footer, Banner, Features, …
│   └── content/
│       └── site.ts         # ★ All editable marketing copy
└── package.json
```

## How to edit content

Edit **`src/content/site.ts`**. That file holds:

- Site meta / OG
- Header & footer CTAs, social links, copyright
- Hero banner copy & image paths
- Feature cards
- “How to Get Started” steps
- FAQ accordion + slider titles
- Privacy Policy & Terms of Service sections

Image paths are relative to `public/` (e.g. `/logo.png`, `/icons/dollar-coin.png`). Replace files under `public/` or update the paths in `site.ts`.

### Brand tokens

Defined as CSS variables in `src/app/globals.css`:

| Token                    | Value                          |
|--------------------------|--------------------------------|
| `--exclusio-pink`        | `#F3BDD4`                      |
| `--exclusio-pink-alt`    | `#F4BDD3`                      |
| `--exclusio-blue`        | `#97C7E2`                      |
| `--exclusio-text`        | `#333333`                      |
| `--exclusio-text-muted`  | `rgba(51, 51, 51, 0.6)`        |

## Pages

| Route                 | Source                          |
|-----------------------|---------------------------------|
| `/`                   | Banner → Features → Get Started → FAQ + slider |
| `/privacy-policy`     | Legal content page              |
| `/terms-of-service`   | Legal content page              |

External CTAs point to `https://exclusio.io/login` and `https://exclusio.io/register`.

## Content notes (WP database)

The WordPress **database was not in the backup**, so theme options and page builder field values were not available as PHP/SQL. Marketing copy, CTAs, social URLs, and legal text were **ported from the live site HTML** at `https://start.exclusio.io` (scraped during conversion). Layout, spacing, fonts, and colors come from the `exclusio` theme CSS and Elementor/VC shortcode templates in the backup.

If live copy drifts, update `src/content/site.ts` — that is the single source of truth.

## Assets

Copied from `Wordpress-backup/var/www/html/wp-content/uploads/` (2025/08 marketing assets + 2026/02 OG/favicon). The WordPress backup itself was not modified.

## Deploy

Build statically-friendly Node output:

```bash
pnpm build
pnpm start
```

Or deploy to **Vercel** / **Netlify** / any Node host:

1. Set install command: `pnpm install`
2. Set build command: `pnpm build`
3. Output: Next.js default (`.next`)
4. Set env `NODE_VERSION` to 20+ if needed

Optional static export is not enabled by default (uses App Router features). For pure static hosting, add `output: "export"` in `next.config.ts` after verifying no server-only APIs are required.

## Design fidelity

- Matches WP exclusio theme: floating header card, pink/blue CTAs, feature cards with overlapping circular icons, get-started pink wash, FAQ accordion + center carousel
- Mobile: stacked hero, full-width feature cards, header padding collapses (`margin: 60px 100px` → flush on small screens)
- Intentionally keeps Exclusio pink/blue brand (not generic purple AI themes)
