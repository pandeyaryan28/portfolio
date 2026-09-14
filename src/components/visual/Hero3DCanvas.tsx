import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { useSound } from '../../context/SoundContext';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { playTick } = useSound();
  const [geoMode, setGeoMode] = useState<'orbital' | 'lattice' | 'harmonic'>('orbital');
  const [telemetry, setTelemetry] = useState({ rotX: 0, rotY: 0, fps: 60 });
  const sceneRef = useRef<THREE.Scene | null>(null);
  const orbitalGroupRef = useRef<THREE.Group | null>(null);
  const latticeGroupRef = useRef<THREE.Group | null>(null);
  const harmonicGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 440;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = theme === 'dark' ? 1.3 : 1.1;
    container.appendChild(renderer.domElement);

    const isDark = theme === 'dark';

    // -------------------------------------------------------------
    // 1. Orbital Mode Group
    // -------------------------------------------------------------
    const orbitalGroup = new THREE.Group();
    orbitalGroupRef.current = orbitalGroup;
    scene.add(orbitalGroup);

    // Central Core: Wireframe Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(1.2, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreMaterial = new THREE.LineBasicMaterial({
      color: isDark ? 0xF59E0B : 0x1E1E1E,
      linewidth: 1.5,
      transparent: true,
      opacity: isDark ? 0.75 : 0.65,
    });
    const coreLine = new THREE.LineSegments(coreWireframe, coreMaterial);
    orbitalGroup.add(coreLine);

    // Inner Refractive Core
    const innerGeometry = new THREE.OctahedronGeometry(0.75, 0);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x181820 : 0xEAE7DC,
      metalness: isDark ? 0.8 : 0.2,
      roughness: 0.15,
      transmission: 0.8,
      thickness: 0.5,
      transparent: true,
      opacity: 0.8,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    orbitalGroup.add(innerMesh);

    // Outer Torus Rings
    const ring1Geo = new THREE.TorusGeometry(1.85, 0.012, 16, 120);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: isDark ? 0x71717A : 0x33312B,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    orbitalGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.15, 0.009, 16, 120);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: isDark ? 0xF59E0B : 0x8C827A,
      metalness: 0.7,
      roughness: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    orbitalGroup.add(ring2);

    // Coordinate Orbit Nodes
    const nodeCount = 16;
    const nodeGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xFBBF24 : 0x1A1918,
    });
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const theta = (i / nodeCount) * Math.PI * 2;
      node.position.set(Math.cos(theta) * 1.85, Math.sin(theta) * 1.85, 0);
      ring1.add(node);
    }

    // -------------------------------------------------------------
    // 2. Quantum Lattice Mode Group
    // -------------------------------------------------------------
    const latticeGroup = new THREE.Group();
    latticeGroupRef.current = latticeGroup;
    latticeGroup.visible = false;
    scene.add(latticeGroup);

    const latticeBox = new THREE.BoxGeometry(2.2, 2.2, 2.2, 4, 4, 4);
    const latticeWireframe = new THREE.WireframeGeometry(latticeBox);
    const latticeMat = new THREE.LineBasicMaterial({
      color: isDark ? 0x10B981 : 0x27272A,
      transparent: true,
      opacity: 0.6,
    });
    const latticeLine = new THREE.LineSegments(latticeWireframe, latticeMat);
    latticeGroup.add(latticeLine);

    const centerSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshStandardMaterial({
        color: isDark ? 0x059669 : 0x10B981,
        metalness: 0.7,
        roughness: 0.2,
        wireframe: true,
      })
    );
    latticeGroup.add(centerSphere);

    // -------------------------------------------------------------
    // 3. Harmonic Wave Mode Group
    // -------------------------------------------------------------
    const harmonicGroup = new THREE.Group();
    harmonicGroupRef.current = harmonicGroup;
    harmonicGroup.visible = false;
    scene.add(harmonicGroup);

    const knotGeo = new THREE.TorusKnotGeometry(1.15, 0.24, 128, 32, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x6366F1 : 0x3B82F6,
      metalness: 0.6,
      roughness: 0.3,
      wireframe: true,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    harmonicGroup.add(knotMesh);

    // Ambient Stardust Particles
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0xD4D4D8 : 0x52525B,
      size: 0.035,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.2 : 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isDark ? 2.5 : 2.0);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(isDark ? 0xF59E0B : 0xd4cfc5, 1.2);
    dirLight2.position.set(-5, -4, -3);
    scene.add(dirLight2);

    // Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velX = 0;
    let velY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;

      if (isDragging) {
        velX = (event.clientX - previousMousePosition.x) * 0.008;
        velY = (event.clientY - previousMousePosition.y) * 0.008;
        orbitalGroup.rotation.y += velX;
        orbitalGroup.rotation.x += velY;
        latticeGroup.rotation.y += velX;
        latticeGroup.rotation.x += velY;
        harmonicGroup.rotation.y += velX;
        harmonicGroup.rotation.x += velY;
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
    let frameCount = 0;
    let lastFpsUpdate = 0;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      frameCount++;

      if (elapsedTime - lastFpsUpdate > 0.5) {
        setTelemetry({
          rotX: Math.round(orbitalGroup.rotation.x * 57.3),
          rotY: Math.round(orbitalGroup.rotation.y * 57.3),
          fps: Math.round((frameCount / (elapsedTime - lastFpsUpdate))),
        });
        frameCount = 0;
        lastFpsUpdate = elapsedTime;
      }

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (!isDragging) {
        // Inertia decay
        velX *= 0.94;
        velY *= 0.94;
        orbitalGroup.rotation.y += velX + 0.003;
        orbitalGroup.rotation.x += velY;
        latticeGroup.rotation.y += velX + 0.004;
        latticeGroup.rotation.x += velY;
        harmonicGroup.rotation.y += velX + 0.005;
        harmonicGroup.rotation.x += velY;

        orbitalGroup.rotation.y = elapsedTime * 0.25 + targetX * 0.5;
        orbitalGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2 + targetY * 0.4;
      }

      // Gyroscopic differential rotations
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.x = elapsedTime * 0.28;
      innerMesh.rotation.y = -elapsedTime * 0.4;
      innerMesh.rotation.z = elapsedTime * 0.3;

      knotMesh.rotation.x = elapsedTime * 0.25;
      knotMesh.rotation.y = elapsedTime * 0.35;

      latticeLine.rotation.y = -elapsedTime * 0.2;
      centerSphere.rotation.y = elapsedTime * 0.4;

      // Scroll reactions
      const scrollOffset = window.scrollY || 0;
      const activeObj = orbitalGroup.visible ? orbitalGroup : latticeGroup.visible ? latticeGroup : harmonicGroup;
      activeObj.position.y = -scrollOffset * 0.0008;

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
  }, [theme]);

  // Handle Mode Switch
  const switchMode = (mode: 'orbital' | 'lattice' | 'harmonic') => {
    playTick();
    setGeoMode(mode);
    if (orbitalGroupRef.current) orbitalGroupRef.current.visible = mode === 'orbital';
    if (latticeGroupRef.current) latticeGroupRef.current.visible = mode === 'lattice';
    if (harmonicGroupRef.current) harmonicGroupRef.current.visible = mode === 'harmonic';
  };

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-4 select-none">
      {/* 3D Canvas Mount Point */}
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        title="Interactive Kinetic Core — Drag to orbit"
      />

      {/* Top HUD Controls */}
      <div className="relative z-10 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md border border-ink-border dark:border-white/10 font-mono text-[10px] text-ink-secondary dark:text-ink-dark-secondary shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>KINETIC ARCHITECTURE CORE</span>
        </div>

        {/* Geometry Mode Selector */}
        <div className="flex items-center gap-1 bg-white/70 dark:bg-black/70 backdrop-blur-md p-1 rounded-xl border border-ink-border dark:border-white/10 text-[10px] font-mono">
          <button
            onClick={() => switchMode('orbital')}
            className={`px-2 py-0.5 rounded-lg transition-all ${
              geoMode === 'orbital'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold'
                : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
            }`}
          >
            Orbital
          </button>
          <button
            onClick={() => switchMode('lattice')}
            className={`px-2 py-0.5 rounded-lg transition-all ${
              geoMode === 'lattice'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold'
                : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
            }`}
          >
            Lattice
          </button>
          <button
            onClick={() => switchMode('harmonic')}
            className={`px-2 py-0.5 rounded-lg transition-all ${
              geoMode === 'harmonic'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold'
                : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
            }`}
          >
            Harmonic
          </button>
        </div>
      </div>

      {/* Bottom Telemetry HUD */}
      <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary pointer-events-none uppercase tracking-wider">
        <div className="bg-white/60 dark:bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-ink-border/50 dark:border-white/10 flex items-center gap-2.5">
          <span>X: {telemetry.rotX}°</span>
          <span>Y: {telemetry.rotY}°</span>
          <span className="text-emerald-600 dark:text-emerald-400">{telemetry.fps} FPS</span>
        </div>
        <div className="bg-white/60 dark:bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-ink-border/50 dark:border-white/10">
          DRAG TO ORBIT · 60FPS SYNCHRONIZED
        </div>
      </div>
    </div>
  );
};
