import React from 'react';
import { Reveal } from './Reveal';
import img1 from '../assets/aerial-view-of-suburban-homes-with-red-tile-roofs-2026-03-17-06-41-24-utc.jpg';
import img2 from '../assets/modern-residential-building-with-a-blue-sky-backdr-2026-03-25-22-54-48-utc.jpg';
import img3 from '../assets/professionals-strolling-near-suburban-house-during-2026-03-10-03-18-32-utc.jpg';
import img4 from '../assets/row-houses-in-berlin-with-blue-sky-2026-03-25-22-53-00-utc.jpg';

export function ValueProposition() {
  const images = [
    img1,
    img2,
    img3,
    img4,
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-primary">
              This isn't just <span className="text-secondary">about marketing.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col md:flex-row h-[300px] md:h-[400px] lg:h-[500px] gap-1 md:gap-2">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="relative w-full md:w-1/4 h-full"
                style={{
                  clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)',
                }}
              >
                <img 
                  src={src} 
                  alt={`Value proposition visual ${index + 1}`}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="text-center mt-16 md:mt-24 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-primary leading-snug">
              It's about conversion. Momentum. Clearing inventory.<br />
              You're not just looking for a campaign. <span className="text-secondary font-light">You're looking<br />
              for closed deals. That's what we deliver.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
