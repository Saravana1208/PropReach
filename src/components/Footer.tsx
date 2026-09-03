import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-xl font-bold tracking-tight text-primary flex items-center gap-2 uppercase leading-none">
              <span>PropReach</span>
              <span className="text-[10px] text-secondary tracking-widest mt-0.5">by DigiSailor</span>
            </div>
            
            <div className="hidden md:block w-px h-4 bg-border" />
            
            <nav className="flex gap-6 text-[13px] font-sans tracking-widest uppercase font-medium">
              <a href="#offices" className="text-secondary hover:text-primary transition-colors">Offices</a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-[13px] font-sans tracking-widest uppercase font-medium text-secondary">
            <p>&copy; {currentYear} DigiSailor.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
