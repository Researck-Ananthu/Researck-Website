"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import WhiteSection from "@/components/ui/WhiteSection";
import SimpleGridHeading from "@/components/ui/SimpleGridHeading";
import SimpleParagraph from "@/components/ui/SimpleParagraph";
// import useTypingEffect from "@/hooks/useTypingEffect";
// import SourceCodeWindow from "@/components/ui/container/SourceCodeWindow";

import {
    aboutUsHeading,
    aboutUsParagraph,
    buttonExplore,
    buttonStart,
    // sourceCode,
    // sourceCodeCustomStyle,
} from "@/lib/constant";


const AboutUsSection = () => {
    // const displayedText = useTypingEffect(sourceCode, 50, 2000);

    return (
        <WhiteSection id="about-us" aria-label="AboutUs">

            {/* Open - Heading */}
            <SimpleGridHeading
                whiteScheme={true}
                grid={true}
                cover={false}
                startText={aboutUsHeading.headingStart}
                highlightText={aboutUsHeading.headingHighlight}
                endText={aboutUsHeading.headingEnd}
            />
            {/* Close - Heading */}


            {/* Open - SimpleParagraph */}
            <SimpleParagraph
                whiteScheme={true}
                paragraph1={aboutUsParagraph.paragraphStart}
                paragraph2={aboutUsParagraph.paragraphEnd}
                className="pb-4 lg:pb-6 xl:pb-8"
            />
            {/* Close - SimpleParagraph */}

            {/* Open - Button Group */}
            <div className="mx-auto mb-24 xl:mb-28 flex items-center justify-center gap-10 max-w-[28rem]">
                {/* Open - Button 1  */}
                <motion.button
                    type="button"
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative h-14 p-4 inline-flex flex-1 items-center justify-center rounded-xl overflow-hidden bg-black border border-solid border-black/20 text-white text-center font-semibold shadow-[6px_6px_0px_0px_#047857]"
                >
                    {buttonStart.text}
                </motion.button>
                {/* Close - Button 1  */}

                {/* Open - Button 2  */}
                <motion.button
                    type="button"
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative h-14 p-4 inline-flex flex-1 items-center justify-center rounded-xl overflow-hidden gap-2 bg-white border border-solid border-black/20 text-black text-center font-semibold shadow-[6px_6px_0px_0px_#047857]"
                >
                    <Image
                        src={buttonExplore.icon}
                        width={6}
                        height={6}
                        alt={buttonExplore.alt}
                        className="size-5 md:size-7"
                    />
                    {buttonExplore.text}
                </motion.button>
                {/* Open - Button 2  */}
            </div>
            {/* Close - Button Group */}

            {/* Open - Draggable Container */}
            <motion.div
                drag
                dragSnapToOrigin
                dragConstraints={{
                    top: -100,
                    left: -100,
                    right: 100,
                    bottom: 100,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* <SourceCodeWindow>
                    <SyntaxHighlighter
                        language="javascript"
                        style={dark}
                        showInlineLineNumbers={true}
                        wrapLines={true}
                        wrapLongLines={true}
                        showLineNumbers={true}
                        customStyle={sourceCodeCustomStyle}
                    >
                        {displayedText}
                    </SyntaxHighlighter>
                </SourceCodeWindow> */}
            </motion.div>
            {/* Close - Draggable Container */}
        </WhiteSection>
    );
};
export default AboutUsSection;
