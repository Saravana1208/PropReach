import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { cn } from '../utils';

const navLinks = [
  { name: 'Approach', path: '#approach' },
  { name: 'Services', path: '#services' },
  { name: 'About Us', path: '#about' },
  { name: 'Offices', path: '#offices' }
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
          'sticky top-0 z-40 transition-all duration-300 border-b w-full',
          scrolled ? 'bg-background/90 backdrop-blur-xl py-4 border-border/50 shadow-sm' : 'bg-transparent py-6 border-transparent'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-xl text-primary z-50 flex flex-col uppercase leading-none">
            <span>PropReach</span>
            <span className="text-[10px] text-secondary tracking-widest mt-0.5">by <a href="https://www.digisailor.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">DigiSailor</a></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-[15px] font-medium text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <Button asChild size="md" className="rounded-full">
                <a href="#contact">Partner with us</a>
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
            <nav className="flex-1 flex flex-col gap-6 text-3xl font-bold mt-10 tracking-tight">
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
                    className="text-primary hover:text-secondary transition-colors block py-2"
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
                <Button asChild size="lg" className="w-full justify-center">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Partner with us</a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
