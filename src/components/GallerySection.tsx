import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { src: '/images/gallery1.png', alt: 'Modern luxury villa exterior', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/interior.png', alt: 'Luxury apartment interior', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/gallery3.png', alt: 'Coastal property aerial', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/gallery2.png', alt: 'Minimalist living room', span: 'md:col-span-2 md:row-span-1' },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">Editorial <span className="text-secondary">Portfolio.</span></h2>
            <p className="text-xl text-secondary">High-end visual representation that elevates your property brand.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((image, i) => (
            <Reveal key={i} delay={i * 0.1} className={`relative rounded-3xl overflow-hidden group cursor-pointer ${image.span}`}>
              <div 
                className="absolute inset-0 z-20"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-10 h-10 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
              />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-0 right-0 md:-top-6 md:-right-6 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged gallery view" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
