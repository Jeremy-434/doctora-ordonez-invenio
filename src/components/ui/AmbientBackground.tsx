'use client';
import { useEffect, useRef } from 'react';

interface Orb {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  color: string;
  t: number;
}

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 767px)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const style = getComputedStyle(document.documentElement);
    const primary = style.getPropertyValue('--color-primary').trim();
    const secondary = style.getPropertyValue('--color-secondary').trim();

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const orbs: Orb[] = [
      { x: 0.2, y: 0.3, vx: 0.0003, vy: 0.0002, r: 0.45, color: primary, t: 0 },
      { x: 0.7, y: 0.6, vx: -0.0002, vy: 0.0003, r: 0.4, color: secondary, t: 2 },
      { x: 0.5, y: 0.1, vx: 0.0001, vy: -0.0002, r: 0.35, color: primary, t: 4 },
    ];

    let raf: number;
    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach(orb => {
        const cx = (orb.x + Math.sin(time * orb.vx + orb.t) * 0.15) * canvas.width;
        const cy = (orb.y + Math.cos(time * orb.vy + orb.t) * 0.1) * canvas.height;
        const r = orb.r * Math.max(canvas.width, canvas.height);
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, orb.color + '1e'); // ~12% opacity
        grad.addColorStop(1, orb.color + '00');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
