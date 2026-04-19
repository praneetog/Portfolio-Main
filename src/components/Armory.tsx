'use client';
import { Code2, Globe, Server, Database, Container, Zap, Layout, Shield, Cpu, Layers, HardDrive, Smartphone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skills = [
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'LangChain', logo: 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png' },
  { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
];

export default function Armory() {
  return (
    <section id="armory" className="relative pb-32">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Sticky Header */}
        <div className="sticky top-20 lg:top-28 z-50 flex justify-end mb-12 pointer-events-none">
          <ScrollReveal className="pointer-events-auto">
            <h2 className="text-fluid-h2 font-black font-heavy tracking-tighter mb-4 reveal-text text-right uppercase">
              ARMORY
            </h2>
            <div className="flex items-center gap-4 reveal-text justify-end">
              <p className="text-white/40 uppercase tracking-[0.4em] text-[clamp(0.6rem,1.5vw,0.8rem)] font-black text-right max-w-xs">
                Instruments of digital precision
              </p>
              <div className="h-[2px] w-12 md:w-24 bg-blood" />
            </div>
          </ScrollReveal>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative mt-24 lg:overflow-visible pb-[100vh]">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="sticky mb-12 w-full transition-transform duration-700 ease-out"
              style={{ 
                top: `calc(clamp(70px, 15vh, 140px) + (${index} * clamp(5px, 1.4vh, 14px)))`,
                transform: `translateX(calc(${index} * clamp(0px, (100vw - 768px) * 0.05, 25px)))`,
                zIndex: index + 1
              }}
            >
              <div className="glass rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-14 flex flex-col items-center justify-center border-blood/20 shadow-[10px_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-blood transition-all duration-500 bg-premium-black/95 backdrop-blur-3xl min-h-[300px] md:min-h-[450px]">
                {/* Background Number */}
                <div className="absolute top-4 right-6 text-fluid-h2 font-black text-white/[0.03] font-heavy select-none group-hover:text-blood/[0.05] transition-colors leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="w-20 md:w-24 h-20 md:h-24 mb-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>

                <h3 className="text-3xl md:text-4xl font-black font-heavy text-center mb-4 px-6 py-2 border-2 md:border-4 border-blood bg-premium-black shadow-[8px_8px_0px_#8b0000] tracking-tighter uppercase whitespace-nowrap">
                  {skill.name}
                </h3>
                
                <p className="text-[10px] md:text-xs text-white/40 font-black tracking-[0.3em] uppercase">Strategic Asset Synchronized</p>
                
                {/* Decorative Accents */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-blood/20 group-hover:border-blood/60 transition-colors" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-blood/20 group-hover:border-blood/60 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="mt-64 py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="marquee">
          <div className="marquee-content animate-marquee">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-fluid-h2 font-black font-heavy tracking-tighter text-white/5 whitespace-nowrap uppercase">
                FULL-STACK ENGINEER • TACTICAL ARCHITECT • AI INTEGRATION • CORE ENGINEERING •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
