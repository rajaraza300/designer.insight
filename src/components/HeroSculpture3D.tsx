import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroSculpture3DProps {
  className?: string;
}

export const HeroSculpture3D: React.FC<HeroSculpture3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;

    // 1. Scene & Camera Setup
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Dramatic studio lighting for low-poly facets)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    // Warm key light from top-right (Brand orange)
    const keyLight = new THREE.DirectionalLight(0xf84900, 2.6);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    // Cool cyan/blue fill light from left
    const fillLight = new THREE.DirectionalLight(0x06b6d4, 2.2);
    fillLight.position.set(-6, 2, 4);
    scene.add(fillLight);

    // Rim light from behind
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(0, 6, -5);
    scene.add(rimLight);

    // Soft warm underlight
    const underLight = new THREE.PointLight(0xffa726, 1.8, 10);
    underLight.position.set(0, -3, 2);
    scene.add(underLight);

    // 3. Main Head Group (Tracks mouse motion)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 4. Procedural Low-Poly Faceted Head
    // Base geometry with low subdivisions for distinct flat triangular facets
    const headGeom = new THREE.IcosahedronGeometry(1.85, 2);
    
    // Deform vertices to shape cranium, forehead, cheeks, jaw, and chin
    const posAttr = headGeom.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < posAttr.count; i++) {
      vertex.fromBufferAttribute(posAttr, i);

      // Elongate vertically (head proportion)
      vertex.y *= 1.22;

      // Forehead / cranium wider at top back
      if (vertex.y > 0.4) {
        vertex.x *= 1.06;
        if (vertex.z < 0) vertex.z *= 1.12; // Back of head
      }

      // Taper jawline and chin toward bottom front
      if (vertex.y < -0.3) {
        const taper = 1.0 - ((-vertex.y - 0.3) * 0.45);
        vertex.x *= Math.max(0.68, taper);
        if (vertex.z > 0) {
          // Chin protrusion
          vertex.z *= 1.15;
        } else {
          // Narrow neck area
          vertex.z *= 0.88;
        }
      }

      // Nose bridge protrusion
      if (vertex.y > -0.2 && vertex.y < 0.4 && vertex.z > 1.1 && Math.abs(vertex.x) < 0.45) {
        vertex.z *= 1.25;
      }

      // Cheekbones definition
      if (vertex.y > -0.3 && vertex.y < 0.3 && Math.abs(vertex.x) > 1.0 && vertex.z > 0.2) {
        vertex.x *= 1.1;
      }

      posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    // Convert to non-indexed for vibrant per-face flat-shaded coloring
    const nonIndexedGeom = headGeom.toNonIndexed();
    nonIndexedGeom.computeVertexNormals();

    // Multicolor low-poly facet palette (matching the reference 3D polygonal sculpture)
    const paletteColors = [
      new THREE.Color(0x06b6d4), // Vibrant Cyan
      new THREE.Color(0x10b981), // Emerald Green
      new THREE.Color(0xec4899), // Hot Pink/Magenta
      new THREE.Color(0xf84900), // Brand Vivid Orange
      new THREE.Color(0xf59e0b), // Golden Amber
      new THREE.Color(0x8b5cf6), // Royal Purple
      new THREE.Color(0x3b82f6), // Electric Cobalt
      new THREE.Color(0xf43f5e), // Ruby Coral
      new THREE.Color(0xfed7aa), // Warm Peach
      new THREE.Color(0xfde047), // Solar Yellow
      new THREE.Color(0x14b8a6), // Deep Teal
    ];

    const faceCount = nonIndexedGeom.attributes.position.count / 3;
    const colorsArray = new Float32Array(faceCount * 3 * 3);

    for (let f = 0; f < faceCount; f++) {
      // Pick color based on geometric region + pseudo-random dispersion for aesthetic contrast
      const v0 = new THREE.Vector3().fromBufferAttribute(nonIndexedGeom.attributes.position, f * 3);
      const randSeed = Math.abs(Math.sin(f * 12.9898 + v0.x * 4.14 + v0.y * 7.23));
      
      let col: THREE.Color;
      if (v0.y > 0.8) {
        // Top cranium: mixed blues, purples, cyans
        const topCols = [paletteColors[0], paletteColors[5], paletteColors[6], paletteColors[10]];
        col = topCols[Math.floor(randSeed * topCols.length)];
      } else if (v0.y < -0.6) {
        // Chin & neck: warm peach, amber, orange
        const chinCols = [paletteColors[3], paletteColors[4], paletteColors[8], paletteColors[9]];
        col = chinCols[Math.floor(randSeed * chinCols.length)];
      } else if (v0.x > 0.4) {
        // Right side: warm magentas, oranges, yellows
        const rightCols = [paletteColors[2], paletteColors[3], paletteColors[7], paletteColors[9]];
        col = rightCols[Math.floor(randSeed * rightCols.length)];
      } else {
        // Left side: cyans, emerald greens, cobalt
        const leftCols = [paletteColors[0], paletteColors[1], paletteColors[6], paletteColors[10]];
        col = leftCols[Math.floor(randSeed * leftCols.length)];
      }

      // Assign to all 3 vertices of this face
      for (let v = 0; v < 3; v++) {
        const idx = (f * 3 + v) * 3;
        colorsArray[idx] = col.r;
        colorsArray[idx + 1] = col.g;
        colorsArray[idx + 2] = col.b;
      }
    }

    nonIndexedGeom.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const headMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.28,
      metalness: 0.42,
    });

    const headMesh = new THREE.Mesh(nonIndexedGeom, headMaterial);
    headMesh.position.set(0, 0.25, 0);
    mainGroup.add(headMesh);

    // 5. Eyeglasses / Round Modern Frames (In Brand Orange #f84900 & Gold)
    const glassesGroup = new THREE.Group();
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0xf84900,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0xf84900,
      emissiveIntensity: 0.25,
    });

    const lensMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.8,
      transparent: true,
      opacity: 0.45,
      reflectivity: 0.9,
    });

    // Left Rim & Lens
    const rimGeom = new THREE.TorusGeometry(0.44, 0.045, 16, 36);
    const leftRim = new THREE.Mesh(rimGeom, frameMaterial);
    leftRim.position.set(-0.62, 0.35, 1.62);
    leftRim.rotation.y = 0.08;
    glassesGroup.add(leftRim);

    const lensGeom = new THREE.CircleGeometry(0.42, 28);
    const leftLens = new THREE.Mesh(lensGeom, lensMaterial);
    leftLens.position.set(-0.62, 0.35, 1.62);
    leftLens.rotation.y = 0.08;
    glassesGroup.add(leftLens);

    // Right Rim & Lens
    const rightRim = new THREE.Mesh(rimGeom, frameMaterial);
    rightRim.position.set(0.62, 0.35, 1.62);
    rightRim.rotation.y = -0.08;
    glassesGroup.add(rightRim);

    const rightLens = new THREE.Mesh(lensGeom, lensMaterial);
    rightLens.position.set(0.62, 0.35, 1.62);
    rightLens.rotation.y = -0.08;
    glassesGroup.add(rightLens);

    // Central Bridge
    const bridgeGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.38, 12);
    const bridge = new THREE.Mesh(bridgeGeom, frameMaterial);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.42, 1.68);
    glassesGroup.add(bridge);

    // Side Arms / Temples
    const templeGeom = new THREE.CylinderGeometry(0.035, 0.035, 1.6, 10);
    const leftTemple = new THREE.Mesh(templeGeom, frameMaterial);
    leftTemple.position.set(-1.08, 0.34, 0.85);
    leftTemple.rotation.x = Math.PI / 2;
    leftTemple.rotation.y = 0.12;
    glassesGroup.add(leftTemple);

    const rightTemple = new THREE.Mesh(templeGeom, frameMaterial);
    rightTemple.position.set(1.08, 0.34, 0.85);
    rightTemple.rotation.x = Math.PI / 2;
    rightTemple.rotation.y = -0.12;
    glassesGroup.add(rightTemple);

    mainGroup.add(glassesGroup);

    // 6. Floating Orbiting 3D Spheres & Kinetic Particles
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    interface OrbitSphere {
      mesh: THREE.Mesh;
      baseRadius: number;
      speed: number;
      angle: number;
      inclination: number;
      verticalOffset: number;
      pulseSpeed: number;
    }

    const orbitSpheres: OrbitSphere[] = [];
    const sphereColors = [
      0xf84900, // Vivid Orange
      0xf59e0b, // Warm Amber
      0x06b6d4, // Cyan
      0x10b981, // Emerald Green
      0xffffff, // Pearl White
      0xec4899, // Hot Magenta
      0xf84900, // Vivid Orange
      0x38bdf8, // Sky Blue
    ];

    const sphereSizes = [0.24, 0.18, 0.22, 0.14, 0.16, 0.2, 0.12, 0.26];

    for (let i = 0; i < 8; i++) {
      const radius = sphereSizes[i];
      const sGeom = new THREE.SphereGeometry(radius, 24, 24);
      const sMat = new THREE.MeshStandardMaterial({
        color: sphereColors[i % sphereColors.length],
        roughness: 0.15,
        metalness: 0.7,
        emissive: sphereColors[i % sphereColors.length],
        emissiveIntensity: 0.3,
      });

      const sMesh = new THREE.Mesh(sGeom, sMat);
      sphereGroup.add(sMesh);

      orbitSpheres.push({
        mesh: sMesh,
        baseRadius: 2.3 + (i % 3) * 0.45,
        speed: (0.6 + (i * 0.2)) * (i % 2 === 0 ? 1 : -1),
        angle: (i / 8) * Math.PI * 2,
        inclination: (i - 4) * 0.22,
        verticalOffset: (Math.sin(i * 1.5) * 0.9),
        pulseSpeed: 1.5 + i * 0.3,
      });
    }

    // 7. Golden Helical / Spiral Ribbon Under Neck
    const helixPoints: THREE.Vector3[] = [];
    for (let k = 0; k <= 60; k++) {
      const t = k / 60;
      const angle = t * Math.PI * 5.5;
      const radius = 0.55 * (1.0 - t * 0.35);
      const y = -1.6 - t * 1.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      helixPoints.push(new THREE.Vector3(x, y, z));
    }
    const helixPath = new THREE.CatmullRomCurve3(helixPoints);

    const ribbonGeom = new THREE.TubeGeometry(helixPath, 64, 0.07, 12, false);
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xf84900,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.4,
    });
    const helixMesh = new THREE.Mesh(ribbonGeom, ribbonMat);
    mainGroup.add(helixMesh);

    // 8. Mouse Tracking & Smooth Damping Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;
    let hoverIntensity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coordinates relative to viewport and container center
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center
      const dx = (e.clientX - centerX) / (window.innerWidth * 0.5);
      const dy = (e.clientY - centerY) / (window.innerHeight * 0.5);

      mouseX = Math.max(-1.2, Math.min(1.2, dx));
      mouseY = Math.max(-1.2, Math.min(1.2, dy));

      // Calculate target yaw (rotation around Y) and pitch (rotation around X)
      targetRotY = mouseX * 0.62;
      targetRotX = mouseY * 0.38;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Touch support for mobile devices
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX = (touch.clientX - centerX) / (window.innerWidth * 0.5);
        mouseY = (touch.clientY - centerY) / (window.innerHeight * 0.5);
        targetRotY = mouseX * 0.5;
        targetRotX = mouseY * 0.3;
      }
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // 10. Visibility Observer (Pauses rendering when scrolled out of view to save 100% CPU/GPU)
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    setIsLoaded(true);

    // 11. Main 60FPS Render Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth lerp damping for organic, responsive mouse following
      currentRotY += (targetRotY - currentRotY) * 0.065;
      currentRotX += (targetRotX - currentRotX) * 0.065;

      // Base idle levitation & breathing float
      const idleFloatY = Math.sin(elapsed * 1.5) * 0.12;
      const idleHeadTilt = Math.cos(elapsed * 0.9) * 0.04;

      mainGroup.position.y = idleFloatY;
      mainGroup.rotation.y = currentRotY + idleHeadTilt;
      mainGroup.rotation.x = currentRotX;
      mainGroup.rotation.z = -currentRotY * 0.12; // subtle natural banking/roll

      // Dynamic light intensity shift based on mouse interaction
      targetHover = isHovered ? 1 : 0;
      hoverIntensity += (targetHover - hoverIntensity) * 0.1;
      underLight.intensity = 1.8 + hoverIntensity * 1.4;

      // Orbiting spheres animation
      orbitSpheres.forEach((sphere) => {
        sphere.angle += sphere.speed * delta * (1.0 + hoverIntensity * 0.8);
        const curRadius = sphere.baseRadius + Math.sin(elapsed * sphere.pulseSpeed) * 0.15;
        const x = Math.cos(sphere.angle) * curRadius;
        const z = Math.sin(sphere.angle) * curRadius;
        const y = sphere.verticalOffset + Math.sin(sphere.angle + sphere.inclination) * 0.65;

        sphere.mesh.position.set(x, y + idleFloatY * 0.5, z);
      });

      // Ribbon gentle twist
      helixMesh.rotation.y = elapsed * 0.35;

      renderer.render(scene, camera);
    };

    let targetHover = 0;
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      // Dispose Three.js objects
      nonIndexedGeom.dispose();
      headMaterial.dispose();
      rimGeom.dispose();
      lensGeom.dispose();
      bridgeGeom.dispose();
      templeGeom.dispose();
      frameMaterial.dispose();
      lensMaterial.dispose();
      ribbonGeom.dispose();
      ribbonMat.dispose();

      orbitSpheres.forEach((s) => {
        s.mesh.geometry.dispose();
        (s.mesh.material as THREE.Material).dispose();
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Subtle glowing holographic aura behind the 3D sculpture */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div
          className={`w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full transition-all duration-700 blur-[100px] ${
            isHovered
              ? 'bg-gradient-to-tr from-[#f84900]/30 via-[#06b6d4]/20 to-[#ec4899]/25 scale-110'
              : 'bg-gradient-to-tr from-[#f84900]/18 via-[#06b6d4]/12 to-transparent scale-100'
          }`}
        />
      </div>

      {/* Floating subtle badge indicating 3D Interactive Mode */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-800/80 text-[11px] font-medium text-neutral-400 pointer-events-none transition-opacity duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f84900] animate-pulse" />
        <span>Interactive 3D • Move Cursor</span>
      </div>
    </div>
  );
};
