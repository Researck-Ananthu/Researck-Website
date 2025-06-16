"use client";

import {
   featureTechnologies,
   featureTools,
   featureDatabases,
} from "@/lib/constant";

export default function FeatureHighlights() {
   // Combine all features into one flat array
   const allFeatures = [
      ...featureTechnologies,
      ...featureTools,
      ...featureDatabases,
   ];

   return (
      <section className="px-4 py-10 sm:px-8 lg:px-16 mt-5 xl:mt-7" id="About">
         {/* <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black dark:text-white">
        Technologies & Tools We Use
      </h2> */}

         <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {allFeatures.map((item, index) => (
               <div
                  key={index}
                  className="animate-float flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-lg transition-transform hover:scale-110 dark:bg-neutral-800"
               >
                  <div className="mb-2 text-3xl">{item.icon}</div>
                  <p className="text-xs font-medium text-black sm:text-sm dark:text-white">
                     {item.name}
                  </p>
               </div>
            ))}
         </div>
      </section>
   );
}
