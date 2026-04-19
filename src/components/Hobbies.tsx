'use client';
import { Gamepad2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Gaming() {
  return (
    <section id="gaming" className="py-24 md:py-32 px-6 bg-premium-black relative overflow-hidden">
      {/* Background Decal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black font-heavy text-white/[0.01] select-none pointer-events-none uppercase leading-none">
        BATTLE
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal className="mb-24 md:mb-32">
          <h2 className="text-2xl md:text-4xl font-black font-heavy tracking-tighter mb-8 reveal-text italic">
            I play FC Mobile in my free time. Wanna Compete?
          </h2>
          <div className="flex items-center gap-4 reveal-text">
            <div className="h-[2px] w-12 md:w-24 bg-blood" />
            <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] md:text-xs font-black italic">FC Mobile</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* FC Mobile Focus Card */}
          <div className="group relative glass p-6 md:p-12 overflow-hidden rounded-[2rem] md:rounded-[3rem] hover:border-blood transition-all duration-700 w-full bg-premium-black/40 backdrop-blur-3xl">
            <div className="absolute inset-0 bg-blood/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 md:border-4 border-blood rounded-full flex items-center justify-center group-hover:bg-blood transition-all duration-500">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blood group-hover:bg-white rounded-sm rotate-45 transition-colors" />
                  </div>
                </div>

                <div className="space-y-8 mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-blood mb-2">USERNAME</span>
                    <span className="text-[clamp(2.5rem,6vw,5rem)] font-black font-heavy tracking-tighter italic text-white group-hover:text-blood transition-colors leading-none">LaPulga</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-blood mb-2">RANKING</span>
                    <span className="text-[clamp(0.5rem,5vw,1.5rem)] font-black font-heavy tracking-tighter uppercase text-white/60 leading-none">FC CHAMPION</span>
                  </div>
                </div>

                <p className="text-[clamp(1rem,1.8vw,1.5rem)] text-white font-black leading-tight italic max-w-xl">
                  Lets play a H2h sometime!
                </p>
              </div>

              <div className="aspect-square relative overflow-hidden rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700 w-full max-w-md mx-auto lg:mx-0">
                 <img 
                  src="/images/FCmobile.jpg" 
                  alt="FC Mobile Emblem"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                <div className="absolute inset-0 bg-premium-black/40 flex flex-col items-end">
                  <div className="p-1 border-2 md:border-4 border-white/20 backdrop-blur-md rounded-full group-hover:border-blood transition-colors">
                    <Gamepad2 className="w-16 md:w-20 h-16 md:h-20 text-white group-hover:text-blood transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-white/5 overflow-hidden">
              <div className="h-full bg-blood w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
