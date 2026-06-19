# Unifisio — Apply Dark Mode Token System

Paste this into **Claude Code** to apply the complete dark-mode brand identity to `invenio-clients/unifisio/`.
Source of truth for all values: `unifisio/assets/Unifisio-Dark.html`.

This updates colors, backgrounds, shadows, and text throughout every component.
It does NOT change any layout, grid, padding, content, or responsive class.

---

## Prompt

```
You are updating invenio-clients/unifisio/ with a new dark-mode-first design token system.
Every color, background, shadow, and text reference must be updated. Layout and structure are frozen.

Work directory: invenio-clients/unifisio/

Apply every change below exactly as written. After all changes, run `npm run dev` to verify.

---

## FILE 1 — Replace src/styles/tokens.css completely

```css
/* ─── Unifisio Design Tokens — Dark mode first ─── */

:root {
  /* Backgrounds */
  --color-bg: #07111D;
  --color-surface: #0C1B2B;
  --color-surface-raised: #112438;
  --color-border: #1A3448;

  /* Brand */
  --color-primary: #00C9E4;
  --color-primary-dim: #007E91;
  --color-secondary: #38BDF8;
  --color-deep: #0B5E8A;

  /* Text */
  --color-text: #DCF0F8;
  --color-text-muted: #6B9BB5;
  --color-text-faint: #3E6985;

  /* Semantic */
  --color-gold: #F59E0B;
  --color-success: #34D399;

  /* Glows — not drop shadows */
  --shadow-sm: 0 0 0 1px rgba(0,201,228,0.08), 0 2px 8px rgba(0,0,0,0.3);
  --shadow-md: 0 0 0 1px rgba(0,201,228,0.14), 0 8px 32px rgba(0,0,0,0.4), 0 0 24px rgba(0,201,228,0.08);
  --shadow-lg: 0 0 0 1px rgba(0,201,228,0.1), 0 16px 64px rgba(0,0,0,0.5), 0 0 80px rgba(0,201,228,0.06);

  /* Hero overlay */
  --hero-gradient: linear-gradient(to right, #07111DF0 0%, #07111DCC 35%, #07111D66 65%, transparent 100%);

  /* Geometry */
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

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; color-scheme: dark; }
body { font-family: Inter, sans-serif; color: var(--color-text); background-color: var(--color-bg); }
```

---

## FILE 2 — Replace tailwind.config.ts completely

```ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-raised': 'var(--color-surface-raised)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        'primary-dim': 'var(--color-primary-dim)',
        secondary: 'var(--color-secondary)',
        deep: 'var(--color-deep)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-faint': 'var(--color-text-faint)',
        gold: 'var(--color-gold)',
        success: 'var(--color-success)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--radius-sm)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## FILE 3 — Update src/config/site.ts

Find and replace only the `colors:` block (lines ~72–79):

Replace the entire `colors: { ... }` object with:
```ts
colors: {
  primary: '#00C9E4',
  secondary: '#38BDF8',
  accentLight: '#0C1B2B',
  bg: '#07111D',
  text: '#DCF0F8',
  gold: '#F59E0B',
},
```

---

## FILE 4 — src/components/layout/BaseLayout.astro

Change:
`<html lang="es-AR">`
To:
`<html lang="es-AR" class="dark">`

Update Google Fonts link — add weight 800:
Change:
`family=Inter:wght@400;500;600;700`
To:
`family=Inter:wght@400;500;600;700;800`

---

## FILE 5 — src/components/sections/HeaderSection.astro

Change the header element class:
Old: `class="sticky top-0 z-50 bg-white border-b border-gray-100"`
New: `class="sticky top-0 z-50 bg-surface-raised/90 backdrop-blur-md border-b border-border"`

Change nav link class:
Old: `class="text-primary font-medium hover:text-secondary transition"`
New: `class="text-text font-medium hover:text-primary transition"`

---

## FILE 6 — src/components/sections/HeroSection.astro

Change the overlay div:
Old: `<div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-75"></div>`
New: `<div class="absolute inset-0" style="background: var(--hero-gradient);"></div>`

Change headline:
Old: `class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"`
New: `class="text-3xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight"`

Change subheadline:
Old: `class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"`
New: `class="text-lg md:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed"`

Change trust bar container:
Old: `class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white/80 text-sm"`
New: `class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-text-muted text-sm"`

Change ghost button inline class:
Old: `class="text-white border-white hover:bg-white/10"`
New: `class="text-primary border-primary hover:bg-primary/10"`

---

## FILE 7 — src/components/sections/StatsSection.astro

Change section:
Old: `<section class="bg-primary text-white py-16 md:py-24">`
New: `<section class="py-16 md:py-24 text-text border-y border-border" style="background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-raised) 100%);">`

Change stat label:
Old: `class="text-white/80 text-sm md:text-base"`
New: `class="text-text-muted text-sm md:text-base"`

---

## FILE 8 — src/components/sections/ServicesSection.astro

Change section:
Old: `<section id="servicios" class="bg-white py-16 md:py-24">`
New: `<section id="servicios" class="bg-surface py-16 md:py-24">`

---

## FILE 9 — src/components/sections/ProcessSection.astro

Change section:
Old: `<section id="proceso" class="bg-accent-light py-16 md:py-24">`
New: `<section id="proceso" class="bg-surface-raised py-16 md:py-24">`

Change step number span:
Old: `<div class="text-6xl font-bold text-secondary mb-4">`
New: `<div class="text-6xl font-bold mb-4" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-deep) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">`

Change step title:
Old: `<h3 class="text-2xl font-semibold text-primary mb-3">`
New: `<h3 class="text-2xl font-semibold text-text mb-3">`

Change step description:
Old: `<p class="text-gray-700 leading-relaxed">`
New: `<p class="text-text-muted leading-relaxed">`

---

## FILE 10 — src/components/sections/TestimonialsSection.astro

Change section:
Old: `<section id="testimonios" class="bg-white py-16 md:py-24">`
New: `<section id="testimonios" class="bg-surface py-16 md:py-24">`

Change testimonial card:
Old: `class="bg-white border-l-4 border-secondary rounded-xl shadow-sm p-8"`
New: `class="bg-surface-raised border-l-4 border-primary rounded-xl shadow-sm p-8"`

Change quote icon:
Old: `class="w-8 h-8 text-secondary mb-4"`
New: `class="w-8 h-8 text-primary mb-4"`

Change quote text:
Old: `class="text-gray-700 mb-6 italic leading-relaxed"`
New: `class="text-text-muted mb-6 italic leading-relaxed"`

Change author name:
Old: `<p class="font-semibold text-primary">`
New: `<p class="font-semibold text-text">`

Change role:
Old: `<p class="text-sm text-gray-600">`
New: `<p class="text-sm text-text-muted">`

---

## FILE 11 — src/components/sections/CTABannerSection.astro

Change section:
Old: `<section class="bg-primary text-white py-16 md:py-24">`
New: `<section class="py-16 md:py-24 text-text border-y border-primary/20" style="background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-bg) 100%);">`

Change subtext:
Old: `class="text-lg text-white/80 mb-8"`
New: `class="text-lg text-text-muted mb-8"`

Change WhatsApp wrapper:
Old: `class="text-white/70"`
New: `class="text-text-faint"`

Change WhatsApp link:
Old: `class="text-white font-semibold hover:underline ml-1"`
New: `class="text-primary font-semibold hover:underline ml-1"`

In the `<style>` block:
Old: `outline: 2px solid white;`
New: `outline: 2px solid var(--color-primary);`

---

## FILE 12 — src/components/sections/FooterSection.astro

Change footer:
Old: `<footer class="bg-primary text-white py-16 md:py-24">`
New: `<footer class="bg-surface text-text py-16 md:py-24">`

Change tagline:
Old: `<p class="text-white/80">`
New: `<p class="text-text-muted">`

Change nav links:
Old: `class="text-white/80 hover:text-white transition"`
New: `class="text-text-muted hover:text-primary transition"`

Change social icons (both `<a>` tags):
Old: `class="text-white/80 hover:text-white transition"`
New: `class="text-text-muted hover:text-primary transition"`

Change bottom bar:
Old: `class="border-t border-white/20 pt-8 text-center text-white/60 text-sm"`
New: `class="border-t border-border pt-8 text-center text-text-faint text-sm"`

In the `<style>` block:
Old: `outline: 2px solid white;`
New: `outline: 2px solid var(--color-primary);`

The logo uses `class="h-8 brightness-0 invert mb-4"` — keep `invert` since it shows the logo white on the dark surface.

---

## FILE 13 — src/components/ui/Button.astro

Replace the `variantStyles` object:

Old:
```ts
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-opacity-90',
  secondary: 'bg-secondary text-white hover:bg-opacity-90',
  ghost: 'text-primary border border-primary hover:bg-accent-light',
};
```
New:
```ts
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-surface-raised text-text border border-border hover:border-primary hover:text-primary',
  secondary: 'bg-primary text-bg font-bold hover:opacity-90',
  ghost: 'text-primary border border-primary hover:bg-primary/10',
};
```

In the `<style>` block, update the glow shadow value:
Old: `box-shadow: 0 8px 24px rgba(0, 191, 216, 0.25);`
New: `box-shadow: 0 8px 24px rgba(0, 201, 228, 0.35);`

---

## FILE 14 — src/components/ui/Card.astro

Change card root class:
Old: `class={... bg-white rounded-xl shadow-sm hover:shadow-md ...}`
New: `class={... bg-surface rounded-xl shadow-sm hover:shadow-md ...}`

Change body text:
Old: `class="text-gray-600 leading-relaxed"`
New: `class="text-text-muted leading-relaxed"`

---

## FILE 15 — src/components/ui/StarRating.astro

Read this file. If stars use a hardcoded color class like `text-yellow-400`, change it to `text-gold`.
If it already uses `text-gold`, no change needed.

---

## FILE 16 — src/components/ui/SectionHeader.astro

Read this file. If any text uses `text-gray-*`, `text-primary`, or other hardcoded colors, update:
- Main title → `text-text`
- Subtitle → `text-text-muted`

---

## Final verification

After all changes:

1. Run `npm run dev`
2. Check visually:
   - Page background: deep navy (#07111D) ✓
   - Header: slightly lighter navy, frosted glass, cyan border ✓
   - Hero: hero photo visible on right, dark overlay on left, text readable ✓
   - Stats bar: gradient surface with section text ✓
   - Service cards: slightly lighter navy surface, cyan top border, glow on hover ✓
   - Process section: surface-raised background, cyan gradient step numbers ✓
   - Testimonials: surface-raised cards, cyan left border ✓
   - CTA Banner: dark gradient, cyan button, dark text on button ✓
   - Footer: surface background, muted text, cyan on hover ✓
3. CTA buttons must show DARK TEXT (#07111D) on the cyan background — not white
4. Run `npx astro check` — zero TypeScript errors
```
