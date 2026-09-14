import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for all kinetic elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: Frosted Icosahedron Wireframe
    const coreGeometry = new THREE.IcosahedronGeometry(1.25, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreMaterial = new THREE.LineBasicMaterial({
      color: 0x22201d,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.75,
    });
    const coreLine = new THREE.LineSegments(coreWireframe, coreMaterial);
    mainGroup.add(coreLine);

    // 2. Inner Crystal Facets (Subtle Refractive Core)
    const innerGeometry = new THREE.OctahedronGeometry(0.8, 0);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xEAE7DC,
      metalness: 0.1,
      roughness: 0.2,
      transmission: 0.85,
      thickness: 0.6,
      transparent: true,
      opacity: 0.7,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Orbital Gyroscopic Rings
    const ring1Geo = new THREE.TorusGeometry(1.8, 0.012, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x33312B,
      metalness: 0.7,
      roughness: 0.3,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.1, 0.008, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x8C827A,
      metalness: 0.5,
      roughness: 0.4,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 4. Subtle Orbital Nodes (Floating Coordinate Markers)
    const nodeCount = 18;
    const nodeGeo = new THREE.SphereGeometry(0.035, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x1A1918 });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const theta = (i / nodeCount) * Math.PI * 2;
      const radius = 1.8;
      node.position.set(Math.cos(theta) * radius, Math.sin(theta) * radius, 0);
      ring1.add(node);
    }

    // 5. Floating Dust / Geometry Field
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 5.5;
      positions[i + 1] = (Math.random() - 0.5) * 5.5;
      positions[i + 2] = (Math.random() - 0.5) * 3;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x4A463F,
      size: 0.03,
      transparent: true,
      opacity: 0.45,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff8ee, 2.2);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xd4cfc5, 1.2);
    dirLight2.position.set(-5, -4, -3);
    scene.add(dirLight2);

    // Interaction & Animation state
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;

      if (isDragging) {
        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y,
        };
        mainGroup.rotation.y += deltaMove.x * 0.01;
        mainGroup.rotation.x += deltaMove.y * 0.01;
      }
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (!isDragging) {
        mainGroup.rotation.y = elapsedTime * 0.25 + targetX * 0.6;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2 + targetY * 0.4;
      }

      // Gyroscopic differential rotations
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.x = elapsedTime * 0.28;
      innerMesh.rotation.y = -elapsedTime * 0.4;
      innerMesh.rotation.z = elapsedTime * 0.3;

      // Scroll Parallax reaction
      const scrollOffset = window.scrollY || 0;
      mainGroup.position.y = -scrollOffset * 0.0012;
      mainGroup.scale.setScalar(1 + Math.min(scrollOffset * 0.0003, 0.2));

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] cursor-grab active:cursor-grabbing relative flex items-center justify-center select-none"
      title="Interactive 3D Systems Core — Drag to rotate"
    >
      {/* Subtle indicator caption */}
      <div className="absolute bottom-2 right-4 font-mono text-[9px] text-ink-muted flex items-center gap-1.5 pointer-events-none uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 animate-pulse"></span>
        <span>Interactive 3D Core / Drag to Orbit</span>
      </div>
    </div>
  );
};
