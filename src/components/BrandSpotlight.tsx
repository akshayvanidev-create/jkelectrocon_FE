
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRANDS } from '../constants';

const BrandSpotlight: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('.brand-item');
    
    items.forEach((item) => {
      const img = item.querySelector('.brand-img-wrap');
      const content = item.querySelector('.brand-content');

      gsap.fromTo(img, 
        { opacity: 0, scale: 0.9, x: item.classList.contains('flex-row-reverse') ? 50 : -50 },
        { 
          opacity: 1, 
          scale: 1, 
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(content, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-[#050B1F] overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="mb-32">
          <h2 className="text-sm uppercase tracking-[0.5em] text-blue-500 font-black mb-6">Technology Partners</h2>
          <h3 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
            Excellence <br/>
            <span className="text-white/30 italic font-light">Meets Innovation.</span>
          </h3>
        </div>

        <div className="space-y-40 md:space-y-64">
          {BRANDS.map((brand, index) => (
            <div 
              key={brand.name} 
              className={`brand-item flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-32 items-center group`}
            >
              {/* Visual Showcase */}
              <div className="brand-img-wrap w-full md:w-3/5 relative gsap-reveal">
                <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[3rem] relative shadow-2xl shadow-blue-500/5">
                  <img 
                    src={brand.imageUrl} 
                    alt={`${brand.name} Products`}
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#050B1F]/60 to-transparent"></div>
                  
                  {/* Floating Brand Badge */}
                  <div className="absolute top-10 right-10 bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                     <span className="text-xs font-black uppercase tracking-widest text-white">{brand.name}</span>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -bottom-10 ${index % 2 === 1 ? '-left-10' : '-right-10'} w-40 h-40 border border-white/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-1000 opacity-20`}></div>
              </div>

              {/* Text Narrative */}
              <div className="brand-content w-full md:w-2/5 space-y-8 gsap-reveal">
                <div className="space-y-2">
                  <span className="text-blue-500 font-black tracking-widest uppercase text-[10px]">{brand.tagline}</span>
                  <h4 className="text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-white transition-colors">
                    {brand.name}
                  </h4>
                </div>
                
                <p className="text-xl md:text-2xl text-muted font-light leading-relaxed">
                  {brand.description}
                </p>

                <div className="pt-6">
                  <button className="relative px-10 py-4 overflow-hidden group/btn border border-white/10 rounded-full">
                    <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em] group-hover/btn:text-navy-900 transition-colors duration-500">View Products</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </button>
                </div>
                
                {/* Brand Footprint Indicator */}
                <div className="flex items-center gap-6 opacity-30 group-hover:opacity-100 transition-opacity duration-700 pt-12">
                   <div className="h-[1px] flex-grow bg-white/20"></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest tabular-nums">0{index + 1} / 0{BRANDS.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSpotlight;
