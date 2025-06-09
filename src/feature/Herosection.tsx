import React from "react";

const HeroSection = () => {
   return (
      <section id="Home" data-section="Home" className="bg-background text-foreground h-screen w-full pt-1 xl:pt-3 scroll-mt-24">
         <div className="mx-auto h-full w-full max-w-[1920px] px-6 md:px-12">
            <div className="grid h-full grid-cols-1 lg:grid-cols-2">
               {/* Left Column */}
               <div className="flex h-full w-full flex-col justify-between py-1 pr-4 text-left sm:pr-6 lg:pr-16 xl:pr-24 2xl:pr-32">
                  <div>
                     <h1
                        className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-4xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-source-code-pro)" }}
                     >
                        WE ARE GIVING <br />
                        SOFTWARE <br />
                        SOLUTIONS
                     </h1>
                  </div>
                  <div className="text-muted-foreground sm:text-md mb-0 hidden max-w-lg text-xs font-medium text-wrap sm:block md:text-lg lg:mb-20">
                     <p className="mt-30 sm:mt-10 md:mt-30">
                        Tell your expectations, we will make that happen in an
                        economical budget
                     </p>
                  </div>
               </div>

               {/* Right Column */}
               <div className="flex h-full w-full flex-col items-end justify-between py-1 pl-4 text-right sm:pl-6 lg:pl-16 xl:pl-24 2xl:pl-32">
                  <div className="myt1 text-muted-foreground sm:text-md mt-0 hidden text-xs font-medium sm:-mt-78 sm:block md:-mt-100 md:text-lg lg:mt-0">
                     <p>
                        Expert in e-commerce application,
                        <br />
                        e-learning application,
                        <br />
                        healthcare application
                     </p>
                  </div>
                  <h2
                     className="-mb-15 text-right text-3xl leading-tight font-extrabold tracking-tight sm:mb-20 sm:text-4xl md:text-4xl lg:text-6xl"
                     style={{ fontFamily: "var(--font-source-code-pro)" }}
                  >
                     CREATING <br />
                     TAILORED <br />
                     MOBILE <br />
                     APPLICATIONS
                  </h2>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
