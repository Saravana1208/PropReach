import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export function PartnershipModel() {
  const steps = [
    {
      num: '01',
      title: 'You fund the advertising.',
      desc: 'You pay the advertising budget directly to the advertising platforms (Google, Meta, etc.). There is no large upfront marketing retainer for the core partnership.'
    },
    {
      num: '02',
      title: 'We run the whole engine.',
      desc: 'Strategy, positioning, branding, creatives, landing pages, digital advertising, lead generation, lead qualification, follow-up, CRM journeys, and sales support.'
    },
    {
      num: '03',
      title: 'We earn when you sell.',
      desc: 'We earn a pre-agreed success fee only after a confirmed property sale. The success fee is a clearly agreed fraction of the final selling price.'
    }
  ];

  return (
    <section id="approach" className="py-32 lg:py-48 bg-background border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-primary mb-6">How the partnership works.</h2>
            <p className="text-xl text-secondary font-light">A transparent, performance-led approach to property growth.</p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-12 mt-24 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-border z-0" />
          
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div className="relative z-10 flex flex-col items-center text-center bg-background pt-12 p-8 rounded-[2rem] border border-border hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group">
                <div className="w-24 h-24 rounded-full bg-surface border border-border group-hover:border-brand group-hover:bg-brand/10 flex items-center justify-center font-display text-3xl text-primary font-medium mb-8 transition-colors duration-500 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-2xl font-display font-medium text-primary mb-4 relative z-10">{step.title}</h3>
                <p className="text-secondary leading-relaxed relative z-10 font-light">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-24 relative">
            <div className="bg-surface p-8 rounded-3xl border border-border text-center max-w-3xl mx-auto shadow-sm">
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
