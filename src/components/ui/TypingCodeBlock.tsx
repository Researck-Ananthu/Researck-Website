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

    if (currentIndex < sourceCode.length) { // CHAR WISE APPENDING
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
    <div className="w-full mt-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#1e1e1e] dark:bg-[#2e2e2e] text-white rounded-xl overflow-hidden shadow-xl w-full max-w-5xl font-mono text-sm sm:text-base">
        {/* Header */}
        <div className="bg-[#2d2d2d] dark:bg-[#202020] flex items-center justify-between px-4 py-2">
          {/* Control Dots */}
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Pause / Play / Restart buttons */}
          <div className="flex items-center space-x-3 text-gray-400 text-base select-none">
            <button onClick={handlePause} title="Pause" className="hover:opacity-90 cursor-pointer">⏸️</button>
            <button onClick={handlePlay} title="Play" className="hover:opacity-90 cursor-pointer">▶️</button>
            <button onClick={handleRestart} title="Restart" className="hover:opacity-90 cursor-pointer">🔁</button>
          </div>

          {/* Dummy icons */}
          <div className="flex items-center space-x-3 text-gray-400 dark:text-black text-sm select-none">
            <span className="hover:text-white cursor-default">_</span>
            <span className="hover:text-white cursor-default">▢</span>
            <span className="hover:text-white cursor-default">⧉</span>
          </div>
        </div>

        {/* Code Block */}
        <div className="p-4 overflow-y-auto h-[400px]">
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
            {displayedCode + (currentIndex < sourceCode.length ? "▌" : "")} {/* CHARS TYPED TILL ALONG WITH THE CURSOR(UNTIL THE CONTENTS REMAINING) */}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default TypingCodeBlock;
