"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { researckBlackLogo, researckWhiteLogo } from "@/lib/imageAssets";

const sections = ["Home", "Portfolio", "About", "Careers"];

const HeaderSection = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sectionElements = document.querySelectorAll("section");

        let foundSection = "";
        sectionElements.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const withinView =
            rect.top <= window.innerHeight * 0.2 &&
            rect.bottom >= window.innerHeight * 0.2;

          if (withinView) {
            foundSection = section.id;
          }
        });

        if (foundSection) {
          setActiveSection(foundSection);
        } else {
          setActiveSection("");
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-background/75 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-xs selection-orange">
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
          {sections.map((item) => (
            <Link
              key={item}
              href={`#${item}-anchor`}
              className={`relative font-medium transition-colors duration-200 ${
                activeSection === item
                  ? "text-primary font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-100 after:bg-primary after:transition-transform after:duration-300 after:ease-out"
                  : "text-muted-foreground hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              }`}
            >
              {item}
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
