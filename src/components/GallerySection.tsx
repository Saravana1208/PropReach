import React from 'react';
import { Reveal } from './Reveal';

const images = [
  { src: '/images/gallery1.png', alt: 'Modern luxury villa exterior', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/interior.png', alt: 'Luxury apartment interior', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/gallery3.png', alt: 'Coastal property aerial', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/gallery2.png', alt: 'Minimalist living room', span: 'md:col-span-2 md:row-span-1' },
];

export function GallerySection() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">Premium Editorial Portfolio</h2>
            <p className="text-xl text-secondary font-light">High-end visual representation that elevates your property brand.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((image, i) => (
            <Reveal key={i} delay={i * 0.1} className={`relative rounded-3xl overflow-hidden group ${image.span}`}>
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
