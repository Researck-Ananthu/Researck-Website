// src/components/ui/ScrollToTop.tsx
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

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <button
         onClick={scrollToTop}
         className={`fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-md transition-opacity duration-300 bg-primary text-white dark:text-black hover:bg-primary/80 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
         }`}
         aria-label="Scroll to top"
      >
         <ArrowUp size={20} />
      </button>
   );
};

export default ScrollToTop;
