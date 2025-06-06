"use client";

import React from "react";

import WhiteSection from "@/components/ui/Whitesection2";
import SimpleGridHeading from "@/components/ui/SimpleGrid2";
import SimpleParagraph from "@/components/ui/SimplePara";
// import { BenoGrid, BentoGridItem } from "@/components/ui/card/BenoGrid2";

import {
    // portfolioGridItems,
    portfolioHeading,
    portfolioParagraph,
} from "@/lib/constant";

const PortfolioSection = () => {
    return (
        <WhiteSection id="portfolio" aria-label="Portfolio">
            {/* Open - Heading */}
            <SimpleGridHeading
                // whiteScheme={true}
                grid={true}
                // cover={false}
                startText={portfolioHeading.headingStart}
                highlightText={portfolioHeading.headingHighlight}
                endText={portfolioHeading.headingEnd}
            />
            {/* Close - Heading */}

            {/* Open - SimpleParagraph */}
            <SimpleParagraph
                // whiteScheme={true}
                paragraph1={portfolioParagraph.paragraphStart}
                paragraph2={portfolioParagraph.paragraphEnd}
            />
            {/* Close - SimpleParagraph */}

            {/* <BenoGrid className="mx-auto pb-12"> Wraps everything inside a dynamic grid layout (BenoGrid) */}
                {/* {portfolioGridItems.map((item, index) => (
                    <BentoGridItem
                        key={index}
                        title={item.title}
                        // title={`${item.title} ${index}`}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        icon={item.icon}
                        className={
                            index === 3 || index === 6 || index === 14
                                ? "md:col-span-2"
                                : ""
                        } */}
                    {/* />
                ))}
            </BenoGrid> */}
        </WhiteSection>
    );
};
export default PortfolioSection;
