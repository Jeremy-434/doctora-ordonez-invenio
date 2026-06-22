'use client';
import { useEffect, useRef } from 'react';

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    import('gsap').then(({ gsap }) => {
      if (prefersReduced) {
        overlay.style.display = 'none';
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => { overlay.style.display = 'none'; },
      });

      tl
        // Photo reveals: zooms softly into frame
        .from(photoRef.current, {
          scale: 1.07,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
        }, 0)
        // Separator line draws in
        .from(lineRef.current, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.7,
          ease: 'power2.out',
        }, 0.6)
        // Logo fades up
        .from(logoRef.current, {
          opacity: 0,
          y: 18,
          duration: 0.8,
          ease: 'power2.out',
        }, 0.7)
        // Name fades up slightly after
        .from(nameRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.7,
          ease: 'power2.out',
        }, 0.95)
        // Wipe the whole overlay upward
        .to(overlay, {
          y: '-100%',
          duration: 1.1,
          delay: 1.0,
          ease: 'power3.inOut',
        });
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Hero photo — cover fill */}
      <div
        ref={photoRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      />

      {/* Gradient scrim — darker at bottom for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: [
            'linear-gradient(to bottom,',
            '  rgba(245,240,232,0.08) 0%,',
            '  rgba(15,15,15,0.55) 55%,',
            '  rgba(15,15,15,0.88) 100%)',
          ].join('\n'),
        }}
      />

      {/* Bottom lockup */}
      <div
        style={{
          position: 'absolute',
          bottom: '7vh',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.85rem',
          paddingInline: '1.5rem',
        }}
      >
        {/* Separator */}
        <div
          ref={lineRef}
          style={{
            width: '3rem',
            height: '1px',
            backgroundColor: 'rgba(245,240,232,0.35)',
            marginBottom: '0.25rem',
          }}
        />

        {/* Logo */}
        <img
          ref={logoRef}
          src="/logo.jpg"
          alt="Dr. Fernando Bonilla"
          style={{
            height: '2.25rem',
            objectFit: 'contain',
            filter: 'brightness(0) invert(1)',
          }}
        />

        {/* Name */}
        <div
          ref={nameRef}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
            color: 'rgba(245,240,232,0.55)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 400,
          }}
        >
          Fernando Bonilla
        </div>
      </div>
    </div>
  );
}
