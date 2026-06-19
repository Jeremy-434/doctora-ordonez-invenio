'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SceneCanvas() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    const wrapper = wrapperRef.current;
    if (!el || !wrapper) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ─── Scene ───────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    // Soft radial fog to blend into the background
    scene.fog = new THREE.FogExp2(0xf5f0e8, 0.04);

    // ─── Camera ──────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      45,
      el.clientWidth / el.clientHeight,
      0.1,
      100
    );
    // Start zoomed out more (makes object smaller) and positioned to view the right side
    camera.position.set(4, 2, 8);
    const cameraTarget = new THREE.Vector3(0, 0, 0);
    camera.lookAt(cameraTarget);

    // ─── Renderer ────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    el.appendChild(renderer.domElement);

    // ─── Materials ───────────────────────────────────────────────────────
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.3,
    });
    const backWallMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      roughness: 0.8,
      metalness: 0.1,
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xe0f2fe, // slight blue tint
      roughness: 0.0,
      metalness: 0.1,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const frostedGlassMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.6,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const crossMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a, // Dark clinical cross
      roughness: 0.4,
      metalness: 0.2,
    });
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.2,
      metalness: 0.9,
    });
    const itemMat1 = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.2, metalness: 0.1 }); // Dark bottles
    const itemMat2 = new THREE.MeshStandardMaterial({ color: 0xe8e3db, roughness: 0.6 }); // Light beige boxes

    // ─── Botiquin Group ───────────────────────────────────────────────────
    const botiquin = new THREE.Group();
    // Shift botiquin to the right side of the screen
    botiquin.position.set(2.5, 0, 0);
    scene.add(botiquin);

    // Cabinet Dimensions
    const w = 2.2, h = 3.0, d = 1.0, th = 0.08; // width, height, depth, thickness

    // 1. Back Wall
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(w, h, th), backWallMat);
    backWall.position.set(0, 0, -d/2 + th/2);
    backWall.receiveShadow = true;
    botiquin.add(backWall);

    // 2. Left and Right Walls
    const sideWallGeo = new THREE.BoxGeometry(th, h, d - th);
    const leftWall = new THREE.Mesh(sideWallGeo, frameMat);
    leftWall.position.set(-w/2 + th/2, 0, th/2);
    leftWall.castShadow = true; leftWall.receiveShadow = true;
    const rightWall = new THREE.Mesh(sideWallGeo, frameMat);
    rightWall.position.set(w/2 - th/2, 0, th/2);
    rightWall.castShadow = true; rightWall.receiveShadow = true;
    botiquin.add(leftWall, rightWall);

    // 3. Top and Bottom Walls
    const topBottomGeo = new THREE.BoxGeometry(w - th*2, th, d - th);
    const topWall = new THREE.Mesh(topBottomGeo, frameMat);
    topWall.position.set(0, h/2 - th/2, th/2);
    topWall.castShadow = true; topWall.receiveShadow = true;
    const bottomWall = new THREE.Mesh(topBottomGeo, frameMat);
    bottomWall.position.set(0, -h/2 + th/2, th/2);
    bottomWall.castShadow = true; bottomWall.receiveShadow = true;
    botiquin.add(topWall, bottomWall);

    // 4. Internal Shelves (Frosted Glass)
    const shelfGeo = new THREE.BoxGeometry(w - th*2.2, th/2, d - th*1.5);
    const shelf1 = new THREE.Mesh(shelfGeo, frostedGlassMat);
    shelf1.position.set(0, 0.4, 0);
    shelf1.receiveShadow = true; shelf1.castShadow = true;
    const shelf2 = new THREE.Mesh(shelfGeo, frostedGlassMat);
    shelf2.position.set(0, -0.6, 0);
    shelf2.receiveShadow = true; shelf2.castShadow = true;
    botiquin.add(shelf1, shelf2);

    // 5. Items inside
    // Top shelf items (y = 0.4 + th/4)
    const box1 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.3), itemMat2);
    box1.position.set(-0.6, 0.4 + 0.25, -0.1);
    box1.castShadow = true;
    const box2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.3), itemMat1);
    box2.position.set(-0.1, 0.4 + 0.2, 0);
    box2.rotation.y = Math.PI / 6;
    box2.castShadow = true;
    botiquin.add(box1, box2);

    // Bottom shelf items (y = -0.6 + th/4)
    const cyl1 = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.4, 32), itemMat1);
    cyl1.position.set(0.5, -0.6 + 0.2, -0.1);
    cyl1.castShadow = true;
    const cyl2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.3, 32), itemMat2);
    cyl2.position.set(0.8, -0.6 + 0.15, 0.1);
    cyl2.castShadow = true;
    botiquin.add(cyl1, cyl2);

    // Bottom base items (y = -h/2 + th)
    const box3 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.2, 0.4), itemMat2);
    box3.position.set(-0.5, -h/2 + th + 0.1, 0);
    box3.castShadow = true;
    botiquin.add(box3);

    // 6. Glass Door
    // Instead of a single glass plane, give it a subtle metallic rim
    const doorGroup = new THREE.Group();
    doorGroup.position.set(0, 0, d/2 - th/2); // flush with front
    
    const glassPlane = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.02), glassMat);
    doorGroup.add(glassPlane);

    // 7. Cross on the glass
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.04), crossMat);
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.6, 0.04), crossMat);
    crossH.position.set(0, 0.6, 0.02);
    crossV.position.set(0, 0.6, 0.02);
    crossH.castShadow = true; crossV.castShadow = true;
    doorGroup.add(crossH, crossV);

    // 8. Handle/Lock on door
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.1), handleMat);
    handle.position.set(w/2 - 0.15, 0, 0.04);
    handle.castShadow = true;
    doorGroup.add(handle);

    botiquin.add(doorGroup);
    
    // Bottom shadow plane (fake soft shadow)
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.6;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // ─── Lights ───────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff8f0, 0.6));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe8f0ff, 0.5);
    fillLight.position.set(-5, 3, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xfff5cc, 1);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // ─── Scroll Animation A: Object Rotate ────────────────────────────────
    const rotObj = { rY: 0 };

    if (!prefersReduced) {
      const proxyEl = document.getElementById('hero-scroll-proxy');
      gsap.to(rotObj, {
        rY: Math.PI * 0.5, // Subtle, slow 90-degree rotation
        ease: 'power1.inOut', // Smoother easing
        scrollTrigger: {
          trigger: proxyEl || 'body',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }

    // ─── Render Loop ──────────────────────────────────────────────────────
    let idleTime = 0;
    let rafId: number;
    function animate() {
      rafId = requestAnimationFrame(animate);
      idleTime += 0.01;

      // Apply scroll rotation + idle float
      if (!prefersReduced) {
        botiquin.rotation.y = rotObj.rY + Math.sin(idleTime * 0.5) * 0.05;
        botiquin.position.y = Math.sin(idleTime) * 0.05;
      }

      camera.lookAt(cameraTarget);
      renderer.render(scene, camera);
    }
    animate();

    // ─── Resize handler ───────────────────────────────────────────────────
    function onResize() {
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.addEventListener('resize', onResize);
    const resizeObserver = new ResizeObserver(() => onResize());
    resizeObserver.observe(wrapper);

    // ─── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();

      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="scene-canvas-wrapper"
      className="fixed z-0 pointer-events-none hidden md:block"
      style={{
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bottom: 'auto',
        right: 'auto',
      }}
    >
      <div
        ref={mountRef}
        className="w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
}
