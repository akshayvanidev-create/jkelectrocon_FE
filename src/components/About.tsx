
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 40 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    const stats = statsRef.current?.querySelectorAll('.stat-item');
    if (stats) {
      gsap.fromTo(stats,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-[#050B1F] via-[#0A1229] to-[#050B1F] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main heading */}
        <div ref={textRef} className="text-center space-y-8 mb-20 gsap-reveal">
          <div className="inline-block">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-blue-500/60">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white max-w-5xl mx-auto">
            JK Electrocon crafts intelligent homes that{' '}
            <span className="text-blue-500 italic font-light">anticipate your needs.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
            Premium execution. Global technology partners. Bespoke lifestyle engineering tailored to perfection.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="stat-item text-center space-y-3 group cursor-default">
            <div className="text-4xl md:text-5xl font-black text-blue-500 group-hover:scale-110 transition-transform duration-300">150+</div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-white/40 font-bold group-hover:text-white/60 transition-colors">Projects Delivered</div>
          </div>
          <div className="stat-item text-center space-y-3 group cursor-default">
            <div className="text-4xl md:text-5xl font-black text-blue-500 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-white/40 font-bold group-hover:text-white/60 transition-colors">Years Excellence</div>
          </div>
          <div className="stat-item text-center space-y-3 group cursor-default">
            <div className="text-4xl md:text-5xl font-black text-blue-500 group-hover:scale-110 transition-transform duration-300">20+</div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-white/40 font-bold group-hover:text-white/60 transition-colors">Global Brands</div>
          </div>
          <div className="stat-item text-center space-y-3 group cursor-default">
            <div className="text-4xl md:text-5xl font-black text-blue-500 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-white/40 font-bold group-hover:text-white/60 transition-colors">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
