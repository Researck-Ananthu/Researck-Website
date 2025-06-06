import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-background text-foreground pt-1 xl:pt-3">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

          {/* Left Column */}
          <div className="flex flex-col justify-between h-full text-left w-full pr-4 sm:pr-6 lg:pr-16 xl:pr-24 2xl:pr-32 py-1">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight" style={{ fontFamily: 'var(--font-source-code-pro)' }}>
                WE ARE GIVING <br />
                SOFTWARE <br />
                SOLUTIONS
              </h1>
            </div>
            <div className="text-muted-foreground text-xs sm:text-md md:text-lg font-medium max-w-lg hidden sm:block mb-0 lg:mb-20 text-wrap">
            <p className="mt-30 sm:mt-10 md:mt-30">
              Tell your expectations, we will make that happen in an economical budget
            </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between h-full text-right w-full pl-4 sm:pl-6 lg:pl-16 xl:pl-24 2xl:pl-32 items-end py-1">
            <div className="myt1 text-muted-foreground text-xs sm:text-md md:text-lg font-medium hidden sm:block mt-0 sm:-mt-78 md:-mt-100 lg:mt-0">
              <p>
                Expert in e-commerce application,<br />
                e-learning application,<br />
                healthcare application
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-right -mb-15 sm:mb-20" style={{ fontFamily: 'var(--font-source-code-pro)' }}>
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

