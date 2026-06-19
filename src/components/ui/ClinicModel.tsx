import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ClinicModel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Slow floating animation for the entire isometric group
    gsap.to(containerRef.current, {
      y: -15,
      rotationX: 62,
      rotationZ: -43,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <div className="relative w-full aspect-square flex items-center justify-center perspective-[1000px] pointer-events-none">
      
      {/* 3D Container */}
      <div 
        ref={containerRef}
        className="relative w-64 h-64 md:w-80 md:h-80 preserve-3d"
        style={{ transform: 'rotateX(60deg) rotateZ(-45deg)' }}
      >
        
        {/* Floor Panel */}
        <div className="absolute inset-0 bg-[#F5F0E8] border border-[#1A1A1A]/20 shadow-[-20px_20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Subtle grid lines on floor */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(to right, transparent, transparent 19px, rgba(26,26,26,0.05) 19px, rgba(26,26,26,0.05) 20px),
              repeating-linear-gradient(to bottom, transparent, transparent 19px, rgba(26,26,26,0.05) 19px, rgba(26,26,26,0.05) 20px)
            `
          }}></div>
        </div>

        {/* Back Wall */}
        <div 
          className="absolute top-0 right-0 w-full h-40 bg-[#FFFFFF] border border-[#1A1A1A]/10 origin-bottom flex items-center justify-center shadow-[-10px_0_20px_rgba(0,0,0,0.03)]"
          style={{ transform: 'rotateX(-90deg) translateY(-100%)' }}
        >
          {/* Cross symbol */}
          <div className="relative w-12 h-12 opacity-10">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-[#1A1A1A]"></div>
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 bg-[#1A1A1A]"></div>
          </div>
        </div>

        {/* Side Wall (Left) */}
        <div 
          className="absolute top-0 left-0 w-40 h-full bg-[#FAFAF8] border border-[#1A1A1A]/10 origin-right"
          style={{ transform: 'rotateY(-90deg) translateX(-100%)' }}
        ></div>

        {/* Examination Table Base (Cuboid) */}
        <div className="absolute top-1/2 left-1/2 w-32 h-16 bg-[#1A1A1A] preserve-3d"
             style={{ transform: 'translate(-50%, -50%) translateZ(10px)' }}>
          {/* Table Top (Cushion) */}
          <div className="absolute inset-0 bg-[#D4CFC5] border border-[#1A1A1A]/20" style={{ transform: 'translateZ(20px)' }}></div>
          {/* Table Front Face */}
          <div className="absolute bottom-0 left-0 w-full h-[20px] bg-[#333333] origin-top" style={{ transform: 'rotateX(-90deg)' }}></div>
          {/* Table Right Face */}
          <div className="absolute top-0 right-0 w-[20px] h-full bg-[#0F0F0F] origin-left" style={{ transform: 'rotateY(90deg)' }}></div>
        </div>

      </div>
    </div>
  );
}
