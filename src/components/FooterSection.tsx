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
    <FaMapMarkerAlt className="text-lg text-muted-foreground" />
  ),
  PhoneIcon: <FaPhone className="text-lg text-muted-foreground" />,
  EmailRoundedFillIcon: (
    <FaEnvelope className="text-lg text-muted-foreground" />
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
    <footer className="bg-background text-foreground border-t pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact + Map */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">{contact.title}</h4>
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
            <div className="w-full aspect-[3/2] rounded-md overflow-hidden shadow-md">
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
                <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="text-sm hover:underline text-muted-foreground"
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
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-2">
              {/* Logo with dark/light mode support */}
              <Image
                src={researckWhiteLogo}
                alt="Researck Logo"
                className="w-10 h-10 hidden dark:block"
              />
              <Image
                src={researckBlackLogo}
                alt="Researck Logo"
                className="w-10 h-10 block dark:hidden"
              />
              <span className="text-xl font-semibold tracking-wide">
                Researck
              </span>
            </div>

            <h4 className="text-lg font-semibold">{newsletter.headline}</h4>
            <p className="text-sm text-muted-foreground">
              {newsletter.description}
            </p>

            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="px-4 py-2 border rounded-md text-sm w-full sm:flex-1"
              />
              <button
                type="submit"
                className="bg-primary text-white dark:text-black px-4 py-2 rounded-md text-sm w-full sm:w-auto"
              >
                {newsletter.buttonText}
              </button>
            </form>

            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((item, i) => (
                <Link key={i} href={item.href} aria-label={item.label} target="new">
                  {iconMap[item.icon]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Bottom Text */}
        <div className="border-t pt-6 text-center space-y-2 mb-8">
          <p className="text-xs sm:text-sm">{copyright.text}</p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {copyright.policy}
          </p>
        </div>
      </div>
    </footer>
  );
}
