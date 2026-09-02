import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export function AboutDigiSailor() {
  const metrics = [
    { label: 'Years of experience', value: '13+' },
    { label: 'Team members', value: '160+' },
    { label: 'Clients supported', value: '400+' },
    { label: 'Projects completed', value: '800+' }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-primary mb-8 leading-tight">
                Backed by DigiSailor.
              </h2>
              <p className="text-xl text-secondary leading-relaxed mb-12 font-light">
                PropReach is powered by DigiSailor's <span className="text-primary font-medium">13+ years of digital experience</span> supporting property growth. 
                With 160+ people across our teams, 400+ clients supported, and 800+ projects completed, 
                we combine technology, creative thinking, and performance marketing to help property inventory move.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {metrics.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 0.1}>
                <div className="border-l border-brand pl-6">
                  <div className="text-4xl md:text-5xl font-display font-medium text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-mono text-secondary uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-md">
            <img 
              src="/images/dashboard.png" 
              alt="DigiSailor Technology Dashboard" 
              className="w-full h-[600px] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
