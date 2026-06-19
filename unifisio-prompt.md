
# Unifisio — Landing Page Prompt

Paste the block below into Claude Code to generate the complete project.

> **Before running:** copy `assets/logo-unifisio.jpg` → `unifisio/public/logo.jpg` and add `hero.jpg` + `og-image.jpg` to `unifisio/public/`.

---

```
You are building a production-ready landing page for Unifisio inside `invenio-clients/unifisio/`.

---

## Client Data

- Client name: Unifisio
- Slug (folder name): unifisio
- Language: Spanish (Argentina — use "vos" form)
- Primary color: #0B5E8A
- Secondary color: #00BFD8
- Accent light: #E8F4FB
- Background: #FFFFFF
- Text color: #111111
- GHL Calendar ID: N2oMWoHSIvzBX4r9rvfY
- Calendar base URL: https://www.invenioagency.com/widget/booking/
- Font: Inter (Google Fonts — weights 400, 500, 600, 700)
- WhatsApp number: +549XXXXXXXXXX   ← REPLACE with real number before deploying

---

## Page Sections — in this exact order

### 1. Header (sticky)
- Logo: `<img src="/logo.jpg" alt="Unifisio" class="h-10" />`
- Nav links: Servicios | Proceso | Testimonios | Agendá tu turno
- "Agendá tu turno" is a button (secondary color) that scrolls to #calendar
- Mobile: hamburger menu that opens a full-width dropdown (React island — `MobileNav.tsx`)
- Background: white with a 1px bottom border in a light tint of primary when scrolled

### 2. Hero
- Headline: "Recuperá tu movimiento, recuperá tu vida"
- Subheadline: "Tratamientos kinesiológicos personalizados para que volvás a moverte sin dolor, con la calidez y el seguimiento que merecés."
- CTA primary: "Agendá tu turno gratis" → scrolls to #calendar
- CTA secondary: "Ver nuestros servicios" → scrolls to #servicios
- Hero image: `/public/hero.jpg` (full-width background with left-to-right gradient overlay: primary color at 75% opacity → transparent)
- Trust bar below CTAs — 3 inline items separated by a dot:
    "✓ Profesionales certificados" · "✓ Turnos en 24 hs" · "✓ Primera consulta sin cargo"

### 3. Stats bar (full-width, primary background, white text)
- Stat 1: value="+500" label="Pacientes atendidos"
- Stat 2: value="10+" label="Años de experiencia"
- Stat 3: value="98%" label="Satisfacción de pacientes"
- Stat 4: value="20+" label="Tratamientos disponibles"
- 4 columns on desktop, 2×2 grid on mobile

### 4. Services (id="servicios")
- Section title: "Nuestros tratamientos"
- Section subtitle: "Abordajes personalizados para cada etapa de tu recuperación"
- 6 service cards in a 3×2 grid (2 columns on mobile):
    1. title="Kinesiología Deportiva" icon="🏃" description="Rehabilitación y prevención de lesiones para deportistas de todos los niveles y disciplinas."
    2. title="Rehabilitación Post-Quirúrgica" icon="🔧" description="Acompañamos tu recuperación después de una cirugía con protocolos actualizados y seguimiento personalizado."
    3. title="Tratamiento del Dolor" icon="⚡" description="Abordaje integral del dolor agudo y crónico de columna, cuello, hombros y articulaciones."
    4. title="Electroterapia" icon="🔬" description="Técnicas de neuroestimulación y ultrasonido terapéutico para acelerar la cicatrización y reducir el dolor."
    5. title="Pilates Terapéutico" icon="🧘" description="Fortalecimiento del core, corrección postural y mejora del equilibrio con ejercicio terapéutico supervisado."
    6. title="Atención Domiciliaria" icon="🏠" description="Llevamos el tratamiento hasta tu hogar para mayor comodidad, continuidad y adherencia al tratamiento."
- Card style: white bg, 4px top border in secondary color, rounded-xl, shadow-sm, hover:shadow-md transition

### 5. Process (id="proceso", accent-light background)
- Section title: "¿Cómo funciona?"
- Section subtitle: "En tres pasos simples estás en camino a recuperarte"
- Step 1: number="01" title="Evaluación inicial" description="Analizamos tu condición, historial clínico y objetivos para diseñar el plan de tratamiento ideal para vos."
- Step 2: number="02" title="Plan personalizado" description="Aplicamos el tratamiento más adecuado con seguimiento continuo de tu evolución y ajustes cuando sea necesario."
- Step 3: number="03" title="Alta y mantenimiento" description="Te acompañamos hasta la recuperación total y te damos las herramientas para mantenerte sano y activo."
- Layout: 3 columns with a connecting line between numbers on desktop
- Step numbers: large (text-5xl), secondary color, font-bold

### 6. Testimonials (id="testimonios", white background)
- Section title: "Lo que dicen nuestros pacientes"
- Testimonial 1: quote="Llegué con dolor crónico de columna y después de 8 sesiones pude retomar el deporte. Excelente atención, muy profesionales y siempre disponibles para consultas." author="María G." role="Paciente — Kinesiología deportiva" stars=5
- Testimonial 2: quote="Me operaron la rodilla y Unifisio me ayudó a recuperarme mucho más rápido de lo esperado. El seguimiento fue constante y los resultados, increíbles." author="Carlos M." role="Paciente — Rehabilitación post-quirúrgica" stars=5
- Testimonial 3: quote="El servicio a domicilio fue ideal para mí. Muy puntual, profesional y efectivo. Ya no tengo los dolores que me impedían trabajar. Los recomiendo al 100%." author="Laura S." role="Paciente — Atención domiciliaria" stars=5
- Card style: white bg, left border 4px secondary color, quote icon in secondary color, star rating in gold (#F4A100), shadow-sm

### 7. CTA Banner (primary background, white text)
- Headline: "¿Seguís viviendo con dolor?"
- Subtext: "La primera consulta es sin cargo. Agendá hoy y empezá tu recuperación."
- Button: "Reservar mi turno" → scrolls to #calendar
- WhatsApp link below button: "O escribinos por WhatsApp" → `https://wa.me/+549XXXXXXXXXX`

### 8. Calendar (id="calendar", accent-light background)
- Section title: "Agendá tu turno"
- Section subtitle: "Elegí el horario que mejor se adapte a vos. Primera consulta sin cargo."
- GHL iframe embed:
    <iframe
      src={`https://www.invenioagency.com/widget/booking/${calendarId}`}
      style="width:100%;min-height:700px;border:none;overflow:hidden;"
      scrolling="no"
      title="Reservar turno con Unifisio"
    />

### 9. Footer (primary background, white text)
- Logo/brand: `<img src="/logo.jpg" alt="Unifisio" class="h-8 brightness-0 invert" />`
- Tagline: "Tu salud y movimiento son nuestra prioridad"
- 3 columns on desktop:
    Col 1: Logo + tagline
    Col 2: Nav links (Servicios | Proceso | Testimonios | Agendá tu turno)
    Col 3: Social/contact icons (Instagram, WhatsApp)
- Bottom bar: "© 2025 Unifisio. Todos los derechos reservados." centered, smaller text, 60% opacity

---

## Tech Stack

Astro 4 + React (islands only). TypeScript strict. Tailwind CSS v3. No extra UI libraries.

---

## Architecture Rules — SOLID (do not violate)

### Rule 1 — Single source of truth: `src/config/site.ts`
Export a `SiteConfig` interface covering: brand, colors, font, ghlCalendarId, calendarBaseUrl, whatsapp, hero, stats, services, process, testimonials, cta, footer.
Export a `siteConfig` const with all client values.
NEVER hardcode any string, color, URL, or ID inside a component.

### Rule 2 — Design tokens: `src/styles/tokens.css`
```css
:root {
  --color-primary: #0B5E8A;
  --color-secondary: #00BFD8;
  --color-accent-light: #E8F4FB;
  --color-bg: #FFFFFF;
  --color-text: #111111;
  --color-gold: #F4A100;
  --radius: 12px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
}
```
`tailwind.config.ts` must reference these same values under `extend.colors` and `extend.boxShadow`.

### Rule 3 — Section components: `src/components/sections/`
One `.astro` file per section. Each receives ONLY its typed prop slice — never the entire `SiteConfig`.
- HeaderSection.astro
- HeroSection.astro
- StatsSection.astro
- ServicesSection.astro
- ProcessSection.astro
- TestimonialsSection.astro
- CTABannerSection.astro
- CalendarSection.astro
- FooterSection.astro

### Rule 4 — Page orchestrator: `src/pages/index.astro`
Only file that imports `siteConfig`. Passes typed slices to each section. No logic, no styling here.

### Rule 5 — UI primitives: `src/components/ui/`
- Button.astro: props = { variant: "primary"|"secondary"|"ghost", size: "sm"|"md"|"lg", href?, text, external? }
- Card.astro: props = { title, body, icon?, topAccent?: boolean }
- StarRating.astro: props = { count: number }
- SectionHeader.astro: props = { title, subtitle?, align?: "left"|"center" }

### Rule 6 — Layout: `src/components/layout/`
- BaseLayout.astro: HTML shell, loads Inter from Google Fonts, imports tokens.css, sets meta tags from props
- MobileNav.tsx: React island — hamburger toggle, opens/closes mobile nav

### Rule 7 — React islands only when needed
`.astro` for everything static. `.tsx` only for MobileNav and any scroll-based interactions.

### Rule 8 — Responsive design (mobile-first)
- All sections: `px-4 md:px-8 lg:px-16 xl:px-24`, `py-16 md:py-24`
- Services grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Stats bar: `grid-cols-2 lg:grid-cols-4`
- Hero headline: `text-3xl md:text-5xl lg:text-6xl`
- Section titles: `text-2xl md:text-4xl`

### Rule 9 — SEO & meta (in BaseLayout.astro)
Accept title, description, ogImage as props and render:
```html
<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<link rel="canonical" href={canonicalUrl} />
```
Page title: "Unifisio | Kinesiología y Rehabilitación"
Description: "Tratamientos kinesiológicos personalizados. Primera consulta sin cargo. Agendá tu turno online."

### Rule 10 — Accessibility
- All `<img>` must have descriptive `alt` text
- All interactive elements must be keyboard-navigable
- Sufficient color contrast (WCAG AA)
- iframe must have a `title` attribute

---

## Deliverables — generate ALL files

**Config & root:**
- package.json (astro, @astrojs/react, @astrojs/tailwind, tailwindcss, react, react-dom, typescript)
- astro.config.ts
- tsconfig.json (strict: true)
- tailwind.config.ts

**Styles & config:**
- src/styles/tokens.css
- src/config/site.ts

**Layout:**
- src/components/layout/BaseLayout.astro
- src/components/layout/MobileNav.tsx

**Sections:**
- src/components/sections/HeaderSection.astro
- src/components/sections/HeroSection.astro
- src/components/sections/StatsSection.astro
- src/components/sections/ServicesSection.astro
- src/components/sections/ProcessSection.astro
- src/components/sections/TestimonialsSection.astro
- src/components/sections/CTABannerSection.astro
- src/components/sections/CalendarSection.astro
- src/components/sections/FooterSection.astro

**UI primitives:**
- src/components/ui/Button.astro
- src/components/ui/Card.astro
- src/components/ui/StarRating.astro
- src/components/ui/SectionHeader.astro

**Page:**
- src/pages/index.astro

**Docs:**
- README.md (run locally, deploy to Vercel, how to update content)

---

## Quality requirements

- `npm install && npm run dev` must run with zero errors
- `npx astro check` must pass with zero TypeScript errors
- No hardcoded strings, colors, or IDs inside any component file
- All Tailwind classes must use tokens from tailwind.config.ts — no raw hex values in class names
- Mobile nav must open/close correctly on tap
- GHL calendar iframe must load using the invenioagency.com base URL
- Page must look complete and professional with the content provided
```

---

## Checklist before running

- [ ] Copy `assets/logo-unifisio.jpg` → `unifisio/public/logo.jpg`
- [ ] Add a hero photo → `unifisio/public/hero.jpg`
- [ ] Add OG image (1200×630 px) → `unifisio/public/og-image.jpg`
- [ ] Replace `+549XXXXXXXXXX` with the real WhatsApp number in the prompt above
- [ ] Confirm GHL Calendar ID: `N2oMWoHSIvzBX4r9rvfY`
