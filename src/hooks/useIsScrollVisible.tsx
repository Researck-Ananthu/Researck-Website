// import { useState, useEffect, useRef, RefObject } from "react";

// interface UseIsScrollVisibleOptions {
//     threshold?: number | number[]; // One or more thresholds
//     triggerOnce?: boolean; // Whether to unobserve after the first trigger
//     root?: Element | null; // The root element to use as the viewport
//     rootMargin?: string; // Margin around the root
// }

// const UseIsScrollVisible = ({
//     threshold = 0.5,
//     triggerOnce = true,
//     root = null,
//     rootMargin = "0px",
// }: UseIsScrollVisibleOptions): [
//     RefObject<
//         NonNullable<HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement>
//     >,
//     boolean,
// ] => {
//     const [isVisible, setIsVisible] = useState<boolean>(false);
//     const elementRef = useRef(null);

//     useEffect(() => {
//         console.log(
//             "%cElement visible:",
//             "color: white; background-color: green; padding: 6px; border-radius: 4px;",
//             isVisible
//         );
//     }, [isVisible]);

//     useEffect(() => {
//         const element = elementRef.current;

//         if (!element) return; // Handle null safely

//         const observer = new IntersectionObserver(
//             (
//                 [entry]: IntersectionObserverEntry[],
//                 observerInstance: IntersectionObserver
//             ) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);

//                     // If `triggerOnce` is true, unobserve after the first intersection
//                     if (triggerOnce) {
//                         observerInstance.unobserve(entry.target);
//                     }
//                 } else if (!triggerOnce) {
//                     // Reset visibility if not in view and triggerOnce is false
//                     setIsVisible(false);
//                 }
//             },

//             { threshold, rootMargin, root } // Pass all properties here
//         );

//         observer.observe(element);

//         return () => {
//             observer.disconnect();
//         };
//     }, [root, rootMargin, threshold, triggerOnce]);

//     return [elementRef, isVisible];
// };
// export default UseIsScrollVisible;

import { useState, useEffect, useRef, RefObject } from "react";

interface UseIsScrollVisibleOptions {
   threshold?: number | number[]; // One or more thresholds
   triggerOnce?: boolean; // Whether to unobserve after the first trigger
   root?: Element | null; // The root element to use as the viewport
   rootMargin?: string; // Margin around the root
}

const UseIsScrollVisible = ({
   threshold = 0.5,
   triggerOnce = true,
   root = null,
   rootMargin = "0px",
}: UseIsScrollVisibleOptions): [
   RefObject<HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement | null>, // Allow null
   boolean,
] => {
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const elementRef = useRef<
      HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement | null
   >(null); // Allow null here

   useEffect(() => {
      console.log(
         "%cElement visible:",
         "color: white; background-color: green; padding: 6px; border-radius: 4px;",
         isVisible
      );
   }, [isVisible]);

   useEffect(() => {
      const element = elementRef.current;

      if (!element) return; // Safely handle null

      const observer = new IntersectionObserver(
         (
            [entry]: IntersectionObserverEntry[],
            observerInstance: IntersectionObserver
         ) => {
            if (entry.isIntersecting) {
               setIsVisible(true);

               // If `triggerOnce` is true, unobserve after the first intersection
               if (triggerOnce) {
                  observerInstance.unobserve(entry.target);
               }
            } else if (!triggerOnce) {
               // Reset visibility if not in view and triggerOnce is false
               setIsVisible(false);
            }
         },
         { threshold, rootMargin, root } // Pass all properties here
      );

      observer.observe(element);

      return () => {
         observer.disconnect();
      };
   }, [root, rootMargin, threshold, triggerOnce]);

   return [elementRef, isVisible];
};

export default UseIsScrollVisible;
