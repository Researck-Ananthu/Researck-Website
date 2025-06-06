"use client";

import { infoFunSecHeading, infoFunSecParagraph } from "@/lib/constant";
import FocusHighlights from "@/components/ui/FocusHighlights";
import CountUp from "react-countup";

const InfoAndFunSection = () => {
  return (
    <section
      className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden text-foreground"
      id="InfoAndFun"
    >
      {/* Light Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none block dark:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />
      {/* Dark Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
          opacity: 0.03,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
          {/* Heading */}
          <h2
            className="text-2xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {infoFunSecHeading.headingStart}
            <br />
            {/* <span className="px-2 bg-emerald-700 dark:bg-emerald-500 text-white dark:text-black">
              {infoFunSecHeading.headingHighlight}
            </span> */}
            {/* <span className="inline-block px-4 py-3 bg-emerald-700 dark:bg-emerald-500 text-black font-black skew-x-2">
              {infoFunSecHeading.headingHighlight}
            </span> */}
            <span className="relative inline-block">
              <span className="relative z-10 text-white dark:text-black px-2">
                {infoFunSecHeading.headingHighlight}
              </span>
              <span
                className="absolute inset-0 bg-orange-400 skew-x-2 z-0 shadow-md"
                aria-hidden="true"
              />
            </span>
            {infoFunSecHeading.headingEnd}
          </h2>
        </div>

        {/* Paragraphs */}
        <p className="mt-6 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight text-justify-last-left">
          {infoFunSecParagraph.paragraphStart}
        </p>
        <p className="mt-4 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight">
          {infoFunSecParagraph.paragraphEnd}
        </p>

        {/* Focus Highlights Section */}
        <FocusHighlights />

        {/* STATISTICS SUB-SECTION */}
        <div className="mt-8">
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight">
            Your Trusted Software Development Partner
          </h3>
          <p className="mt-6 text-center text-base sm:text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto px-4 leading-relaxed">
            Transforming ideas into robust, scalable, and user-friendly software
            solutions tailored to meet your business goals.
          </p>

          {/* Statistics Cards */}
          <div className="mt-12 w-full flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-4 md:gap-8 px-4">
            {[
              {
                count: 150,
                suffix: "+",
                label: "Successful Projects",
              },
              {
                count: 95,
                suffix: "%",
                label: "Client Satisfaction Rate",
              },
              {
                count: 20,
                suffix: "+",
                label: "New Clients Each Month",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-1 min-w-[240px] bg-white dark:bg-neutral-900 shadow-lg rounded-xl px-8 py-10 text-center"
              >
                <h4 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                  <CountUp
                    end={item.count}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h4>
                <p className="mt-2 text-gray-700 dark:text-gray-400 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoAndFunSection;
