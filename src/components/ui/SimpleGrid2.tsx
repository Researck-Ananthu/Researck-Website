import React from "react";
import { cn } from "@/lib/utils";
import { AttentionSeeker } from "react-awesome-reveal";

interface GridHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  // whiteScheme: boolean;
  grid?: boolean;
  // cover?: boolean;
  startText: string;
  highlightText: string;
  endText: string;
  classname?: string;
}

const SimpleGrid2: React.FC<GridHeadingProps> = ({
  // whiteScheme = true,
  grid = false,
  // cover = false,
  startText,
  highlightText,
  endText,
  classname,
  ...props
}) => {
  return (
<div
  className={cn(
    "relative w-full mx-auto max-w-6xl flex items-center justify-center py-8 md:py-12 px-6 sm:px-8 md:px-10 mt-0 md:mt-[-60px]",
    grid &&
      "bg-[url('/grid.svg')] bg-[length:35px_35px] bg-left-top bg-repeat",
    classname
  )}
  {...props}
>
      {/* Background Overlay with Edge Softening */}
      {grid && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-white"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, transparent 15%, white 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, transparent 15%, white 85%)",
            }}
          />
        </div>
      )}

      {/* Animated Heading */}
      <AttentionSeeker effect="tada" triggerOnce cascade>
        <h1 className="relative z-10 text-center text-4xl md:text-6xl lg:text-7xl font-bold uppercase bg-gradient-to-b from-neutral-700 to-black bg-clip-text text-transparent max-w-5xl leading-tight">
          {startText}
          <span className="inline-block bg-orange-400 text-white px-5 py-2 mx-2 shadow">
            {highlightText}
          </span>
          <span className="hidden md:inline-block">{endText}</span>
        </h1>
      </AttentionSeeker>
    </div>
  );
};

export default SimpleGrid2;
