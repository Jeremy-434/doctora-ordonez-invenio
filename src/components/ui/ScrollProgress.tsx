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
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        });
      });
    });
  }, []);

  return (
    <div
      ref={bar}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '3px',
        backgroundColor: 'var(--color-secondary)',
        transformOrigin: 'left',
        transform: 'scaleX(0)',
        zIndex: 9997,
        pointerEvents: 'none',
      }}
    />
  );
}
