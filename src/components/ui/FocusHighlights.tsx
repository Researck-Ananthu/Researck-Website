"use client";

import { useEffect, useRef, useState } from "react";
import { focuses } from "@/lib/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./FocusHighlights.css";

const FocusHighlights = () => {
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const flipSoundRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Unlock audio after user interaction
  useEffect(() => {
    const unlock = () => {
      setHasInteracted(true);
      window.removeEventListener("click", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("keydown", unlock);
    };

    window.addEventListener("click", unlock);
    window.addEventListener("scroll", unlock);
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  // Detect section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.4 } // At least 40% of section visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Play flip sound
  const playFlipSound = () => {
    if (hasInteracted && isInView && flipSoundRef.current) {
      flipSoundRef.current.currentTime = 0;
      flipSoundRef.current.volume = 0.3;
      flipSoundRef.current.play().catch(() => {});
    }
  };

  // Set flip interval only when in view
  useEffect(() => {
    if (hasInteracted && isInView) {
      intervalRef.current = setInterval(() => {
        setFlippedIndexes((prev) =>
          focuses.map((_, idx) => (prev.includes(idx) ? -1 : idx))
        );
        playFlipSound();
      }, 1100);
    } else {
      // Clear interval when out of view
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasInteracted, isInView]);

  const isFlipped = (index: number) => flippedIndexes.includes(index);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 overflow-hidden"
      id="focus-section"
    >
      {/* Hidden local audio */}
      <audio ref={flipSoundRef} src="/sounds/flip.mp3" preload="auto" />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
        {focuses.map((focus, i) => (
          <motion.div
            key={focus.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02}>
              <div className="glow-wrapper group flip-card perspective">
                <div
                  className={`flip-card-inner transition-transform duration-[1200ms] ${
                    isFlipped(i) ? "rotate-y-180" : ""
                  } group-hover:rotate-y-180`}
                >
                  {/* Front */}
                  <div className="flip-card-front bg-card text-white shadow-lg rounded-2xl overflow-hidden relative">
                    <Image
                      src={focus.image}
                      alt={focus.title}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {focus.title}
                      </h3>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back text-white rounded-2xl shadow-xl overflow-hidden relative">
                    <Image
                      src={focus.flip_image}
                      alt={`${focus.title} back`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-6">
                      <p className="text-sm sm:text-base leading-relaxed">
                        {focus.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FocusHighlights;
