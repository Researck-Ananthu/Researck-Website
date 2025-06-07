"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { sourceCode } from "@/lib/constant";

const TYPING_SPEED = 40; // ADJUSTING SPEED
const PAUSE_AFTER_COMPLETE = 2000; // REPEATATION DELAY

const TypingCodeBlock = () => {
   const [displayedCode, setDisplayedCode] = useState(""); // STORES CURRENTLY DISPLAYED CHARS
   const [currentIndex, setCurrentIndex] = useState(0); // TRACKING WHICH CHAR IS TYPED NEXT
   const [isPaused, setIsPaused] = useState(false); // CONTROLLING LIVE ANIMATION

   useEffect(() => {
      if (isPaused) return; // EXECUTION STOPS

      let timeout: NodeJS.Timeout;

      if (currentIndex < sourceCode.length) {
         // CHAR WISE APPENDING
         timeout = setTimeout(() => {
            setDisplayedCode((prev) => prev + sourceCode[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
         }, TYPING_SPEED);
      } else {
         timeout = setTimeout(() => {
            setDisplayedCode(""); // CLEARS THE PREV STORAGE
            setCurrentIndex(0); // CURSOR AT START
         }, PAUSE_AFTER_COMPLETE); // FOR RESTARTING
      }

      return () => clearTimeout(timeout); // AVOID MEMORY LEAKS
   }, [currentIndex, isPaused]);
   //   CONTROLS HANDLING
   const handlePause = () => setIsPaused(true);
   const handlePlay = () => setIsPaused(false);
   const handleRestart = () => {
      setDisplayedCode("");
      setCurrentIndex(0);
      setIsPaused(false);
   };

   return (
      <div className="mt-20 w-full px-4 sm:px-6 lg:px-8">
         <div className="w-full max-w-5xl overflow-hidden rounded-xl bg-[#1e1e1e] font-mono text-sm text-white shadow-xl sm:text-base dark:bg-[#2e2e2e]">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2 dark:bg-[#202020]">
               {/* Control Dots */}
               <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
               </div>

               {/* Pause / Play / Restart buttons */}
               <div className="flex items-center space-x-3 text-base text-gray-400 select-none">
                  <button
                     onClick={handlePause}
                     title="Pause"
                     className="cursor-pointer hover:opacity-90"
                  >
                     ⏸️
                  </button>
                  <button
                     onClick={handlePlay}
                     title="Play"
                     className="cursor-pointer hover:opacity-90"
                  >
                     ▶️
                  </button>
                  <button
                     onClick={handleRestart}
                     title="Restart"
                     className="cursor-pointer hover:opacity-90"
                  >
                     🔁
                  </button>
               </div>

               {/* Dummy icons */}
               <div className="flex items-center space-x-3 text-sm text-gray-400 select-none dark:text-black">
                  <span className="cursor-default hover:text-white">_</span>
                  <span className="cursor-default hover:text-white">▢</span>
                  <span className="cursor-default hover:text-white">⧉</span>
               </div>
            </div>

            {/* Code Block */}
            <div className="h-[400px] overflow-y-auto p-4">
               <SyntaxHighlighter // RESPONSIBLE FOR DYNAMIC DISPLAY OF THE CODE(COLORING)
                  language="typescript"
                  style={oneDark} // APPLIED THEME
                  showLineNumbers
                  customStyle={{
                     background: "transparent",
                     padding: 0,
                     margin: 0,
                  }}
                  lineNumberStyle={{ color: "#999" }}
               >
                  {displayedCode +
                     (currentIndex < sourceCode.length ? "▌" : "")}{" "}
                  {/* CHARS TYPED TILL ALONG WITH THE CURSOR(UNTIL THE CONTENTS REMAINING) */}
               </SyntaxHighlighter>
            </div>
         </div>
      </div>
   );
};

export default TypingCodeBlock;
