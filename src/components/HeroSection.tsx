"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";

import { staggerContainer, textVariant } from "@/lib/motion";
import { renderWithLineBreaks } from "@/lib/utils";

import {
//   CameraSvg,
  heroSectionContent,
//   loadingData,
//   loadingHeroBgImage,
//   placeHolderImg,
} from "@/lib/constant";
// import ThreeDParticleRing from "@/components/ui/container/ThreeDParticleRing";
import { twMerge } from "tailwind-merge";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //     console.log(
  //         "%cisLoading state:",
  //         "color: black; background-color: white; padding: 6px; border-radius: 4px;",
  //         isLoading
  //     );
  // }, [isLoading]);

  useEffect(() => {
    // Tracks the loading state (isLoading) using useState
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Uses useEffect to show loading for 1.2s before rendering content.
    // console.log(
    //     "%cTimer:",
    //     "color: black; background-color: red; padding: 6px; border-radius: 4px;",
    //     timer
    // );
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="bg-black relative mx-auto h-screen min-h-screen w-full overflow-hidden"
    >
      {isLoading ? (
        <InitialLoading />
      ) : (
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
        >
          {/* <motion.div
                        aria-label="3D"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                        className="absolute inset-0 mx-auto z-0"
                    > */}
          {/* <Suspense fallback={null}>
                            <ThreeDParticleRing />
                        </Suspense>
                    </motion.div> */}

          <ContentDiv />
        </motion.div>
      )}
    </section>
  );
};
export default HeroSection;

const ContentDiv = () => {
  const hStyle =
    "font-sourceCodePro text-white uppercase tracking-wider md:[word-spacing:-.4em] drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-emerald-800";
  const pStyle =
    "text-white/80 text-base lg:text-lg xl:text-2xl [word-spacing:0.1em] drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-emerald-800/50";

  return (
    <div
      aria-label="Hero Contents"
      className="container absolute inset-x-0 top-32 bottom-16 md:bottom-8 z-10 pointer-events-none overflow-hidden flex flex-col justify-between gap-6"
    >
      {/* Open - Left Section */}
      <div className="w-full flex flex-col items-start justify-between gap-4 md:flex-row md:gap-40">
        {/* Heading */}
        <motion.h1
          variants={textVariant(1.1)}
          className={twMerge("flex-1 text-left", hStyle)}
        >
          {renderWithLineBreaks({
            text: heroSectionContent.topHeading,
          })}
        </motion.h1>
        {/* SimpleParagraph */}
        <motion.p
          variants={textVariant(1.1)}
          className={twMerge(
            "hidden xs:block sm:mt-2 flex-1 text-left md:text-right",
            pStyle
          )}
        >
          {renderWithLineBreaks({
            text: heroSectionContent.topParagraph,
          })}
        </motion.p>
      </div>
      {/* Close - Left Section */}

      {/* Open - Right Section */}
      <div className="w-full flex flex-col gap-8">
        <div className="w-full inline-flex flex-col md:flex-row items-end justify-between gap-4 md:gap-40">
          {/* SimpleParagraph */}
          <motion.p
            variants={textVariant(1.2)}
            className={twMerge(
              "hidden xs:block sm:mb-2 flex-1 text-right md:text-left",
              pStyle
            )}
          >
            {renderWithLineBreaks({
              text: heroSectionContent.bottomParagraph,
            })}
          </motion.p>
          {/* Heading */}
          <motion.h1
            variants={textVariant(1.2)}
            className={twMerge("flex-1 text-right", hStyle)}
          >
            {renderWithLineBreaks({
              text: heroSectionContent.bottomHeading,
            })}
          </motion.h1>
        </div>
        {/* Open - Scroll Indicator */}
        <ScrollIndicator />
        {/* Close - Scroll Indicator */}
      </div>
      {/* Close - Right Section */}
    </div>
  );
};

const InitialLoading = () => {
  return (
    <div
      aria-label="Hero Loading"
      className="container absolute inset-0 mx-auto flex flex-col items-center justify-center z-0"
    >
      {/* <Image
                className="absolute inset-0  w-full h-full object-cover"
                src={loadingHeroBgImage}
                width={688}
                height={953}
                alt="Background"
                loading={"lazy"}
                placeholder={"blur"}
                blurDataURL={placeHolderImg}
            />
            <div className="flex flex-col flex-shrink-0 items-center justify-center text-gray-600 motion-safe:animate-pulse motion-reduce:animate-none motion-reduce:opacity-100">
                <CameraSvg.icon className="size-16 xs:size-20 text-gray-600" />
                <h1 className="h1">{loadingData.heading}</h1>
            </div> */}
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <motion.div
      variants={textVariant(1.2)}
      className="hidden w-full sm:inline-flex items-center justify-center"
    >
      <a href="#">
        <div className="relative h-[50px] w-[28px] flex items-start justify-center overflow-hidden rounded-3xl border-[2.5px] border-white p-2">
          <motion.div // Moves the circle (animate={{ y: [0, 24, 0] }}) up and down in a loop.
            className="mb-1 h-3 w-3 rounded-full bg-white contain-content"
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </a>
    </motion.div>
  );
};
