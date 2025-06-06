import React from "react";
import { Fade } from "react-awesome-reveal";
import { cn } from "@/lib/utils";

interface ParagraphProps extends React.HTMLAttributes<HTMLDivElement> {
    whiteScheme: boolean;
    paragraph1: string;
    paragraph2: string;
    className?: string;
}

const SimpleParagraph: React.FC<ParagraphProps> = ({
    whiteScheme = true,
    paragraph1,
    paragraph2,
    className,
    ...props
}) => {
    if (whiteScheme) {
        return (
            <Fade triggerOnce={true} cascade={true}>
                <div
                    className={cn(
                        "px-8 sm:px-12 pb-16 mx-auto max-w-5xl text-center text-gray-700",
                        className
                    )}
                    {...props}
                >
                    <p className="mb-4">{paragraph1}</p>
                    <p className="mb-8 lg:mb-12">{paragraph2}</p>
                </div>
            </Fade>
        );
    } else {
        return (
            <Fade triggerOnce={true} cascade={true}>
                <div
                    className={cn(
                        "px-8 sm:px-12 pb-16 mx-auto max-w-5xl text-center text-neutral-400",
                        className
                    )}
                    {...props}
                >
                    <p className="mb-4">{paragraph1}</p>
                    <p className="mb-8 lg:mb-12">{paragraph2}</p>
                </div>
            </Fade>
        );
    }
};

export default SimpleParagraph;
