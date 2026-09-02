import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils";

const animationProps = {
  initial: {
    "--x": "100%",
    scale: 0.8,
  },
  animate: {
    "--x": "-100%",
    scale: 1,
  },
  whileTap: {
    scale: 0.95,
  },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as HTMLMotionProps<"button">;

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, asChild, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          "relative rounded-full px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow",
          "bg-brand text-[#1C1917] hover:bg-brand/90",
          className,
        )}
      >
        <span
          className="relative block h-full w-full text-sm uppercase tracking-wide"
          style={{
            maskImage:
              "linear-gradient(-75deg, #1C1917 calc(var(--x) + 20%), transparent calc(var(--x) + 30%), #1C1917 calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            maskComposite: "exclude",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,transparent_calc(var(--x)+20%),rgba(255,255,255,0.5)_calc(var(--x)+25%),transparent_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>
    );
  },
);

ShinyButton.displayName = "ShinyButton";
