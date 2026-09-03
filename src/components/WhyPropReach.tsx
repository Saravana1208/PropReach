import React from 'react';
import { Reveal } from './Reveal';

export function WhyPropReach() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
            <div className="md:col-span-3 lg:col-span-4">
              <h3 className="text-xs font-sans tracking-widest text-primary uppercase font-bold mt-2">
                Why PropReach
              </h3>
            </div>
            <div className="md:col-span-9 lg:col-span-8">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-primary leading-[1.1]">
                The market is shifting. Don't just list a property — command the market.{' '}
                <span className="text-secondary font-medium">
                  We help you clear inventory with speed, precision, and an elite growth engine by your side.
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl relative bg-surface">
            {/* 
              Using a reliable Mixkit architectural stock video for the demo.
              Replace with your actual local or hosted real estate video.
            */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale-[10%]"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-skyscrapers-in-the-afternoon-4217-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
