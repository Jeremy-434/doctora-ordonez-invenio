'use client';
import { useEffect, useRef } from 'react';

export default function Preloader() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    import('gsap').then(({ gsap }) => {
      if (prefersReduced) {
        if (el.current) el.current.style.display = 'none';
        return;
      }
      gsap.to(el.current, {
        opacity: 0, duration: 0.5, delay: 0.6,
        onComplete: () => {
          if (el.current) el.current.style.display = 'none';
        },
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
      <div style={{
        width: '40px', height: '40px',
        borderRadius: '50%',
        border: '2px solid var(--color-accent-light)',
        borderTopColor: 'var(--color-secondary)',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
