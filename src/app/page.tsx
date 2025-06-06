import React from "react";

import HeaderSection from "@/components/Header";
import HeroSection from "@/components/Herosection2";
import PortfolioSection from "@/components/PortFolio2";
import WhatWeDoSection from "@/components/WhatWeDo";
import AboutUsSection from "@/components/AboutSection";
import InfoAndFunSection from "@/components/InfoSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import EventSection from "@/components/EventSection";
import CareerIntoSection from "@/components/CareerIntroSection";

// import InfoAndFunSection from "@/components/InfoAndFunSection";
// import FeaturesSection from "@/components/FeaturesSection";
// import OurClientSection from "@/components/OurClientSection";
// import EventSection from "@/components/EventSection";
// import CareerSection from "@/components/CareerSection";
// import FooterSection from "@/components/FooterSection";

export default function Home() {
    return (
        <>
            <HeaderSection />
            <HeroSection />
            <PortfolioSection/>
            <WhatWeDoSection />
            <AboutUsSection />
            <InfoAndFunSection />
            <FeaturesSection />
            <PricingSection />
            <EventSection />
            <CareerIntoSection />
            {/* <OurClientSection />
            <CareerSection />
            <FooterSection /> */}
        </>
    );
}
