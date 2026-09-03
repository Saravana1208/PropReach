import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { Building, Building2, Factory, Castle, Home, Landmark, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, useInView, useSpring, useTransform, AnimatePresence } from 'framer-motion';

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { duration: 2500, bounce: 0 });
  
  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  const display = useTransform(spring, (current) => Math.floor(current));

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const testimonials = [
  {
    quote: "PropReach completely transformed our sales pipeline. We sold 42 units in 60 days without the upfront risk of traditional agencies.",
    name: "Arun Kumar",
    role: "VP of Sales",
    company: "Prestige Group",
    initial: "A"
  },
  {
    quote: "Their mid-funnel technology is incredible. We went from 500 dead leads to 45 qualified site visits in a single week.",
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Sobha Developers",
    initial: "P"
  },
  {
    quote: "The success-fee model aligns everyone perfectly. When they win, we win. Highly recommend their complete growth engine.",
    name: "Rahul Mehta",
    role: "Founder",
    company: "RM Estates",
    initial: "R"
  }
];

export function AboutDigiSailor() {
  const metrics = [
    { label: 'Years of experience', value: 13, suffix: '+' },
    { label: 'Team members', value: 160, suffix: '+' },
    { label: 'Clients supported', value: 400, suffix: '+' },
    { label: 'Projects completed', value: 800, suffix: '+' }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-background border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center mb-32">
        
        <div>
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-8 leading-tight">
                Backed by <span className="text-secondary"><a href="https://www.digisailor.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">DigiSailor.</a></span>
              </h2>
              <p className="text-xl text-secondary leading-relaxed mb-12">
                PropReach is powered by <a href="https://www.digisailor.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">DigiSailor's</a> <span className="text-primary font-bold">13+ years of digital experience</span> supporting property growth. 
                With 160+ people across our teams, 400+ clients supported, and 800+ projects completed, 
                we combine technology, creative thinking, and performance marketing to help property inventory move.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {metrics.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 0.1}>
                <div className="border-l border-primary/20 pl-6">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-2">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-sm font-sans font-bold text-secondary uppercase tracking-widest">
                    {metric.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3} className="h-full">
          <div className="h-full flex flex-col justify-center bg-surface border border-border p-8 md:p-12 shadow-sm">
            <h3 className="text-xl font-bold tracking-tight text-primary mb-8 text-center uppercase">Trusted across the industry</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 opacity-60">
              <div className="flex flex-col items-center gap-3 font-sans font-bold text-primary hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Building className="w-10 h-10" /> SOBHA
              </div>
              <div className="flex flex-col items-center gap-3 font-sans font-bold text-primary hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Castle className="w-10 h-10" /> PRESTIGE
              </div>
              <div className="flex flex-col items-center gap-3 font-sans font-bold text-primary hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Building2 className="w-10 h-10" /> GODREJ
              </div>
              <div className="flex flex-col items-center gap-3 font-sans font-bold text-primary hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Factory className="w-10 h-10" /> DLF
              </div>
              <div className="flex flex-col items-center gap-3 font-sans font-bold text-primary hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Home className="w-10 h-10" /> LODHA
              </div>
              <div className="flex flex-col items-center gap-3 font-sans font-bold text-primary hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Landmark className="w-10 h-10" /> BRIGADE
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* Testimonials matched to FIND Real Estate style */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 border-t border-border pt-24">
        <Reveal delay={0.4}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Don’t Take Our Word for It.</h2>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="relative min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-12 text-primary text-balance">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div className="flex flex-col items-center justify-center">
                    <div className="font-bold text-lg text-primary">{testimonials[activeTestimonial].name}</div>
                    <div className="text-secondary font-medium tracking-wide">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface hover:border-primary transition-colors text-primary"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface hover:border-primary transition-colors text-primary"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
