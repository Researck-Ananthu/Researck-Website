"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Mesh, PointLight } from "three";

// 🎯 Animated floating sphere with hover effects
type AnimatedSphereProps = {
  position: [number, number, number];
  size: number;
  speed: number;
  rotationSpeed: number;
  color: string;
};

const AnimatedSphere = ({
  position,
  size,
  speed,
  rotationSpeed,
  color,
}: AnimatedSphereProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setTime((prev) => prev + 0.02);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
      meshRef.current.rotation.x += 0.001 * rotationSpeed;
      meshRef.current.rotation.y += 0.002 * rotationSpeed;
    }
  }, [time, speed, rotationSpeed, position]);

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={hovered ? 1.2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial
        color={hovered ? "#eab308" : color}
        emissive={hovered ? "#facc15" : "#000000"}
        emissiveIntensity={hovered ? 0.6 : 0}
        roughness={0.2}
        metalness={0.8}
        envMapIntensity={1}
      />
    </mesh>
  );
};

const MovingLight = () => {
  const lightRef = useRef<PointLight>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lightRef.current) {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        lightRef.current.position.set(x * 5, y * 5, 2);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <pointLight ref={lightRef} intensity={1.5} color="#00bfff" />;
};

type ParticleFieldProps = {
  count?: number;
  size?: number;
};

const ParticleField = ({ count = 60, size = 0.015 }: ParticleFieldProps) => {
  const [positions, setPositions] = useState<[number, number, number][]>([]);

  useEffect(() => {
    const newPositions: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      newPositions.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ]);
    }
    setPositions(newPositions);
  }, [count]);

  return (
    <group>
      {positions.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[size, 6, 6]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
};

// 🎯 Main 3D Scene
type SceneProps = {
  isMobile: boolean;
};

const Scene = ({ isMobile }: SceneProps) => {
  // Reduce complexity for mobile
  const starsCount = isMobile ? 400 : 1200;
  const starsRadius = isMobile ? 30 : 60;
  const starsDepth = isMobile ? 15 : 30;
  const particleCount = isMobile ? 20 : 60;
  const particleSize = isMobile ? 0.01 : 0.015;

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3f51b5" />

      <MovingLight />
      <Stars
        radius={starsRadius}
        depth={starsDepth}
        count={starsCount}
        factor={2}
        saturation={0}
        fade
        speed={1}
      />

      <AnimatedSphere
        position={[-2, 0, -2]}
        size={isMobile ? 0.5 : 0.7}
        speed={0.5}
        rotationSpeed={1}
        color={"var(--color-primary, #4f46e5)"}
      />
      <AnimatedSphere
        position={[2.5, 1, -1]}
        size={isMobile ? 0.22 : 0.35}
        speed={0.7}
        rotationSpeed={1.5}
        color={"var(--color-secondary, #8b5cf6)"}
      />
      <AnimatedSphere
        position={[0, -1.5, -3]}
        size={isMobile ? 0.7 : 1}
        speed={0.3}
        rotationSpeed={0.8}
        color={"var(--color-accent, #6366f1)"}
      />
      <ParticleField count={particleCount} size={particleSize} />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
};

// 🌀 New loading effect: Animated Dots Loader
const DotsLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#ffffff] to-[#ffffff] dark:from-[#070707] dark:to-[#000000] z-0 transition-opacity duration-700 pointer-events-none">
    <div className="flex space-x-3">
      {/* <span className="block h-40 w-50 text-center p-10 font-bold rounded-full bg-black dark:bg-white dark:text-black animate-bounce" style={{ animationDelay: "0s" }}>ഇന്നാ പിടിച്ചോ 💣💥.....</span> */}
      <span className="block w-4 h-4 rounded-full bg-black dark:bg-white animate-bounce" style={{ animationDelay: "0s" }} />
      <span className="block w-4 h-4 rounded-full bg-black dark:bg-white animate-bounce" style={{ animationDelay: "0.2s" }} />
      <span className="block w-4 h-4 rounded-full bg-black dark:bg-white animate-bounce" style={{ animationDelay: "0.4s" }} />
    </div>
    <style>{`
      .animate-bounce {
        animation: bounce 1s infinite;
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0);}
        50% { transform: translateY(-18px);}
      }
    `}</style>
  </div>
);

// ✅ Hero Section with 3D Background and loading effect
const HeroSection = () => {
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  // Responsive: Reduce 3D complexity on small screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fade out loader after canvas is ready
  useEffect(() => {
    if (canvasLoaded) {
      const loader = document.getElementById("canvas-loader");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
      }
    }
  }, [canvasLoaded]);

  // ⏩ Force loader to disappear after a very short timeout (max 40ms for desktop, 10ms for mobile)
  useEffect(() => {
    // On mobile, use even shorter timeout to hide loader faster
    const timeout = setTimeout(() => {
      setCanvasLoaded(true);
    }, isMobile ? 10 : 40);
    return () => clearTimeout(timeout);
  }, [isMobile]);

  return (
    <section
      id="Home"
      data-section="Home"
      className="relative h-screen w-full pt-1 xl:pt-3 scroll-mt-24 selection-orange overflow-hidden"
    >
       <div className="absolute -top-19 h-0 w-0" id="Home-Page" />

      {/* Loader overlay */}
      <div
        id="canvas-loader"
        style={{
          zIndex: 0,
          pointerEvents: "none",
          transition: "opacity 0.7s",
          opacity: canvasLoaded ? 0 : 1,
        }}
        className="absolute inset-0"
      >
        <DotsLoader />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, isMobile ? 7 : 5], fov: isMobile ? 85 : 75 }}
          frameloop="always"
          onCreated={() => {
            setCanvasLoaded(true);
          }}
        >
          <Suspense fallback={null}>
            <Scene isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 z-[1] " />

      <div className="relative z-10 mx-auto h-full w-full max-w-[1920px] px-6 md:px-12">
        <div className="grid h-full grid-cols-1 lg:grid-cols-2">
          <div className="flex h-full w-full flex-col justify-between py-1 pr-4 text-left sm:pr-6 lg:pr-16 xl:pr-24 2xl:pr-32">
            <div>
              <h1
                className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-4xl lg:text-6xl text-foreground"
                style={{ fontFamily: "var(--font-source-code-pro)" }}
              >
                WE ARE GIVING <br />
                SOFTWARE <br />
                SOLUTIONS
              </h1>
            </div>
            <div className="text-muted-foreground sm:text-sm mb-0 hidden max-w-xl text-sm font-semibold text-wrap sm:block md:text-xl lg:mb-20">
              <p className="mt-24 sm:mt-8 md:mt-24">
              Tell your expectations, we will make that happen in an
              economical budget
              </p>
            </div>
          </div>

          <div className="flex h-full w-full flex-col items-end justify-between py-1 pl-4 text-right sm:pl-6 lg:pl-16 xl:pl-24 2xl:pl-32">
            <div className="myt1 text-muted-foreground sm:text-lg mt-0 hidden text-xs lg:text-xl font-medium sm:-mt-78 sm:block md:-mt-100 md:text-lg lg:mt-0">
              <p>
                Expert in e-commerce application,
                <br />
                e-learning application,
                <br />
                healthcare application
              </p>
            </div>
            <h2
              className="-mb-15 text-right text-3xl leading-tight font-extrabold tracking-tight sm:mb-20 sm:text-4xl md:text-4xl lg:text-6xl text-foreground"
              style={{ fontFamily: "var(--font-source-code-pro)" }}
            >
              CREATING <br />
              TAILORED <br />
              MOBILE <br />
              APPLICATIONS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
