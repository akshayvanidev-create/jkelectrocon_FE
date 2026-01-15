import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sweepRef = useRef<HTMLDivElement>(null);

  const brandName = "JK ELECTROCON";

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Final exit animation
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
          onComplete: onComplete,
        });
      },
    });

    // 1. Initial State
    gsap.set(containerRef.current, { opacity: 1 });
    gsap.set(logoRef.current, { scale: 0.8, opacity: 0, filter: "blur(10px)" });
    gsap.set(letterRefs.current, { opacity: 0, y: 20, rotateX: -90 });
    gsap.set(sweepRef.current, { x: "-100%" });

    // 2. Animate Logo/Icon
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.5,
      ease: "power4.out",
    })
      // 3. Reveal Brand Name Letter by Letter
      .to(
        letterRefs.current,
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      // 4. Subtle Glow Sweep
      .to(
        sweepRef.current,
        {
          x: "200%",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      // 5. Hold for a moment
      .to({}, { duration: 1 });

    // Floating animation for the logo
    gsap.to(logoRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#050B1F] flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative flex flex-col items-center gap-2 sm:gap-6 md:gap-10 z-10">
        {/* Animated Icon */}

        <div
          ref={logoRef}
          className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center"
        >
          <img
            src="/assets/brand-logo.jpeg"
            alt="JK Electrocon"
            className="h-24 w-24 xs:h-28 xs:w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 object-contain"
          />
        </div>

        {/* Brand Text */}
        <div className="relative overflow-hidden px-1 w-full">
          <h1
            ref={textRef}
            className="text-[1.1rem] xs:text-lg sm:text-xl md:text-3xl font-black tracking-[0.04em] xs:tracking-[0.08em] sm:tracking-[0.15em] md:tracking-[0.5em] text-white break-words text-center uppercase leading-tight"
           
          >
            {brandName.split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => (letterRefs.current[i] = el)}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          {/* Luxury Sweep Effect */}
          <div
            ref={sweepRef}
            className="glow-sweep absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          ></div>
        </div>
        {/* Tagline */}
        <div className="overflow-hidden">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-500/60 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
            Intelligent Lifestyle Engineering
          </p>
        </div>
      </div>
      {/* Bottom status */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-20">
        <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
        <span className="text-[8px] font-black uppercase tracking-[0.5em]">
          Establishing Secure Connection
        </span>
      </div>
    </div>
  );
};

export default Preloader;
