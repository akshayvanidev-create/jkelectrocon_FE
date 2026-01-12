
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SLIDE_DATA = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
    title: "Elegance that Anticipates.",
    subtitle: "Architecting high-fidelity smart living for the next generation."
  },
  {
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=2000",
    title: "Cinematic Immersion.",
    subtitle: "Experience studio-grade acoustics in the comfort of your sanctuary."
  },
  {
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000",
    title: "Seamless Orchestration.",
    subtitle: "Complete control of your environment with a single intuitive touch."
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
    title: "Invisible Intelligence.",
    subtitle: "Advanced ERV & purification systems for a healthier, purer home."
  }
];

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Preload all images
  useEffect(() => {
    const imagePromises = SLIDE_DATA.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Still set to true even on error
  }, []);

  // 1. Initial Entrance Animation (Runs once after images loaded)
  useEffect(() => {
    if (!imagesLoaded) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.fromTo(badgeRef.current, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    )
    .fromTo(titleRef.current, 
      { opacity: 0, y: 80, skewY: 5 }, 
      { opacity: 1, y: 0, skewY: 0, duration: 1.5 }, 
      "-=0.5"
    )
    .fromTo(paraRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=1"
    )
    .fromTo(btnRef.current, 
      { opacity: 0, scale: 0.9, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1 }, 
      "-=0.8"
    );

    // Initial slide zoom
    gsap.to(slideRefs.current[0], { scale: 1.1, duration: 8, ease: "none" });

    // Parallax effect on the entire slider container
    gsap.to(".hero-slider-container", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, [imagesLoaded]);

  // 2. Slide and Text Transition Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % SLIDE_DATA.length;
      
      const outgoing = slideRefs.current[currentSlide];
      const incoming = slideRefs.current[nextSlide];

      if (outgoing && incoming) {
        // Background transition
        gsap.to(outgoing, { opacity: 0, duration: 2, ease: "power2.inOut" });
        gsap.fromTo(incoming, 
          { opacity: 0, scale: 1 }, 
          { opacity: 1, scale: 1.1, duration: 2, ease: "power2.inOut" }
        );
        
        // Continuous zoom for incoming
        gsap.to(incoming, { scale: 1.2, duration: 8, ease: "none" });

        // Text content transition
        // We animate the title and subtitle out, then in with new content
        const textTl = gsap.timeline();
        textTl.to([titleRef.current, paraRef.current], {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            setCurrentSlide(nextSlide);
            gsap.fromTo([titleRef.current, paraRef.current], 
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1 }
            );
          }
        });
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section ref={sectionRef} className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slider Container */}
      <div className="hero-slider-container absolute inset-0 w-screen h-screen z-0">
        {SLIDE_DATA.map((slide, index) => (
          <div 
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="absolute top-0 left-0 w-full h-full"
            style={{ 
              backgroundImage: imagesLoaded ? `url('${slide.image}')` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050B1F]/80 via-transparent to-[#050B1F]"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl">  
        <div ref={badgeRef} className="mb-4 inline-block opacity-0">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
            Intelligence redefined
          </span>
        </div>
        
        <h1 ref={titleRef} className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter text-white leading-[1.1] opacity-0 drop-shadow-2xl">
          {SLIDE_DATA[currentSlide].title.split(' ').map((word, i, arr) => (
            <React.Fragment key={i}>
              {i === arr.length - 1 ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic font-light">
                  {word}
                </span>
              ) : (
                word + ' '
              )}
            </React.Fragment>
          ))}
        </h1>

        <div className="relative inline-block mb-10 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-black/40 blur-xl rounded-2xl"></div>
          <p ref={paraRef} className="relative text-xl md:text-2xl text-white font-normal tracking-wide px-6 py-3 opacity-0 drop-shadow-lg">
            {SLIDE_DATA[currentSlide].subtitle}
          </p>
        </div>

        <div ref={btnRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0">
          <a 
            href="#portfolio"
            className="group relative px-10 py-5 text-lg font-bold text-[#050B1F] bg-white rounded-full overflow-hidden transition-all duration-300 shadow-2xl shadow-blue-500/20"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore Collections</span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
          <button className="text-white/60 hover:text-white text-sm font-bold uppercase tracking-widest flex items-center gap-3 transition-colors">
            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </span>
            Watch Film
          </button>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {SLIDE_DATA.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-700 rounded-full ${i === currentSlide ? 'w-12 bg-blue-500' : 'w-6 bg-white/20'}`}
          ></div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-10 hidden md:block z-20">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 rotate-90 origin-left translate-x-3 translate-y-24 whitespace-nowrap">Scroll to explore</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500 via-white/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
