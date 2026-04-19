'use client';
import Image from 'next/image';
import { Heart, Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function MessiSection() {
  return (
    <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Messi Photo Container */}
          <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-[4/5] reveal-text w-full max-w-2xl mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-blood/10 z-10 mix-blend-color group-hover:bg-transparent transition-colors duration-700" />
            <Image 
              src="/images/Messi.jpg" 
              alt="Lionel Messi"
              fill
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            
            {/* Overlay Text */}
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 z-20">
              <div className="p-4 md:p-6 glass rounded-2xl md:rounded-3xl backdrop-blur-xl bg-premium-black/40">
                <Trophy className="w-8 md:w-12 h-8 md:h-12 text-blood mb-4" />
                <h3 className="text-2xl md:text-3xl font-black font-heavy uppercase">THE ICON</h3>
                <p className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs">Greatest of all time</p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-12">
            <div className="flex items-center gap-4 reveal-text">
              <div className="h-[2px] w-12 md:w-24 bg-blood" />
              <span className="text-blood font-black uppercase tracking-[0.5em] text-[10px] md:text-xs leading-none">Inspiration</span>
            </div>

            <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] font-black font-heavy tracking-tighter leading-tight reveal-text max-w-4xl italic uppercase">
              &quot;I JUST WANT TO BE REMEMBERED NOT FOR THE GOALS I SCORED, BUT FOR THE THINGS I DID ON AND OFF THE FIELD TO TRY AND CHANGE THINGS.&quot;
            </h2>

            <div className="flex items-center gap-6 reveal-text">
              <div className="flex flex-col text-left">
                <span className="text-xl md:text-2xl font-black font-heavy">- LIONEL MESSI</span>
              </div>
            </div>
          </div>

        </ScrollReveal>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[45vw] font-black font-heavy text-white/[0.01] select-none pointer-events-none -translate-x-1/4 uppercase leading-none">
        GOAT
      </div>
    </section>
  );
}
