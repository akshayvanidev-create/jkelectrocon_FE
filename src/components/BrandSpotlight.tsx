
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
      const badge = item.querySelector('.brand-badge');
      const title = item.querySelector('.brand-title');
      const description = item.querySelector('.brand-description');
      const button = item.querySelector('.brand-button');
      const bgGlow = item.querySelector('.brand-bg-glow');

      // Initial state for highlight elements
      gsap.set([bgGlow, img, badge, title, description, button], {
        clearProps: 'all',
      });
      gsap.set(bgGlow, { opacity: 0, scale: 1 });
      gsap.set(img, { scale: 1 });
      gsap.set(badge, { y: 0 });
      gsap.set(title, { x: 0 });
      gsap.set(description, { x: 0 });
      gsap.set(button, { scale: 1 });

      // Scroll-triggered highlight animation
      ScrollTrigger.create({
        trigger: item,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => {
          gsap.to(bgGlow, { opacity: 1, scale: 1.05, duration: 0.7, ease: 'power2.out' });
          gsap.to(img, { scale: 1.05, duration: 0.8, ease: 'power2.out' });
          gsap.to(badge, { y: -5, duration: 0.4, ease: 'back.out(2)' });
          gsap.to(title, { x: 10, duration: 0.5, ease: 'power2.out' });
          gsap.to(description, { x: 5, duration: 0.5, delay: 0.1, ease: 'power2.out' });
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'back.out(2)' });
        },
        onEnterBack: () => {
          gsap.to(bgGlow, { opacity: 1, scale: 1.05, duration: 0.7, ease: 'power2.out' });
          gsap.to(img, { scale: 1.05, duration: 0.8, ease: 'power2.out' });
          gsap.to(badge, { y: -5, duration: 0.4, ease: 'back.out(2)' });
          gsap.to(title, { x: 10, duration: 0.5, ease: 'power2.out' });
          gsap.to(description, { x: 5, duration: 0.5, delay: 0.1, ease: 'power2.out' });
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'back.out(2)' });
        },
        onLeave: () => {
          gsap.to(bgGlow, { opacity: 0, scale: 1, duration: 0.6, ease: 'power2.in' });
          gsap.to(img, { scale: 1, duration: 0.8, ease: 'power2.in' });
          gsap.to(badge, { y: 0, duration: 0.4, ease: 'power2.in' });
          gsap.to(title, { x: 0, duration: 0.5, ease: 'power2.in' });
          gsap.to(description, { x: 0, duration: 0.5, ease: 'power2.in' });
          gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.in' });
        },
        onLeaveBack: () => {
          gsap.to(bgGlow, { opacity: 0, scale: 1, duration: 0.6, ease: 'power2.in' });
          gsap.to(img, { scale: 1, duration: 0.8, ease: 'power2.in' });
          gsap.to(badge, { y: 0, duration: 0.4, ease: 'power2.in' });
          gsap.to(title, { x: 0, duration: 0.5, ease: 'power2.in' });
          gsap.to(description, { x: 0, duration: 0.5, ease: 'power2.in' });
          gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.in' });
        },
      });

      // Fade/slide in the item itself
      gsap.fromTo(item, 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-background overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-32">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] text-hover font-black mb-4 md:mb-6">Technology Partners</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-button">
            Excellence <br/>
            <span className="text-hover italic font-light">Meets Innovation.</span>
          </h3>
        </div>

        <div className="space-y-20 md:space-y-40 lg:space-y-64">
          {BRANDS.map((brand, index) => (
            <div 
              key={brand.name} 
              className={`brand-item relative flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 lg:gap-32 items-center p-6 md:p-10 lg:p-16`}
            >
              {/* Animated Background Glow */}
                <div className="brand-bg-glow absolute inset-0 -z-10 opacity-0 rounded-[4rem]">
                  <div className="absolute inset-0 bg-gradient-to-r from-button/10 via-hover/10 to-button/10 blur-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hover/5 to-button/5"></div>
                </div>

              {/* Visual Showcase */}
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-img-wrap w-full md:w-3/5 relative block group"
                tabIndex={0}
                aria-label={`Visit ${brand.name} website`}
              >
                <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[3rem] relative shadow-2xl shadow-button/10 transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={brand.imageUrl} 
                    alt={`${brand.name} Products`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent transition-colors duration-500"></div>
                </div>
              </a>

              {/* Text Narrative */}
              <div className="brand-content w-full md:w-2/5 space-y-4 md:space-y-8">
                <div className="space-y-2">
                  <span className="brand-badge inline-block text-hover font-black tracking-widest uppercase text-[9px] md:text-[10px] px-3 py-1 bg-hover/10 rounded-full border border-hover/20 transition-all duration-300">{brand.tagline}</span>
                  <h4 className="brand-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter transition-colors duration-300 text-button">
                    {brand.name}
                  </h4>
                </div>
                
                <p className="brand-description text-base md:text-xl text-text font-light leading-relaxed transition-colors duration-300">
                  {brand.description}
                </p>

                <div className="brand-button pt-6">
                  <a 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-10 py-4 overflow-hidden border border-button rounded-full inline-block bg-button transition-shadow duration-300 shadow-2xl shadow-button/20 hover:bg-hover hover:border-hover"
                  >
                    <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em] text-background group-hover:text-background transition-colors duration-500">View Products</span>
                    <div className="absolute inset-0 bg-hover translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </a>
                </div>
                
                {/* Brand Footprint Indicator */}
                 <div className="flex items-center gap-6 opacity-30 transition-opacity duration-700 pt-12">
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
