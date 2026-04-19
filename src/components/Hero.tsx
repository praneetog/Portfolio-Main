'use client';
import { ArrowDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background Decal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none opacity-20 px-4 overflow-hidden">
        <span className="text-[clamp(1.5rem,4vw,10rem)] font-black font-heavy text-blood leading-[1.1] tracking-tighter uppercase inline-block max-w-full">
          NOTHING IS TRUE<br />EVERYTHING IS PERMITTED
        </span>
      </div>

      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-black/50 to-premium-black pointer-events-none z-1" />
      
      {/* Main Content */}
      <ScrollReveal className="relative z-10 w-full max-w-[1400px] flex flex-col lg:grid lg:grid-cols-[1.3fr,1fr] items-center gap-12 lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="inline-block px-4 py-1 border border-blood bg-blood/10 text-blood text-[clamp(0.6rem,1.5vw,0.8rem)] uppercase tracking-[0.2em] font-black mb-8 reveal-text">
            Master of Code
          </div>
          
          {/* Prominent Name as focal point */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-fluid-h1 font-black font-heavy leading-[0.8] tracking-tighter mb-4 reveal-text uppercase">
              PRANEET<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-blood">KASHYAP</span>
            </h1>
            <h2 className="text-[clamp(1rem,3vw,2rem)] font-black tracking-[0.4em] uppercase text-white/40 reveal-text">The Architect</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 items-start mt-8 md:mt-12">
            <p className="text-[clamp(1.1rem,2.5vw,1.6rem)] text-white/60 leading-tight font-black reveal-text">
              I build digital empires. A Full-Stack Engineer dedicated to crafting high-performance, precision-grade software that bridges the gap between art and utility.
            </p>

            <div className="flex flex-row md:flex-col gap-8 md:gap-8 reveal-text text-left flex-wrap">
              <div className="flex flex-col">
                <span className="text-[10px] text-blood font-black uppercase tracking-widest mb-1">Status</span>
                <span className="font-black text-lg md:text-2xl uppercase whitespace-nowrap">ACTIVE / STEALTH</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-blood font-black uppercase tracking-widest mb-1">Location</span>
                <span className="font-black text-lg md:text-2xl uppercase whitespace-nowrap">INDIA / GLOBAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Image / Visual Column */}
        <div className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5] relative group reveal-text mx-auto lg:mx-0">
          <div className="absolute inset-0 border-[4px] md:border-[10px] border-white/5 -translate-x-2 md:-translate-x-4 translate-y-2 md:translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="absolute inset-x-0 top-0 h-1 bg-blood/40 blur-sm animate-pulse z-20" />
          <div className="absolute inset-0 bg-blood/20 mix-blend-multiply transition-opacity duration-700 opacity-50 group-hover:opacity-0" />
          <img 
            src="https://picsum.photos/seed/assassin/800/1000" 
            alt="Praneet Kashyap Profile"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          />
        </div>
      </ScrollReveal>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer animate-bounce hidden md:flex">
        <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/40 to-blood" />
      </div>
    </section>
  );
}
