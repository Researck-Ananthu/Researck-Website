import React from "react";
import {
  aboutUsHeading,
  aboutUsParagraph,
  buttonStart,
  buttonExplore,
} from "@/lib/constant";
import Image from "next/image";
import TypingCodeBlock from "@/components/ui/TypingCodeBlock";

const AboutUsSection = () => {
  return (
    <section
      className="bg-muted/50 w-full py-16 md:py-20 lg:py-24 overflow-hidden text-foreground"
      id="About"
    >
      {/* Heading + Paragraph */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block mx-auto mb-10 px-8 py-10">
          {/* Light Grid Background */}
          <div
            className="absolute -inset-x-40 -inset-y-6 z-0 pointer-events-none rounded-lg block dark:hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "38px 38px",
              opacity: 4.5,
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          />

          {/* Dark Grid Background */}
          <div
            className="absolute -inset-x-40 -inset-y-6 z-0 pointer-events-none rounded-lg hidden dark:block"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "40px 40px",
              opacity: 0.2,
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          />

          {/* Heading */}
          <h2
            className="relative z-10 text-2xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {aboutUsHeading.headingStart}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-white dark:text-black px-2">
                {aboutUsHeading.headingHighlight}
              </span>
              <span
                className="absolute inset-0 bg-orange-400 skew-x-2 z-0 shadow-md"
                aria-hidden="true"
              />
            </span>
            {aboutUsHeading.headingEnd}
          </h2>
        </div>

        {/* Paragraphs */}
        <p className="mt-6 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight text-justify-last-left">
          {aboutUsParagraph.paragraphStart}
        </p>
        <p className="mt-4 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight">
          {aboutUsParagraph.paragraphEnd}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-8 flex-wrap">
          {/* Get Started */}
          <button className="relative group bg-black dark:bg-white text-white dark:text-black font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <span className="absolute -bottom-1 -right-1 w-full h-full bg-orange-300 dark:bg-orange-300 rounded-lg z-[-1] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></span>
            {buttonStart.text}
          </button>
          {/* Explore */}
          <button className="relative group bg-white dark:bg-black border-1 border-gray-400 dark:border-gray-800 text-black dark:text-white font-semibold px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <span className="absolute -bottom-1 -right-1 w-full h-full bg-orange-300 dark:bg-orange-300 rounded-lg z-[-1] group-hover:translate-y-1 group-hover:translate-x-1 transition-transform duration-300"></span>
            <Image
              src={buttonExplore.icon}
              alt={buttonExplore.alt}
              width={20}
              height={20}
            />
            {buttonExplore.text}
          </button>
        </div>
        {/* Live Typing Code Block */}
        <TypingCodeBlock />

      </div>
    </section>
  );
};

export default AboutUsSection;
