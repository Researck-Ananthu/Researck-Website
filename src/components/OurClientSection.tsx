"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";

import BlackSection from "@/components/ui/BlackSection";
import SimpleGridHeading from "@/components/ui/SimpleGridHeading";
import SimpleParagraph from "@/components/ui/SimpleParagraph";

import {
    clientHeading,
    clientParagraph,
    clientTestimonials,
} from "@/lib/constant";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const OurClientSection = () => {
    return (
        <BlackSection id="client" aria-label="ClientSection">
            {/* Open - Heading */}
            <SimpleGridHeading
                whiteScheme={false}
                grid={true}
                cover={true}
                startText={clientHeading.headingStart}
                highlightText={clientHeading.headingHighlight}
                endText={clientHeading.headingEnd}
            />

            <SimpleParagraph
                whiteScheme={false}
                paragraph1={clientParagraph.paragraphStart}
                paragraph2={clientParagraph.paragraphEnd}
                className="pb-0"
            />

            <OurClientsGrid />

            {/*<ClientMarquee/>*/}
        </BlackSection>
    );
};
export default OurClientSection;

const OurClientsGrid = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-50px" });

    return (
        <motion.div
            ref={containerRef}
            className="relative py-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            <AnimatePresence mode="wait">
                {isInView && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="p-6 bg-white rounded-xl transition-all duration-300 shadow-[6px_6px_0px_0px_#047857] hover:shadow-[6px_6px_0px_0px_#ffa500] hover:scale-104"
                            >
                                <div className="flex flex-1 items-center mb-4">
                                    <Image
                                        src={testimonial.clientImage}
                                        alt={testimonial.clientName}
                                        width={50}
                                        height={50}
                                        className="size-20 rounded-full object-center object-cover"
                                        loading="lazy"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            {testimonial.clientName}
                                        </h4>
                                        <p className="text-gray-600 text-base text-pretty line-clamp-1">
                                            {testimonial.clientPosition}
                                        </p>
                                        <p className="text-gray-500 text-base text-pretty line-clamp-1">
                                            {testimonial.clientCompany}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-26 bg-amber-50/90 rounded-2xl flex flex-1 justify-start items-center mb-4">
                                    <FaQuoteLeft className="text-gray-600/90 text-2xl absolute -left-2 -top-2" />
                                    <p className="px-6 text-base text-gray-700 italic text-justify line-clamp-4">
                                        {testimonial.testimonialText}
                                    </p>
                                    <FaQuoteRight className="text-gray-600/90 text-2xl absolute -right-2 -bottom-2" />
                                </div>
                                <div className="flex flex-1 justify-start items-center gap-2">
                                    <Image
                                        src={testimonial.companyLogo}
                                        alt={testimonial.clientCompany}
                                        className="size-12"
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                    />
                                    <p className="h-full rounded-lg text-gray-600 italic text-base text-pretty line-clamp-1">
                                        {testimonial.category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// const ClientMarquee = () => {
//     return (
//         <div className="relative mx-auto w-full flex flex-col overflow-hidden">
//             {/* Open - Added mask gradients */}
//             <div className="absolute top-0 left-0 bottom-0 h-full w-30 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
//             <div className="absolute top-0 right-0 bottom-0 h-full w-30 bg-gradient-to-l from-black via-black/50 to-transparent z-10" />
//             {/* Close - Added mask gradients */}
//
//             {/* Open - Marquee section */}
//             <div className="flex flex-nowrap min-w-full gap-6 py-6 animate-scroll-right">
//                 {[...clientTestimonials, ...clientTestimonials].map(
//                     (testimonial, index) => (
//                         <div
//                             key={`${testimonial.clientName}-${index}`}
//                             className="flex flex-col flex-shrink-0 w-128 h-auto mx-8 p-6 bg-neutral-100 rounded-xl   shadow-[6px_6px_0px_0px_#047857] hover:scale-104 transition-all duration-300 text-black"
//                         >
//                             <p className="text-base line-clamp-4 md:line-clamp-6 text-center">
//                                 {testimonial.testimonialText}
//                             </p>
//                             <div className="w-full flex flex-row mt-6">
//                                 <Image
//                                     className="h-[4rem] w-[4rem] flex-grow-0 object-fill"
//                                     src={testimonial.clientImage}
//                                     alt={testimonial.clientName}
//                                     height={96}
//                                     width={96}
//                                     loading={"lazy"}
//                                     placeholder={"blur"}
//                                     blurDataURL={placeHolderImg}
//                                 />
//                                 <div className="flex flex-grow flex-col flex-nowrap items-start justify-center gap-1 pl-4 md:gap-2">
//                                     <strong className="text-left text-base">
//                                         {testimonial.clientCompany}
//                                     </strong>
//                                     <span className="text-left text-sm">
//                                         {testimonial.clientPosition}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 )}
//             </div>
//         </div>
//     );
// };
