'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Floating abstract composition — thin panels that evoke calm, reflection,
// and the layered nature of perspective. Appropriate for a psychologist's identity.
export default function SceneCanvas() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    const wrapper = wrapperRef.current;
    if (!el || !wrapper) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ─── Scene ────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf5f0e8, 0.06);

    // ─── Camera ───────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(42, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.set(3, 1, 9);
    const cameraTarget = new THREE.Vector3(0.5, 0, 0);
    camera.lookAt(cameraTarget);

    // ─── Renderer ─────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    el.appendChild(renderer.domElement);

    // ─── Materials ────────────────────────────────────────────────────────
    const matFront = new THREE.MeshStandardMaterial({
      color: 0xfdfaf5,
      roughness: 0.3,
      metalness: 0.05,
      side: THREE.FrontSide,
    });
    const matEdge = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.6,
      metalness: 0.0,
    });
    const matBack = new THREE.MeshStandardMaterial({
      color: 0xe8e3db,
      roughness: 0.7,
      metalness: 0.0,
    });

    // ─── Panel factory ────────────────────────────────────────────────────
    // Each panel is a thin box (like a page or frame)
    function makePanel(w: number, h: number, d = 0.04): THREE.Group {
      const group = new THREE.Group();
      const geo = new THREE.BoxGeometry(w, h, d);
      const mesh = new THREE.Mesh(geo, [matEdge, matEdge, matEdge, matEdge, matFront, matBack]);
      mesh.castShadow = true;
      group.add(mesh);
      return group;
    }

    // ─── Composition ──────────────────────────────────────────────────────
    // 6 panels arranged in a loose cluster on the right side of the viewport
    const group = new THREE.Group();
    group.position.set(1.8, 0, 0);
    scene.add(group);

    const panels: Array<{ mesh: THREE.Group; floatOffset: number; floatSpeed: number }> = [];

    const defs = [
      // [w, h, x, y, z, rotY, rotZ]
      [1.4, 2.0, 0,    0,    0,     0.08,  0.02],
      [1.0, 1.5, 1.1, -0.3,  0.3,  -0.12,  0.04],
      [0.6, 0.9, -0.8, 0.7, -0.2,   0.22, -0.03],
      [0.8, 1.2, 1.6,  0.5, -0.5,  -0.06,  0.06],
      [1.1, 0.7, -0.3,-0.9,  0.4,   0.15,  0.0 ],
      [0.5, 0.8,  0.6,  1.0, 0.6,  -0.18, -0.05],
    ] as const;

    for (const [w, h, x, y, z, rotY, rotZ] of defs) {
      const p = makePanel(w, h);
      p.position.set(x, y, z);
      p.rotation.y = rotY;
      p.rotation.z = rotZ;
      group.add(p);
      panels.push({
        mesh: p,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.4 + Math.random() * 0.3,
      });
    }

    // ─── Lights ───────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff8f0, 0.7));

    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(5, 6, 5);
    key.castShadow = true;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xf5e8d0, 0.4);
    fill.position.set(-4, 2, 3);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xfff5e0, 0.6);
    rim.position.set(0, 4, -6);
    scene.add(rim);

    // ─── Scroll — slow group drift ─────────────────────────────────────
    const scrollState = { rotY: 0 };
    if (!prefersReduced) {
      const proxyEl = document.getElementById('hero-scroll-proxy');
      gsap.to(scrollState, {
        rotY: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: proxyEl || 'body',
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }

    // ─── Render loop ─────────────────────────────────────────────────────
    let idleTime = 0;
    let rafId: number;

    function animate() {
      rafId = requestAnimationFrame(animate);
      idleTime += 0.008;

      if (!prefersReduced) {
        // Gentle group rotation from scroll
        group.rotation.y = scrollState.rotY;

        // Each panel floats independently
        for (const { mesh, floatOffset, floatSpeed } of panels) {
          mesh.position.y += Math.sin(idleTime * floatSpeed + floatOffset) * 0.0008;
        }
      }

      camera.lookAt(cameraTarget);
      renderer.render(scene, camera);
    }
    animate();

    // ─── Resize ───────────────────────────────────────────────────────────
    function onResize() {
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(wrapper);

    // ─── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach(m => m.dispose());
        }
      });
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="scene-canvas-wrapper"
      className="fixed z-0 pointer-events-none hidden md:block"
      style={{ top: 0, left: 0, width: '100vw', height: '100vh' }}
    >
      <div ref={mountRef} className="w-full h-full" aria-hidden="true" />
    </div>
  );
}
