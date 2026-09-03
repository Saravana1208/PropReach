import React from 'react';
import { Button } from './Button';
import { ArrowRight, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-48 bg-surface border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary mb-6 leading-none">
              Ready to <span className="text-secondary">sell more?</span>
            </h2>
          </div>
        </Reveal>
        
        <Reveal delay={0.1} className="w-full">
          <div className="relative mb-16 w-full flex flex-col items-center justify-center">
            <p className="text-secondary text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto font-light text-center text-balance">
              You fund the advertising. We run the complete growth engine. 
              We earn a pre-agreed success fee only after your property is sold. 
            </p>
            
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full group transition-all duration-300 text-lg px-10 h-16">
              <a href="mailto:info@digisailor.com">
                Discuss a partnership
                <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-secondary font-mono tracking-widest uppercase text-sm mt-8">
            <a href="mailto:info@digisailor.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail size={16} /> info@digisailor.com
            </a>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2">
              100% Performance Aligned
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
