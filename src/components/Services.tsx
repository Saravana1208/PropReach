import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { Rocket, PenTool, Target, Monitor, PhoneCall, Workflow } from 'lucide-react';
import { cn } from '../utils';

const services = [
  {
    icon: Rocket,
    title: 'Launch strategy and positioning',
    desc: 'Deep market analysis and positioning to ensure your property stands out.',
    image: '/images/aerial.png'
  },
  {
    icon: PenTool,
    title: 'Brand identity and campaign creative',
    desc: 'High-end visuals, copywriting, and brand assets that build trust and desire.',
    image: '/images/interior.png'
  },
  {
    icon: Target,
    title: 'Performance marketing and lead generation',
    desc: 'Laser-targeted advertising across Google, Meta, and niche platforms.',
    image: '/images/dashboard.png'
  },
  {
    icon: Monitor,
    title: 'Landing pages and websites',
    desc: 'Conversion-optimized digital experiences designed to capture high-intent buyers.',
    image: '/images/hero.png'
  },
  {
    icon: PhoneCall,
    title: 'Lead qualification and follow-up',
    desc: 'Rapid response protocols to ensure no qualified lead goes cold.',
    image: '/images/interior.png'
  },
  {
    icon: Workflow,
    title: 'CRM, WhatsApp, reporting, and sales enablement',
    desc: 'Full-stack technology integration to arm your sales team with actionable data.',
    image: '/images/dashboard.png'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 lg:py-48 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <SectionHeader 
            title="The complete growth engine."
            subtitle="You fund the advertising. We take care of the rest."
          />
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1} className="h-full">
              <div className="group h-full flex flex-col bg-background rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-all duration-500">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative bg-background">
                  <div className="w-12 h-12 rounded-full bg-brand text-primary flex items-center justify-center mb-6 absolute -top-6 right-8 border-4 border-background group-hover:bg-primary group-hover:text-background transition-colors duration-300 shadow-sm">
                    <service.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-display font-medium text-primary mb-3 leading-tight">{service.title}</h3>
                  <p className="text-secondary leading-relaxed font-light">{service.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
