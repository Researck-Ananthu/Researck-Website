import React, { ReactNode } from "react";
import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Sora,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "next-themes";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ActiveThemeProvider } from "@/components/ActiveTheme";
import { cn } from "@/lib/utils";

const soraFont = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: "variable",
});
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// const sourceCodeProFont = Source_Code_Pro({
//     variable: "--font-source-code-pro",
//     subsets: ["latin"],
//     weight: "variable",
// });

const spaceGroteskFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Researck - Software and Solution",
  description:
    "Researck delivers innovative, scalable software solutions, transforming ideas into user-friendly, " +
    "cutting-edge technologies for businesses worldwide.",
  metadataBase: new URL("https://researck.com"),
  applicationName: "Researck",
  appleWebApp: {
    capable: true,
    title: "Researck",
    statusBarStyle: "black-translucent",
  },

  creator: "Richu Antony & Team",
  authors: [{ name: "Richu Antony & Team", url: "https://researck.com" }],

  generator: "Next.js",
  keywords: [
    "Software",
    "Solution",
    "Javascript",
    "TypeScript",
    "React",
    "Next.js",
    "Html",
    "Css",
    "SCSS",
  ],
  referrer: "origin-when-cross-origin",
  manifest: "manifest.json",
  robots: {
    nocache: true,
    index: true,
    follow: true,
    notranslate: true,
  },

  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "icon.png",
    description:
      "Researck delivers innovative, scalable software solutions, transforming ideas into user-friendly, " +
      "cutting-edge technologies for businesses worldwide.",
  },
  openGraph: {
    title: "Researck - Software and Solution",
    description:
      "Researck delivers innovative, scalable software solutions, transforming ideas into user-friendly, " +
      "cutting-edge technologies for businesses worldwide.",
    url: "https://www.reserack.com",
    siteName: "Researck",
    images: [
      {
        url: "icon.png",
        width: 800,
        height: 600,
        alt: "Researck",
        type: "image/png",
      },
      {
        url: "icon.png",
        width: 1800,
        height: 1600,
        alt: "Researck",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${soraFont.variable} ${spaceGroteskFont.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`,
          "bg-background overscroll-none antialiased"
        )}
      >
        <ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
  enableColorScheme
>
  <ActiveThemeProvider>
    {children}
  </ActiveThemeProvider>
</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
