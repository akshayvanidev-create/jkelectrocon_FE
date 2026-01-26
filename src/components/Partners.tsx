
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-background border-y border-button/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm uppercase tracking-widest text-hover">Crafted with global smart-home leaders</p>
      </div>
      
      <div className="flex w-fit animate-scroll whitespace-nowrap">
        {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
          <div key={idx} className="mx-8 md:mx-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
