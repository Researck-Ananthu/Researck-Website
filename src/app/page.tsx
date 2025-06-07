import React from "react";

import HeaderSection from "@/feature/Header";
import HeroSection from "@/feature/Herosection";
import PortfolioSection from "@/feature/PortFolioSection";
import WhatWeDoSection from "@/feature/WhatWeDo";
import AboutUsSection from "@/feature/AboutSection";
import OurFocusSection from "@/feature/OurFocuseSection";
import FeaturesSection from "@/feature/FeaturesSection";
import PricingSection from "@/feature/PricingSection";
import EventSection from "@/feature/EventSection";
import CareerSection from "@/feature/CareerSection";
import FooterSection from "@/feature/FooterSection";

export default function Home() {
   return (
      <>
         <HeaderSection />
         <HeroSection />
         <PortfolioSection />
         <WhatWeDoSection />
         <AboutUsSection />
         <OurFocusSection />
         <FeaturesSection />
         <PricingSection />
         <EventSection />
         <CareerSection />
         <FooterSection />
      </>
   );
}
