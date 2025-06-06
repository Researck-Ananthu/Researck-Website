import React from "react";

const SectionHeadingAndParagraph = ({
  heading,
  rheading,
  paragraph,
}: {
  heading: string;
  rheading: string;
  paragraph: string;
}) => {
  return (
    <div className="min-h-[40vh] bg-gradient-to-b from-white to-gray-100 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="relative z-0 my-6 text-center">
        <h1 className="relative z-10 mb-6 pb-16 text-center text-[2.8rem] font-extrabold sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem]">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            {heading}
          </span>
        </h1>

        <span className="pointer-events-none absolute left-0 right-0 top-12 transform whitespace-nowrap text-[2.8rem] font-extrabold leading-none text-orange-300/20 sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem]">
          {rheading}
        </span>

        <div className="relative">
          <h2 className="mx-auto w-full bg-gradient-to-tr from-slate-800 to-slate-500 bg-clip-text text-2xl font-bold leading-snug tracking-tight text-transparent lg:max-w-3xl lg:text-5xl">
            {paragraph}
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
          </div>
        </div>

        <div className="absolute left-0 right-0 top-[75%] z-0 mx-auto h-36 w-full transform bg-gradient-to-b from-orange-300/20 to-transparent blur-2xl filter"></div>
      </div>
    </div>
  );
};

export default SectionHeadingAndParagraph;
