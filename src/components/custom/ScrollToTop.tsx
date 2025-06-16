"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const toggleVisibility = () => {
         setIsVisible(window.scrollY > 300);
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
   }, []);

   // Smooth scroll to top with easing
   const scrollToTop = () => {
      const start = window.scrollY;
      const duration = 2000;
      const startTime = performance.now();

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const scrollStep = (timestamp: number) => {
         const elapsed = timestamp - startTime;
         const progress = Math.min(elapsed / duration, 1);
         const easedProgress = easeOutCubic(progress);

         window.scrollTo(0, start * (1 - easedProgress));

         if (progress < 1) {
            requestAnimationFrame(scrollStep);
         }
      };

      requestAnimationFrame(scrollStep);
   };

   return (
      <button
         onClick={scrollToTop}
         className={`fixed bottom-4 right-4 z-50 rounded-full shadow-md transition-opacity duration-300 bg-primary text-white dark:text-black hover:bg-primary/80
            ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
            p-2 md:p-3`}
         aria-label="Scroll to top"
      >
         <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </button>
   );
};

export default ScrollToTop;
