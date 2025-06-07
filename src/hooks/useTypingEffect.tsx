import { useState, useEffect } from "react";

const useTypingEffect = (text: string, speed = 50, delay = 2000) => {
   const [displayedText, setDisplayedText] = useState("");
   const [index, setIndex] = useState(0);

   useEffect(() => {
      if (index < text.length) {
         const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
         }, speed);
         return () => clearTimeout(timeout);
      } else {
         // Optional: Reset for infinite loop
         const resetTimeout = setTimeout(() => {
            setDisplayedText("");
            setIndex(0);
         }, delay);
         return () => clearTimeout(resetTimeout);
      }
   }, [index, text, speed, delay]);

   return displayedText;
};

export default useTypingEffect;
