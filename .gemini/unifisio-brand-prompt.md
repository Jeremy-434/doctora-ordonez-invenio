# Unifisio — Brand Identity Prompt (Dark Mode)

Paste this into **claude.ai** to generate a complete dark-mode token system for Unifisio.
The output replaces `tokens.css`, `tailwind.config.ts`, and the `colors` block in `site.ts`.
Run this BEFORE any design/animation steps.

---

## Color analysis (for context, read before pasting)

**Current palette problems:**
- Only 5 tokens — no surface layers, no text hierarchy, no glow system
- `#0B5E8A` (primary) is nearly invisible on dark backgrounds — too close to any dark surface
- `#00BFD8` (secondary cyan) is the star — it glows on dark. This becomes PRIMARY in dark mode
- `#E8F4FB` (accent light) only works on white — useless on dark
- Generic black-opacity shadows look flat and dated

**Dark mode direction:**
- Deep ocean navy backgrounds — not charcoal, not pure black. Hued toward `#0B5E8A`
- `#00BFD8` cyan promoted to primary accent — it pops against the deep navy
- `#0B5E8A` repurposed as `--color-deep` — ambient glow color, not text/border
- Text is a warm near-white with a blue tint — never pure white
- Glows replace drop shadows — cards breathe with a faint cyan edge

---

## Prompt

```
You are a senior brand identity designer and frontend engineer building a dark-mode design token system.

---

## Client

- Name: Unifisio
- Industry: Kinesiology and physiotherapy clinic (Argentina)
- Brand personality: Calm, trustworthy, professional, healing. Like deep water — still and restorative.
- Target audience: Patients recovering from injury or surgery, athletes, people with chronic pain
- Logo color (must be honored): #0B5E8A (deep ocean blue)
- Existing accent: #00BFD8 (bright cyan)
- Font: Inter

---

## Mode

Dark mode FIRST. Light mode as a [data-theme="light"] override.
The page defaults to dark. There is no theme toggle — dark is the product.

---

## Color analysis

Before writing code, analyze the two brand colors in the context of dark mode:

1. #0B5E8A on a dark background (#07111D): calculate approximate contrast ratio. Is it usable as text or a CTA button? (Spoiler: it's not — too dark.)
2. #00BFD8 on a dark background (#07111D): calculate approximate contrast ratio. Is it usable as a primary accent? (It should be — the cyan is bright.)
3. Conclude: on dark, #00BFD8 becomes the PRIMARY accent. #0B5E8A becomes a deep glow/ambient color.
4. Note what this palette should evoke: deep water, clean recovery, calm energy.

---

## Token system to design

### Layer A — Backgrounds

Design 4 background depths. Each must:
- Have a dark navy hue (not pure gray) — base hue from #0B5E8A lightened and desaturated toward black
- Be distinguishable at a glance but not jarring (8–12% HSL lightness steps)
- Never go below L=5% (no pure black) or above L=20% (stays dark)

Suggested starting point (adjust if needed):
- `--color-bg`: around #07111D — deepest layer
- `--color-surface`: around #0C1B2B — cards, service section, testimonials section
- `--color-surface-raised`: around #112438 — header (sticky), process section
- `--color-border`: around #1A3448 — subtle dividers, card edges, input borders

### Layer B — Brand accents

- `--color-primary`: The vibrant cyan — must be WCAG AA on `--color-bg` (contrast ≥ 4.5:1).
  Start with #00C9E4 (slightly brighter than #00BFD8 for more pop on deep navy). Adjust if needed.
- `--color-primary-dim`: Muted cyan at ~40% saturation — for chip backgrounds, subtle highlights.
  Around #007E91.
- `--color-secondary`: A lighter blue variant — sky family, visually distinct from primary.
  Around #38BDF8 or #60C5E8.
- `--color-deep`: The original #0B5E8A — NOT used for text. Used ONLY as a glow source and ambient
  background element (e.g., radial gradient orbs behind hero).

### Layer C — Text hierarchy

All text must have sufficient contrast on BOTH `--color-bg` AND `--color-surface`.

- `--color-text`: Near-white with a very subtle blue tint. Start: #DCF0F8. Target: ≥ 14:1 on bg.
- `--color-text-muted`: Mid-blue-gray for labels, subtitles, captions. Around #6B9BB5. Target: ≥ 4.5:1.
- `--color-text-faint`: Low-emphasis text. Around #2E5570. Target: ≥ 3:1.

### Layer D — Semantic

- `--color-gold`: Testimonial stars. Must be warm and readable on `--color-surface`.
  Use #F59E0B (warmer amber — better on dark than the current #F4A100).
- `--color-success`: Trust bar checkmarks (✓ Profesionales certificados, etc).
  Use #34D399 (mint green — warm, healthcare-friendly).

### Layer E — Glow shadows

Dark surfaces use glows, not drop shadows. The glow color is always a low-opacity variant of --color-primary.

- `--shadow-sm`: Subtle presence — card at rest.
  `0 0 0 1px rgba(0, 201, 228, 0.08), 0 2px 8px rgba(0, 0, 0, 0.3)`
- `--shadow-md`: On hover — card lifts with a cyan edge glow.
  `0 0 0 1px rgba(0, 201, 228, 0.14), 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 24px rgba(0, 201, 228, 0.08)`
- `--shadow-lg`: Section ambient — large glow behind feature elements.
  `0 0 0 1px rgba(0, 201, 228, 0.1), 0 16px 64px rgba(0, 0, 0, 0.5), 0 0 80px rgba(0, 201, 228, 0.06)`

### Hero gradient overlay

The hero has a full-bleed photo background. The overlay must:
- Match the page background color exactly on the left (so text is readable)
- Fade to transparent on the right (so the photo shows through)
- Work on dark — use the `--color-bg` value, not a fixed black

`--hero-gradient: linear-gradient(to right, #07111D F0 0%, #07111D CC 35%, #07111D 66 65%, transparent 100%)`

(Adjust the hex values to match your chosen `--color-bg` exactly.)

---

## Semantic usage map

Fill this table completely based on the tokens you define:

| Section | Background | Text | Accent | Border |
|---------|-----------|------|--------|--------|
| Page body | --color-bg | --color-text | — | — |
| Header (sticky) | --color-surface-raised + backdrop-blur | --color-text | --color-primary | --color-border |
| Hero | --color-bg | --color-text | --color-primary | — |
| Stats bar | gradient from --color-surface to --color-surface-raised | --color-text | --color-primary (values) | top/bottom 1px --color-border |
| Service cards | --color-surface | --color-text | --color-primary (4px top border) | --color-border |
| Process section | --color-surface-raised | --color-text | --color-primary (step numbers: gradient) | -- |
| Testimonials | --color-surface | --color-text | --color-primary (left border, quote icon) | --color-border |
| CTA Banner | deep gradient: linear-gradient(135deg, --color-surface 0%, --color-bg 100%) with a --color-primary glow border | --color-text | --color-primary (button) | 1px --color-primary at 20% opacity |
| Calendar | --color-bg | --color-text | — | — |
| Footer | --color-surface | --color-text-muted | --color-primary (links hover) | --color-border (top) |

---

## Light mode override

Define this as `[data-theme="light"]` — NOT the default:

```css
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
  /* primary, secondary, deep, gold, success stay the same */
}
```

---

## Deliverable: 3 complete code files

Output all three files. No placeholders. Real values only.

**FILE 1 — src/styles/tokens.css** (complete replacement)

```css
/* ─── Unifisio Design Tokens — Dark mode first ─── */

:root {
  /* Backgrounds */
  --color-bg: ;
  --color-surface: ;
  --color-surface-raised: ;
  --color-border: ;

  /* Brand */
  --color-primary: ;
  --color-primary-dim: ;
  --color-secondary: ;
  --color-deep: ;

  /* Text */
  --color-text: ;
  --color-text-muted: ;
  --color-text-faint: ;

  /* Semantic */
  --color-gold: ;
  --color-success: ;

  /* Glows */
  --shadow-sm: ;
  --shadow-md: ;
  --shadow-lg: ;

  /* Hero */
  --hero-gradient: ;

  /* Geometry */
  --radius: 12px;
  --radius-sm: 8px;
  --radius-lg: 20px;
}

[data-theme="light"] {
  /* (light overrides from above) */
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; color-scheme: dark; }
body { font-family: Inter, sans-serif; color: var(--color-text); background-color: var(--color-bg); }
```

**FILE 2 — tailwind.config.ts** (complete replacement)

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

**FILE 3 — colors block for src/config/site.ts**

```ts
colors: {
  primary: '',       // --color-primary value (the bright cyan)
  secondary: '',     // --color-secondary value
  accentLight: '',   // --color-surface value (replaces old #E8F4FB)
  bg: '',            // --color-bg value
  text: '',          // --color-text value
  gold: '',          // --color-gold value
},
```

---

## Contrast audit required

After finalizing all colors, produce this table:

| Text | Background | Hex values | Contrast ratio | Pass/Fail AA |
|------|-----------|------------|---------------|-------------|
| --color-text | --color-bg | | | |
| --color-text | --color-surface | | | |
| --color-primary | --color-bg | | | |
| --color-primary | --color-surface | | | |
| --color-text-muted | --color-surface | | | |
| --color-gold | --color-surface | | | |
| --color-success | --color-surface | | | |
| Button text (white) | --color-primary | | | |

All rows must pass WCAG AA. If any fail, adjust and show the fixed value.

---

## Constraints

- NEVER use pure black (#000000 or #0A0A0A) — always hued navy
- NEVER use pure white (#FFFFFF) in the dark mode default
- Backgrounds must have the brand hue (#0B5E8A family) — not neutral gray
- The cyan (#00BFD8 family) should feel like light through water, not neon
- Every token must be production-ready hex or rgba — no HSLA, no CSS calc
- All 3 files must be copy-paste ready with zero edits needed
```

---

## After you get the output

1. Replace `unifisio/src/styles/tokens.css` with File 1
2. Replace `unifisio/tailwind.config.ts` with File 2
3. Update the `colors` object in `unifisio/src/config/site.ts` with File 3 values
4. In `unifisio/src/pages/index.astro` (or BaseLayout.astro), make sure `<html>` has no `data-theme` attribute (defaults to dark)
5. Run `npm run dev` — the page will look dramatically different immediately
6. Then proceed with `unifisio-design-prompt.md` for animations

## What changes visually after this step alone

- Page background: deep ocean navy instead of white
- Cards: slightly lighter navy surface with a subtle cyan glow border
- Header: frosted glass dark surface
- All text: warm near-white instead of black
- CTA buttons: vibrant cyan instead of a flat corporate teal
- Stars: warm amber instead of orange
- Trust checkmarks: mint green
- Everything feels premium, medical-tech, modern
