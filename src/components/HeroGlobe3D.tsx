import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';
import {
  ShoppingBag,
  GraduationCap,
  Activity,
  Building2,
  Cpu,
  Sparkles,
} from 'lucide-react';

interface FloatingCardData {
  id: string;
  title: string;
  subtitle: string;
  metric?: string;
  icon: React.ElementType;
  positionClasses: string;
  floatDelay: number;
  floatDuration: number;
  parallaxFactor: number;
}

const BUSINESS_DOMAINS: FloatingCardData[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    subtitle: 'High-Converting Stores',
    metric: '+180%',
    icon: ShoppingBag,
    positionClasses: 'top-1 left-0 sm:top-2 sm:left-0',
    floatDelay: 0,
    floatDuration: 5,
    parallaxFactor: 0.03,
  },
  {
    id: 'saas',
    title: 'Tech & SaaS',
    subtitle: 'Modern Web Apps',
    metric: '99.9%',
    icon: Cpu,
    positionClasses: 'top-0 right-0 sm:top-1 sm:right-0',
    floatDelay: 1.2,
    floatDuration: 5.6,
    parallaxFactor: 0.035,
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    subtitle: 'Luxury Architecture',
    metric: '$45M+',
    icon: Building2,
    positionClasses: 'top-[37%] left-0 sm:top-[36%] sm:left-0',
    floatDelay: 0.6,
    floatDuration: 6.2,
    parallaxFactor: 0.025,
  },
  {
    id: 'fashion',
    title: 'Fashion & Luxury',
    subtitle: 'Editorial Branding',
    metric: 'Global',
    icon: Sparkles,
    positionClasses: 'top-[41%] right-0 sm:top-[40%] sm:right-0',
    floatDelay: 1.8,
    floatDuration: 5.2,
    parallaxFactor: 0.03,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Clinical & MedTech',
    metric: 'HIPAA',
    icon: Activity,
    positionClasses: 'bottom-2 left-0 sm:bottom-3 sm:left-0',
    floatDelay: 2.2,
    floatDuration: 5.8,
    parallaxFactor: 0.025,
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Interactive EdTech',
    metric: '50k+',
    icon: GraduationCap,
    positionClasses: 'bottom-1 right-0 sm:bottom-2 sm:right-0',
    floatDelay: 1.5,
    floatDuration: 6.5,
    parallaxFactor: 0.03,
  },
];

export const HeroGlobe3D: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const rootWrapperRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;

    // Dimensions (compact & responsive)
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 420;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.8);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x111116, 2.5);
    scene.add(ambientLight);

    const orangeKeyLight = new THREE.DirectionalLight(0xf84900, 3.5);
    orangeKeyLight.position.set(4, 4, 5);
    scene.add(orangeKeyLight);

    const amberLight = new THREE.DirectionalLight(0xff9900, 2.0);
    amberLight.position.set(-5, -2, 4);
    scene.add(amberLight);

    const rimLight = new THREE.DirectionalLight(0xff6a1a, 2.8);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // 4. Main Globe Master Group (Compact 1.28 Radius)
    const globeMasterGroup = new THREE.Group();
    scene.add(globeMasterGroup);

    // 4a. Inner Glossy Core Sphere
    const coreRadius = 1.28;
    const coreGeometry = new THREE.SphereGeometry(coreRadius, 48, 48);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0a0a0f,
      emissive: 0x2e0c02,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    globeMasterGroup.add(coreMesh);

    // 4b. Polygonal Geometric Wireframe Layer
    const polyGeometry = new THREE.IcosahedronGeometry(coreRadius * 1.035, 3);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf84900,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const polyWireframe = new THREE.Mesh(polyGeometry, wireframeMaterial);
    globeMasterGroup.add(polyWireframe);

    // 4c. Glowing Nodes on Polygon Vertices
    const polyPos = polyGeometry.attributes.position;
    const nodeCount = polyPos.count;
    const nodeGeometry = new THREE.SphereGeometry(0.024, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffa44d,
    });
    const instancedNodes = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodeCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < nodeCount; i++) {
      dummy.position.set(
        polyPos.getX(i) * 1.04,
        polyPos.getY(i) * 1.04,
        polyPos.getZ(i) * 1.04
      );
      dummy.updateMatrix();
      instancedNodes.setMatrixAt(i, dummy.matrix);
    }
    instancedNodes.instanceMatrix.needsUpdate = true;
    globeMasterGroup.add(instancedNodes);

    // 4d. Major Pulsing Tech Hub Nodes
    const hubCount = 12;
    const hubGroup = new THREE.Group();
    const hubSpheres: THREE.Mesh[] = [];

    for (let i = 0; i < hubCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / hubCount);
      const theta = Math.sqrt(hubCount * Math.PI) * phi;
      const hubRadius = coreRadius * 1.05;

      const x = hubRadius * Math.cos(theta) * Math.sin(phi);
      const y = hubRadius * Math.sin(theta) * Math.sin(phi);
      const z = hubRadius * Math.cos(phi);

      const hGeom = new THREE.SphereGeometry(0.05, 14, 14);
      const hMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
      });
      const hMesh = new THREE.Mesh(hGeom, hMat);
      hMesh.position.set(x, y, z);

      // Glowing halo ring around each hub
      const haloGeom = new THREE.RingGeometry(0.065, 0.1, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xf84900,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
      });
      const halo = new THREE.Mesh(haloGeom, haloMat);
      halo.lookAt(new THREE.Vector3(0, 0, 0));
      hMesh.add(halo);

      hubGroup.add(hMesh);
      hubSpheres.push(hMesh);
    }
    globeMasterGroup.add(hubGroup);

    // 4e. Curved Flight / Network Connection Arcs
    const arcCount = 8;
    const arcCurves: THREE.Line[] = [];
    for (let a = 0; a < arcCount; a++) {
      const idx1 = Math.floor(Math.random() * hubCount);
      let idx2 = (idx1 + 2 + Math.floor(Math.random() * 3)) % hubCount;
      if (idx1 === idx2) idx2 = (idx1 + 1) % hubCount;

      const p1 = hubSpheres[idx1].position.clone();
      const p2 = hubSpheres[idx2].position.clone();

      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const distance = p1.distanceTo(p2);
      mid.normalize().multiplyScalar(coreRadius + distance * 0.45);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(20);
      const curveGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const curveMaterial = new THREE.LineBasicMaterial({
        color: 0xf84900,
        transparent: true,
        opacity: 0.55,
      });
      const arcLine = new THREE.Line(curveGeometry, curveMaterial);
      globeMasterGroup.add(arcLine);
      arcCurves.push(arcLine);
    }

    // 5. Scaled Holographic Orbital Rings
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    // Ring 1 - Equator Orbit Ring
    const ring1Geom = new THREE.TorusGeometry(1.72, 0.015, 14, 72);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xf84900,
      emissive: 0xf84900,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 2.8;
    ring1.rotation.y = 0.2;
    orbitGroup.add(ring1);

    // Ring 2 - Tilted Elliptical Ring
    const ring2Geom = new THREE.TorusGeometry(1.98, 0.012, 14, 72);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xff9900,
      emissive: 0xff7700,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.85,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 3.4;
    ring2.rotation.z = 0.4;
    orbitGroup.add(ring2);

    // Ring 3 - Outer Thin Ring
    const ring3Geom = new THREE.TorusGeometry(2.18, 0.009, 14, 72);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xf84900,
      transparent: true,
      opacity: 0.4,
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    ring3.rotation.x = 0.3;
    orbitGroup.add(ring3);

    // 6. Floating Orbiting Orange Spheres
    interface OrbitingOrb {
      mesh: THREE.Mesh;
      orbitRadius: number;
      speed: number;
      angle: number;
      inclination: number;
      verticalPhase: number;
    }

    const satelliteCount = 8;
    const satellites: OrbitingOrb[] = [];
    const orbColors = [0xf84900, 0xffa44d, 0xff6a1a, 0xffd166];

    for (let i = 0; i < satelliteCount; i++) {
      const size = 0.045 + (i % 3) * 0.025;
      const sGeom = new THREE.SphereGeometry(size, 14, 14);
      const sMat = new THREE.MeshStandardMaterial({
        color: orbColors[i % orbColors.length],
        emissive: orbColors[i % orbColors.length],
        emissiveIntensity: 0.9,
        metalness: 0.8,
        roughness: 0.2,
      });
      const sMesh = new THREE.Mesh(sGeom, sMat);
      scene.add(sMesh);

      satellites.push({
        mesh: sMesh,
        orbitRadius: 1.65 + (i * 0.08),
        speed: (0.35 + (i * 0.08)) * (i % 2 === 0 ? 1 : -1),
        angle: (i / satelliteCount) * Math.PI * 2,
        inclination: (i - 4) * 0.25,
        verticalPhase: i * 1.3,
      });
    }

    // 7. Ambient Particle Field
    const particleCount = 70;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount; p++) {
      const radius = 1.5 + Math.random() * 1.8;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const sinPhi = Math.sin(phi);

      particlePositions[p * 3] = radius * sinPhi * Math.cos(theta);
      particlePositions[p * 3 + 1] = radius * sinPhi * Math.sin(theta);
      particlePositions[p * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf84900,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeom, particleMat);
    scene.add(particleCloud);

    // 8. Mouse Parallax Tracking
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normX = (e.clientX - centerX) / (window.innerWidth * 0.5);
      const normY = (e.clientY - centerY) / (window.innerHeight * 0.5);

      targetParallaxX = Math.max(-1, Math.min(1, normX));
      targetParallaxY = Math.max(-1, Math.min(1, normY));

      setMouseOffset({ x: targetParallaxX, y: targetParallaxY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

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

    // 10. Intersection Observer (Power saving)
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 11. Render Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse parallax lerp
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;

      // Continuous Slow Globe Rotation
      globeMasterGroup.rotation.y = elapsed * 0.18 + currentParallaxX * 0.35;
      globeMasterGroup.rotation.x = currentParallaxY * 0.25 + Math.sin(elapsed * 0.5) * 0.04;

      // Wireframe pulse
      wireframeMaterial.opacity = 0.32 + Math.sin(elapsed * 2.0) * 0.08;

      // Orbit Rings Rotation
      ring1.rotation.z = elapsed * 0.22;
      ring2.rotation.z = -elapsed * 0.16;
      ring3.rotation.x = 0.3 + Math.sin(elapsed * 0.4) * 0.08;
      ring3.rotation.z = elapsed * 0.1;

      orbitGroup.rotation.y = currentParallaxX * 0.2;
      orbitGroup.rotation.x = currentParallaxY * 0.15;

      // Orbiting Satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed * delta;
        const x = Math.cos(sat.angle) * sat.orbitRadius;
        const z = Math.sin(sat.angle) * sat.orbitRadius;
        const y = Math.sin(sat.angle + sat.inclination) * 0.55 + Math.sin(elapsed * 1.5 + sat.verticalPhase) * 0.15;

        sat.mesh.position.set(x, y, z);
      });

      // Particle cloud drift
      particleCloud.rotation.y = elapsed * 0.04;
      particleCloud.rotation.x = elapsed * 0.02;

      // Hub node pulse
      hubSpheres.forEach((h, i) => {
        const offset = Math.sin(elapsed * 2.5 + i);
        h.scale.setScalar(1.0 + offset * 0.1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      coreGeometry.dispose();
      coreMaterial.dispose();
      polyGeometry.dispose();
      wireframeMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      instancedNodes.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();
      particleGeom.dispose();
      particleMat.dispose();

      satellites.forEach((sat) => {
        sat.mesh.geometry.dispose();
        (sat.mesh.material as THREE.Material).dispose();
      });

      arcCurves.forEach((arc) => {
        arc.geometry.dispose();
        (arc.material as THREE.Material).dispose();
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={rootWrapperRef}
      className="relative w-full max-w-[480px] h-[380px] sm:h-[430px] lg:h-[460px] flex items-center justify-center select-none mx-auto"
    >
      {/* 1. Holographic Orange Radial Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full bg-gradient-to-tr from-[#f84900]/22 via-[#ff6a1a]/12 to-transparent blur-[70px] animate-pulse" />
        <div className="absolute w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full bg-[#f84900]/14 blur-[45px]" />
      </div>

      {/* 2. WebGL 3D Globe Canvas */}
      <div
        ref={canvasContainerRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing z-0"
        style={{ touchAction: 'none' }}
      />

      {/* 3. Floating Dark Business Domain Popup Cards (Compact & Contained) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {BUSINESS_DOMAINS.map((domain) => {
          const Icon = domain.icon;
          const isActive = activeDomain === domain.id;

          const px = mouseOffset.x * domain.parallaxFactor * 20;
          const py = mouseOffset.y * domain.parallaxFactor * 20;

          return (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: px,
                y: py,
              }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
              }}
              className={`absolute ${domain.positionClasses} pointer-events-auto`}
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: domain.floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: domain.floatDelay,
                }}
                onMouseEnter={() => setActiveDomain(domain.id)}
                onMouseLeave={() => setActiveDomain(null)}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`group relative flex items-center gap-2 sm:gap-2.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-300 shadow-lg cursor-pointer ${
                  isActive
                    ? 'bg-[#121017]/95 border-[#f84900] shadow-[#f84900]/20 shadow-xl'
                    : 'bg-[#0b0a10]/90 backdrop-blur-md border-[#f84900]/25 hover:border-[#f84900]/80 hover:bg-[#121017]/95'
                }`}
              >
                {/* Icon Pill */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-[#f84900] text-white shadow-md shadow-[#f84900]/40'
                      : 'bg-[#f84900]/15 border border-[#f84900]/30 text-[#f84900] group-hover:bg-[#f84900] group-hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Card Text Content */}
                <div className="pr-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight group-hover:text-[#f84900] transition-colors whitespace-nowrap">
                      {domain.title}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f84900] animate-ping" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-neutral-400 font-medium whitespace-nowrap">
                    {domain.subtitle}
                  </div>
                </div>

                {/* Metric Badge */}
                {domain.metric && (
                  <div className="hidden sm:block text-[8.5px] font-semibold text-[#f84900] bg-[#f84900]/10 border border-[#f84900]/20 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                    {domain.metric}
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Bottom Center Status Tag */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950/85 backdrop-blur-md border border-[#f84900]/25 text-[10px] font-medium text-neutral-400 pointer-events-none whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f84900] animate-pulse" />
        <span>Global Digital Ecosystem</span>
      </div>
    </div>
  );
};
