'use client';
import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function Kunai({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation tied directly to scroll
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5 + (scrollY * 0.005);
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      
      // Vertical movement for a floating effect
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Pointy bit */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.3, 2, 8]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Main blade part */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.1, 1, 8]} />
        <meshStandardMaterial color="#444" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Handle */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 1, 8]} />
        <meshStandardMaterial color="#8b0000" metalness={0.2} roughness={0.8} />
      </mesh>
      {/* Ring at the end */}
      <mesh position={[0, -1.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.04, 16, 32]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function KunaiCanvas() {
  const scrollRef = useRef(0);

  // Synchronize scroll on the Three.js canvas
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b0000" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Kunai scrollY={scrollRef.current} />
          </Float>
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
