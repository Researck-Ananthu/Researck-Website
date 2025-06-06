import React from "react";
import {
  careerHeading,
  careerParagraph,
  careerInfo,
  careerJob,
} from "@/lib/constant";
import { Button } from "@/components/ui/button";

const CareerIntroSection = () => {
  return (
    <section
      className="bg-muted/50 w-full py-16 md:py-20 lg:py-24 overflow-hidden text-foreground"
      id="Career"
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subheading Badge */}
        <div className="mb-8">
          <span className="inline-block bg-orange-100 text-orange-500 font-semibold text-sm sm:text-base px-4 py-2 rounded-full tracking-wide">
            {careerInfo.highlight}
          </span>
        </div>

        {/* Main Heading with Grid BG */}
        <div className="relative w-full max-w-full sm:max-w-[90%] lg:max-w-4xl mx-auto mb-10 px-4 sm:px-6 md:px-10 py-10 break-words">
          {/* Light Grid */}
          <div
            className="absolute -inset-x-10 -inset-y-6 z-0 pointer-events-none rounded-lg block dark:hidden"
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

          {/* Dark Grid */}
          <div
            className="absolute -inset-x-10 -inset-y-6 z-0 pointer-events-none rounded-lg hidden dark:block"
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
            className="relative z-10 text-balance break-words text-xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {careerHeading.headingStart}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-white dark:text-black px-2">
                {careerHeading.headingHighlight}
              </span>
              <span
                className="absolute inset-0 bg-orange-400 skew-x-2 z-0 shadow-md"
                aria-hidden="true"
              />
            </span>
            {careerHeading.headingEnd}
          </h2>
        </div>

        {/* Paragraphs */}
        <p className="mt-2 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight text-justify-last-left">
          {careerParagraph.paragraphStart}
        </p>
        <p className="mt-4 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight text-justify-last-left">
          {careerParagraph.paragraphEnd}
        </p>
      </div>
      {/* ───────────────────────────────────────────── */}
      {/* 🎯 Open Positions Section - Responsive & Enhanced */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-2xl bg-white dark:bg-neutral-800 shadow-xl px-6 sm:px-10 py-10">
          {/* Section Heading */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-foreground mb-10">
            {careerJob.heading}
          </h3>

          {/* Jobs List */}
          <div className="space-y-6">
            {careerJob.openings.map((job, index) => (
              <div
                key={index}
                className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 xs:gap-4 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out bg-muted/40 dark:bg-muted/10"
              >
                {/* Title */}
                <div className="w-full text-left">
                  <p
                    className={`text-base sm:text-lg font-semibold ${job.color} tracking-tight dark:text-gray-300`}
                  >
                    {job.title}
                  </p>
                </div>

                {/* Apply Button */}
                <div className="sm:w-auto xs:w-auto">
                    <Button variant={'outline'} className="text-gray-600 dark:text-gray-400 dark:hover:text-white">Apply</Button>
                  {/* <button className="sm:w-auto xs:w-auto rounded-full bg-orange-300 hover:bg-orange-400 text-gray-700 dark:text-white font-medium text-sm px-5 py-2 transition duration-200">
                    Apply
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerIntroSection;
