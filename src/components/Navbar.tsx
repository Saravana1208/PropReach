import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { cn } from '../utils';

const navLinks = [
  { name: 'Approach', path: '#approach' },
  { name: 'Services', path: '#services' },
  { name: 'About DigiSailor', path: '#about' },
  { name: 'Offices', path: '#offices' },
  { name: 'Contact', path: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent',
          scrolled ? 'bg-background/80 backdrop-blur-md py-3 border-border/50 shadow-sm' : 'bg-background py-5'
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#" className="text-xl font-display font-medium tracking-tight text-primary z-50 flex items-center gap-2 relative group">
            <span>PropReach</span>
            <span className="text-sm font-mono font-normal text-secondary ml-1 uppercase tracking-wider">by DigiSailor</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-sm font-mono tracking-wider uppercase text-secondary hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button asChild size="sm">
                <a href="#contact">Discuss a success-fee partnership</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-30 bg-background pt-24 px-6 flex flex-col"
          >
            <nav className="flex-1 flex flex-col gap-6 text-2xl font-semibold mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <a
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-primary hover:text-brand transition-colors block py-2"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button asChild size="lg" className="w-full">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Discuss a success-fee partnership</a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
