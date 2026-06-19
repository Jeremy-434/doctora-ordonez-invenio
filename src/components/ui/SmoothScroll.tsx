'use client';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2
          });

          lenis.on('scroll', ScrollTrigger.update);
          gsap.ticker.add(time => lenis.raf(time * 1000));
          gsap.ticker.lagSmoothing(0);

          // Handle anchor links
          document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const targetId = this.getAttribute('href');
              if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId) as HTMLElement;
                if (targetElement) {
                  lenis.scrollTo(targetElement);
                }
              }
            });
          });
        });
      });
    });
  }, []);

  return null;
}
