"use client";

import React from "react";
import { footerContent } from "@/lib/constant";
import { researckBlackLogo, researckWhiteLogo } from "@/lib/imageAssets";
import Image from "next/image";
import Link from "next/link";
import {
   FaMapMarkerAlt,
   FaPhone,
   FaEnvelope,
   FaTwitterSquare,
   FaInstagramSquare,
   FaFacebookSquare,
   FaYoutubeSquare,
} from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
   FaMapLocationDot: (
      <FaMapMarkerAlt className="text-muted-foreground text-lg" />
   ),
   PhoneIcon: <FaPhone className="text-muted-foreground text-lg" />,
   EmailRoundedFillIcon: (
      <FaEnvelope className="text-muted-foreground text-lg" />
   ),
   FaTwitterSquare: <FaTwitterSquare className="text-2xl" />,
   FaInstagramSquare: <FaInstagramSquare className="text-2xl" />,
   FaFacebookSquare: <FaFacebookSquare className="text-2xl" />,
   FaYoutubeSquare: <FaYoutubeSquare className="text-2xl" />,
};

export default function FooterSection() {
   const { contact, sections, newsletter, socialLinks, copyright } =
      footerContent;

   return (
      <footer id="Footer" className="bg-background text-white/80 border-t pt-10 selection-orange">
         <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
            {/* Main Grid */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
               {/* Contact + Map */}
               <div className="space-y-6">
                  <div>
                     <h4 className="mb-4 text-lg font-semibold">
                        {contact.title}
                     </h4>
                     <ul className="space-y-3">
                        {contact.details.map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                              <span>{iconMap[item.icon]}</span>
                              <span className="text-sm">{item.text}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* Small Map Embed */}
                  <div className="aspect-[3/2] w-full overflow-hidden rounded-md shadow-md">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.9369284815057!2d76.54134027353354!3d9.443037582373616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06260b905bbd29%3A0xb24d028fe46efa0a!2sKULATHUNKAL%20TOWERS!5e1!3m2!1sen!2sin!4v1749286747146!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                     ></iframe>
                  </div>
               </div>

               {/* Sections */}
               <div className="flex flex-wrap gap-8 md:gap-16">
                  {sections.map((section, i) => (
                     <div key={i}>
                        <h4 className="mb-3 text-lg font-semibold">
                           {section.title}
                        </h4>
                        <ul className="space-y-2">
                           {section.links.map((link, j) => (
                              <li key={j}>
                                 <Link
                                    href={link.href}
                                    className="text-muted-foreground text-sm hover:underline"
                                 >
                                    {link.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>

               {/* Newsletter */}
               <div className="max-w-md space-y-4">
                  <div className="flex items-center gap-2">
                     {/* Logo with dark/light mode support */}
                     <Image
                        src={researckWhiteLogo}
                        alt="Researck Logo"
                        className="hidden h-10 w-10 dark:block"
                     />
                     <Image
                        src={researckBlackLogo}
                        alt="Researck Logo"
                        className="block h-10 w-10 dark:hidden"
                     />
                     <span className="text-xl font-semibold tracking-wide">
                        Researck
                     </span>
                  </div>

                  <h4 className="text-lg font-semibold">
                     {newsletter.headline}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                     {newsletter.description}
                  </p>

                  <form className="flex w-full flex-col gap-2 sm:flex-row">
                     <input
                        type="email"
                        placeholder={newsletter.placeholder}
                        className="w-full rounded-md border px-4 py-2 text-sm sm:flex-1"
                     />
                     <button
                        type="submit"
                        className="bg-primary w-full rounded-md px-4 py-2 text-sm text-white sm:w-auto dark:text-black cursor-pointer"
                     >
                        {newsletter.buttonText}
                     </button>
                  </form>

                  <div className="mt-4 flex items-center gap-4">
                     {socialLinks.map((item, i) => (
                        <Link
                           key={i}
                           href={item.href}
                           aria-label={item.label}
                           target="new"
                        >
                           {iconMap[item.icon]}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>

            {/* Divider + Bottom Text */}
            <div className="mb-8 space-y-2 border-t pt-6 text-center">
               <p className="text-xs sm:text-sm">{copyright.text}</p>
               <p className="text-muted-foreground text-xs sm:text-sm">
                  {copyright.policy}
               </p>
            </div>
         </div>
      </footer>
   );
}
