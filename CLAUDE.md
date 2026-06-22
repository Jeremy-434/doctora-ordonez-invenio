# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # production build → dist/
npm run preview   # serve the built dist/
npm run check     # TypeScript check via astro check
```

## Architecture

### Single source of truth
`src/config/site.ts` exports `SiteConfig` (interface) and `siteConfig` (values). **All copy, URLs, IDs, and labels must come from here.** Never hardcode strings inside component files.

### Design tokens pipeline
`src/styles/tokens.css` → CSS custom properties → `tailwind.config.ts` maps every CSS var to a Tailwind token name. All Tailwind color/shadow/radius classes in this project are aliases; never use raw hex in class names.

### Component layers
- **`src/pages/index.astro`** — orchestrator only. Imports `siteConfig` and passes typed prop slices to sections. No logic or styling here.
- **`src/components/layout/BaseLayout.astro`** — HTML shell, loads fonts, imports both CSS files, mounts all persistent React islands: `Preloader`, `SceneCanvas`, `ScrollProgress`, `SmoothScroll`, `CustomCursor`.
- **`src/components/sections/`** — one `.astro` file per section. Each receives only its typed prop slice, never the whole `siteConfig`.
- **`src/components/ui/`** — reusable primitives. React (`.tsx`) only for components that need browser APIs or animation.
- **`src/components/layout/MobileNav.tsx`** — only React island in layout; handles hamburger toggle.

### React islands rule
Use `.astro` for everything static. Use `.tsx` + `client:only="react"` only when the component needs `window`/`document`, GSAP, Three.js, or event listeners. All current islands: `Preloader`, `SceneCanvas`, `AmbientBackground`, `ClinicModel`, `CustomCursor`, `ScrollProgress`, `SmoothScroll`, `MobileNav`.

### Animation system
- **`src/lib/gsap.ts`** — registers ScrollTrigger, sets global defaults, exports `{ gsap, ScrollTrigger, prefersReduced }`. Import from here, not directly from `gsap`.
- **`src/lib/animations.ts`** — reusable helpers: `fadeUp`, `fadeIn`, `staggerCards`, `countUp`, `splitAndReveal`, `drawLine`. All guard against `prefersReduced`.
- Inline GSAP in section `.astro` files goes inside `<script>` tags using dynamic `import('gsap')` to keep it client-side.
- CSS class `js-animate-hidden` hides elements before GSAP hydrates to prevent FOUC.

### 3D background (SceneCanvas)
`src/components/ui/SceneCanvas.tsx` renders a Three.js scene into a `position:fixed` full-viewport canvas at `z-0`. It lives behind all page content. The hero section has an empty right column that lets the 3D scene show through. The render loop uses `requestAnimationFrame`; GSAP ScrollTrigger drives the scroll-linked rotation. Always cancel the RAF and call `renderer.dispose()` in the cleanup return.

### Smooth scroll
Lenis (`@studio-freight/lenis`) in `SmoothScroll.tsx` is the scroll driver. It feeds into `gsap.ticker` so GSAP ScrollTrigger stays in sync. Do not add `scroll-behavior: smooth` to CSS — Lenis handles it. Anchor links in `SmoothScroll.tsx` delegate to `lenis.scrollTo()`.

### `prefers-reduced-motion`
Handled at two levels: GSAP global timeline scale is set to 0 in `src/lib/gsap.ts`, and CSS in `animations.css` removes all transitions. Every animation helper also guards with an early return.

## Assets workflow
- `assets/` (project root) — source/working files provided by the client.
- `public/` — files copied here are served at the site root (`/filename`). Copy client assets here before referencing them in components.
- Components reference images as absolute public paths (`/hero.jpg`, `/logo.jpg`) — never relative paths or imports from `assets/`.
