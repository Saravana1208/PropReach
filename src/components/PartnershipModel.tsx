import React from 'react';
import { Reveal } from './Reveal';
import { Wallet, Settings, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function PartnershipModel() {
  const steps = [
    {
      icon: Wallet,
      title: 'You fund the advertising.',
      desc: 'You pay the advertising budget directly to the advertising platforms (Google, Meta, etc.). There is no large upfront marketing retainer.'
    },
    {
      icon: Settings,
      title: 'We run the whole engine.',
      desc: 'Strategy, positioning, branding, creatives, landing pages, digital advertising, lead generation, lead qualification, CRM journeys.'
    },
    {
      icon: TrendingUp,
      title: 'We earn when you sell.',
      desc: 'We earn a pre-agreed success fee only after a confirmed property sale. The success fee is a fraction of the final selling price.'
    }
  ];

  return (
    <section id="approach" className="py-32 lg:py-48 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">How it <span className="text-secondary">works.</span></h2>
            <p className="text-xl text-secondary">A transparent, performance-led approach to property growth.</p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-12 mt-24 relative">
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px bg-border z-0" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[1px] bg-primary origin-left z-0" 
          />
          
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.2}>
              <div className="relative z-10 flex flex-col items-center text-center bg-surface pt-0 p-8 group cursor-default">
                <div className="w-24 h-24 rounded-full bg-background border border-border group-hover:border-primary flex items-center justify-center text-primary mb-8 transition-colors duration-500 relative z-10 shadow-sm">
                  <step.icon strokeWidth={1} size={36} className="text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-primary mb-4 relative z-10">{step.title}</h3>
                <p className="text-secondary leading-relaxed relative z-10">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="mt-24 relative">
            <div className="bg-background p-8 rounded-3xl border border-border text-center max-w-3xl mx-auto">
              <p className="text-secondary">
                <strong className="text-primary font-medium tracking-wide">Note:</strong> The exact success-fee percentage, payment trigger, attribution rules, and terms are clearly agreed in writing before any campaign begins.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
