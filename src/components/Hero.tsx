import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedGridPattern } from './AnimatedGridPattern';
import { ShinyButton } from './ShinyButton';
import { Button } from './Button';
import { WordPullUp } from './WordPullUp';
import { BorderBeam } from './BorderBeam';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-10 pb-20 overflow-hidden bg-background">
      {/* 21st.dev Animated Grid Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-0 h-full w-full opacity-50"
      />
      
      {/* Brand Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand/5 blur-[120px] pointer-events-none z-0 rounded-bl-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-12 gap-16 items-center mt-8">
        
        <div className="text-left lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-border mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(196,247,36,0.8)]" />
              <span className="text-sm font-mono tracking-wide text-primary uppercase">Property Growth Partnership</span>
            </div>
          </motion.div>

          <WordPullUp
            words="Sell more. Pay after."
            className="text-6xl md:text-7xl lg:text-[96px] text-left leading-[1.02] text-primary mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-xl lg:text-2xl text-secondary mb-12 leading-relaxed text-balance max-w-2xl font-light"
          >
            <p>
              For real-estate promoters, builders, developers, brokers, and property owners. 
            </p>
            <div className="font-sans text-lg lg:text-xl text-primary bg-surface p-8 rounded-2xl border border-border shadow-sm">
              <p>
                You fund the advertising. We run the complete growth engine. We earn a pre-agreed success fee <span className="text-primary font-medium bg-brand/20 px-2 py-0.5 rounded-md inline-block">only after the property is sold.</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <ShinyButton className="w-full sm:w-auto shadow-sm h-14 flex items-center justify-center">
                Discuss a success-fee partnership
              </ShinyButton>
            </a>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 font-mono uppercase tracking-wider text-sm">
              <a href="#approach">How it works</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block lg:col-span-5"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-border bg-surface p-3 shadow-2xl">
            <BorderBeam size={250} duration={12} delay={9} colorFrom="var(--color-brand)" colorTo="var(--color-accent)" />
            <div className="rounded-[1.5rem] overflow-hidden relative">
              <img 
                src="/images/interior.png" 
                alt="Editorial Real Estate Architecture" 
                className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
