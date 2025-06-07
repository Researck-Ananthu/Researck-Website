"use client";
import React from "react";
import { careerGrid } from "@/lib/constant";
import {
  Users,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Leadership",
    description:
      "We foster independent thinkers who are empowered to drive change and make impactful decisions across teams and initiatives.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "Communication",
    description:
      "Clear, transparent communication is at the heart of everything we build — from team interactions to our product experiences.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Commitment",
    description:
      "We’re passionate about seeing things through. We stay focused on long-term value, even when challenges arise.",
  },
];

const CareerCultureHighlights = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 text-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {careerGrid.heading}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg mb-12">
          {careerGrid.paragraph}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-xl bg-muted/40 dark:bg-muted/50 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 dark:bg-primary/40  mb-4 hover:bg-orange-300 dark:hover:bg-orange-300">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">
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
