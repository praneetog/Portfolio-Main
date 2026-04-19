'use client';
import { ArrowUpRight, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: "GLOBE TOGETHER",
    desc: "A collaborative real-time platform connecting users across the globe in a shared interactive environment.",
    link: "https://github.com/praneetog/Globe-Together",
    tags: ["Next.js", "WebSockets", "Three.js"],
    image: "https://picsum.photos/seed/globe/1200/800"
  },
  {
    title: "PARSEY AI",
    desc: "Advanced AI-powered web scraper built with Node.js and LangChain for structured data extraction.",
    link: "https://github.com/praneetog/AI-WebScraper",
    tags: ["Node.js", "LangChain", "Puppeteer"],
    image: "https://picsum.photos/seed/parsey/1200/800"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-8">
          <div>
            <h2 className="text-fluid-h2 font-black font-heavy tracking-tighter mb-4 reveal-text uppercase">MISSIONS</h2>
            <div className="flex items-center gap-4 reveal-text">
              <div className="h-[2px] w-12 md:w-24 bg-blood" />
              <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">Primary objectives completed</p>
            </div>
          </div>
          <div className="font-heavy text-[10vw] text-white/[0.02] font-black hidden lg:block reveal-text leading-none uppercase select-none">CONTRACTS</div>
        </ScrollReveal>

        <div className="space-y-48 lg:space-y-64">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full group relative overflow-hidden aspect-video md:aspect-[16/10] reveal-text rounded-[2rem] border border-white/5 bg-premium-black">
                <div className="absolute inset-0 bg-blood/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20">
                  <span className="text-fluid-h2 font-heavy font-black text-white/10 select-none leading-none">{index + 1}</span>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full reveal-text space-y-8 md:space-y-12">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[clamp(0.6rem,1.5vw,0.8rem)] uppercase font-black tracking-widest text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[clamp(2.5rem,6vw,5rem)] font-black font-heavy tracking-tighter leading-none uppercase">{project.title}</h3>
                  <div className="h-1 w-24 bg-blood overflow-hidden">
                    <div className="h-full bg-white w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                </div>

                <p className="text-[clamp(1.1rem,2.5vw,1.8rem)] text-white/50 leading-tight max-w-xl font-black italic">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-white text-black font-heavy text-[clamp(0.7rem,1.5vw,0.9rem)] font-black uppercase tracking-widest hover:bg-blood hover:text-white transition-all duration-300"
                  >
                    View Source <Github className="w-5 h-5" />
                  </a>
                  <button className="p-4 md:p-5 border border-white/20 hover:border-blood hover:text-blood transition-all duration-300">
                    <ArrowUpRight className="w-7 md:w-8 h-7 md:h-8" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Aesthetic Break */}
        <ScrollReveal className="mt-48 lg:mt-64 min-h-[40vh] py-24 md:py-32 relative overflow-hidden border border-white/5 rounded-[3rem]">
          <img 
            src="https://picsum.photos/seed/aesthetic/1920/1080" 
            alt="Atmospheric Break"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center p-8 bg-blood/10">
            <h3 className="text-[clamp(1.5rem,8vw,5rem)] font-heavy font-black text-blood select-none text-center leading-[0.9] reveal-text drop-shadow-[0_0_20px_rgba(255,0,0,0.5)] uppercase">
              NOTHING IS TRUE<br />EVERYTHING IS PERMITTED
            </h3>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
