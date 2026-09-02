import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { MapPin, ExternalLink } from 'lucide-react';

const offices = [
  {
    city: 'Tuticorin',
    type: 'Headquarters',
    address: '97G/4C/1, 1st Floor, PSS Jayam Towers, Teachers Colony, Tuticorin, Tamil Nadu 628008, India',
    query: 'PSS Jayam Towers, Teachers Colony, Tuticorin'
  },
  {
    city: 'Chennai',
    type: 'Client Services',
    address: '152, 2nd Floor, Maruthi Complex, 100 Feet Road, Chennai, Tamil Nadu, India',
    query: 'Maruthi Complex, 100 Feet Road, Chennai'
  },
  {
    city: 'Tirunelveli',
    type: 'Development Center',
    address: '64, Santhini Nagar, KTC Nagar, Palayamkottai, Tirunelveli, Tamil Nadu, India',
    query: '64 Santhini Nagar, KTC Nagar, Palayamkottai'
  },
  {
    city: 'Tindivanam',
    type: 'Product Hub',
    address: 'Amusam Towers, Mailam Road, Tindivanam, Tamil Nadu, India',
    query: 'Amusam Towers, Mailam Road, Tindivanam'
  },
  {
    city: 'Vilathikulam',
    type: 'Training & Emerging Tech',
    address: '24, 1st Floor, Amman Complex, opposite Sharon Matriculation School, Vilathikulam, Tuticorin, Tamil Nadu, India',
    query: 'Amman Complex, Vilathikulam'
  },
  {
    city: 'Dindigul',
    type: 'Regional Operations',
    address: 'No. 1, Narasingapuram Road, Sirunayakkanpatti, Dindigul, Tamil Nadu 624307, India',
    query: 'No 1, Narasingapuram Road, Sirunayakkanpatti, Dindigul'
  },
  {
    city: 'Singapore',
    type: 'Asia Pacific',
    address: '316C Anchorvale Link, #05-209, Anchorvale Gardens, Singapore 543316',
    query: '316C Anchorvale Link, Singapore'
  },
  {
    city: 'Dubai',
    type: 'Middle East',
    address: '536, 5th Floor, Business Village, Deira Clock Tower, Deira, Dubai, United Arab Emirates',
    query: 'Business Village, Deira Clock Tower, Dubai'
  },
  {
    city: 'Doylestown',
    type: 'Americas',
    address: '800 West State Street, Suite 103, Doylestown, PA 18901, USA',
    query: '800 West State Street, Suite 103, Doylestown, PA'
  }
];

export function Offices() {
  return (
    <section id="offices" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">Global reach. Local presence.</h2>
            <p className="text-xl text-secondary font-light">Our offices around the world.</p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {offices.map((office, i) => (
            <Reveal key={office.city} delay={i * 0.05} className="h-full">
              <div className="group h-full p-8 rounded-[2rem] bg-background border border-border hover:border-brand hover:-translate-y-1 hover:shadow-sm transition-all duration-300 flex flex-col relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-primary group-hover:bg-brand transition-colors duration-300">
                    <MapPin size={18} />
                  </div>
                  <h3 className="text-xl font-display font-medium text-primary">{office.city}</h3>
                  <span className="text-xs font-mono px-2 py-1 bg-surface border border-border text-secondary rounded-full ml-auto uppercase tracking-wide">
                    {office.type}
                  </span>
                </div>
                <p className="text-secondary leading-relaxed mb-8 flex-grow relative z-10 font-light">
                  {office.address}
                </p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-brand transition-colors mt-auto relative z-10 w-fit group/link uppercase tracking-wider font-mono"
                  aria-label={`Open ${office.city} office in Maps`}
                >
                  Open in Maps <ExternalLink size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
