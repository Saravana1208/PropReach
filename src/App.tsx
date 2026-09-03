import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { WhyPropReach } from './components/WhyPropReach';
import { PartnershipModel } from './components/PartnershipModel';
import { Services } from './components/Services';
import { MidFunnelSection } from './components/MidFunnelSection';
import { TrackRecord } from './components/TrackRecord';
import { GallerySection } from './components/GallerySection';
import { AboutDigiSailor } from './components/AboutDigiSailor';
import { Offices } from './components/Offices';
import { ContactSection } from './components/ContactSection';
import { AnnouncementBar } from './components/AnnouncementBar';

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

function App() {
  return (
    <>
      <SmoothScroll />
      <div className="flex flex-col min-h-screen">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ValueProposition />
          <WhyPropReach />
          <PartnershipModel />
          <Services />
          <MidFunnelSection />
          <TrackRecord />
          <GallerySection />
          <AboutDigiSailor />
          <Offices />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
