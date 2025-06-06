import React from "react";
import {
  portfolioHeading,
  portfolioParagraph,
  portfolioGridItems,
} from "@/lib/constant";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  // CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  return (
    <section
      className="bg-muted/50 w-full py-16 md:py-20 lg:py-24 overflow-hidden text-foreground"
      id="Portfolio"
    >
      {/* Heading + Paragraph */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block mx-auto mb-10 px-8 py-10">
          {/* Light Theme Grid */}
          <div
            className="absolute -inset-x-40 -inset-y-6 z-0 pointer-events-none rounded-lg block dark:hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "40px 40px",
              opacity: 8.9,
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          />
          {/* Dark Theme Grid */}
          <div
            className="absolute -inset-x-40 -inset-y-6 z-0 pointer-events-none rounded-lg hidden dark:block"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "40px 40px",
              opacity: 0.2,
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          />
          {/* Headings and Paragraph Section */}
          <h2
            className="relative z-10 text-2xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {portfolioHeading.headingStart}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-white dark:text-black px-2">
                {portfolioHeading.headingHighlight}
              </span>
              <span
                className="absolute inset-0 bg-orange-400 skew-x-2 z-0 shadow-md"
                aria-hidden="true"
              />
            </span>
            {portfolioHeading.headingEnd}
          </h2>
        </div>

        <p className="mt-6 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight text-justify-last-left">
          {portfolioParagraph.paragraphStart}
        </p>
        <p className="mt-4 text-gray-700 dark:text-muted-foreground text-base sm:text-md md:text-lg max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight">
          {portfolioParagraph.paragraphEnd}
        </p>
      </div>

      {/* Cards Displayed Section */}
      <div className="mt-16 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioGridItems.map((item, index) => ( // Fetching from constants
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    {item.icon}
                    <Badge variant="outline" className="text-[10px] sm:text-sm text-wrap bg-gray-100 dark:bg-gray-400">{item.category}</Badge>
                  </div>

                  {item.image && (
                    <div className="mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="rounded-lg w-full h-56 2xl:h-75 object-cover"
                        style={{ objectPosition: "center" }}
                      />
                    </div>
                  )}

                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>

                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full cursor-pointer">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
