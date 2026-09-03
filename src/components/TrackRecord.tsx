import React from 'react';
import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    image: '/images/gallery1.png',
    type: 'Luxury Villas',
    status: 'Sold Out'
  },
  {
    image: '/images/interior.png',
    type: 'Penthouse Suites',
    status: '90% Cleared'
  },
  {
    image: '/images/gallery3.png',
    type: 'Coastal Apartments',
    status: 'Sold'
  },
  {
    image: '/images/gallery2.png',
    type: 'Urban Condos',
    status: 'Launched'
  },
  {
    image: '/images/gallery1.png',
    type: 'Commercial Hub',
    status: 'Fully Leased'
  },
  {
    image: '/images/interior.png',
    type: 'Boutique Hotel',
    status: 'Acquired'
  },
  {
    image: '/images/gallery3.png',
    type: 'Waterfront Estate',
    status: 'Sold Out'
  },
  {
    image: '/images/gallery2.png',
    type: 'High-Rise Towers',
    status: 'Phase 1 Closed'
  }
];

export function TrackRecord() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <Reveal>
          <div className="max-w-3xl mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold uppercase tracking-tight text-primary leading-[1.05] mb-8">
              Here are a few projects we've helped accelerate.
            </h2>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1 text-[13px] font-sans font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
            >
              See our track record <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="pl-6 md:pl-[calc((100vw-1400px)/2+24px)] overflow-hidden">
        <div className="flex overflow-x-auto gap-6 md:gap-8 pb-12 pr-6 md:pr-24 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex-none w-[280px] md:w-[350px] snap-start flex flex-col group cursor-pointer ${index % 2 === 0 ? 'lg:mt-24' : 'lg:mt-0'}`}
            >
              <div className="overflow-hidden bg-surface aspect-[3/4] mb-4">
                <img 
                  src={project.image} 
                  alt={project.type} 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="flex justify-between items-center text-[11px] font-sans font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
