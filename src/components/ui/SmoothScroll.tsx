'use client';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          const lenis = new Lenis({ lerp: 0.08, smooth: true });

          lenis.on('scroll', ScrollTrigger.update);
          gsap.ticker.add(time => lenis.raf(time * 1000));
          gsap.ticker.lagSmoothing(0);
        });
      });
    });
  }, []);

  return null;
}
