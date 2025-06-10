import React from "react";
import {
   aboutUsHeading,
   aboutUsParagraph,
   buttonStart,
   buttonExplore,
} from "@/lib/constant";
import Image from "next/image";
import TypingCodeBlock from "@/components/custom/TypingCodeBlock";

const AboutUsSection = () => {
   return (
      <section
         data-section="About"
         className="bg-muted/50 text-foreground relative w-full scroll-mt-24 overflow-hidden py-16 md:py-20 lg:py-24 selection-orange"
         id="About"
      >
         <div className="absolute -top-17 h-0 w-0" id="About-Page" />

         {/* Heading + Paragraph */}
         <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="relative mx-auto mb-10 inline-block px-8 py-10">
               {/* Light Grid Background */}
               <div
                  className="pointer-events-none absolute -inset-x-40 -inset-y-6 z-0 block rounded-lg dark:hidden"
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
                  className="pointer-events-none absolute -inset-x-40 -inset-y-6 z-0 hidden rounded-lg dark:block"
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
                  className="relative z-10 text-2xl leading-tight font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
               >
                  {aboutUsHeading.headingStart}
                  <br />
                  <span className="relative inline-block">
                     <span className="relative z-10 px-2 text-white dark:text-black">
                        {aboutUsHeading.headingHighlight}
                     </span>
                     <span
                        className="absolute inset-0 z-0 skew-x-2 bg-orange-400 shadow-md"
                        aria-hidden="true"
                     />
                  </span>
                  {aboutUsHeading.headingEnd}
               </h2>
            </div>

            {/* Paragraphs */}
            <p className="dark:text-muted-foreground sm:text-md text-justify-last-left mx-auto mt-6 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl">
               {aboutUsParagraph.paragraphStart}
            </p>
            <p className="dark:text-muted-foreground sm:text-md mx-auto mt-4 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl">
               {aboutUsParagraph.paragraphEnd}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-8">
               {/* Get Started */}
               <button className="group relative transform cursor-pointer rounded-lg bg-black px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 dark:bg-white dark:text-black">
                  <span className="absolute -right-1 -bottom-1 z-[-1] h-full w-full rounded-lg bg-orange-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 dark:bg-orange-300"></span>
                  {buttonStart.text}
               </button>
               {/* Explore */}
               <button className="group relative flex transform cursor-pointer items-center gap-2 rounded-lg border-1 border-gray-400 bg-white px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 ease-in-out hover:scale-105 dark:border-gray-800 dark:bg-black dark:text-white">
                  <span className="absolute -right-1 -bottom-1 z-[-1] h-full w-full rounded-lg bg-orange-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 dark:bg-orange-300"></span>
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
