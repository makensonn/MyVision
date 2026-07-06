import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const ref = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
    // subtle mouse tracking
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.current.x * 0.6, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.current.y * 0.4, 0.05);
    const t = state.clock.elapsedTime;
    const s = 1 + Math.sin(t * 0.8) * 0.04;
    ref.current.scale.set(s, s, s);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Icosahedron ref={ref} args={[1.6, 8]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8B5CF6"
          emissive="#EC4899"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          distort={0.45}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
}

function InnerCanvas() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#EC4899" />
      <directionalLight position={[-5, -3, -2]} intensity={0.9} color="#F97316" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#8B5CF6" />
      <Blob />
      <Environment preset="night" />
    </Canvas>
  );
}

export function HeroCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-70 mix-blend-screen"
    >
      <InnerCanvas />
    </div>
  );
}
