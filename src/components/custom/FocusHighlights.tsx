"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { focuses } from "@/lib/constant";
import Image from "next/image";
import { motion } from "motion/react";
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

      const currentSection = sectionRef.current;
      if (currentSection) observer.observe(currentSection);

      return () => {
         if (currentSection) observer.unobserve(currentSection);
      };
   }, []);

   // Play flip sound
   const playFlipSound = useCallback(() => {
      if (hasInteracted && isInView && flipSoundRef.current) {
         flipSoundRef.current.currentTime = 0;
         flipSoundRef.current.volume = 0.3;
         flipSoundRef.current.play().catch(() => {});
      }
   }, [hasInteracted, isInView]);

   // Set flip interval only when in view
   useEffect(() => {
      if (hasInteracted && isInView) {
         intervalRef.current = setInterval(() => {
            setFlippedIndexes((prev) =>
               focuses.map((_, idx) => (prev.includes(idx) ? -1 : idx))
            );
            playFlipSound();
         }, 2000);
      } else {
         if (intervalRef.current) clearInterval(intervalRef.current);
      }

      return () => {
         if (intervalRef.current) clearInterval(intervalRef.current);
      };
   }, [hasInteracted, isInView, playFlipSound]);

   const isFlipped = (index: number) => flippedIndexes.includes(index);

   return (
      <section
         ref={sectionRef}
         className="w-full overflow-hidden px-4 py-24"
         id="focus-section"
      >
         {/* Hidden local audio */}
         <audio ref={flipSoundRef} src="/sounds/flip.mp3" preload="auto" />

         <div className="mx-auto grid w-full max-w-[2000px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-4 md:gap-3 lg:px-6 2xl:px-0 xl:grid-cols-4 xl:gap-3 2xl:gap-6">
            {focuses.map((focus, i) => (
               <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                     delay: i * 0.1,
                     duration: 0.8,
                     ease: "easeOut",
                  }}
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
                           <div className="flip-card-front bg-card relative overflow-hidden rounded-2xl text-white shadow-lg">
                              <Image
                                 src={focus.image}
                                 alt={focus.title}
                                 fill
                                 className="object-cover opacity-80"
                              />
                              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6">
                                 <h3 className="mb-2 text-xl font-bold sm:text-2xl">
                                    {focus.title}
                                 </h3>
                              </div>
                           </div>

                           {/* Back */}
                           <div className="flip-card-back relative overflow-hidden rounded-2xl text-white shadow-xl">
                              <Image
                                 src={focus.flip_image}
                                 alt={`${focus.title} back`}
                                 fill
                                 className="object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/60 p-6 text-center">
                                 <p className="text-sm leading-relaxed sm:text-base">
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
