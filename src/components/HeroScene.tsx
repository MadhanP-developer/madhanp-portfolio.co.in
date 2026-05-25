import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Octahedron, TorusKnot } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Shape({
  position, color, geometry,
}: { position: [number, number, number]; color: string; geometry: "ico" | "torus" | "octa" | "knot" }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.3;
    ref.current.rotation.y += dt * 0.4;
  });

  const Geo = (
    <>
      {geometry === "ico" && <Icosahedron ref={ref} args={[1, 0]} position={position}>
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.6} />
      </Icosahedron>}
      {geometry === "torus" && <Torus ref={ref} args={[0.8, 0.25, 16, 64]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.2} metalness={0.7} />
      </Torus>}
      {geometry === "octa" && <Octahedron ref={ref} args={[1, 0]} position={position}>
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.6} />
      </Octahedron>}
      {geometry === "knot" && <TorusKnot ref={ref} args={[0.6, 0.2, 100, 16]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.2} metalness={0.8} />
      </TorusKnot>}
    </>
  );

  return <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>{Geo}</Float>;
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#b282f0" />
      <pointLight position={[5, -3, 5]} intensity={0.6} color="#66d9ff" />

      <Shape position={[-3.2, 1.5, 0]} color="#66d9ff" geometry="ico" />
      <Shape position={[3.2, 1.4, -1]} color="#b282f0" geometry="torus" />
      <Shape position={[-2.8, -1.6, -1]} color="#ff6ea5" geometry="octa" />
      <Shape position={[2.8, -1.5, 0]} color="#66d9ff" geometry="knot" />
    </Canvas>
  );
}
