"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { blurUrl } from "@/lib/constant";

export const BenoGrid2 = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[28rem] xl:auto-rows-[30rem] gap-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem2 = ({
  className,
  title,
  description,
  category,
  image,
  icon,
}: {
  className?: string;
  title: string;
  description?: string;
  category?: string;
  image: string | StaticImageData;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "bg-white row-span-1 group/bento p-4 border border-neutral-400/20 rounded-xl shadow-xl flex flex-col justify-between space-y-4",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[8rem] xl:min-h-[9rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100">
        <Image
          className="rounded-xl w-full h-full object-center object-cover"
          src={image}
          alt={title}
          width={200}
          height={200}
          loading={"lazy"}
          placeholder="blur"
          blurDataURL={blurUrl}
        />
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200 text-neutral-600">
        <div className="mb-2 flex flex-row items-center justify-between gap-4 font-grotesk">
          <div className="inline-flex gap-2 text-base font-bold">
            {icon}
            <span>{title}</span>
          </div>
          <div className="hidden xl:block px-4 py-2 bg-zinc-200/50 rounded-lg text-xs font-semibold">
            {category}
          </div>
        </div>

        <p className="mt-4 text-sm font-normal text-pretty line-clamp-6">
          {description}
        </p>

        <button type="button" className="mt-6 w-32 h-12 min-w-32">
          <a
            href="#"
            className="group relative inline-block font-medium w-full h-full"
          >
            <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
              <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50" />
              <span className="absolute left-0 -ml-2 h-48 w-48 bg-gray-900 origin-top-right -translate-x-full translate-y-12 -rotate-90 transition-all duration-300 group-hover:-rotate-180" />
              <div className="relative inline-flex text-xs items-center justify-center -translate-y-[1.2px]">
                More Info&nbsp;
                <ArrowRightIcon className="transition-transform duration-300 size-5 group-hover:translate-x-1" />
              </div>
            </span>
            <span className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-in-out group-hover:mb-0 group-hover:mr-0" />
          </a>
        </button>
      </div>
    </div>
  );
};
