import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "../utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  
  const cardLength = content.length;

  scrollYProgress.on("change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-between relative lg:space-x-10 rounded-[2rem] p-10 bg-background border border-border shadow-sm"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full lg:w-1/2">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-32 first:mt-10 last:mb-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-display font-medium text-primary mt-10"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-secondary mt-6 leading-relaxed font-light"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-[400px] w-full lg:w-1/2 rounded-[2rem] bg-white sticky top-32 overflow-hidden shadow-xl border border-border",
          contentClassName
        )}
      >
        {content[activeCard].content}
      </div>
    </motion.div>
  );
};
