import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { researckBlackLogo, researckWhiteLogo } from "@/lib/imageAssets";

const HeaderSection = () => {
   return (
      <header className="bg-background/75 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-xs">
         <div className="mx-auto flex h-18 w-full max-w-none items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-7 2xl:px-8">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-1">
               <Image
                  src={researckBlackLogo}
                  alt="Logo"
                  width={32}
                  height={32}
                  className="h-14 w-auto object-cover dark:hidden"
               />
               <Image
                  src={researckWhiteLogo}
                  alt="Logo Dark"
                  width={100}
                  height={100}
                  className="hidden h-14 w-auto object-cover dark:block"
               />
               <span className="hidden text-xl font-bold whitespace-nowrap sm:inline-block">
                  Researck
               </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden gap-6 lg:flex">
               {["Home", "Portfolio", "About", "Careers"].map((item) => (
                  <Link
                     key={item}
                     href={`#${item}`}
                     className="text-muted-foreground hover:text-primary font-medium transition-colors"
                  >
                     {item[0].toUpperCase() + item.slice(1)}
                  </Link>
               ))}
            </nav>

            {/* Actions */}
            <div className="font-ibm-plex-sans flex items-center gap-2">
               <Button
                  variant="outline"
                  className="supports-[backdrop-filter]:bg-background/60 rounded-md px-4 py-2 font-medium"
                  asChild
               >
                  <Link href="#">Start Conversation</Link>
               </Button>
               <ThemeToggle />
            </div>
         </div>
      </header>
   );
};

export default HeaderSection;
