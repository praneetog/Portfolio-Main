'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 flex justify-center p-2 md:p-3 ${
        isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-0'
      }`}
    >
      <div className={`w-full max-w-[1400px] glass rounded-xl transition-all duration-700 px-4 md:px-8 py-2 md:py-2.5 flex items-center justify-between backdrop-blur-xl shadow-lg ${isScrolled ? 'bg-premium-black/60 border-blood/20' : 'bg-transparent border-white/5'}`}>
        {/* Left: Stylized P */}
        <div className="flex items-center">
          <div className="group relative cursor-pointer">
            <div className="text-2xl md:text-3xl font-display font-black text-white hover:text-blood transition-colors duration-500 italic">
              P
            </div>
            <div className="absolute -inset-2 bg-blood/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Center: Name with Reveal */}
        <div className="hidden sm:block overflow-hidden h-8">
          <h1 className="text-lg md:text-xl font-heavy font-black uppercase tracking-[0.4em] italic text-white/80">
            Praneet
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:flex items-center gap-10">
          <a href="#armory" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-blood transition-all duration-500 relative group">
            Armory
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-blood scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </a>
          <a href="#projects" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-blood transition-all duration-500 relative group">
            Missions
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-blood scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </a>
          <a href="#gaming" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-blood transition-all duration-500 relative group">
            Gaming
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-blood scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </a>
          <a href="#contact" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-blood transition-all duration-500 relative group">
            Contact
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-blood scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </a>
        </div>

        {/* Right: Enlist my blade */}
        <button 
          onClick={scrollToContact}
          className="relative px-4 md:px-8 py-2 md:py-3 group cursor-pointer overflow-hidden rounded-sm bg-blood/10 border border-blood/30 transition-all duration-500 hover:border-blood hover:bg-blood/20"
        >
          {/* Scanning Line Effect */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white opacity-0 group-hover:opacity-100 group-hover:animate-scan z-20" />
          
          <div className="absolute inset-0 bg-blood/40 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
          
          <span className="relative z-10 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] whitespace-nowrap group-hover:text-white transition-colors flex items-center gap-2">
            <span className="w-2 h-2 bg-blood rounded-full animate-pulse group-hover:scale-125 transition-transform" />
            Enlist my blade
          </span>

          {/* Glitch-like corner accents */}
          <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-blood opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-blood opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </nav>
  );
}
