import React from "react";
import { Fade } from "react-awesome-reveal";
import { cn } from "@/lib/utils";

interface ParagraphProps extends React.HTMLAttributes<HTMLDivElement> {
  paragraph1: string;
  paragraph2: string;
  className?: string;
}

const SimplePara: React.FC<ParagraphProps> = ({
  paragraph1,
  paragraph2,
  className,
  ...props
}) => {
  return (
    <Fade triggerOnce={true} cascade={true}>
      <div className={cn("max-w-4xl lg:max-w-5xl xl:max-w-5xl mx-auto px-4 sm:px-6 text-center mt-12 mb-10",
            className)}
        {...props}>
        <p className="myh1 font-space text-base sm:text-lg font-normal leading-7 sm:leading-8 mb-5 text-justify-last-left text-gray-700 tracking-tight">
          {paragraph1}
        </p>
        <p className="myh1 font-space text-base sm:text-lg font-normal leading-7 sm:leading-8 text-gray-700 tracking-tight">
          {paragraph2}
        </p>
      </div>
    </Fade>
  );
};

export default SimplePara;
