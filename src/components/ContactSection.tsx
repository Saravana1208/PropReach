import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { ArrowRight, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">Ready to sell more?</h2>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="relative mb-16">
            <div className="bg-background border border-border p-8 md:p-16 rounded-[2rem] shadow-sm">
              <h3 className="text-3xl font-display font-medium text-primary mb-6">The PropReach Partnership</h3>
              <p className="text-secondary text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                You fund the advertising. We run the complete growth engine. 
                We earn a pre-agreed success fee only after your property is sold. 
                No hidden retainers, just pure performance alignment.
              </p>
              
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full group transition-all text-base px-8 h-14">
                <a href="mailto:info@digisailor.com">
                  Discuss a success-fee partnership
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors font-mono">
            <Mail size={18} />
            <a href="mailto:info@digisailor.com" className="tracking-tight">
              info@digisailor.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
