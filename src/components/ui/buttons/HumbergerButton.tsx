import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface HamburgerButtonProps {
    toggle: boolean;
    onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
    toggle,
    onClick,
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-nowrap flex-shrink-0 flex-grow-0 items-center justify-center xl:hidden"
        >
            <button
                type="button"
                className="relative size-10 rounded-lg border-2 border-transparent button-gradient-fill"
                onClick={onClick}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                        className={cn(
                            "w-5 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                            toggle && "-translate-y-0 rotate-45"
                        )}
                    ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                        className={cn(
                            "w-5 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                            toggle && "-translate-y-0 -rotate-45"
                        )}
                    ></div>
                </div>
            </button>
        </motion.div>
    );
};

export default HamburgerButton;
