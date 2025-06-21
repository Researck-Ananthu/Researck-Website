"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

// @ts-expect-error - raw-loader makes these non-typed
import vertexShader from "@/components/custom/animation/vertexShader.glsl.ts";
// @ts-expect-error - raw-loader makes these non-typed
import fragmentShader from "@/components/custom/animation/fragmentShader.glsl.ts";

const Blob = () => {
   // ✅ Replaced 'any' with a better type
   const mesh = useRef<THREE.Mesh | null>(null);
   const hover = useRef(false);

   const uniforms = useMemo(
      () => ({
         u_intensity: { value: 0.3 },
         u_time: { value: 0.0 },
      }),
      []
   );

   useFrame((state) => {
      const { clock } = state;
      const current = mesh.current;

      if (current && "material" in current && "uniforms" in current.material) {
         // TypeScript workaround: we assume it's a ShaderMaterial
         const material = current.material as THREE.ShaderMaterial;
         material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
         material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
            material.uniforms.u_intensity.value,
            hover.current ? 0.85 : 0.15,
            0.02
         );
      }
   });

   return (
      <mesh
         ref={mesh}
         scale={1.5}
         onPointerOver={() => (hover.current = true)}
         onPointerOut={() => (hover.current = false)}
      >
         <icosahedronGeometry args={[2, 20]} />
         <shaderMaterial
            uniforms={uniforms}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            wireframe={false}
         />
      </mesh>
   );
};

const BlobScene = () => {
   return (
      <div className="absolute inset-0 z-0">
         <Canvas camera={{ position: [0, 0, 8] }}>
            <Blob />
            <OrbitControls enableZoom={false} enablePan={false} />
         </Canvas>
      </div>
   );
};

export default BlobScene;
