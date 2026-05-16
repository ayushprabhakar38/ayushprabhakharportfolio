import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import { ParticleSwarm } from './ParticleSwarm';
import { extend } from '@react-three/fiber';

extend({ UnrealBloomPass });

gsap.registerPlugin(ScrollTrigger);

const EXPLORATIONS = [
  { id: 1, image: "/images/exploration-1.png", yOffset: 100 },
  { id: 2, image: "/images/exploration-2.png", yOffset: 300 },
  { id: 3, image: "/images/exploration-3.png", yOffset: 50 },
  { id: 4, image: "/images/exploration-4.png", yOffset: 250 },
  { id: 5, image: "/images/exploration-5.png", yOffset: 150 },
  { id: 6, image: "/images/exploration-6.png", yOffset: 400 },
];

export const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || !col1Ref.current || !col2Ref.current) return;

    const ctx = gsap.context(() => {
      // Parallax columns
      gsap.to(col1Ref.current, {
        y: -400,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(col2Ref.current, {
        y: -800,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="relative min-h-[250vh] z-10 bg-bg/40 backdrop-blur-md" id="gallery">
        {/* Layer 1: Sticky Center with 3D Canvas */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pointer-events-none z-10 overflow-hidden">
          
          {/* 3D Canvas Background */}
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-auto">
            <Canvas camera={{ position: [0, 20, 100], fov: 60 }}>
              <fog attach="fog" args={['#0a0a0a', 50, 150]} />
              <ParticleSwarm />
              <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} />
              <Effects disableGamma>
                  {/* @ts-ignore */}
                  <unrealBloomPass threshold={0} strength={1.5} radius={0.5} />
              </Effects>
            </Canvas>
          </div>

          <div className="text-center px-4 max-w-2xl mx-auto flex flex-col items-center bg-bg/60 backdrop-blur-md p-8 rounded-[40px] border border-stroke shadow-2xl relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Gallery</span>
              <div className="w-8 h-px bg-stroke" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-text-primary tracking-tight mb-6 pointer-events-auto">
              Creative <span className="font-display italic text-accent">Explorations</span>
            </h2>
            
            <p className="text-sm md:text-base text-muted max-w-md font-light pointer-events-auto">
              A collection of visual experiments and abstract art exploring form, motion, and digital structures.
            </p>
          </div>
        </div>

        {/* Layer 2: Parallax Columns */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto h-full px-4 sm:px-6 md:px-20 relative">
            
            {/* Column 1 (Left) */}
            <div ref={col1Ref} className="absolute left-4 sm:left-6 md:left-20 top-[20vh] flex flex-col gap-24 pointer-events-auto">
              {EXPLORATIONS.slice(0, 3).map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveImage(item.image)}
                  className="w-32 sm:w-48 md:w-[280px] aspect-square rounded-3xl overflow-hidden cursor-zoom-in transition-transform hover:scale-105 hover:rotate-2 border border-stroke bg-surface/80 backdrop-blur-sm shadow-xl"
                  style={{ transform: `translateY(${item.yOffset}px)`, transition: 'all 0.4s ease-out' }}
                >
                  <img src={item.image} alt="Exploration" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>

            {/* Column 2 (Right) */}
            <div ref={col2Ref} className="absolute right-4 sm:right-6 md:right-20 top-[40vh] flex flex-col gap-32 pointer-events-auto">
              {EXPLORATIONS.slice(3, 6).map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveImage(item.image)}
                  className="w-32 sm:w-48 md:w-[280px] aspect-square rounded-3xl overflow-hidden cursor-zoom-in transition-transform hover:scale-105 hover:-rotate-2 border border-stroke bg-surface/80 backdrop-blur-sm shadow-xl"
                  style={{ transform: `translateY(${item.yOffset}px)`, transition: 'all 0.4s ease-out' }}
                >
                  <img src={item.image} alt="Exploration" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setActiveImage(null)}
          >
            <motion.img 
              src={activeImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              alt="Exploration zoomed"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-surface/50 border border-stroke backdrop-blur-md flex items-center justify-center text-text-primary hover:bg-surface transition-colors"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
