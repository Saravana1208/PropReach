import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-xl font-display font-medium tracking-tight text-primary flex items-center gap-2">
              <span>PropReach</span>
              <span className="text-sm font-mono font-normal text-secondary ml-1 uppercase tracking-wider">by DigiSailor</span>
            </div>
            
            <div className="hidden md:block w-px h-4 bg-border" />
            
            <nav className="flex gap-6 text-sm font-mono tracking-wider uppercase">
              <a href="#offices" className="text-secondary hover:text-brand transition-colors">Offices</a>
              <a href="#contact" className="text-secondary hover:text-brand transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-mono text-secondary">
            <p>&copy; {currentYear} DigiSailor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
