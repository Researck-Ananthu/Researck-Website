"use client";

import { subscriptionPlans } from "@/lib/constant";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PricingSection = () => {
   return (
      <section
         id="Pricing"
         className="w-full py-6 md:py-15 lg:py-17 xl:py-20 2xl:py-30"
      >
         <div className="selection-orange container">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
               <div className="space-y-6">
                  <div className="bg-primary text-primary-foreground inline-block rounded-lg px-3 py-1 text-sm">
                     Pricing
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                     Simple, Transparent Pricing
                  </h2>
                  <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed">
                     Choose the plan thats right for your company.
                  </p>
               </div>
            </div>

            {/* Plans */}
            {/* <div className="max-w-8xl mx-auto grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
            <div className="max-w-auto 2xl:max-w-8xl mx-auto grid grid-cols-1 gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {subscriptionPlans.map((plan, index) => (
                  <Card
                     key={plan.id}
                     className={cn(
                        "bg-muted/20 relative space-y-2 border-2",
                        plan.isPopular ? "border-primary" : "",
                        index === 0 && "border-dashed"
                     )}
                  >
                     <CardHeader>
                        <CardTitle className="text-xl leading-tight font-bold break-words sm:text-3xl">
                           {plan.name}
                        </CardTitle>
                        {plan.description && (
                           <CardDescription className="h-11 text-xs sm:text-sm">
                              {plan.description}
                           </CardDescription>
                        )}
                        {plan.monthlyPrice > 0 && (
                           <div>
                              <span className="text-xl font-bold sm:text-2xl">
                                 ${(plan.monthlyPrice / 100).toFixed(2)}
                              </span>
                              <span className="text-muted-foreground text-xs sm:text-sm">
                                 /month
                              </span>
                              <div className="text-muted-foreground text-xs">
                                 ${(plan.yearlyPrice / 100).toFixed(2)} /year
                                 (save ~15%)
                              </div>
                           </div>
                        )}
                     </CardHeader>

                     <CardContent className="flex flex-1 flex-col gap-3">
                        <p className="text-left text-xs font-medium md:text-sm">
                           Features:
                        </p>
                        <ul className="space-y-2">
                           {plan.features.map((feature) => (
                              <li
                                 key={feature}
                                 className="flex items-center gap-2"
                              >
                                 <CheckCircle className="text-primary h-4 w-4" />
                                 <span>{feature}</span>
                              </li>
                           ))}
                        </ul>
                     </CardContent>

                     {/* Popular Badge */}
                     {plan.isPopular && (
                        <Badge className="bg-primary absolute -top-2 -right-2">
                           Popular
                        </Badge>
                     )}

                     {/* Buttons */}
                     <CardFooter>
                        {plan.id === "demo" ? (
                           <Button variant="outline" className="w-full" asChild>
                              <Link href="#">Request Demo</Link>
                           </Button>
                        ) : plan.id === "enterprise" ? (
                           <Button variant="outline" className="w-full" asChild>
                              <Link href="#">Contact Sales</Link>
                           </Button>
                        ) : (
                           <Button
                              variant={plan.isPopular ? "default" : "outline"}
                              className="w-full"
                              asChild
                           >
                              <Link href="#">Get Started</Link>
                           </Button>
                        )}
                     </CardFooter>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};

export default PricingSection;
