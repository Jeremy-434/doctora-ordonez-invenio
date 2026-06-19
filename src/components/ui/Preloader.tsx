'use client';
import { useEffect, useRef } from 'react';

export default function Preloader() {
  const el = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    import('gsap').then(({ gsap }) => {
      if (prefersReduced) {
        if (el.current) el.current.style.display = 'none';
        return;
      }
      
      const tl = gsap.timeline({
        onComplete: () => {
          if (el.current) el.current.style.display = 'none';
        }
      });

      tl.from(textContainer.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      })
      .to(textContainer.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        delay: 0.5,
        ease: 'power2.in',
      })
      .to(el.current, {
        y: '-100%',
        duration: 0.8,
        ease: 'power3.inOut',
      });
    });
  }, []);

  return (
    <div
      ref={el}
      style={{
        position: 'fixed', inset: 0,
        background: 'var(--color-bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <div 
        ref={textContainer}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          color: 'var(--color-text)',
          letterSpacing: '-0.03em',
        }}
      >
        UNIFISIO
      </div>
    </div>
  );
}
