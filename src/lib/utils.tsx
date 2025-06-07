import React from "react";

import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merger Function
export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

// Render With Line Breaks
export const renderWithLineBreaks = ({
   text,
   useLineBreaks = true,
}: {
   text: string;
   useLineBreaks?: boolean;
}) => {
   if (useLineBreaks) {
      return text.split("\n").map((line, index) => (
         <span key={index} className="block">
            {line}
         </span>
      ));
   } else {
      return text;
   }
};

// Render with Optional Line Breaks with Types
export const renderWithLineBreakAndChildren = (
   useLineBreaks: boolean = false,
   startText: string,
   children?: React.ReactNode,
   endText?: string
) => {
   if (useLineBreaks) {
      return startText.split("\n").map((line, index) => (
         <React.Fragment key={index}>
            {line} <br />
         </React.Fragment>
      ));
   } else {
      return (
         <span className="block">
            {startText} {children} {endText}
         </span>
      );
   }
};

// Copy to Clipboard with Types
export function copyToClipboard(
   text: string,
   onSuccess?: void,
   onError?: void
): void {
   navigator.clipboard
      .writeText(text)
      .then(onSuccess || (() => console.log("Text copied to clipboard")))
      .catch(
         onError || ((error) => console.error("Error copying text: ", error))
      );
}
