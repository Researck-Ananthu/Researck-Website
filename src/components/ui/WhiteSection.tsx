"use client";

import React from "react";
// import Image from "next/image";

import { cn } from "@/lib/utils";

// import leftGridPattern from "@/assets/svg/Left-Grid-Pattern.svg";
// import rightGridPattern from "@/assets/svg/Right-Grid-Pattern.svg";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    contentClassName?: string;
    children?: React.ReactNode;
}

const WhiteSection: React.FC<SectionProps> = ({
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
         
          {/*<BgDecorations/>*/}

            {/* Open - Main Content Area */}
            <div
                className={cn(
                    "container relative py-24 sm:py-40 lg:py-48 xl:py-60 overflow-hidden",
                    contentClassName
                )}
            >
                {children}
            </div>
            {/* Close - Main Content Area */}
        </section>
    );
};

export default WhiteSection;

