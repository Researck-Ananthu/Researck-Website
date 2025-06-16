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
         id="Portfolio"
         data-section="Portfolio"
         className="bg-muted/50 text-foreground selection-orange relative w-full scroll-mt-24 overflow-hidden py-16 md:py-20 lg:py-24"
      >
         <div className="absolute -top-17 h-0 w-0" id="Portfolio-page" />

         {/* Heading + Paragraph */}
         <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="relative mx-auto mb-10 inline-block px-8 py-10">
               {/* Light Theme Grid */}
               <div
                  className="pointer-events-none absolute -inset-x-40 -inset-y-6 z-0 block rounded-lg dark:hidden"
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
                  className="pointer-events-none absolute -inset-x-40 -inset-y-6 z-0 hidden rounded-lg dark:block"
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
                  className="relative z-10 text-2xl leading-tight font-extrabold tracking-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
               >
                  {portfolioHeading.headingStart}
                  <br />
                  <span className="relative inline-block">
                     <span className="relative z-10 px-2 text-white dark:text-black">
                        {portfolioHeading.headingHighlight}
                     </span>
                     <span
                        className="absolute inset-0 z-0 skew-x-2 bg-orange-400 shadow-md"
                        aria-hidden="true"
                     />
                  </span>
                  {portfolioHeading.headingEnd}
               </h2>
            </div>

            <p className="dark:text-muted-foreground sm:text-md text-justify-last-left mx-auto mt-6 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl">
               {portfolioParagraph.paragraphStart}
            </p>
            <p className="dark:text-muted-foreground sm:text-md mx-auto mt-4 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl hidden md:block">
               {portfolioParagraph.paragraphEnd}
            </p>
         </div>

         {/* Cards Displayed Section */}
         <div className="mt-16 w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:max-w-5xl 2xl:max-w-screen-2xl">
               <div className="grid grid-cols-1 gap-3 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:pb-16 2xl:pb-20 2xl:grid-cols-4">
                  {portfolioGridItems.map(
                     (
                        item,
                        index // Fetching from constants
                     ) => (
                        <Card key={index} className="flex h-full flex-col">
                           <CardHeader>
                              <div className="mb-2 flex items-center gap-2">
                                 {item.icon}
                                 <Badge
                                    variant="outline"
                                    className="bg-black text-white text-[10px] text-wrap sm:text-sm dark:bg-white dark:text-black"
                                 >
                                    {item.category}
                                 </Badge>
                              </div>

                              {item.image && (
                                 <div className="mb-4">
                                    <Image
                                       src={item.image}
                                       alt={item.title}
                                       width={600}
                                       height={400}
                                       className="h-40 lg:h-45 w-full rounded-lg object-cover 2xl:h-30"
                                       style={{ objectPosition: "center" }}
                                    />
                                 </div>
                              )}

                              <CardTitle className="text-lg">
                                 {item.title}
                              </CardTitle>
                              <CardDescription>
                                 {/* Small screen: show shorter content */}
                                 <CardDescription>
                                    {/* Show only first sentence on small screens */}
                                    <span className="block sm:hidden">
                                       {item.description.split(". ")[0]}.
                                    </span>

                                    {/* Show full description on larger screens */}
                                    <span className="hidden sm:block">
                                       {item.description}
                                    </span>
                                 </CardDescription>
                              </CardDescription>
                           </CardHeader>

                           <CardFooter className="mt-auto">
                              <Button
                                 variant="outline"
                                 className="w-full cursor-pointer"
                              >
                                 Learn More
                              </Button>
                           </CardFooter>
                        </Card>
                     )
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default PortfolioSection;
