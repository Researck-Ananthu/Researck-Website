"use client";

import React, { useState, useEffect } from "react";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
   Select,
   SelectTrigger,
   SelectValue,
   SelectContent,
   SelectItem,
} from "@/components/ui/select";

interface CareerApplicationFormProps {
   open: boolean;
   onClose: () => void;
   jobTitle: string;
}

const districts = [
   "KTM",
   "TVM",
   "TSR",
   "KNR",
   "KLM",
   "EKM",
   "ALP",
   "KZD",
   "WYN",
   "KZHKD",
   "MLP",
   "IDK",
   "PTN",
   "PLKD",
];
// const states = ["KL", "TN", "KA"];
const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 8 }, (_, i) => currentYear - 7 + i);
const maxDOBYear = currentYear - 20;

const CareerApplicationForm: React.FC<CareerApplicationFormProps> = ({
   open,
   onClose,
   jobTitle,
}) => {
   const [showSuccess, setShowSuccess] = useState(false);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setShowSuccess(true);
   };

   useEffect(() => {
      if (showSuccess) {
         if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            url.search = "";
            window.history.replaceState({}, document.title, url.toString());
         }
         const timer = setTimeout(() => {
            setShowSuccess(false);
            onClose();
         }, 3000);

         return () => clearTimeout(timer);
      }
   }, [showSuccess, onClose]);

   return (
      <Dialog open={open} onOpenChange={onClose}>
         <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-h-[85vh] lg:max-h-[90vh] xl:max-h-[100vh]">
            <DialogHeader>
               <DialogTitle className="text-xl font-bold">
                  Apply for: {jobTitle}
               </DialogTitle>
            </DialogHeader>

            {showSuccess ? (
               <div className="py-10 text-center dark:bg-neutral-700 dark:opacity-45">
                  <div className="mb-2 text-2xl font-semibold text-orange-400">
                     Success!
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                     Your application has been submitted successfully.
                  </p>
               </div>
            ) : (
               <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           Full Name
                        </label>
                        <Input
                           name="name"
                           type="text"
                           placeholder="Enter Your Full Name"
                           required
                        />
                     </div>
                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           Email
                        </label>
                        <Input
                           name="email"
                           type="email"
                           placeholder="Enter Your Email"
                           required
                        />
                     </div>
                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           Mobile
                        </label>
                        <Input
                           name="mobile"
                           type="tel"
                           maxLength={10}
                           pattern="\d{10}"
                           title="Enter a 10-digit mobile number"
                           placeholder="Enter Your Mobile Number"
                           required
                        />
                     </div>
                     {/* Gender (Radio Buttons) */}
                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           Gender
                        </label>
                        <div className="mt-1 flex items-center gap-4">
                           <label className="flex items-center gap-2 text-sm">
                              <input
                                 type="radio"
                                 name="gender"
                                 value="Male"
                                 required
                                 className="accent-orange-400"
                              />
                              Male
                           </label>
                           <label className="flex items-center gap-2 text-sm">
                              <input
                                 type="radio"
                                 name="gender"
                                 value="Female"
                                 className="accent-orange-400"
                              />
                              Female
                           </label>
                           <label className="flex items-center gap-2 text-sm">
                              <input
                                 type="radio"
                                 name="gender"
                                 value="Other"
                                 className="accent-orange-400"
                              />
                              Other
                           </label>
                        </div>
                     </div>
                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           District
                        </label>
                        <Select required>
                           <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select district" />
                           </SelectTrigger>
                           <SelectContent>
                              {districts.map((d) => (
                                 <SelectItem key={d} value={d}>
                                    {d}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>
                     {/* <div className="w-full">
                <label className="text-sm font-medium mb-1 block">State</label>
                <Select required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div> */}
                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           Date of Birth
                        </label>
                        <Input
                           name="dob"
                           type="date"
                           max={`${maxDOBYear}-12-31`}
                           required
                        />
                     </div>
                     {/* Years of Experience */}
                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           Years of Experience
                        </label>
                        <Input
                           name="experience"
                           type="number"
                           min={0}
                           max={50}
                           placeholder="e.g. 3"
                           required
                        />
                     </div>
                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           Year of Passing
                        </label>
                        <Select required>
                           <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select year" />
                           </SelectTrigger>
                           <SelectContent>
                              {yearOptions.map((y) => (
                                 <SelectItem key={y} value={String(y)}>
                                    {y}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>

                     <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                           Upload Resume
                        </label>
                        <Input
                           name="resume"
                           type="file"
                           accept=".pdf,.doc,.docx,.jpg"
                           required
                        />
                     </div>
                  </div>

                  <Button type="submit" className="mt-4 w-full">
                     Submit Application
                  </Button>
               </form>
            )}
         </DialogContent>
      </Dialog>
   );
};

export default CareerApplicationForm;
