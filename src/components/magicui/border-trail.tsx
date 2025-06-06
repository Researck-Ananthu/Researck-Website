"use client";

import React from "react";

const BorderTrail = ({ className = "", ...props }: any) => {
  return (
    <div
      className={`absolute inset-0 border border-blue-400 rounded-lg animate-pulse opacity-20 pointer-events-none ${className}`}
      {...props}
    />
  );
};

export default BorderTrail;
