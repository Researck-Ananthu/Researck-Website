"use client";
import React, { useState } from "react";
import {
   careerHeading,
   careerParagraph,
   careerInfo,
   careerJob,
   careerBanner,
} from "@/lib/constant";
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationPrevious,
   PaginationNext,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import CareerApplicationForm from "@/components/custom/CareerForm";
import CareerCultureHighlights from "../components/custom/CareerCulture";

const CareerIntroSection = () => {
   const [formOpen, setFormOpen] = useState(false);
   const [selectedJob, setSelectedJob] = useState("");
   const [showCVUpload, setShowCVUpload] = useState(false);
   const [uploadedCV, setUploadedCV] = useState<File | null>(null);
   const [cvSent, setCvSent] = useState(false); // new

   const jobsPerPage = 4;
   const [currentPage, setCurrentPage] = useState(1);

   const totalPages = Math.ceil(careerJob.openings.length / jobsPerPage);
   const startIndex = (currentPage - 1) * jobsPerPage;
   const endIndex = startIndex + jobsPerPage;
   const visibleJobs = careerJob.openings.slice(startIndex, endIndex);

   const handleApplyClick = (jobTitle: string) => {
      setSelectedJob(jobTitle);
      setFormOpen(true);
   };
   return (
      <section
         className="bg-muted/50 text-foreground selection-orange relative w-full scroll-mt-24 overflow-hidden py-16 md:py-20 lg:py-24"
         id="Careers"
      >
         <div className="absolute -top-17 h-0 w-0" id="Careers-page" />

         {/* Container */}
         <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            {/* Subheading Badge */}
            {/* <div className="mb-8">
               <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold tracking-wide text-orange-500 sm:text-base">
                  {careerInfo.highlight}
               </span>
            </div> */}

            {/* Main Heading with Grid BG */}
            <div className="relative mx-auto mb-10 w-full max-w-full px-4 py-10 break-words sm:max-w-[90%] sm:px-6 md:px-10 lg:max-w-4xl">
               {/* Light Grid */}
               <div
                  className="pointer-events-none absolute -inset-x-10 -inset-y-6 z-0 block rounded-lg dark:hidden"
                  style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-width='1'%3E%3Cpath d='M60 0H0V60'/%3E%3Cpath d='M0 60H60V0'/%3E%3C/g%3E%3C/svg%3E")`,
                     backgroundRepeat: "repeat",
                     backgroundSize: "38px 38px",
                     opacity: 4.5,
                     maskImage:
                        "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                     WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                  }}
               />

               {/* Dark Grid */}
               <div
                  className="pointer-events-none absolute -inset-x-10 -inset-y-6 z-0 hidden rounded-lg dark:block"
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
               <h2
                  className="relative z-10 text-2xl font-extrabold tracking-tight text-balance break-words uppercase sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
               >
                  {careerHeading.headingStart}
                  <br />
                  <span className="relative inline-block">
                     <span className="relative z-10 px-2 text-white dark:text-black">
                        {careerHeading.headingHighlight}
                     </span>
                     <span
                        className="absolute inset-0 z-0 skew-x-2 bg-orange-400 shadow-md"
                        aria-hidden="true"
                     />
                  </span>
                  {careerHeading.headingEnd}
               </h2>
            </div>

            {/* Paragraphs */}
            <p className="dark:text-muted-foreground sm:text-md text-justify-last-left mx-auto mt-2 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl">
               {careerParagraph.paragraphStart}
            </p>
            <p className="dark:text-muted-foreground sm:text-md text-justify-last-left mx-auto mt-4 max-w-lg text-base leading-relaxed tracking-tight text-gray-700 md:max-w-2xl md:text-lg lg:max-w-4xl hidden md:block">
               {careerParagraph.paragraphEnd}
            </p>
         </div>
         {/* Open Positions Section*/}
         <div className="mx-auto mt-5 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl px-6 py-10 sm:px-10">
               <h3 className="text-foreground mb-10 text-center text-2xl font-semibold sm:text-4xl">
                  {careerJob.heading}
               </h3>

               <div className="space-y-6">
                  {visibleJobs.map((job, index) => (
                     <div
                        key={index}
                        className="xs:flex-row xs:items-center xs:justify-between xs:gap-4 bg-muted/40 dark:bg-muted/10 flex flex-col gap-3 rounded-lg border border-gray-200 px-4 py-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md dark:border-gray-700"
                     >
                        <div className="w-full text-left">
                           <p
                              className={`text-base font-semibold sm:text-lg ${job.color} tracking-tight dark:text-gray-300`}
                           >
                              {job.title}
                           </p>
                        </div>
                        <div className="xs:w-auto sm:w-auto">
                           <Button
                              variant={"outline"}
                              className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white"
                              onClick={() => handleApplyClick(job.title)}
                           >
                              Apply
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
               {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                     <Pagination>
                        <PaginationContent>
                           <PaginationItem>
                              <PaginationPrevious
                                 onClick={() =>
                                    setCurrentPage((prev) =>
                                       Math.max(prev - 1, 1)
                                    )
                                 }
                                 className={
                                    currentPage === 1
                                       ? "pointer-events-none opacity-50"
                                       : ""
                                 }
                              />
                           </PaginationItem>

                           {[...Array(totalPages)].map((_, i) => (
                              <PaginationItem key={i}>
                                 <PaginationLink
                                    isActive={currentPage === i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`transition-colors ${
                                       currentPage === i + 1
                                          ? "bg-orange-300 text-white dark:bg-orange-300 dark:text-black"
                                          : "hover:bg-orange-100 hover:text-black dark:hover:bg-orange-200 dark:hover:text-gray-700"
                                    }`}
                                 >
                                    {i + 1}
                                 </PaginationLink>
                              </PaginationItem>
                           ))}

                           <PaginationItem>
                              <PaginationNext
                                 onClick={() =>
                                    setCurrentPage((prev) =>
                                       Math.min(prev + 1, totalPages)
                                    )
                                 }
                                 className={
                                    currentPage === totalPages
                                       ? "pointer-events-none opacity-50"
                                       : ""
                                 }
                              />
                           </PaginationItem>
                        </PaginationContent>
                     </Pagination>
                  </div>
               )}
            </div>
         </div>

         <CareerApplicationForm
            open={formOpen}
            onClose={() => setFormOpen(false)}
            jobTitle={selectedJob}
         />

         <CareerCultureHighlights />

         <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8 mb-6">
            <div className="flex flex-col gap-6 rounded-2xl bg-gradient-to-r from-gray-400 to-orange-200 px-6 py-10 text-white shadow-lg sm:px-10 md:flex-row md:items-center md:justify-between dark:text-white">
               <div className="text-neutral-800 dark:text-neutral-100">
                  <h4 className="mb-2 text-xl font-bold sm:text-2xl">
                     {careerBanner.heading}
                  </h4>
                  <p className="text-sm sm:text-base">
                     {careerBanner.paragraph}
                  </p>
               </div>

               <div className="text-right">
                  <Button
                     onClick={() => {
                        if (uploadedCV) {
                           setCvSent(true);
                           setTimeout(() => {
                              setShowCVUpload(false);
                              setUploadedCV(null);
                              setCvSent(false);
                           }, 2500);
                        } else {
                           setShowCVUpload((prev) => !prev);
                        }
                     }}
                     className="rounded-full bg-gray-300 px-5 py-2 text-xs font-semibold text-black transition-all hover:bg-gray-200 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300 w-full"
                  >
                     {careerBanner.buttonText} →
                  </Button>

                  {showCVUpload && (
                     <div className="mt-4">
                        {cvSent ? (
                           <p className="text-sm font-semibold text-white">
                              ✅ CV Sent Successfully!
                           </p>
                        ) : (
                           <>
                              <input
                                 type="file"
                                 accept=".pdf,.doc,.docx"
                                 onChange={(e) =>
                                    setUploadedCV(
                                       e.target.files ? e.target.files[0] : null
                                    )
                                 }
                                 className="mt-2 block w-full text-sm text-gray-900 file:mr-4 file:rounded-full file:border-0 file:bg-neutral-200 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-black hover:file:bg-neutral-300 dark:text-white"
                              />
                              {uploadedCV && (
                                 <p className="mt-2 text-sm text-white">
                                    Uploaded:{" "}
                                    <span className="font-medium">
                                       {uploadedCV.name}
                                    </span>
                                 </p>
                              )}
                           </>
                        )}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default CareerIntroSection;
