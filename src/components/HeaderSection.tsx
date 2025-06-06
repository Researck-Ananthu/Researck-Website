"use client";

import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
// import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";

import HamburgerButton from "@/components/ui/buttons/HumbergerButton";
import { Button } from "@/components/ui/buttons/button";
// import CentredOrbit from "@/components/ui/container/CentredOrbit";

import { cn } from "@/lib/utils";
import {
  // headerLogos,
  headerNavList,
  headerButtonText,
  // placeHolderImg,
} from "@/lib/constant";
import { MessageCircle } from "lucide-react"; // icon from lucide-react

const HeaderSection = () => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // enablePageScroll();
    } else {
      setOpenNavigation(true);
      // disablePageScroll();
    }
  };

  // useEffect(() => {
  //     console.log(
  //         '%cOpen Navigation state:',
  //         'color: white; background-color: #007BFF; padding: 6px; border-radius: 4px;',
  //         openNavigation
  //     )
  // }, [openNavigation])

  return (
    <>
     {/* <header
                id="header"
                aria-label="Header"
                className="fixed inset-x-0 top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-50/20 text-white overflow-hidden motion-safe:-translate-y-full motion-safe:animate-slideDown motion-safe:duration-1200 motion-safe:delay-0"
            ></header> */}
      <header
        id="header"
        aria-label="Header"
        className="fixed inset-x-0 top-0 z-50 bg-black/95 backdrop-blur-sm text-white overflow-hidden translate-y-0 transition-all duration-700 ease-in-out motion-safe:duration-1200 motion-safe:delay-0 border border-red-200"
      >
        <div className="container h-18 lg:h-20 flex items-center justify-between gap-8">
          {/* Open - Logo Left */}
          <CompanyLogo />
          {/* Close - Logo Left */}

          {/* Open - Pc Nav Centre */}
          <PcNavigation />
          {/* Close - Pc Nav Centre */}

          {/* Open -Right Button */}
          <div className="flex items-center justify-between flex-nowrap flex-shrink-0 flex-grow-0 gap-6">
            <ChatButton />
            <HamburgerButton
              toggle={openNavigation}
              onClick={toggleNavigation}
            />
          </div>
          {/* Close -Right Button */}
        </div>
      </header>

      {/* Mobil Nav */}
      <MobileNavigation
        openNavigation={openNavigation}
        onClick={toggleNavigation}
      />
    </>
  );
};
export default HeaderSection;

const CompanyLogo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0,
      }}
      className="w-[12rem] lg:w-[14rem] min-w-32 inline-flex items-center justify-center"
    >
      <Link aria-label="company-logo" href="#home">
        {/* <Image
                    className="w-full max-h-fit object-contain object-center"
                    src={headerLogos.src}
                    alt={headerLogos.alt}
                    width={100}
                    height={40}
                    loading="eager"
                    priority={true}
                    placeholder="blur"
                    blurDataURL={placeHolderImg}
                /> */}
        {/* <Image
          src={headerLogos.src}
          alt={headerLogos.alt}
          width={100}
          height={40}
          loading="eager"
          priority
          className="w-full max-h-fit object-contain"
        /> */}
      </Link>
    </motion.div>
  );
};

const PcNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden h-full items-center justify-center xl:inline-flex lg:flex-shrink-0 lg:flex-nowrap">
      {headerNavList.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{
            transform: "translateY(-2px)",
          }}
          whileTap={{ scale: 1.1 }}
        >
          <Link
               key={item.id}
          href={item.href}
            className={cn(
              "relative block h-full px-4 xl:px-8 2xl:px-10 py-6 md:py-8 lg:-mr-0.25 font-body uppercase font-semibold tracking-widest text-xl 2xl:text-2xl 3xl:text-3xl text-gray-400 hover:text-white motion-safe:transition motion-safe:ease-linear motion-safe:animate-delay-0 motion-safe:duration-200",
              item.onlyMobile && "lg:hidden",
              pathname === item.href && "text-primary"
            )}
          >
            <div className="motion-safe:animated-underline motion-safe:animate-delay-0">
              {item.title}
            </div>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

// const ChatButton = () => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.9 }}
//       transition={{ type: "spring", stiffness: 400, damping: 10 }}
//     >
//       {/* <Button variant="gradient" size="md" className="hidden lg:block"> */}
//       <Button variant="gradient" size="md" className="hidden lg:flex items-center">
//         {headerButtonText}
//       </Button>
//     </motion.div>
//   );
// };

const ChatButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Button
        variant="default"
        size="lg"
        className="hidden lg:inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold tracking-wide bg-gradient-to-br from-gray-600 to-gray-500 text-white shadow-md hover:from-gray-500 hover:to-gray-400 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
        {headerButtonText}
      </Button>
    </motion.div>
  );
};

const MobileNavigation = ({
  openNavigation,
  onClick,
}: {
  openNavigation: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  return (
    <AnimatePresence>
      {openNavigation && (
        // Open - Frame Motion
        <motion.div
          initial={{ opacity: 0.5, y: "-100%" }}
          animate={{
            y: openNavigation ? 0 : "-100%",
            opacity: [0, 1],
          }}
          exit={{ y: "-100%" }}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "anticipate",
          }}
          className="fixed h-full w-full inset-0 z-40 bg-black/50 backdrop-blur-sm mx-auto"
        >
          <div className="relative z-40 mt-10 h-full w-full bg-black/95 overflow-hidden">
            {/* Open - Bg CentredOrbit */}
            {/* <CentredOrbit customSize="size-[200px] border border-gray-700/50 rounded-full" />
            <CentredOrbit customSize="size-[350px] border border-gray-700/50 rounded-full" />
            <CentredOrbit customSize="size-[480px] border border-gray-700/50 rounded-full" />
            <CentredOrbit customSize="size-[620px] border border-gray-700/50 rounded-full" />
            <CentredOrbit customSize="size-[780px] border border-gray-700/50 rounded-full" />
            <CentredOrbit customSize="hidden xs:block size-[940px] border border-gray-700/50 rounded-full" />
            <CentredOrbit customSize="hidden md:block size-[1130px] border border-gray-700/50 rounded-full" /> */}
            {/* Close - Bg CentredOrbit */}

            {/* Open - Nav Links */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: "easeIn",
              }}
              className="container py-12 h-full w-full flex flex-col items-center justify-center gap-6 sm:gap-12 md:gap-16 overflow-hidden"
            >
              {headerNavList.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClick}
                  className="h-10 uppercase font-body font-semibold tracking-widest text-xl 2xl:text-2xl 3xl:text-3xl text-white hover:text-gray-100 hover:scale-105 hover:-translate-y-1 motion-safe:transition-all motion-safe:ease-in-out motion-safe:duration-200 motion-safe:delay-1000"
                >
                  {item.title}
                </Link>
              ))}
            </motion.nav>
            {/* Close - Nav Links */}
          </div>
        </motion.div>
        // Close - Frame Motion
      )}
    </AnimatePresence>
  );
};
