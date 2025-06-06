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
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black dark:text-white">
        Technologies & Tools We Use
      </h2> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {allFeatures.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg transition-transform hover:scale-110 animate-float"
          >
            <div className="mb-2 text-3xl">{item.icon}</div>
            <p className="text-xs sm:text-sm font-medium text-black dark:text-white">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
