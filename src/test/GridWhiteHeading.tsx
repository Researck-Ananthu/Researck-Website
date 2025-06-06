import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import { cn } from "@/lib/utils";
import {EffectTextBgCover} from "@/components/ui/container/EffectTextBgCover";

interface GridWhiteHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    start: string;
    highlight: string;
    end: string;
    classname?: string;
    grid?: boolean;
    cover?: boolean;
}

const GridWhiteHeading: React.FC<GridWhiteHeadingProps> = ({
    start,
    highlight,
    end,
    classname,
    grid = true,
    cover = false,
    ...props
}) => {
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
            <AttentionSeeker effect="tada" triggerOnce={true} cascade={true}>
                {cover ? (
                    <h1 className=" py-12 max-w-6xl mb-2.5 bg-gradient-to-b from-neutral-700 to-neutral-950 text-center uppercase bg-clip-text text-transparent drop-shadow-2xl z-10">
                        {start}
                        <EffectTextBgCover>{highlight}</EffectTextBgCover>
                        <span className="pl-1">{end}</span>
                    </h1>
                    ) :(
                    <h1 className="py-12 max-w-6xl mb-2.5 bg-gradient-to-b from-neutral-700 to-neutral-950 text-center uppercase bg-clip-text text-transparent drop-shadow-2xl z-10">
                        {start}
                        <span className="bg-hOrangeSkewRectangleSvg bg-cover bg-center text-white px-4 py-1 drop-shadow-xl">
                        {highlight}
                    </span>
                        {end}
                    </h1>
                )}
            </AttentionSeeker>
        </div>
    );
};

export default GridWhiteHeading;
