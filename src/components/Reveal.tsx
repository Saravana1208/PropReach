import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { cn } from '../utils';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function Reveal({ children, width = '100%', delay = 0, direction = 'up', className }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion || direction === 'none' ? 0 : direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: shouldReduceMotion || direction === 'none' ? 0 : direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
    },
  };

  return (
    <div ref={ref} style={{ width }} className={cn(className, className?.includes('h-full') && 'h-full')}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className={cn(className?.includes('h-full') && 'h-full')}
      >
        {children}
      </motion.div>
    </div>
  );
}
