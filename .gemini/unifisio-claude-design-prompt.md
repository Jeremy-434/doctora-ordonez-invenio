# Unifisio — Claude Design Prompt

Use this prompt with **Claude** (claude.ai or Claude Code) to rebuild the Unifisio landing page.
It preserves all sections, all content, all colors, and the full architecture from the current project.
Claude has creative freedom on: responsive polish, micro-animations, component aesthetics, card/button/layout details.
Claude must NOT change: section order, copy text, color tokens, or data in `site.ts`.

---

## Project context

**Client:** Unifisio — kinesiology and physiotherapy clinic, Argentina  
**Language:** Spanish (Argentina — "vos" form throughout)  
**Tech stack:** Astro 4 + React (islands only) + TypeScript strict + Tailwind CSS v3  
**Architecture:** single source of truth in `src/config/site.ts`, CSS tokens in `src/styles/tokens.css`

---

## Color system (dark mode first — do not change these values)

```css
:root {
  --color-bg: #07111D;              /* deepest background — deep ocean navy */
  --color-surface: #0C1B2B;         /* cards, service section, testimonials */
  --color-surface-raised: #112438;  /* header, process section */
  --color-border: #1A3448;          /* dividers, card edges */

  --color-primary: #00C9E4;         /* vibrant cyan — main accent */
  --color-primary-dim: #007E91;     /* muted cyan — chip backgrounds */
  --color-secondary: #38BDF8;       /* lighter sky blue */
  --color-deep: #0B5E8A;            /* original logo blue — glow/ambient only */

  --color-text: #DCF0F8;            /* near-white with blue tint */
  --color-text-muted: #6B9BB5;      /* labels, subtitles, captions */
  --color-text-faint: #3E6985;      /* low-emphasis text */

  --color-gold: #F59E0B;            /* testimonial stars */
  --color-success: #34D399;         /* trust bar checkmarks */

  --shadow-sm: 0 0 0 1px rgba(0,201,228,0.08), 0 2px 8px rgba(0,0,0,0.3);
  --shadow-md: 0 0 0 1px rgba(0,201,228,0.14), 0 8px 32px rgba(0,0,0,0.4), 0 0 24px rgba(0,201,228,0.08);
  --shadow-lg: 0 0 0 1px rgba(0,201,228,0.1), 0 16px 64px rgba(0,0,0,0.5), 0 0 80px rgba(0,201,228,0.06);

  --hero-gradient: linear-gradient(to right, #07111DF0 0%, #07111DCC 35%, #07111D66 65%, transparent 100%);

  --radius: 12px;
  --radius-sm: 8px;
  --radius-lg: 20px;
}

[data-theme="light"] {
  --color-bg: #FFFFFF;
  --color-surface: #F0F8FC;
  --color-surface-raised: #FFFFFF;
  --color-border: #C8DDE9;
  --color-text: #0A1A25;
  --color-text-muted: #3D6070;
  --color-text-faint: #7FA3B5;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.16);
  --hero-gradient: linear-gradient(to right, #0B5E8ADD 35%, transparent);
}
```

**Tailwind must map all tokens** under `extend.colors`, `extend.boxShadow`, `extend.borderRadius`.  
**Never use raw hex values in Tailwind classes** — always reference token names.

---

## Architecture rules (strict — do not violate)

1. **`src/config/site.ts`** — single source of truth. All strings, numbers, URLs come from here. Zero hardcoding in components.
2. **`src/styles/tokens.css`** — CSS variables only. `tailwind.config.ts` references these.
3. **`src/components/sections/`** — one `.astro` file per section. Each receives only its typed prop slice.
4. **`src/pages/index.astro`** — only file that imports `siteConfig`. Passes typed slices down. No logic, no styling.
5. **`src/components/ui/`** — reusable primitives: `Button.astro`, `Card.astro`, `StarRating.astro`, `SectionHeader.astro`.
6. **`src/components/layout/`** — `BaseLayout.astro` (HTML shell), `MobileNav.tsx` (React island).
7. **React islands** — `.tsx` only for `MobileNav` and client-side interactions (cursor, scroll, animations).
8. **Mobile-first** — all responsive using Tailwind breakpoints. No hardcoded pixel values in components.

---

## All content — do not change any copy

### Site metadata
```ts
brand.name: 'Unifisio'
brand.logo: '/logo.jpg'
brand.tagline: 'Tu salud y movimiento son nuestra prioridad'
font: 'Inter'
ghlCalendarId: 'N2oMWoHSIvzBX4r9rvfY'
calendarBaseUrl: 'https://www.invenioagency.com/widget/booking/'
whatsapp: '+549XXXXXXXXXX'
seo.title: 'Unifisio | Kinesiología y Rehabilitación'
seo.description: 'Tratamientos kinesiológicos personalizados. Primera consulta sin cargo. Agendá tu turno online.'
seo.ogImage: '/og-image.jpg'
seo.canonicalUrl: 'https://unifisio.invenioagency.com'
```

### Section 1 — Header (sticky)
- Logo: `<img src="/logo.jpg" alt="Unifisio" class="h-10" />`
- Nav links: Servicios · Proceso · Testimonios · Agendá tu turno
- "Agendá tu turno" = button (primary color) → scrolls to `#calendar`
- Mobile: hamburger → full-width dropdown (React island `MobileNav.tsx`)
- Background: `--color-surface-raised` with `backdrop-blur-md` when scrolled, bottom border `--color-border`

### Section 2 — Hero
- `headline: 'Recuperá tu movimiento, recuperá tu vida'`
- `subheadline: 'Tratamientos kinesiológicos personalizados para que volvás a moverte sin dolor, con la calidez y el seguimiento que merecés.'`
- CTA primary: `'Agendá tu turno gratis'` → `#calendar`
- CTA secondary: `'Ver nuestros servicios'` → `#servicios`
- Hero image: `/public/hero.jpg` full-width background with `--hero-gradient` overlay
- Trust bar — 3 items separated by `·`:
  - `'✓ Profesionales certificados'`
  - `'✓ Turnos en 24 hs'`
  - `'✓ Primera consulta sin cargo'`
- Checkmarks: `--color-success` green

### Section 3 — Stats bar
Background: `linear-gradient(135deg, --color-surface, --color-surface-raised)` with `border-y border-border`
```
+500  — Pacientes atendidos
10+   — Años de experiencia
98%   — Satisfacción de pacientes
20+   — Tratamientos disponibles
```
Grid: 4 cols desktop / 2×2 mobile

### Section 4 — Services (`id="servicios"`, bg: `--color-surface`)
Section title: `'Nuestros tratamientos'`  
Subtitle: `'Abordajes personalizados para cada etapa de tu recuperación'`

6 cards in 3×2 grid (1 col mobile, 2 tablet, 3 desktop):
```
🏃 Kinesiología Deportiva
   Rehabilitación y prevención de lesiones para deportistas de todos los niveles y disciplinas.

🔧 Rehabilitación Post-Quirúrgica
   Acompañamos tu recuperación después de una cirugía con protocolos actualizados y seguimiento personalizado.

⚡ Tratamiento del Dolor
   Abordaje integral del dolor agudo y crónico de columna, cuello, hombros y articulaciones.

🔬 Electroterapia
   Técnicas de neuroestimulación y ultrasonido terapéutico para acelerar la cicatrización y reducir el dolor.

🧘 Pilates Terapéutico
   Fortalecimiento del core, corrección postural y mejora del equilibrio con ejercicio terapéutico supervisado.

🏠 Atención Domiciliaria
   Llevamos el tratamiento hasta tu hogar para mayor comodidad, continuidad y adherencia al tratamiento.
```
Card style: bg `--color-surface`, 4px top border `--color-primary`, `--shadow-sm` at rest, `--shadow-md` on hover, `--radius`

### Section 5 — Process (`id="proceso"`, bg: `--color-surface-raised`)
Title: `'¿Cómo funciona?'`  
Subtitle: `'En tres pasos simples estás en camino a recuperarte'`

```
01 — Evaluación inicial
     Analizamos tu condición, historial clínico y objetivos para diseñar el plan de tratamiento ideal para vos.

02 — Plan personalizado
     Aplicamos el tratamiento más adecuado con seguimiento continuo de tu evolución y ajustes cuando sea necesario.

03 — Alta y mantenimiento
     Te acompañamos hasta la recuperación total y te damos las herramientas para mantenerte sano y activo.
```
Step numbers: `text-6xl font-bold`, gradient text `linear-gradient(135deg, --color-primary 0%, --color-deep 100%)`  
Desktop: 3 columns with connecting horizontal line between number circles

### Section 6 — Testimonials (`id="testimonios"`, bg: `--color-surface`)
Title: `'Lo que dicen nuestros pacientes'`

```
María G. — Paciente, Kinesiología deportiva — ★★★★★
"Llegué con dolor crónico de columna y después de 8 sesiones pude retomar el deporte.
Excelente atención, muy profesionales y siempre disponibles para consultas."

Carlos M. — Paciente, Rehabilitación post-quirúrgica — ★★★★★
"Me operaron la rodilla y Unifisio me ayudó a recuperarme mucho más rápido de lo esperado.
El seguimiento fue constante y los resultados, increíbles."

Laura S. — Paciente, Atención domiciliaria — ★★★★★
"El servicio a domicilio fue ideal para mí. Muy puntual, profesional y efectivo.
Ya no tengo los dolores que me impedían trabajar. Los recomiendo al 100%."
```
Card style: bg `--color-surface-raised`, left border 4px `--color-primary`, quote icon `--color-primary`, stars `--color-gold`

### Section 7 — CTA Banner
Background: `linear-gradient(135deg, --color-surface 0%, --color-bg 100%)` with top/bottom border `--color-primary` at 20% opacity  
Headline: `'¿Seguís viviendo con dolor?'`  
Subtext: `'La primera consulta es sin cargo. Agendá hoy y empezá tu recuperación.'`  
Button: `'Reservar mi turno'` → `#calendar`  
WhatsApp link below: `'O escribinos por WhatsApp'` → `https://wa.me/+549XXXXXXXXXX`

### Section 8 — Calendar (`id="calendar"`, bg: `--color-bg`)
Title: `'Agendá tu turno'`  
Subtitle: `'Elegí el horario que mejor se adapte a vos. Primera consulta sin cargo.'`  
GHL iframe:
```html
<iframe
  src="https://www.invenioagency.com/widget/booking/N2oMWoHSIvzBX4r9rvfY"
  style="width:100%;min-height:700px;border:none;overflow:hidden;"
  scrolling="no"
  title="Reservar turno con Unifisio"
/>
```

### Section 9 — Footer (bg: `--color-surface`)
Logo: `<img src="/logo.jpg" alt="Unifisio" class="h-8 brightness-0 invert mb-4" />`  
Tagline: `'Tu salud y movimiento son nuestra prioridad'`  
3 columns desktop:
- Col 1: Logo + tagline
- Col 2: Nav links (Servicios · Proceso · Testimonios · Agendá tu turno)
- Col 3: Social/contact icons (Instagram, WhatsApp)  

Bottom bar: `'© 2025 Unifisio. Todos los derechos reservados.'` — centered, `text-text-faint`, smaller text

---

## Animations & interactions (improve over the previous version)

The previous version used GSAP + Lenis. Claude has freedom to keep, replace, or improve these.  
**Motion personality: calm, smooth, healing. `power2.out`. No bounce, no elastic.**

### Required interactions:
- **Custom cursor** — desktop only: small cyan dot (`--color-primary`) + lagging ring. Hidden on mobile/touch.
- **Scroll progress bar** — fixed top, 3px, gradient `--color-deep → --color-primary` (left to right)
- **Smooth scroll** — Lenis or equivalent, `lerp: 0.08`
- **Minimal preloader** — dark bg (`--color-bg`) + cyan spinner, fades out in ≤1s
- **Hero entrance** — headline words reveal on load, subheadline + CTAs sequence after
- **Ambient background canvas** — hero section only: soft drifting orbs in `--color-deep` at ~10% opacity and `--color-primary` at ~7% opacity. Slow horizontal drift. Desktop only.
- **Stats count-up** — numbers animate from 0 on scroll entry
- **Scroll reveals** — every section fades/slides up as it enters viewport (`once: true`)
- **Service cards stagger** — 6 cards reveal with stagger 0.1s
- **Process line draw** — connecting line scales from left on scroll
- **Testimonials alternate** — left card slides from left, center from below, right card from right
- **Button hover** — subtle Y-lift + cyan glow shadow
- **Card hover** — Y-lift only (no tilt — medical brand)
- **Nav link hover** — underline draws from left to right

### Reduced motion:
All animations must respect `prefers-reduced-motion: reduce` — show everything immediately, no transforms.

---

## File structure to generate

```
src/
  config/
    site.ts                    ← all content (exact values above)
  styles/
    tokens.css                 ← exact token system above
    animations.css             ← animation layer (will-change, hover rules, cursor hide)
  lib/
    gsap.ts                    ← GSAP + ScrollTrigger setup, defaults, reduced-motion
    animations.ts              ← fadeUp(), staggerCards(), splitAndReveal(), drawLine(), countUp()
  components/
    layout/
      BaseLayout.astro         ← HTML shell, Inter font, meta tags, imports tokens + animations
      MobileNav.tsx            ← React island — hamburger toggle
    sections/
      HeaderSection.astro
      HeroSection.astro
      StatsSection.astro
      ServicesSection.astro
      ProcessSection.astro
      TestimonialsSection.astro
      CTABannerSection.astro
      CalendarSection.astro
      FooterSection.astro
    ui/
      Button.astro             ← props: variant (primary|secondary|ghost), size (sm|md|lg), href?, text, external?
      Card.astro               ← props: title, body, icon?, topAccent?
      StarRating.astro         ← props: count: number
      SectionHeader.astro      ← props: title, subtitle?, align? (left|center)
      CustomCursor.tsx         ← React island, client:only="react"
      AmbientBackground.tsx    ← React island, hero canvas orbs, client:only="react"
      ScrollProgress.tsx       ← React island, fixed top bar, client:only="react"
      SmoothScroll.tsx         ← React island, Lenis setup, client:only="react"
      Preloader.tsx            ← React island, client:only="react"
  pages/
    index.astro                ← only importer of siteConfig, passes typed slices to sections
```

Config files:
```
package.json          ← astro, @astrojs/react, @astrojs/tailwind, tailwindcss, react, react-dom,
                         typescript, gsap, @studio-freight/lenis
astro.config.ts
tsconfig.json         ← strict: true
tailwind.config.ts    ← maps all CSS tokens to named classes
```

---

## UI component specs

### Button.astro
```ts
variant: 'primary'   → bg-primary text-bg font-bold hover:opacity-90
variant: 'secondary' → bg-surface-raised text-text border border-border hover:border-primary hover:text-primary
variant: 'ghost'     → text-primary border border-primary hover:bg-primary/10
```
All variants: `data-btn` attribute, `cursor: none` overridden (cursor system handles it)

### Card.astro (service cards)
- `bg-surface` background
- When `topAccent=true`: 4px top border `--color-primary`
- `shadow-sm` at rest → `shadow-md` on hover
- `data-service-card` attribute
- `border border-border` full border

### SectionHeader.astro
- Title: `text-text`, `text-2xl md:text-4xl`, `font-bold`
- Subtitle: `text-text-muted`, `text-lg`
- `data-animate="section-title"` and `data-animate="section-subtitle"` on respective elements

---

## Section background map

| Section | Background | Text |
|---------|-----------|------|
| Header (sticky) | `surface-raised/90 + backdrop-blur-md` | `text` |
| Hero | `bg` + hero.jpg + `--hero-gradient` overlay | `text` |
| Stats bar | gradient `surface → surface-raised` + `border-y border-border` | `text` |
| Services | `surface` | `text` |
| Process | `surface-raised` | `text` |
| Testimonials | `surface` | `text` |
| CTA Banner | gradient `surface → bg` + `border-y border-primary/20` | `text` |
| Calendar | `bg` | `text` |
| Footer | `surface` | `text-muted` |

---

## SEO & accessibility

```html
<!-- in BaseLayout.astro -->
<html lang="es-AR" class="dark">
<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<link rel="canonical" href={canonicalUrl} />
```
- All `<img>` must have descriptive `alt` text
- All interactive elements keyboard-navigable (focus-visible rings using `--color-primary`)
- WCAG AA contrast on all text/background pairs
- `<iframe>` must have `title` attribute

---

## Quality gates

- `npm install && npm run dev` — zero errors
- `npx astro check` — zero TypeScript errors
- Zero hardcoded strings, colors, or IDs inside any component
- All Tailwind classes use token names — no raw hex in class names
- Mobile nav opens/closes correctly on tap
- All anchor links (`#calendar`, `#servicios`, `#proceso`, `#testimonios`) work
- Desktop: custom cyan cursor visible, ring lags behind
- Hero: ambient orbs visible, text 100% readable
- Scroll progress bar fills with deep-to-cyan gradient
- Stats count up on scroll entry
- prefers-reduced-motion: zero animation, all content instantly visible
- Mobile (≤767px): system cursor, no canvas, all content visible

---

## Before running

- [ ] Copy `assets/logo-unifisio.jpg` → `public/logo.jpg`
- [ ] Add hero photo → `public/hero.jpg`
- [ ] Add OG image (1200×630 px) → `public/og-image.jpg`
- [ ] Replace `+549XXXXXXXXXX` with real WhatsApp number in `site.ts`
- [ ] Confirm GHL Calendar ID: `N2oMWoHSIvzBX4r9rvfY`
