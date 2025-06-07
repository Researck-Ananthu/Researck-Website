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
         className="text-foreground bg-background relative w-full overflow-hidden py-16 md:py-20 lg:py-24 dark:bg-black"
      >
         {/* Grid Background Overlay */}
         <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundRepeat: "repeat",
               backgroundSize: "40px 40px",
               opacity: 0.06,
            }}
         />

         <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="space-y-3 text-center leading-tight font-extrabold tracking-tight uppercase">
               <div className="text-lg break-words sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {whatWeDoHeading.headingLines[0]}
               </div>
               <div className="text-lg break-words sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {whatWeDoHeading.headingLines[1]}
               </div>
               <div className="text-lg break-words sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {whatWeDoHeading.headingLines[2]}
               </div>
               <div className="flex flex-wrap items-center justify-center gap-2 text-xl break-words sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {/* <span className="inline-block px-4 py-3 bg-emerald-700 dark:bg-emerald-500 text-black dark:text-white font-black skew-x-2">
              {whatWeDoHeading.headingHighlight}
            </span> */}
                  <span className="relative inline-block py-3">
                     <span className="relative z-10 px-2 text-white dark:text-black">
                        {whatWeDoHeading.headingHighlight}
                     </span>
                     <span
                        className="absolute inset-0 z-0 skew-x-2 bg-orange-400 shadow-md"
                        aria-hidden="true"
                     />
                  </span>

                  <span className="align-middle font-black dark:text-white">
                     {whatWeDoHeading.headingEnd}
                  </span>
               </div>
            </h2>

            {/* Paragraphs */}
            <p className="text-muted-foreground sm:text-md text-justify-last-left mx-auto mt-10 max-w-lg text-center text-base tracking-tight md:max-w-2xl md:text-lg lg:max-w-4xl">
               {whatWeDoParagraph.paragraphStart}
            </p>
            <p className="text-muted-foreground sm:text-md mx-auto mt-4 max-w-lg text-center text-base tracking-tight md:max-w-2xl md:text-lg lg:max-w-4xl">
               {whatWeDoParagraph.paragraphEnd}
            </p>
         </div>
         <div className="max-w-8xl mx-auto mt-20 grid grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {whatWeDo.map((item, index) => (
               <Tilt rotationFactor={3} key={index}>
                  <Card className="bg-background/50 relative flex flex-col overflow-hidden rounded-xl border border-black/20 p-6 dark:border-white/20">
                     <Spotlight
                        className="dark:blur-5xl bg-zinc-500 blur-3xl dark:bg-zinc-300"
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
                     <h3 className="z-10 mb-1 text-lg font-bold text-wrap 2xl:text-xl">
                        {item.title}
                     </h3>
                     <p className="text-muted-foreground z-10 mb-3">
                        {item.description}
                     </p>
                     <ul className="text-muted-foreground z-10 list-inside list-disc space-y-1 text-sm">
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
