"use client";

import React from "react";

const Spotlight = ({ className = "", size = 64 }: { className?: string; size?: number }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-${size} h-${size} rounded-full blur-2xl opacity-30 bg-zinc-700 pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Spotlight;
