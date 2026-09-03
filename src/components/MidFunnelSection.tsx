import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';

const content = [
  {
    title: "Instant Lead Qualification",
    description: "Every lead from our campaigns is instantly engaged via WhatsApp and AI chatbots. We qualify intent, budget, and timeline before your sales team ever makes a call, ensuring zero wasted effort.",
    image: "/images/midfunnel_whatsapp.png"
  },
  {
    title: "Predictive CRM Integration",
    description: "We route all qualified leads directly into your preferred CRM (Salesforce, HubSpot, etc.) with full attribution data. Track the exact campaign that drove the site visit and monitor the pipeline in real-time.",
    image: "/images/midfunnel_crm.png"
  },
  {
    title: "High-Intent Site Visits",
    description: "Our nurturing sequences are designed for one specific outcome: physical site visits. We use automated reminders, virtual tours, and personalized follow-ups to maximize site walkthroughs.",
    image: "/images/midfunnel_sitevisit.png"
  }
];

function AlternatingBlock({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 mb-32 last:mb-0`}>
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-sm font-sans text-primary font-medium mb-6 border border-border inline-block px-4 py-1.5 rounded-full uppercase tracking-widest">{`0${index + 1}`}</div>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">{item.title}</h3>
          <p className="text-lg lg:text-xl text-secondary leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl border border-border shadow-2xl relative group h-[450px]">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
        </motion.div>
      </div>
    </div>
  );
}

export function MidFunnelSection() {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">Mid-Funnel <span className="text-secondary">Engine.</span></h2>
            <p className="text-xl text-secondary">How we turn digital interest into physical site visits.</p>
          </div>
        </Reveal>
        
        <div className="mt-24">
          {content.map((item, index) => (
            <AlternatingBlock key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
