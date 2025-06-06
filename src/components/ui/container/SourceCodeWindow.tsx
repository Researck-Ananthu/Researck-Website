import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SourceCodeWindowProps = {
  children: ReactNode;
  className?: string;
};

const SourceCodeWindow: React.FC<SourceCodeWindowProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-[420px] w-full max-w-5xl overflow-hidden rounded-xl border-2 border-zinc-500 bg-zinc-800 shadow-2xl lg:h-[600px] z-10 ",
        className,
      )}
    >
      {/* Open - Window bar */}
      <div className="flex items-center justify-between bg-zinc-900 px-6 py-3">
        <div className="flex space-x-4 transition-all duration-200 ease-in-out">
          <div className="h-3 w-3 animate-pulse rounded-full bg-green-500 hover:bg-green-800 hover:shadow-lg"></div>
          <div className="h-3 w-3 animate-pulse rounded-full bg-red-600 hover:bg-red-800 hover:shadow-lg"></div>
          <div className="h-3 w-3 animate-pulse rounded-full bg-purple-700 hover:bg-purple-900 hover:shadow-lg"></div>
        </div>
        {/* Close - Window bar */}

        <div className="flex animate-pulse space-x-2 transition-all duration-200 ease-in-out">
          <div className="h-1 w-6 rounded bg-zinc-600"></div>
          <div className="h-1 w-6 rounded bg-zinc-600"></div>
          <div className="h-1 w-6 rounded bg-zinc-600"></div>
        </div>
      </div>
      {/* Close - Window bar */}

      {/* Open - Tab Bar */}
      <div className="flex border-b border-zinc-600 bg-zinc-800">
        <div className="flex-1 rounded-t-lg bg-zinc-700 px-6 py-3">
          <div className="h-2 w-20 rounded bg-zinc-400"></div>
        </div>
        <div className="flex-1"></div>
      </div>
      {/* Close - Tab Bar */}

      {/* Open - Search Bar */}
      <div className="flex items-center border-b border-zinc-600 bg-zinc-700 px-6 py-3">
        <div className="mr-3 h-4 w-4 animate-cursor-blink rounded-full bg-zinc-500"></div>
        <div className="flex h-8 flex-grow items-center rounded-full bg-zinc-800 px-4">
          <div className="h-2 w-3/4 animate-cursor-blink rounded bg-zinc-400"></div>
        </div>
      </div>
      {/* Close - Search Bar */}

      {/* Open - Content Area */}
      <div className="flex h-full w-full flex-col items-start overflow-hidden px-6 py-6 text-white/60">
        {children}
      </div>
      {/* Close - Content Area */}
    </div>
  );
};
export default SourceCodeWindow;
