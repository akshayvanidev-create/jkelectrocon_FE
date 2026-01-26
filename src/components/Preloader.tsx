import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const brandJKRef = useRef<HTMLSpanElement>(null);
  const brandElectroconRef = useRef<HTMLSpanElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
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
    gsap.set(brandJKRef.current, { opacity: 0, scale: 0.92, x: -20, letterSpacing: "0.2em" });
    gsap.set(brandElectroconRef.current, { opacity: 0, scale: 0.92, x: 20, letterSpacing: "0.2em" });
    gsap.set(shimmerRef.current, { left: "-60%", opacity: 0 });

    // 2. Animate Logo/Icon
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power4.out",
    })
      // Brand name fade-in and scale
      .to(
        brandJKRef.current,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          letterSpacing: "0.25em",
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        brandElectroconRef.current,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          letterSpacing: "0.25em",
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.6"
      )
      // Gold shimmer sweep
      .to(
        shimmerRef.current,
        {
          left: "100%",
          opacity: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        shimmerRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        "+=0.1"
      )
      // Hold for a moment
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
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative flex flex-col items-center gap-2 sm:gap-6 md:gap-10 z-10">
        {/* Animated Icon */}

        <div
          ref={logoRef}
          className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center"
        >
          <img
            src="/assets/brand-logo.png"
            alt="JK Electrocon"
            className="h-24 w-24 xs:h-28 xs:w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 object-contain"
          />
        </div>

        {/* Brand Text */}
        <div className="relative overflow-hidden px-1 w-full">
          <div
            className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-text flex items-baseline gap-3 justify-center relative"
            style={{
              letterSpacing: '0.25em',
            }}
          >
            <span
              ref={brandJKRef}
              className="text-button bg-clip-text text-transparent bg-gradient-to-r from-button to-hover"
              style={{letterSpacing: '0.25em'}}
            >
              JK
            </span>
            <span
              ref={brandElectroconRef}
              className="text-hover bg-clip-text text-transparent bg-gradient-to-r from-hover to-button"
              style={{letterSpacing: '0.25em'}}
            >
              Electrocon
            </span>
            {/* Gold shimmer sweep */}
            <div
              ref={shimmerRef}
              className="absolute top-0 left-0 w-2/3 h-full pointer-events-none"
              style={{
                background: 'linear-gradient(120deg, transparent 0%, #F2D675 50%, transparent 100%)',
                opacity: 0,
                mixBlendMode: 'screen',
                borderRadius: '2em',
              }}
            ></div>
          </div>
          {/* Luxury Sweep Effect */}
          <div
            ref={sweepRef}
            className="glow-sweep absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          ></div>
        </div>
        {/* Tagline */}
        <div className="overflow-hidden">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-hover opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
            Intelligent Lifestyle Engineering
          </p>
        </div>
      </div>
      {/* Bottom status */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-20">
        <div className="w-1 h-1 bg-button rounded-full animate-ping"></div>
        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-hover">
          Establishing Secure Connection
        </span>
      </div>
    </div>
  );
};

export default Preloader;
