# Unifisio Landing Page

A production-ready landing page for Unifisio, built with Astro 4, React islands, and Tailwind CSS.

## Project Structure

```
unifisio/
├── src/
│   ├── config/
│   │   └── site.ts              # Single source of truth for all content
│   ├── components/
│   │   ├── layout/              # BaseLayout & MobileNav
│   │   ├── sections/            # 9 section components (Header, Hero, etc.)
│   │   └── ui/                  # 4 reusable primitives (Button, Card, etc.)
│   ├── pages/
│   │   └── index.astro          # Page orchestrator
│   └── styles/
│       └── tokens.css           # Design tokens as CSS variables
├── public/
│   ├── logo.jpg                 # Brand logo (copy from assets)
│   ├── hero.jpg                 # Hero background image
│   └── og-image.jpg             # Open Graph image (1200×630 px)
├── package.json
├── astro.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Setup

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. Copy the logo and images to the public folder:
   ```bash
   cp assets/logo-unifisio.jpg public/logo.jpg
   # Add hero.jpg and og-image.jpg to public/
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the WhatsApp number in `src/config/site.ts`:
   ```typescript
   whatsapp: '+549XXXXXXXXXX',  // Replace with real number
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Building for Production

```bash
npm run build
```

This generates a static site in the `dist/` folder, ready to deploy.

### Type Checking

```bash
npm run check
```

Runs `astro check` to verify TypeScript strict mode.

## Customization

All content is centralized in `src/config/site.ts`. Edit the `siteConfig` object to update:
- Brand colors, fonts, and spacing
- Headlines, descriptions, and CTAs
- Service offerings and testimonials
- GHL Calendar ID and WhatsApp number
- Footer links and copyright

Components receive only their typed prop slices — **no hardcoding** of strings, colors, or URLs.

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Vercel auto-detects Astro and builds with `npm run build`
3. Deploy on every push to `main`

### Other Hosting

Static hosting works with any provider:
- **Netlify:** Deploy the `dist/` folder
- **GitHub Pages:** Use `dist/` as source
- **AWS S3 + CloudFront:** Upload the `dist/` folder

## Architecture Rules

- **Single source of truth:** All content lives in `src/config/site.ts`
- **Design tokens:** Colors and shadows are CSS variables in `src/styles/tokens.css`
- **Section components:** Each receives a typed prop slice, never the full config
- **Page orchestrator:** `src/pages/index.astro` is the only file importing `siteConfig`
- **Reusable UI:** Primitives in `src/components/ui/` are generic and composable
- **React islands only when needed:** `.tsx` for interactive elements (mobile nav), `.astro` for static
- **Mobile-first responsive design:** Tailwind breakpoints: sm, md, lg, xl

## Performance

- Static site generation (zero JavaScript by default)
- React island hydrated only for `MobileNav` component
- Optimized images with responsive variants
- CSS variables for efficient theming
- Lighthouse target: 90+ across all metrics

## SEO

- Semantic HTML with proper heading hierarchy
- Meta tags and Open Graph support in `BaseLayout.astro`
- Structured data ready (can be added to `BaseLayout`)
- Mobile-friendly responsive design
- Accessibility: WCAG AA color contrast, keyboard navigation

## Quality Assurance

Before shipping:

```bash
npm install && npm run dev      # Test locally
npx astro check                 # Verify TypeScript
npm run build                   # Test production build
```

Verify:
- ✅ All links work and scroll-to-section functions operate
- ✅ Mobile nav opens/closes on tap
- ✅ GHL calendar iframe loads correctly
- ✅ No console errors or warnings
- ✅ Responsive design looks good on mobile (375px), tablet (768px), desktop (1440px)

## License

© 2025 Unifisio. All rights reserved.
