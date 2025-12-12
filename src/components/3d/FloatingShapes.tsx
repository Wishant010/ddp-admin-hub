import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Stars, Environment } from "@react-three/drei";
import type { Mesh } from "three";

function AnimatedSphere({ position, color, speed = 1, distort = 0.3, size = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  distort?: number;
  size?: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={size}>
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedTorus({ position, color, speed = 1, size = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  size?: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[1, 0.4, 16, 32]} position={position} scale={size}>
        <MeshDistortMaterial
          color={color}
          distort={0.2}
          speed={1.5}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </Float>
  );
}

function AnimatedOctahedron({ position, color, speed = 1, size = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  size?: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2}>
      <Octahedron ref={meshRef} args={[1]} position={position} scale={size}>
        <MeshDistortMaterial
          color={color}
          distort={0.15}
          speed={1}
          roughness={0.1}
          metalness={0.9}
        />
      </Octahedron>
    </Float>
  );
}

function Scene() {
  return (
    <>
      {/* Environment provides lighting */}
      <Environment preset="city" />

      {/* 3D Shapes */}
      <AnimatedSphere position={[-3, 1, -2]} color="#14b8a6" size={0.8} distort={0.4} />
      <AnimatedSphere position={[3.5, -1, -3]} color="#f97316" size={0.6} distort={0.3} speed={0.8} />
      <AnimatedTorus position={[2, 2, -4]} color="#14b8a6" size={0.5} speed={0.6} />
      <AnimatedOctahedron position={[-2.5, -1.5, -3]} color="#f97316" size={0.7} speed={0.7} />
      <AnimatedOctahedron position={[0, -2, -5]} color="#14b8a6" size={0.5} speed={0.5} />

      {/* Stars background */}
      <Stars radius={50} depth={50} count={100} factor={4} fade speed={1} />
    </>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
