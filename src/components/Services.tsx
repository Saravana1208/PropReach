import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';
import { cn } from '../utils';

const services = [
  {
    title: 'Launch strategy',
    desc: 'Deep market analysis and positioning to ensure your property stands out.',
    image: '/images/about-team.jpg'
  },
  {
    title: 'Brand identity',
    desc: 'High-end visuals, copywriting, and brand assets that build trust and desire.',
    image: '/images/approach-model.jpg'
  },
  {
    title: 'Performance marketing',
    desc: 'Laser-targeted advertising across Google, Meta, and niche platforms.',
    image: '/images/gallery1.png'
  },
  {
    title: 'Landing pages',
    desc: 'Conversion-optimized digital experiences designed to capture high-intent buyers.',
    image: '/images/gallery2.png'
  },
  {
    title: 'Lead qualification',
    desc: 'Rapid response protocols to ensure no qualified lead goes cold.',
    image: '/images/gallery3.png'
  },
  {
    title: 'CRM integration',
    desc: 'Full-stack technology integration to arm your sales team with actionable data.',
    image: '/images/interior.png'
  }
];

export function Services() {
  return (
    <section id="services" className="dark-section py-32 lg:py-48 bg-background text-primary">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              The complete <span className="text-secondary">growth engine.</span>
            </h2>
            <p className="text-xl text-secondary">
              You fund the advertising. We take care of the rest.
            </p>
          </div>
        </Reveal>
        
        <div className="flex flex-col border-t border-border mt-16">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.1}>
              <div className="group relative border-b border-border py-12 cursor-pointer flex flex-col md:flex-row md:items-center justify-between overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-black/60 z-10" />
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center w-full gap-8 md:gap-16">
                  <div className="flex items-start md:items-center gap-8 md:gap-16 md:w-1/2">
                    <span className="text-sm font-mono tracking-widest text-secondary uppercase bg-surface/50 backdrop-blur-md px-3 py-1 rounded-full border border-border">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg text-secondary group-hover:text-white/80 transition-colors duration-300 max-w-xs font-light">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between md:w-1/2">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-primary group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowRight className="text-primary group-hover:text-white group-hover:translate-x-2 transition-all duration-300 w-8 h-8 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
