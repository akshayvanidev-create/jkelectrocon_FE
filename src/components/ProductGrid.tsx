
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
    <section ref={containerRef} id="solutions" className="py-12 md:py-20 px-4 md:px-12 lg:px-20 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-24 gap-4 md:gap-8 max-w-4xl mx-auto">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-hover font-black">Premium Solutions</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter text-button">
            Smart Living,<br/>
            <span className="text-hover italic font-light">Redefined.</span>
          </h3>
          <p className="text-text text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl px-4">
            Experience the perfect fusion of cutting-edge technology and timeless design. Our intelligent automation systems transform your space into a sanctuary of comfort, efficiency, and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id}
              className="luxury-card group relative bg-card border border-button/20 rounded-2xl md:rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:bg-hover/10 hover:border-hover hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 space-y-3 md:space-y-4">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-button group-hover:text-hover transition-colors duration-500">
                  {product.title}
                </h4>
                <p className="text-sm md:text-base text-text font-light leading-relaxed line-clamp-3 group-hover:text-hover transition-colors duration-500">
                  {product.description}
                </p>
                
                <div className="pt-6 flex items-center justify-between">
                  <div className="h-[1px] flex-grow bg-button/20 group-hover:bg-hover/50 transition-colors duration-700"></div>
                  <button className="flex items-center gap-3 pl-6 group/btn">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-hover group-hover/btn:text-button transition-all">Details</span>
                    <div className="w-8 h-8 rounded-full bg-button/10 border border-button/20 flex items-center justify-center group-hover/btn:bg-hover group-hover/btn:border-hover transition-all">
                      <svg className="w-3 h-3 text-button" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Accent Glow */}
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-hover/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
