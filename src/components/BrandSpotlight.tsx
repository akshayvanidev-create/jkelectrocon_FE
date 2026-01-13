
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRANDS } from '../constants';

const BrandSpotlight: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('.brand-item');
    
    items.forEach((item) => {
      // Scroll animation
      gsap.fromTo(item, 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Hover animations
      const img = item.querySelector('.brand-img-wrap');
      const badge = item.querySelector('.brand-badge');
      const title = item.querySelector('.brand-title');
      const description = item.querySelector('.brand-description');
      const button = item.querySelector('.brand-button');
      const bgGlow = item.querySelector('.brand-bg-glow');

      item.addEventListener('mouseenter', () => {
        gsap.to(bgGlow, { opacity: 1, scale: 1.05, duration: 0.6, ease: "power2.out" });
        gsap.to(img, { scale: 1.05, duration: 0.8, ease: "power2.out" });
        gsap.to(badge, { y: -5, duration: 0.4, ease: "back.out(2)" });
        gsap.to(title, { x: 10, duration: 0.5, ease: "power2.out" });
        gsap.to(description, { x: 5, duration: 0.5, delay: 0.1, ease: "power2.out" });
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "back.out(2)" });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(bgGlow, { opacity: 0, scale: 1, duration: 0.6, ease: "power2.in" });
        gsap.to(img, { scale: 1, duration: 0.8, ease: "power2.in" });
        gsap.to(badge, { y: 0, duration: 0.4, ease: "power2.in" });
        gsap.to(title, { x: 0, duration: 0.5, ease: "power2.in" });
        gsap.to(description, { x: 0, duration: 0.5, ease: "power2.in" });
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.in" });
      });
    });
  }, []);

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-[#050B1F] overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-32">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] text-blue-500 font-black mb-4 md:mb-6">Technology Partners</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            Excellence <br/>
            <span className="text-white/30 italic font-light">Meets Innovation.</span>
          </h3>
        </div>

        <div className="space-y-20 md:space-y-40 lg:space-y-64">
          {BRANDS.map((brand, index) => (
            <div 
              key={brand.name} 
              className={`brand-item relative flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 lg:gap-32 items-center group cursor-pointer p-6 md:p-10 lg:p-16`}
            >
              {/* Animated Background Glow */}
              <div className="brand-bg-glow absolute inset-0 -z-10 opacity-0 rounded-[4rem]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-600/5"></div>
              </div>

              {/* Visual Showcase */}
              <div className="brand-img-wrap w-full md:w-3/5 relative">
                <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[3rem] relative shadow-2xl shadow-blue-500/10 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <img 
                    src={brand.imageUrl} 
                    alt={`${brand.name} Products`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#050B1F]/60 to-transparent group-hover:from-[#050B1F]/40 transition-colors duration-500"></div>
                  
                  {/* Floating Brand Badge */}
                  <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 md:px-8 md:py-4 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                     <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white">{brand.name}</span>
                  </div>
                </div>
              </div>

              {/* Text Narrative */}
              <div className="brand-content w-full md:w-2/5 space-y-4 md:space-y-8">
                <div className="space-y-2">
                  <span className="brand-badge inline-block text-blue-400 font-black tracking-widest uppercase text-[9px] md:text-[10px] px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">{brand.tagline}</span>
                  <h4 className="brand-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter group-hover:text-blue-400 transition-colors duration-300">
                    {brand.name}
                  </h4>
                </div>
                
                <p className="brand-description text-base md:text-xl lg:text-2xl text-muted font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {brand.description}
                </p>

                <div className="brand-button pt-6">
                  <a 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative px-10 py-4 overflow-hidden group/btn border border-white/20 rounded-full inline-block bg-white hover:shadow-lg hover:shadow-white/20 transition-shadow duration-300"
                  >
                    <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em] text-[#050B1F] group-hover/btn:text-white transition-colors duration-500">View Products</span>
                    <div className="absolute inset-0 bg-[#050B1F] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </a>
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
