import React from 'react';
import { StickyScroll } from './StickyScroll';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

const content = [
  {
    title: "Instant Lead Qualification",
    description:
      "Every lead from our campaigns is instantly engaged via WhatsApp and AI chatbots. We qualify intent, budget, and timeline before your sales team ever makes a call, ensuring zero wasted effort.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/images/midfunnel_whatsapp.png"
          className="h-full w-full object-cover"
          alt="WhatsApp Lead Qualification"
        />
      </div>
    ),
  },
  {
    title: "Predictive CRM Integration",
    description:
      "We route all qualified leads directly into your preferred CRM (Salesforce, HubSpot, etc.) with full attribution data. Track the exact campaign that drove the site visit and monitor the pipeline in real-time.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/images/midfunnel_crm.png"
          className="h-full w-full object-cover"
          alt="CRM Integration"
        />
      </div>
    ),
  },
  {
    title: "High-Intent Site Visits",
    description:
      "Our nurturing sequences are designed for one specific outcome: physical site visits. We use automated reminders, virtual tours, and personalized follow-ups to maximize site walkthroughs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/images/midfunnel_sitevisit.png"
          className="h-full w-full object-cover"
          alt="High-Intent Site Visits"
        />
      </div>
    ),
  },
  {
    title: "Success-Fee Alignment",
    description:
      "We only win when you win. Our model is purely performance-based, meaning our entire mid-funnel technology stack is dedicated to closing the sale, not just generating top-of-funnel noise.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-brand),var(--color-accent))]">
        <div className="text-primary font-display text-4xl font-bold text-center px-4">
          Pay <br/>After <br/>Sale.
        </div>
      </div>
    ),
  },
];

export function MidFunnelSection() {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <SectionHeader 
            title="The Mid-Funnel Engine."
            subtitle="How we turn digital interest into physical site visits."
          />
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="mt-16">
            <StickyScroll content={content} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
