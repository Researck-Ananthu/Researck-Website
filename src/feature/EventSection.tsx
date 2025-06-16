import React from "react";
import Image from "next/image";
import { eventSecInfo } from "@/lib/constant";

const EventSection = () => {
   return (
      <section
         // id="Event"
         id="About"
         data-section="Event"
         className="bg-background relative isolate w-full overflow-hidden py-32 md:py-60 2xl:py-100"
      >
         <div className="absolute -top-17 h-0 w-0" id="Event-page" />

         {/* Soft blur top gradient */}
         <div className="from-background/100 pointer-events-none absolute top-0 right-0 left-0 z-10 h-7 bg-gradient-to-b to-transparent" />

         {/* Soft blur bottom gradient */}
         <div className="from-background/100 pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-7 bg-gradient-to-t to-transparent" />

         {/* Background Image */}
         <Image
            src="/images/fun/codes/digital2.jpg"
            alt="Digital Transformation"
            fill
            priority
            className="object-cover object-center opacity-30 dark:opacity-30"
         />

         {/* Content */}
         <div className="selection-orange relative z-20 container flex flex-col items-center justify-center space-y-5 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl 2xl:text-7xl">
               {eventSecInfo.heading}
            </h2>
            <p className="max-w-2xl text-sm text-gray-800 sm:text-base md:text-lg lg:text-xl 2xl:text-2xl dark:text-gray-400">
               {eventSecInfo.paragraph}
            </p>
         </div>
      </section>
   );
};

export default EventSection;
