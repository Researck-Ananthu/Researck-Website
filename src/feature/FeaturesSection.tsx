import React from "react";
import { featureHeading, featureParagraph } from "@/lib/constant";
import FeatureHighlights from "../components/custom/FeatureHighlights";

const FeaturesSection = () => {
   return (
      <section
         className="bg-muted/50 text-foreground w-full overflow-hidden py-16 md:py-20 lg:py-24"
         // id="Features"
         id="About"
      >
         {/* <div className="absolute -top-17 h-0 w-0" id="About-Page" /> */}
         <div className="selection-orange mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="relative mx-auto mb-10 inline-block w-full max-w-full overflow-hidden px-4 py-10 sm:px-6">
               {/* Light Mode Grid Background */}
               <div
                  className="pointer-events-none absolute -inset-x-20 -inset-y-6 z-0 block rounded-lg dark:hidden"
                  style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
                     backgroundRepeat: "repeat",
                     backgroundSize: "38px 38px",
                     opacity: 0.45,
                     maskImage:
                        "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                     WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                  }}
               />

               {/* Dark Mode Grid Background */}
               <div
                  className="pointer-events-none absolute -inset-x-20 -inset-y-6 z-0 hidden rounded-lg dark:block"
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
                  className="relative z-10 text-xl leading-tight font-extrabold tracking-tight break-words uppercase sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
               >
                  {featureHeading.headingStart}
                  <span className="relative inline-block">
                     <span className="relative z-10 px-2 text-white dark:text-black">
                        {featureHeading.headingHighlight}
                     </span>
                     <span
                        className="absolute inset-0 z-0 skew-x-2 bg-orange-400 shadow-md"
                        aria-hidden="true"
                     />
                  </span>
                  {featureHeading.headingEnd}
               </h2>
            </div>

            {/* Paragraphs */}
            <p className="dark:text-muted-foreground sm:text-md text-justify-last-left mx-auto mt-6 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl">
               {featureParagraph.paragraphStart}
            </p>
            <p className="dark:text-muted-foreground sm:text-md mx-auto mt-4 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl">
               {featureParagraph.paragraphEnd}
            </p>

            <FeatureHighlights></FeatureHighlights>
         </div>
      </section>
   );
};

export default FeaturesSection;
