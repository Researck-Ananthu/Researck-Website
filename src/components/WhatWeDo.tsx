import React from "react";
import { whatWeDoHeading, whatWeDoParagraph, whatWeDo } from "@/lib/constant";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Tilt } from "@/components/motion-primitives/tilt";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { BorderTrail } from "@/components/motion-primitives/border-trail";

const WhatWeDoSection = () => {
  return (
    <section
      id="WhatWeDo"
      className="relative w-full py-16 md:py-20 lg:py-24 text-foreground bg-background dark:bg-black overflow-hidden"
    >
      {/* Grid Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="font-extrabold uppercase tracking-tight text-center leading-tight space-y-3">
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl break-words">
            {whatWeDoHeading.headingLines[0]}
          </div>
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl break-words">
            {whatWeDoHeading.headingLines[1]}
          </div>
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl break-words">
            {whatWeDoHeading.headingLines[2]}
          </div>
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl break-words flex flex-wrap justify-center items-center gap-2">
            {/* <span className="inline-block px-4 py-3 bg-emerald-700 dark:bg-emerald-500 text-black dark:text-white font-black skew-x-2">
              {whatWeDoHeading.headingHighlight}
            </span> */}
            <span className="relative inline-block py-3">
              <span className="relative z-10 text-white dark:text-black px-2">
                {whatWeDoHeading.headingHighlight}
              </span>
              <span
                className="absolute inset-0 bg-orange-400 skew-x-2 z-0 shadow-md"
                aria-hidden="true"
              />
            </span>
            
            <span className="dark:text-white font-black align-middle">
              {whatWeDoHeading.headingEnd}
            </span>
          </div>
        </h2>

        {/* Paragraphs */}
        <p className="mt-10 text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto tracking-tight text-center text-justify-last-left">
          {whatWeDoParagraph.paragraphStart}
        </p>
        <p className="mt-4 text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto tracking-tight text-center">
          {whatWeDoParagraph.paragraphEnd}
        </p>
      </div>
      <div className="max-w-8xl mx-auto mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        {whatWeDo.map((item, index) => (
          <Tilt rotationFactor={3} key={index}>
            <Card className="relative flex flex-col overflow-hidden rounded-xl border border-black/20 p-6 bg-background/50 dark:border-white/20">
              <Spotlight
                className="bg-zinc-500 dark:bg-zinc-300 blur-3xl dark:blur-5xl"
                size={64}
                springOptions={{ bounce: 0.3, duration: 0.1 }}
              />
              <BorderTrail
                className="bg-linear-to-l from-orange-200 via-orange-500 to-orange-200 dark:from-orange-400 dark:via-orange-500 dark:to-orange-700"
                size={120}
              />
              <div className="relative z-10 mb-4 h-48 w-full overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="z-10 text-lg 2xl:text-xl font-bold mb-1 text-wrap">
                {item.title}
              </h3>
              <p className="z-10 text-muted-foreground mb-3">
                {item.description}
              </p>
              <ul className="z-10 list-disc list-inside text-sm text-muted-foreground space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Card>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
