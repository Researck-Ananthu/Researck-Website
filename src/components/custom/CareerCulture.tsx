"use client";
import React from "react";
import { careerGrid } from "@/lib/constant";
import { Users, MessageCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
   {
      icon: <Users className="text-primary h-6 w-6" />,
      title: "Leadership",
      description:
         "We foster independent thinkers who are empowered to drive change and make impactful decisions across teams and initiatives.",
   },
   {
      icon: <MessageCircle className="text-primary h-6 w-6" />,
      title: "Communication",
      description:
         "Clear, transparent communication is at the heart of everything we build — from team interactions to our product experiences.",
   },
   {
      icon: <ShieldCheck className="text-primary h-6 w-6" />,
      title: "Commitment",
      description:
         "We’re passionate about seeing things through. We stay focused on long-term value, even when challenges arise.",
   },
];

const CareerCultureHighlights = () => {
   return (
      <section id="Careers" className="text-foreground w-full py-2 md:py-4 lg:py-2">
         <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
               {careerGrid.heading}
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-base sm:text-lg">
               {careerGrid.paragraph}
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
               {highlights.map((item, idx) => (
                  <div
                     key={idx}
                     className={cn(
                        "bg-muted/40 dark:bg-muted/50 flex flex-col items-center rounded-xl p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
                     )}
                  >
                     <div className="bg-primary/20 dark:bg-primary/40 mb-4 flex h-12 w-12 items-center justify-center rounded-lg hover:bg-orange-300 dark:hover:bg-orange-300">
                        {item.icon}
                     </div>
                     <h4 className="mb-2 text-lg font-semibold">
                        {item.title}
                     </h4>
                     <p className="text-muted-foreground text-sm">
                        {item.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default CareerCultureHighlights;
