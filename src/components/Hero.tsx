import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        "-=0.8"
      );
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-12">
        <h1 className="name-reveal text-6xl sm:text-8xl lg:text-[10rem] font-display italic leading-[0.85] tracking-tight text-text-primary mb-6 drop-shadow-xl">
          Ayush Prabhakar
        </h1>

        <div className="blur-in text-2xl sm:text-3xl md:text-4xl text-text-primary/90 mb-6 font-light tracking-wide flex flex-col items-center gap-2">
          <span className="font-display italic text-accent bg-bg/50 px-6 py-2 rounded-full backdrop-blur-md border border-white/5">DevOps Professional</span>
        </div>

        <p className="blur-in text-sm md:text-base text-text-primary/80 max-w-xl mb-12 font-light leading-relaxed bg-bg/40 p-6 rounded-3xl backdrop-blur-md border border-white/5">
          Building, automating, and scaling reliable systems at the intersection of development and operations.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 blur-in">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-medium bg-bg/50 px-3 py-1 rounded-full backdrop-blur-md">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
