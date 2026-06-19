'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    // Dynamically import gsap to avoid SSR issues in Astro
    import('gsap').then(({ gsap }) => {
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      let ringX = pos.x;
      let ringY = pos.y;

      const moveDot = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        gsap.set(dot.current, { x: mouse.x, y: mouse.y });
      };

      const ticker = gsap.ticker.add(() => {
        ringX += (mouse.x - ringX) * 0.12;
        ringY += (mouse.y - ringY) * 0.12;
        gsap.set(ring.current, { x: ringX, y: ringY });
      });

      const onEnterLink = () => {
        gsap.to(ring.current, { scale: 2.2, duration: 0.3, ease: 'power2.out' });
        gsap.to(dot.current, { scale: 0, duration: 0.2 });
      };
      const onLeaveLink = () => {
        gsap.to(ring.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(dot.current, { scale: 1, duration: 0.2 });
      };

      document.addEventListener('mousemove', moveDot);
      document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });

      return () => {
        document.removeEventListener('mousemove', moveDot);
        gsap.ticker.remove(ticker);
      };
    });
  }, []);

  return (
    <>
      <div
        ref={dot}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-secondary)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'normal',
        }}
      />
      <div
        ref={ring}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1.5px solid var(--color-secondary)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
    </>
  );
}
