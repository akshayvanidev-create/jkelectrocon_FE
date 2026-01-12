
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = containerRef.current?.querySelectorAll('.luxury-card');
    if (!cards) return;

    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 40,
        scale: 0.95
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="solutions" className="py-20 px-4 md:px-20 bg-[#050B1F]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-sm uppercase tracking-[0.6em] text-blue-500 font-black mb-6">Expertise</h2>
            <h3 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
              Bespoke <br/>
              <span className="text-white/30 italic font-light">Solutions.</span>
            </h3>
          </div>
          <p className="text-muted max-w-md text-xl font-light leading-relaxed">
            Engineered for longevity, designed for comfort. We integrate world-class hardware with intuitive software to create the ultimate living experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id}
              className="luxury-card group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-[#050B1F]/20 to-transparent"></div>
                
                {/* Index Indicator */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center">
                  <span className="text-xs font-black tabular-nums text-white/40 group-hover:text-blue-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 space-y-4">
                <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-500">
                  {product.title}
                </h4>
                <p className="text-muted font-light leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors duration-500">
                  {product.description}
                </p>
                
                <div className="pt-6 flex items-center justify-between">
                  <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-blue-500/50 transition-colors duration-700"></div>
                  <button className="flex items-center gap-3 pl-6 group/btn">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover/btn:text-white transition-all">Details</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-blue-500 group-hover/btn:border-blue-500 transition-all">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Accent Glow */}
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
