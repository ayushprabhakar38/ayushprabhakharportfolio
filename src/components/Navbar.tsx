import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 3, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
    >
      <div 
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/20' : ''
        }`}
      >
        {/* Logo */}
        <a href="#" className="group relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden shrink-0 transition-transform hover:scale-110">
          <div className="absolute inset-0 accent-gradient group-hover:animate-gradient-shift rounded-full" />
          <div className="absolute inset-[2px] bg-bg rounded-full flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">AP</span>
          </div>
        </a>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-3" />

        {/* Links */}
        <div className="flex items-center gap-1 mx-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-muted hover:text-text-primary hover:bg-stroke/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2 hidden sm:block" />

        {/* CTA */}
        <a 
          href="mailto:ayushprabhakar38@gmail.com"
          className="group relative inline-flex items-center justify-center shrink-0 ml-1 sm:ml-0"
        >
          {/* Animated gradient border behind */}
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift" />
          
          <div className="relative flex items-center gap-1.5 text-xs sm:text-sm text-text-primary bg-surface backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-stroke group-hover:border-transparent transition-colors">
            Say hi
            <span className="text-[10px] sm:text-xs">↗</span>
          </div>
        </a>
      </div>
    </motion.nav>
  );
};
