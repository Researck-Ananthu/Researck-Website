import React from "react";
import { featureHeading, featureParagraph } from "@/lib/constant";
import FeatureHighlights from "./ui/FeatureHighlights";

const FeaturesSection = () => {
  return (
    <section
      className="bg-muted/50 w-full py-16 md:py-20 lg:py-24 overflow-hidden text-foreground"
      id="Features"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center selection-orange">
        <div className="relative inline-block mx-auto mb-10 px-4 sm:px-6 py-10 w-full max-w-full overflow-hidden">
          {/* Light Mode Grid Background */}
          <div
            className="absolute -inset-x-20 -inset-y-6 z-0 pointer-events-none rounded-lg block dark:hidden"
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
            className="absolute -inset-x-20 -inset-y-6 z-0 pointer-events-none rounded-lg hidden dark:block"
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
            className="relative z-10 text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight break-words"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {featureHeading.headingStart}
            <span className="relative inline-block">
              <span className="relative z-10 text-white dark:text-black px-2">
                {featureHeading.headingHighlight}
              </span>
              <span
                className="absolute inset-0 bg-orange-400 skew-x-2 z-0 shadow-md"
                aria-hidden="true"
              />
            </span>
            {featureHeading.headingEnd}
          </h2>
        </div>

        {/* Paragraphs */}
        <p className="mt-6 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight text-justify-last-left">
          {featureParagraph.paragraphStart}
        </p>
        <p className="mt-4 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight">
          {featureParagraph.paragraphEnd}
        </p>

        <FeatureHighlights></FeatureHighlights>
      </div>
    </section>
  );
};

export default FeaturesSection;
