"use client";

import { infoFunSecHeading, infoFunSecParagraph } from "@/lib/constant";
import FocusHighlights from "@/components/custom/FocusHighlights";
import CountUp from "react-countup";

const InfoAndFunSection = () => {
   return (
      <section
         className="text-foreground relative w-full overflow-hidden py-16 md:py-20 lg:py-24 selection-orange"
         id="InfoAndFun"
      >
         {/* Light Grid Background */}
         <div
            className="pointer-events-none absolute inset-0 block dark:hidden"
            style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundRepeat: "repeat",
               backgroundSize: "40px 40px",
               opacity: 0.3,
            }}
         />
         {/* Dark Grid Background */}
         <div
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundRepeat: "repeat",
               backgroundSize: "40px 40px",
               opacity: 0.03,
            }}
         />

         {/* Content */}
         <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
               {/* Heading */}
               <h2
                  className="text-2xl leading-tight font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl"
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
                     <span className="relative z-10 px-2 text-white dark:text-black">
                        {infoFunSecHeading.headingHighlight}
                     </span>
                     <span
                        className="absolute inset-0 z-0 skew-x-2 bg-orange-400 shadow-md"
                        aria-hidden="true"
                     />
                  </span>
                  {infoFunSecHeading.headingEnd}
               </h2>
            </div>

            {/* Paragraphs */}
            <p className="dark:text-muted-foreground sm:text-md text-justify-last-left mx-auto mt-6 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl">
               {infoFunSecParagraph.paragraphStart}
            </p>
            <p className="dark:text-muted-foreground sm:text-md mx-auto mt-4 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl">
               {infoFunSecParagraph.paragraphEnd}
            </p>

            {/* Focus Highlights Section */}
            <FocusHighlights />

            {/* STATISTICS SUB-SECTION */}
            <div className="mt-8">
               <h3 className="text-center text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Your Trusted Software Development Partner
               </h3>
               <p className="text-muted-foreground mx-auto mt-6 max-w-5xl px-4 text-center text-base leading-relaxed sm:text-lg md:text-xl">
                  Transforming ideas into robust, scalable, and user-friendly
                  software solutions tailored to meet your business goals.
               </p>

               {/* Statistics Cards */}
               <div className="mt-12 flex w-full flex-col items-center justify-center gap-6 px-4 sm:flex-row sm:gap-4 md:gap-8">
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
                        className="min-w-[240px] flex-1 rounded-xl bg-white px-8 py-10 text-center shadow-lg dark:bg-neutral-900"
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
                        <p className="mt-2 font-medium text-gray-700 dark:text-gray-400">
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
