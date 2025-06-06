"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BlackSection from "@/components/ui/BlackSection";
import { BgHoverBoxes } from "@/components/ui/container/BgHoverBoxes";
// import SimpleGridHeading from "@/components/ui/SimpleGridHeading";
import SimpleParagraph from "@/components/ui/SimpleParagraph";
import ThreeDCardContainer, {
    CardBody,
    CardItem,
} from "@/components/ui/card/ThreeDCardContainer";

import { CheckCheckIcon } from "lucide-react";
import { placeHolderImg, whatWeDo, whatWeDoParagraph } from "@/lib/constant";



const WhatWeDoSection = () => {
    return (
        <BlackSection id="what-we-do" aria-label="WhatWeDo">
            <BgHoverBoxes />

            {/* Open - Heading */}
            {/* <SimpleGridHeading
                whiteScheme={false}
                grid={false}
                cover={true}
                // startText={whatWeDoHeading.headingStart}
                highlightText={whatWeDoHeading.headingHighlight}
                endText={whatWeDoHeading.headingEnd}
            /> */}
            {/* Close - Heading */}

            {/* Open - SimpleParagraph */}
            <SimpleParagraph
                whiteScheme={false}
                paragraph1={whatWeDoParagraph.paragraphStart}
                paragraph2={whatWeDoParagraph.paragraphEnd}
            />
            {/* Close - SimpleParagraph */}

            {/* Open - What we do */}
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.4,
                    ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto z-10 isolate grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] place-items-center gap-10 sm:gap-16 mb-16"
            >
                {whatWeDo.map((service, index) => (
                    <ThreeDCardContainer key={index} className="w-full">
                        <CardBody className="relative group/card w-full h-full rounded-xl bg-white border border-black/[0.5] p-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.30)]">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-orange-600"
                            >
                                {service.description}
                            </CardItem>
                            <CardItem
                                translateZ="60"
                                className="mt-2 text-black text-3xl font-extrabold leading-8 sm:leading-9"
                            >
                                {service.title}
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                className="hidden sm:block w-full mt-4"
                            >
                                <Image
                                    src={service.image}
                                    height={200}
                                    width={200}
                                    className="h-36 md:h-40 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    loading={"lazy"}
                                    placeholder={"blur"}
                                    blurDataURL={placeHolderImg}
                                    alt={service.title}
                                />
                            </CardItem>

                            <ul className="mt-8  space-y-4 font-medium">
                                {service.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start lg:col-span-1 j"
                                    >
                                        <div className="flex-shrink-0">
                                            <CheckCheckIcon className="text-orange-400 size-6" />
                                        </div>
                                        <p className="ml-3 leading-5 text-gray-800 text-base lg:text-lg">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </CardBody>
                    </ThreeDCardContainer>
                ))}
            </motion.div>

            {/* Close - What we do */}
        </BlackSection>
    );
};
export default WhatWeDoSection;
