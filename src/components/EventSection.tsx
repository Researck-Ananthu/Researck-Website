import React from "react";
import Image from "next/image";
import { eventSecInfo } from "@/lib/constant";

const EventSection = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-background py-32 md:py-80 2xl:py-130">
  {/* Soft blur top gradient */}
  <div className="pointer-events-none absolute top-0 left-0 right-0 h-7 bg-gradient-to-b from-background/100 to-transparent z-10" />

  {/* Soft blur bottom gradient */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-7 bg-gradient-to-t from-background/100 to-transparent z-10" />

  {/* Background Image */}
  <Image
    src="/images/fun/codes/digital2.jpg"
    alt="Digital Transformation"
    fill
    priority
    className="object-cover object-center opacity-40 dark:opacity-20"
  />

  {/* Content */}
  <div className="container relative z-20 flex flex-col items-center justify-center text-center space-y-5 selection-orange">
    <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl">
      {eventSecInfo.heading}
    </h2>
    <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-400">
      {eventSecInfo.paragraph}
    </p>
  </div>
</section>
  );
};

export default EventSection;
