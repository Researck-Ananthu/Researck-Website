import React from "react";
import { cn } from "@/lib/utils";
import { AttentionSeeker } from "react-awesome-reveal";
import { EffectTextBgCover } from "@/components/ui/container/EffectTextBgCover";

interface GridHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    whiteScheme: boolean;
    grid?: boolean;
    cover?: boolean;
    startText: string;
    highlightText: string;
    endText: string;
    classname?: string;
}

const SimpleGridHeading: React.FC<GridHeadingProps> = ({
    whiteScheme = true,
    grid = false,
    cover = false,
    startText,
    highlightText,
    endText,
    classname,
    ...props
}) => {
    if (whiteScheme) {
        return (
            <div
                className={cn(
                    "relative w-full mx-auto max-w-7xl flex items-center justify-center mb-8",
                    grid ? "bg-grid-black/[0.2]" : "",
                    classname
                )}
                {...props}
            >
                {/* Background Effect */}
                {grid && (
                    <div className="absolute inset-0 w-full pointer-events-none flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                )}

                {/* Animated Heading */}
                <AttentionSeeker
                    effect="tada"
                    triggerOnce={true}
                    cascade={true}
                >
                    {cover ? (
                        <h1 className=" py-12 max-w-6xl mb-2.5 bg-gradient-to-b from-neutral-700 to-neutral-950 text-center uppercase bg-clip-text text-transparent drop-shadow-2xl z-10">
                            {startText}
                            <EffectTextBgCover>
                                {highlightText}
                            </EffectTextBgCover>
                            <span className="pl-1">{endText}</span>
                        </h1>
                    ) : (
                        <h1 className="py-12 max-w-6xl mb-2.5 bg-gradient-to-b from-neutral-700 to-neutral-950 text-center uppercase bg-clip-text text-transparent drop-shadow-2xl z-10">
                            {startText}
                            <span className="bg-hOrangeSkewRectangleSvg bg-cover bg-center text-white px-4 py-1 drop-shadow-xl">
                                {highlightText}
                            </span>
                            {endText}
                        </h1>
                    )}
                </AttentionSeeker>
            </div>
        );
    } else {
        return (
            <div
                className={cn(
                    "relative w-full mx-auto max-w-6xl flex items-center justify-center mb-8",
                    grid ? "bg-grid-white/[0.2]" : "",
                    classname
                )}
                {...props}
            >
                {/* Background Effect */}
                {grid && (
                    <div className="absolute inset-0 w-full pointer-events-none flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                )}

                {/* Animated Heading */}
                <AttentionSeeker
                    effect="tada"
                    triggerOnce={true}
                    cascade={true}
                >
                    {cover ? (
                        <h1 className="py-12 bg-gradient-to-b from-neutral-50 to-neutral-300 text-center uppercase bg-clip-text text-transparent drop-shadow-2xl z-10">
                            {startText}
                            <EffectTextBgCover>
                                {highlightText}
                            </EffectTextBgCover>
                            <span className="pl-1">{endText}</span>
                        </h1>
                    ) : (
                        <h1 className="py-12 bg-gradient-to-b from-neutral-50 to-neutral-300 text-center uppercase bg-clip-text text-transparent drop-shadow-2xl z-10">
                            {startText}
                            <span className="bg-hOrangeSkewRectangleSvg bg-cover bg-center text-neutral-950 px-4 py-1 drop-shadow-xl">
                                {highlightText}
                            </span>
                            {endText}
                        </h1>
                    )}
                </AttentionSeeker>
            </div>
        );
    }
};
export default SimpleGridHeading;
