import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global GSAP defaults — all animations inherit these
gsap.defaults({ ease: 'power2.out', duration: 0.7 });

// Respect prefers-reduced-motion system-wide
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) {
  gsap.globalTimeline.timeScale(0); // instant — no motion
}

export { gsap, ScrollTrigger, prefersReduced };
