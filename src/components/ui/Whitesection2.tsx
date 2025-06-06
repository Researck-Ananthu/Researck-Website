"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const WhiteSection2: React.FC<SectionProps> = ({
  className,
  contentClassName,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        "bg-white relative w-full min-h-screen mx-auto overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "container relative py-24 sm:py-40 lg:py-48 xl:py-60 overflow-hidden",
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default WhiteSection2;
