"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { sourceCode } from "@/lib/constant";

const TYPING_SPEED = 80; // ADJUSTING SPEED
const PAUSE_AFTER_COMPLETE = 1300; // REPEATATION DELAY

const TypingCodeBlock = () => {
   const [codeIndex, setCodeIndex] = useState(() =>
      Math.floor(Math.random() * sourceCode.length)
   );
   const [displayedCode, setDisplayedCode] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isPaused, setIsPaused] = useState(false);

   const currentCode = sourceCode[codeIndex];

  useEffect(() => {
   if (isPaused) return;

   let timeout: NodeJS.Timeout;

   if (currentIndex < currentCode.length) {
      timeout = setTimeout(() => {
         setDisplayedCode((prev) => prev + currentCode[currentIndex]);
         setCurrentIndex((prev) => prev + 1);
      }, TYPING_SPEED);
   } else {
      timeout = setTimeout(() => {
         let nextIndex = Math.floor(Math.random() * sourceCode.length);
         while (nextIndex === codeIndex) {
            nextIndex = Math.floor(Math.random() * sourceCode.length);
         }

         setCodeIndex(nextIndex);
         setDisplayedCode("");
         setCurrentIndex(0);
      }, PAUSE_AFTER_COMPLETE);
   }

   return () => clearTimeout(timeout);
}, [currentIndex, isPaused, currentCode, codeIndex]);

   // Controls
   const handlePause = () => setIsPaused(true);
   const handlePlay = () => setIsPaused(false);
   const handleRestart = () => {
      setDisplayedCode("");
      setCurrentIndex(0);
      setIsPaused(false);
   };

   return (
      <div className="mt-15 w-full px-4 sm:px-6 lg:px-8 mb-20">
         <div className="w-full max-w-5xl overflow-hidden rounded-xl bg-[#1e1e1e] font-mono text-sm text-white shadow-xl sm:text-base dark:bg-[#2e2e2e]">
            <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2 dark:bg-[#202020]">
               <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
               </div>

               <div className="flex items-center space-x-3 text-base text-gray-400 select-none">
                  <button onClick={handlePause} className="cursor-pointer">⏸️</button>
                  <button onClick={handlePlay} className="cursor-pointer">▶️</button>
                  <button onClick={handleRestart} className="cursor-pointer">🔁</button>
               </div>

               <div className="flex items-center space-x-3 text-sm text-gray-400 select-none dark:text-black">
                  <span className="cursor-default hover:text-white">_</span>
                  <span className="cursor-default hover:text-white">▢</span>
                  <span className="cursor-default hover:text-white">⧉</span>
               </div>
            </div>

            <div className="h-[400px] overflow-y-auto p-4">
               <SyntaxHighlighter
                  language="typescript"
                  style={oneDark}
                  showLineNumbers
                  customStyle={{ background: "transparent", padding: 0, margin: 0 }}
                  lineNumberStyle={{ color: "#999" }}
               >
                  {displayedCode + (currentIndex < currentCode.length ? "▌" : "")}
               </SyntaxHighlighter>
            </div>
         </div>
      </div>
   );
};


export default TypingCodeBlock;
