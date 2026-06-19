# Unifisio — Design & Animation Prompt

Adds the full animation and interaction layer to the already-built `invenio-clients/unifisio/` project.

**Based on:** `design-master-prompt.md`
**Brand identity:** Clean medical modern — calm, trustworthy, healing. Think soft water and light.
**Color palette:**
- Primary: `#0B5E8A` (deep ocean blue)
- Secondary: `#00BFD8` (bright cyan / teal)
- Accent light: `#E8F4FB`

**Motion personality:** Smooth and unhurried. No bounce, no elastic. `power2.out` everywhere.
The patient is recovering — the UI should feel reassuring, not energetic.

---

## Before you start

The Unifisio project at `invenio-clients/unifisio/` is fully built:
- All 9 section components exist in `src/components/sections/`
- UI primitives exist in `src/components/ui/`
- `src/config/site.ts` has all content
- `src/styles/tokens.css` has CSS variables
- `npm run dev` runs without errors

You are ONLY adding design and animation. **Never touch structure, layout, or site.ts.**

---

## STEP 0 — Context handoff for Unifisio

> Paste this alone first.

```
You are adding an animation and interaction layer to the Unifisio landing page at `invenio-clients/unifisio/`.

Unifisio is a kinesiology (physiotherapy) clinic in Argentina. Their brand is calm, professional, and health-focused.
Colors: primary #0B5E8A (deep blue), secondary #00BFD8 (cyan), accent-light #E8F4FB.
Font: Inter. Language: Spanish (Argentina).

The project is fully built. All structure, layout, responsive design, and content are complete and working.

YOUR ONLY JOB is to add: GSAP animations, custom cursor, ambient background, typography effects, and micro-interactions.

You must NEVER:
- Change any layout, grid, padding, or responsive class
- Change any value in src/config/site.ts
- Change any component prop interface or TypeScript type
- Remove or rename any existing class, prop, or file

First, list the files under src/components/ to confirm the project is as expected. Then wait for my next instruction.
```

---

## STEP 1 — Dependencies + animation system

> Paste after Step 0 is confirmed.

```
STEP 1 — Animation system for Unifisio

Working directory: invenio-clients/unifisio/

--- 1A. Add to package.json dependencies ---

"gsap": "^3.12.5",
"@studio-freight/lenis": "^1.0.45"

--- 1B. Create src/lib/gsap.ts ---

```ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Unifisio motion: calm, smooth, never rushed
gsap.defaults({ ease: 'power2.out', duration: 0.75 });

const prefersReduced = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

if (prefersReduced) {
  gsap.globalTimeline.timeScale(0);
}

export { gsap, ScrollTrigger, prefersReduced };
```

--- 1C. Create src/lib/animations.ts ---

```ts
import { gsap, ScrollTrigger, prefersReduced } from './gsap';

export function fadeUp(selector: string | Element, options?: gsap.TweenVars) {
  if (prefersReduced) return;
  return gsap.from(selector, {
    y: 40, opacity: 0, duration: 0.75,
    scrollTrigger: typeof selector === 'string'
      ? { trigger: selector, start: 'top 85%', once: true }
      : { trigger: selector as Element, start: 'top 85%', once: true },
    ...options,
  });
}

export function staggerCards(selector: string, options?: gsap.TweenVars) {
  if (prefersReduced) return;
  return gsap.from(selector, {
    y: 50, opacity: 0, duration: 0.65,
    stagger: { amount: 0.5, from: 'start' },
    scrollTrigger: { trigger: selector, start: 'top 80%', once: true },
    ...options,
  });
}

export function splitAndReveal(container: Element, options?: gsap.TweenVars) {
  if (prefersReduced) return;
  const text = container.textContent ?? '';
  container.innerHTML = text
    .split(' ')
    .map(word =>
      `<span style="display:inline-block;overflow:hidden;"><span class="gsap-word" style="display:inline-block">${word}&nbsp;</span></span>`
    )
    .join('');
  return gsap.from(container.querySelectorAll('.gsap-word'), {
    y: '105%', opacity: 0, duration: 0.75,
    stagger: 0.06, ease: 'power3.out',
    ...options,
  });
}

export function drawLine(el: Element) {
  if (prefersReduced) return;
  return gsap.from(el, {
    scaleX: 0, transformOrigin: 'left center', duration: 1.2,
    ease: 'power2.inOut',
    scrollTrigger: { trigger: el, start: 'top 75%', once: true },
  });
}

export function countUp(el: Element, raw: string) {
  const prefix = raw.match(/^[^0-9]*/)?.[0] ?? '';
  const suffix = raw.match(/[^0-9]*$/)?.[0] ?? '';
  const num = parseInt(raw.replace(/\D/g, ''), 10);
  if (isNaN(num)) return;

  if (prefersReduced) { el.textContent = raw; return; }

  const obj = { val: 0 };
  gsap.to(obj, {
    val: num, duration: 1.8, ease: 'power1.out',
    onUpdate: () => { el.textContent = prefix + Math.round(obj.val) + suffix; },
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
  });
}
```

--- 1D. Create src/styles/animations.css ---

```css
/* Unifisio animation layer — sits on top of tokens.css, never overrides it */

[data-animate] {
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  [data-animate],
  .gsap-word {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* Custom cursor — hide system cursor on desktop pointer devices */
@media (hover: hover) {
  * { cursor: none; }
  input, textarea, select { cursor: text; }
}

/* Service card hover */
@media (hover: hover) {
  [data-service-card] {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  [data-service-card]:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 191, 216, 0.15);
  }
}

/* Button hover lift */
@media (hover: hover) {
  [data-btn] {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  [data-btn]:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 191, 216, 0.3);
  }
  [data-btn]:active {
    transform: translateY(0);
  }
}

/* Nav underline draw */
@media (hover: hover) {
  nav a {
    position: relative;
  }
  nav a::after {
    content: '';
    position: absolute;
    left: 0; bottom: -2px;
    width: 100%; height: 1.5px;
    background: var(--color-secondary);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  nav a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
```

--- 1E. Import animations.css in BaseLayout.astro ---

Find the existing `<link rel="stylesheet" href=...tokens.css.../>` line.
After it, add:
```astro
<link rel="stylesheet" href="/src/styles/animations.css" />
```

Or if tokens.css is imported via `@import` in a `<style>` block, add:
```css
@import '../styles/animations.css';
```

--- Verify ---
Run `npm run dev`. Page looks identical to before. Zero console errors.
```

---

## STEP 2 — Unifisio custom cursor

> Paste after Step 1 is verified.

```
STEP 2 — Custom cursor for Unifisio

Create src/components/ui/CustomCursor.tsx

Unifisio cursor design:
- Inner dot: 5px, solid #00BFD8 (secondary)
- Outer ring: 26px, 1.5px border in #00BFD8, 15% opacity fill
- Ring lags behind by ~12% lerp each frame (calm, not snappy)
- On hover of <a>, <button>, [data-btn]: ring scales to 2.2x, dot shrinks to 0
- On hover of [data-cursor="text"]: ring becomes 2px × 22px vertical bar
- Completely hidden on touch devices (hover: none media query check)

```tsx
'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on true pointer devices
    if (!window.matchMedia('(hover: hover)').matches) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let rx = mouse.x, ry = mouse.y;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`;
      }
    };

    const tick = () => {
      rx += (mouse.x - rx) * 0.12;
      ry += (mouse.y - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 13}px, ${ry - 13}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const enter = () => {
      if (!ringRef.current || !dotRef.current) return;
      ringRef.current.style.transition = 'transform 0.3s ease, width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background 0.3s ease';
      ringRef.current.style.width = '56px';
      ringRef.current.style.height = '56px';
      ringRef.current.style.background = 'rgba(0,191,216,0.08)';
      dotRef.current.style.transform += ' scale(0)';
    };
    const leave = () => {
      if (!ringRef.current || !dotRef.current) return;
      ringRef.current.style.width = '26px';
      ringRef.current.style.height = '26px';
      ringRef.current.style.background = 'transparent';
      dotRef.current.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-btn]').forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0,
        width: '5px', height: '5px', borderRadius: '50%',
        background: '#00BFD8',
        pointerEvents: 'none', zIndex: 9999,
        willChange: 'transform',
      }} />
      <div ref={ringRef} aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0,
        width: '26px', height: '26px', borderRadius: '50%',
        border: '1.5px solid #00BFD8',
        pointerEvents: 'none', zIndex: 9998,
        willChange: 'transform',
      }} />
    </>
  );
}
```

In BaseLayout.astro, add before </body>:
```astro
import CustomCursor from '../components/ui/CustomCursor';
...
<CustomCursor client:only="react" />
```

--- Verify ---
Desktop: custom cyan cursor and ring visible. Ring lags smoothly.
Mobile: system cursor restored. Zero console errors.
```

---

## STEP 3 — Ambient background for Unifisio hero

> Paste after Step 2 is verified.

```
STEP 3 — Ambient background

Unifisio theme: soft oceanic drifting orbs — like light through water.
Colors: primary #0B5E8A at ~10% opacity, secondary #00BFD8 at ~7% opacity.
Movement: very slow, horizontal drift dominant (like a calm sea).

Create src/components/ui/AmbientBackground.tsx:

```tsx
'use client';
import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 767px)').matches) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    // Orb config: [x%, y%, radiusFactor, colorHex, timeOffset, speedX, speedY]
    const orbs = [
      { x: 0.15, y: 0.4,  r: 0.5,  color: '#0B5E8A', t: 0,   sx: 0.00025, sy: 0.00015 },
      { x: 0.75, y: 0.55, r: 0.45, color: '#00BFD8', t: 2.5, sx: -0.0002, sy: 0.0002  },
      { x: 0.45, y: 0.1,  r: 0.4,  color: '#0B5E8A', t: 5,   sx: 0.00015, sy: -0.0001 },
    ];

    let raf: number;
    const draw = (ts: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach(o => {
        const cx = (o.x + Math.sin(ts * o.sx + o.t) * 0.12) * canvas.width;
        const cy = (o.y + Math.cos(ts * o.sy + o.t) * 0.08) * canvas.height;
        const r  = o.r * Math.max(canvas.width, canvas.height);
        const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        // primary at 10%, secondary at 7%
        const alpha = o.color === '#00BFD8' ? '12' : '1a';
        g.addColorStop(0, o.color + alpha);
        g.addColorStop(1, o.color + '00');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas ref={ref} aria-hidden="true" style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      zIndex: 0, pointerEvents: 'none',
    }} />
  );
}
```

In HeroSection.astro:
1. Add `class="relative"` to the outermost `<section>` wrapper (if not already present)
2. Add as FIRST child inside that section: `<AmbientBackground client:only="react" />`
3. Add `class="relative z-10"` to the direct container div that holds the hero content (headline, CTAs, etc.)

Import at top of HeroSection.astro:
```astro
import AmbientBackground from '../ui/AmbientBackground';
```

--- Verify ---
Hero: soft blue-cyan orbs drift slowly behind the text. All text is fully readable.
On mobile: static, no canvas. Zero console errors.
```

---

## STEP 4 — Hero animations

> Paste after Step 3 is verified.

```
STEP 4 — Hero animations for Unifisio

In HeroSection.astro, add `data-animate` attributes to existing elements (no structural changes):
- `<h1>` headline → add `data-animate="headline"`
- `<p>` subheadline → add `data-animate="subheadline"`
- The div/container holding both CTA buttons → add `data-animate="ctas"`
- The trust bar container (the 3 trust items) → add `data-animate="trust"`

Add this <script> block at the bottom of HeroSection.astro (after all markup):

```astro
<script>
  import { gsap } from 'gsap';
  import { splitAndReveal } from '@/lib/animations';

  window.addEventListener('load', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const headline    = document.querySelector('[data-animate="headline"]');
    const subheadline = document.querySelector('[data-animate="subheadline"]');
    const ctas        = document.querySelector('[data-animate="ctas"]');
    const trust       = document.querySelector('[data-animate="trust"]');

    // Headline: words slide up one by one (calm stagger, no bounce)
    if (headline) {
      splitAndReveal(headline, { delay: 0.15 });
    }

    const tl = gsap.timeline({ delay: 0.6 });

    if (subheadline) {
      tl.from(subheadline, { y: 24, opacity: 0, duration: 0.75, ease: 'power2.out' }, 0);
    }
    if (ctas?.children) {
      tl.from([...ctas.children], { y: 18, opacity: 0, duration: 0.6, stagger: 0.12 }, 0.2);
    }
    if (trust?.children) {
      tl.from([...trust.children], { opacity: 0, y: 10, duration: 0.45, stagger: 0.1 }, 0.5);
    }
  });
</script>
```

--- Verify ---
Page load → headline words reveal smoothly. Subheadline fades up. CTAs appear. Trust items fade in.
Timing feels calm and professional, not rushed.
```

---

## STEP 5 — Scroll-triggered section reveals

> Paste after Step 4 is verified.

```
STEP 5 — Scroll animations for Unifisio sections

Add data attributes and script blocks. No structural changes anywhere.

--- StatsSection.astro ---

On each stat item wrapper (the element containing value + label), add:
- `data-animate="stat"`
- On the value element specifically: add `data-stat-value`

Add <script>:
```astro
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-animate="stat"]').forEach((stat, i) => {
    if (!prefersReduced) {
      gsap.from(stat, {
        y: 25, opacity: 0, duration: 0.65, delay: i * 0.1,
        scrollTrigger: { trigger: stat, start: 'top 85%', once: true },
      });
    }

    const valueEl = stat.querySelector('[data-stat-value]');
    if (!valueEl) return;
    const raw = valueEl.textContent?.trim() ?? '';
    const prefix = raw.match(/^[^0-9]*/)?.[0] ?? '';
    const suffix = raw.match(/[^0-9]*$/)?.[0] ?? '';
    const num = parseInt(raw.replace(/\D/g, ''), 10);

    if (!isNaN(num) && !prefersReduced) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: num, duration: 1.8, ease: 'power1.out',
        onUpdate: () => { valueEl.textContent = prefix + Math.round(obj.val) + suffix; },
        scrollTrigger: { trigger: stat, start: 'top 85%', once: true },
      });
    }
  });
</script>
```

--- ServicesSection.astro ---

Add `data-service-card` AND `data-animate="service-card"` to each of the 6 card elements.

Add <script>:
```astro
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    gsap.from('[data-animate="service-card"]', {
      y: window.innerWidth < 768 ? 20 : 50,
      opacity: 0, duration: 0.65,
      stagger: { amount: 0.5, from: 'start' },
      scrollTrigger: {
        trigger: '[data-animate="service-card"]',
        start: 'top 80%', once: true,
      },
    });
  }
</script>
```

--- ProcessSection.astro ---

Add `data-animate="step"` to each of the 3 step wrappers.
Add `data-animate="process-line"` to the connecting line/divider between steps (the horizontal rule or div that joins them on desktop). If no explicit connecting line exists yet, add one:
```astro
<div data-animate="process-line" class="hidden lg:block h-px bg-secondary absolute top-10 left-1/6 right-1/6" aria-hidden="true" />
```
(Adjust positioning class to match your existing layout.)

Add <script>:
```astro
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const line = document.querySelector('[data-animate="process-line"]');
    if (line) {
      gsap.from(line, {
        scaleX: 0, transformOrigin: 'left center', duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: line, start: 'top 75%', once: true },
      });
    }
    gsap.from('[data-animate="step"]', {
      y: 35, opacity: 0, duration: 0.65, stagger: 0.18,
      scrollTrigger: { trigger: '[data-animate="step"]', start: 'top 80%', once: true },
    });
  }
</script>
```

--- TestimonialsSection.astro ---

Add `data-animate="testimonial"` to each of the 3 testimonial card wrappers.

Add <script>:
```astro
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    gsap.from('[data-animate="testimonial"]', {
      x: (_i: number, el: Element) => {
        const idx = [...document.querySelectorAll('[data-animate="testimonial"]')].indexOf(el);
        return idx === 1 ? 0 : idx === 0 ? -35 : 35;
      },
      y: 20, opacity: 0, duration: 0.7, stagger: 0.15,
      scrollTrigger: {
        trigger: '[data-animate="testimonial"]',
        start: 'top 82%', once: true,
      },
    });
  }
</script>
```

--- CTABannerSection.astro ---

Add `data-animate="cta-headline"` to the `<h2>` or headline element.

Add <script>:
```astro
<script>
  import { splitAndReveal } from '@/lib/animations';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = document.querySelector('[data-animate="cta-headline"]');
  if (el && !prefersReduced) {
    splitAndReveal(el, { delay: 0 });
  }
</script>
```

--- SectionHeader.astro (all section titles) ---

Add to the existing `<h2>` element: `data-animate="section-title"`
Add to the existing `<p>` subtitle element: `data-animate="section-subtitle"`

Add <script>:
```astro
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    document.querySelectorAll('[data-animate="section-title"]').forEach(el => {
      gsap.from(el, {
        y: 28, opacity: 0, duration: 0.7,
        scrollTrigger: { trigger: el, start: 'top 87%', once: true },
      });
    });
    document.querySelectorAll('[data-animate="section-subtitle"]').forEach(el => {
      gsap.from(el, {
        y: 18, opacity: 0, duration: 0.6, delay: 0.12,
        scrollTrigger: { trigger: el, start: 'top 87%', once: true },
      });
    });
  }
</script>
```

--- Verify ---
Scroll from top to bottom. Each section reveals as it enters the viewport.
Stats numbers count up on scroll. Service cards stagger. Process steps sequence.
Testimonials alternate from left/center/right.
```

---

## STEP 6 — Micro-interactions (buttons, cards, nav)

> Paste after Step 5 is verified.

```
STEP 6 — Micro-interactions for Unifisio

The animations.css from Step 1 already defines the hover rules.
This step wires up the data attributes to existing elements.

--- Add data-btn to all Button.astro instances ---

In src/components/ui/Button.astro, find the root element (`<a>` or `<button>`) and add `data-btn`.
This activates the hover lift from animations.css.

--- Add data-service-card to Card.astro ---

In src/components/ui/Card.astro, find the root `<div>` or `<article>` and add `data-service-card`.

--- Verify nav underlines ---

In HeaderSection.astro, confirm the nav links are plain `<a>` tags inside a `<nav>` element.
The animations.css `nav a::after` rule handles the underline draw automatically — no code needed.

--- Add data-magnetic to primary CTA buttons ---

In HeroSection.astro: find the primary CTA button (`<Button variant="primary"...`) and add `data-magnetic`
In CTABannerSection.astro: find the primary button and add `data-magnetic`

These are read by CustomCursor for the scale effect on hover.

--- Verify ---
Hover buttons: lift + cyan glow shadow. Hover service cards: lift + soft shadow.
Nav link hover: underline draws from left. All transitions feel smooth (0.2–0.3s).
```

---

## STEP 7 — Typography effects (Unifisio)

> Paste after Step 6 is verified.

```
STEP 7 — Typography refinements for Unifisio

All section titles are already handled by SectionHeader.astro from Step 5.
This step adds the final touch: a subtle gradient shimmer on the process step numbers.

--- In ProcessSection.astro ---

Find the step number elements (the "01", "02", "03" spans with large text in secondary color).
Add `data-step-number` attribute to each.

Add this inside the existing <style> tag in ProcessSection.astro (or add a <style> tag):
```css
[data-step-number] {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

This gives the step numbers (01, 02, 03) a gradient from cyan to deep blue — reflecting the brand colors.
No JavaScript needed. Pure CSS. Respects reduced motion by default.

--- Footer section ---

Add `data-animate="footer-col"` to each of the 3 footer columns.

In FooterSection.astro, add <script>:
```astro
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    gsap.from('[data-animate="footer-col"]', {
      y: 20, opacity: 0, duration: 0.6, stagger: 0.1,
      scrollTrigger: {
        trigger: '[data-animate="footer-col"]',
        start: 'top 90%', once: true,
      },
    });
  }
</script>
```

--- Verify ---
Process step numbers show blue-to-cyan gradient. Footer columns fade up on scroll.
```

---

## STEP 8 — Final polish for Unifisio

> Paste after Step 7 is verified. This is the last step.

```
STEP 8 — Final polish for Unifisio

--- 8A. Scroll progress bar ---

Create src/components/ui/ScrollProgress.tsx:
```tsx
'use client';
import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(bar.current, {
          scaleX: 1, ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top', end: 'bottom bottom',
            scrub: 0.3,
          },
        });
      });
    });
  }, []);

  return (
    <div ref={bar} aria-hidden="true" style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '3px',
      background: 'linear-gradient(90deg, #0B5E8A, #00BFD8)',
      transformOrigin: 'left',
      transform: 'scaleX(0)',
      zIndex: 9997,
      pointerEvents: 'none',
    }} />
  );
}
```

Note: The Unifisio progress bar uses a primary→secondary gradient (blue → cyan) instead of a solid color.

--- 8B. Smooth scroll ---

Create src/components/ui/SmoothScroll.tsx:
```tsx
'use client';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([
      import('@studio-freight/lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ lerp: 0.08 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    });
  }, []);
  return null;
}
```

--- 8C. Minimal preloader ---

Create src/components/ui/Preloader.tsx:
```tsx
'use client';
import { useEffect, useRef } from 'react';

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    import('gsap').then(({ gsap }) => {
      if (prefersReduced) { if (ref.current) ref.current.style.display = 'none'; return; }
      gsap.to(ref.current, {
        opacity: 0, duration: 0.5, delay: 0.5,
        onComplete: () => { if (ref.current) ref.current.style.display = 'none'; },
      });
    });
  }, []);

  return (
    <div ref={ref} aria-hidden="true" style={{
      position: 'fixed', inset: 0,
      background: '#FFFFFF',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 99999, pointerEvents: 'none',
    }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '50%',
        border: '2px solid #E8F4FB',
        borderTopColor: '#00BFD8',
        animation: 'unifisio-spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes unifisio-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
```

--- 8D. Wire everything into BaseLayout.astro ---

Import and add these 4 components inside the <body> of BaseLayout.astro:

```astro
---
import CustomCursor from '../components/ui/CustomCursor';
import ScrollProgress from '../components/ui/ScrollProgress';
import SmoothScroll from '../components/ui/SmoothScroll';
import Preloader from '../components/ui/Preloader';
---

<body>
  <Preloader client:only="react" />    <!-- must be FIRST child -->
  <CustomCursor client:only="react" />
  <ScrollProgress client:only="react" />
  <SmoothScroll client:only="react" />
  <slot />
</body>
```

--- Final verification checklist for Unifisio ---
- [ ] `npm run dev` — zero errors
- [ ] `npx astro check` — zero TypeScript errors
- [ ] Desktop: cyan cursor dot + ring visible, ring lags behind
- [ ] Hero: soft blue-cyan orbs drift in background, text 100% readable
- [ ] Scroll progress bar fills with blue-to-cyan gradient
- [ ] Preloader (white bg + cyan spinner) fades out within 1 second
- [ ] Smooth scrolling — page glides, not jumps, anchors still work
- [ ] Headline words reveal on load. Subheadline and CTAs follow
- [ ] Stats numbers count up on scroll
- [ ] Service cards stagger in. Step numbers show gradient. Process line draws
- [ ] Testimonials alternate in from sides
- [ ] Section titles and subtitles fade up on scroll
- [ ] Footer columns fade in
- [ ] Hover: button lift + cyan glow. Card lift. Nav underline draws
- [ ] Mobile (767px and below): system cursor, no canvas background, all content visible
- [ ] prefers-reduced-motion: zero animation, all content instantly visible
- [ ] All existing anchor links (#calendar, #servicios, #proceso, #testimonios) still work
```

---

## Brand notes for design decisions

| Element | Unifisio choice | Reason |
|---|---|---|
| Motion ease | `power2.out` | Calm deceleration — no bounce (medical brand) |
| Cursor | Minimal cyan ring, no fill | Clean, precise, not playful |
| Background orbs | Slow horizontal drift | Water/healing metaphor |
| Card hover | Y-lift only, no tilt | Tilt feels playful — this is health care |
| Progress bar | Blue → cyan gradient | Brand gradient, adds identity |
| Preloader | White + cyan spinner | Matches background, branded color |
| Step numbers | Blue → cyan gradient text | Reinforces brand identity on key touchpoints |
| Stagger timing | `0.1s–0.18s` per item | Calm, not rapid-fire |
