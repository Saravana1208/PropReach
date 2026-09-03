import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Building, Building2, Factory, Castle } from 'lucide-react';
import { Button } from './Button';
import { BorderBeam } from './BorderBeam';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        
        <div className="text-left lg:col-span-7 pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-sm font-sans tracking-widest text-secondary uppercase mb-6 font-medium">
              Property Growth Partnership
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl lg:text-[88px] text-left leading-[1.05] text-primary mb-6 font-bold tracking-tight"
          >
            Sell more. <br className="hidden md:block" /> 
            <span className="text-secondary">Pay after.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-secondary mb-10 leading-relaxed max-w-2xl font-normal text-balance"
          >
            For real-estate promoters, builders, developers, brokers, and property owners. You fund the advertising. We run the complete growth engine. We earn a pre-agreed success fee only after the property is sold.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full group transition-all duration-300 text-base px-8 h-14">
              <a href="#contact">
                Discuss a partnership
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 uppercase tracking-widest text-xs font-semibold px-8 border-border">
              <a href="#approach">How it works</a>
            </Button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border pt-8"
          >
            <p className="text-xs font-sans text-secondary uppercase tracking-widest font-medium mb-6">
              Trusted by 400+ property developers
            </p>
            <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-60">
              <div className="flex items-center gap-2 font-sans text-lg font-bold text-primary hover:opacity-100 transition-opacity cursor-pointer">
                <Building className="w-6 h-6" /> SOBHA
              </div>
              <div className="flex items-center gap-2 font-sans text-lg font-bold text-primary hover:opacity-100 transition-opacity cursor-pointer">
                <Castle className="w-6 h-6" /> PRESTIGE
              </div>
              <div className="flex items-center gap-2 font-sans text-lg font-bold text-primary hover:opacity-100 transition-opacity cursor-pointer">
                <Building2 className="w-6 h-6" /> GODREJ
              </div>
              <div className="flex items-center gap-2 font-sans text-lg font-bold text-primary hover:opacity-100 transition-opacity cursor-pointer">
                <Factory className="w-6 h-6" /> DLF
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block lg:col-span-5"
        >
          <div className="relative rounded-3xl overflow-hidden bg-surface shadow-2xl">
            <div className="rounded-3xl overflow-hidden relative group aspect-[4/5]">
              <img 
                src="/images/interior.png" 
                alt="Editorial Real Estate Architecture" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
