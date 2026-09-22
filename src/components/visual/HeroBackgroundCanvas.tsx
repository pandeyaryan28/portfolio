import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroBackgroundCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group for smooth rotation & mouse parallax
    const rootGroup = new THREE.Group();
    // Offset slightly right on wider displays to frame headline nicely
    const updatePosition = () => {
      const w = container.clientWidth;
      if (w < 768) {
        rootGroup.position.set(0, 0, 0);
        camera.position.z = 8.0;
      } else {
        rootGroup.position.set(1.4, 0, 0);
        camera.position.z = 7.0;
      }
    };
    updatePosition();
    scene.add(rootGroup);

    // 1. Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const outerWire = new THREE.WireframeGeometry(outerGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: 0x111827,
      transparent: true,
      opacity: 0.22,
    });
    const outerLines = new THREE.LineSegments(outerWire, outerMat);
    rootGroup.add(outerLines);

    // 2. Inner Dual Octahedron Wireframe (counter-rotates)
    const innerGeo = new THREE.OctahedronGeometry(1.3, 0);
    const innerWire = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0x1F2937,
      transparent: true,
      opacity: 0.35,
    });
    const innerLines = new THREE.LineSegments(innerWire, innerMat);
    rootGroup.add(innerLines);

    // 3. Central Core Wireframe
    const coreGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const coreWire = new THREE.WireframeGeometry(coreGeo);
    const coreMat = new THREE.LineBasicMaterial({
      color: 0x374151,
      transparent: true,
      opacity: 0.4,
    });
    const coreLines = new THREE.LineSegments(coreWire, coreMat);
    rootGroup.add(coreLines);

    // 4. Primary Orbital Ring
    const ring1Geo = new THREE.TorusGeometry(3.1, 0.015, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x1F2937,
      transparent: true,
      opacity: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    rootGroup.add(ring1);

    // 5. Secondary Inclined Ring
    const ring2Geo = new THREE.TorusGeometry(3.6, 0.01, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x4B5563,
      transparent: true,
      opacity: 0.15,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    rootGroup.add(ring2);

    // Reduced Motion & Visibility Detection
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;
    let isVisible = true;
    let animationFrameId: number | null = null;
    const clock = new THREE.Clock();

    // Mouse tracking for subtle organic tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 0.7;
      mouseY = (e.clientY / innerHeight - 0.5) * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll tracking for noticeable scroll-driven 3D parallax & rotation
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const renderStaticFrame = () => {
      rootGroup.rotation.y = 0.45;
      rootGroup.rotation.x = 0.18;
      rootGroup.scale.set(1, 1, 1);
      renderer.render(scene, camera);
    };

    const animate = () => {
      if (prefersReducedMotion || !isVisible || document.hidden) {
        animationFrameId = null;
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp with organic response
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      // Smooth scroll lerp for noticeable depth on page scroll
      scrollY += (targetScrollY - scrollY) * 0.08;
      const scrollRot = scrollY * 0.0028;
      const scrollOffsetY = Math.min(1.4, scrollY * 0.0014);

      // Continuous rotation + mouse tilt + scroll-driven 3D parallax
      rootGroup.rotation.y = elapsedTime * 0.11 + targetX + scrollRot;
      rootGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.1 + targetY + scrollRot * 0.35;
      rootGroup.position.y = scrollOffsetY;

      // Subtle breathing scale + perspective depth recession on scroll
      const pulse = 1 + Math.sin(elapsedTime * 0.55) * 0.02;
      const scrollScale = Math.max(0.72, 1 - scrollY * 0.0005);
      const totalScale = pulse * scrollScale;
      rootGroup.scale.set(totalScale, totalScale, totalScale);

      ring1.rotation.z = elapsedTime * 0.08 + scrollRot * 0.5;
      ring2.rotation.x = elapsedTime * 0.06 + scrollRot * 0.4;
      innerLines.rotation.y = -elapsedTime * 0.16 - scrollRot * 0.6;
      coreLines.rotation.z = elapsedTime * 0.14 + scrollRot * 0.8;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (!animationFrameId && isVisible && !prefersReducedMotion && !document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const stopLoop = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      updatePosition();
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      if (prefersReducedMotion) {
        renderStaticFrame();
      }
    };

    window.addEventListener('resize', handleResize);

    // Pause WebGL rendering when hero is scrolled out of view to preserve GPU & battery
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          if (prefersReducedMotion) {
            renderStaticFrame();
          } else {
            startLoop();
          }
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else if (isVisible && !prefersReducedMotion) {
        startLoop();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        stopLoop();
        renderStaticFrame();
      } else {
        startLoop();
      }
    };
    mediaQuery.addEventListener('change', handleMotionPreference);

    // Initial render
    if (prefersReducedMotion) {
      renderStaticFrame();
    } else {
      startLoop();
    }

    // Clean up
    return () => {
      stopLoop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mediaQuery.removeEventListener('change', handleMotionPreference);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      outerGeo.dispose();
      outerWire.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerWire.dispose();
      innerMat.dispose();
      coreGeo.dispose();
      coreWire.dispose();
      coreMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden w-full h-full"
      aria-hidden="true"
    />
  );
};
