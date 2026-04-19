'use client';
import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const duration = 2500; // Slightly longer for dramatic effect
    const interval = 20;
    const increment = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-premium-black z-[100] flex flex-col items-center justify-center overflow-hidden">

      <div className="relative z-10 w-full flex flex-col items-center px-4">
        <div className="relative w-full max-w-[90vw] mx-auto text-center">
          {/* Base Layer: Dark Grey */}
          <div className="text-[6.5vw] font-black font-heavy text-white/5 select-none leading-none tracking-tighter uppercase whitespace-nowrap">
            ASSASSINATING
          </div>
          
          {/* Top Layer: Blood Red with Fill Logic */}
          <div 
            className="absolute inset-0 text-[6.5vw] font-black font-heavy text-blood select-none leading-none tracking-tighter uppercase overflow-hidden whitespace-nowrap flex justify-center"
            style={{ width: `${percent}%`, transition: 'width 0.1s linear' }}
          >
            <span className="w-full">ASSASSINATING</span>
          </div>
        </div>

        {/* Tactical Status Label */}
        <div className="mt-8 flex flex-col items-center gap-4 w-full px-6">
          <div className="font-heavy text-[clamp(10px,3.5vw,18px)] sm:text-lg md:text-xl font-black tracking-[0.15em] sm:tracking-[0.8em] md:tracking-[1em] text-white/20 uppercase text-center w-full">
            Synchronizing
          </div>
          <div className="text-xl sm:text-3xl font-black font-heavy text-blood">
            {Math.round(percent)}%
          </div>
        </div>

        {/* Progress bar line */}
        <div className="mt-12 w-full max-w-md h-[2px] bg-white/5 relative">
          <div 
            className="absolute inset-y-0 left-0 bg-blood shadow-[0_0_15px_#8b0000] transition-all duration-100 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Aesthetic Border Accents */}
      <div className="absolute top-12 left-12 w-24 h-[1px] bg-blood/20" />
      <div className="absolute top-12 left-12 w-[1px] h-24 bg-blood/20" />
      <div className="absolute bottom-12 right-12 w-24 h-[1px] bg-blood/20" />
      <div className="absolute bottom-12 right-12 w-[1px] h-24 bg-blood/20" />
    </div>
  );
}
