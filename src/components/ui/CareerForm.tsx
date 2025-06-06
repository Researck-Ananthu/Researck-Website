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
import { careerFormFields } from "@/lib/constant";

interface CareerApplicationFormProps {
  open: boolean;
  onClose: () => void;
  jobTitle: string;
}

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
      const timer = setTimeout(() => {
        onClose();
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, onClose]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-[90vh] lg:max-h-[90vh] xl:max-h-[100vh] dark:text-gray-300">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Apply for: {jobTitle}
          </DialogTitle>
        </DialogHeader>

        {showSuccess ? (
          <div className="text-center py-10">
            <div className="text-orange-400 text-2xl font-semibold mb-2">
              Success!
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Your application has been submitted successfully.
            </p>
          </div>
        ) : (
          <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerFormFields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    {field.label}
                  </label>
                  <Input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                  />
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full mt-2">
              Submit Application
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CareerApplicationForm;
