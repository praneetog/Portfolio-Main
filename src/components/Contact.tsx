'use client';
import { useState } from 'react';
import { Send, Phone, Mail, User, ArrowDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: 'Hire Me',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `[${formData.reason}] Portfolio Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:praneet.kashyap04@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-t from-premium-black to-[#050505] relative z-10">
      <ScrollReveal className="max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          <div className="space-y-12 relative z-10 lg:pr-6 overflow-hidden">
            <h2 className="text-[clamp(1.8rem,6vw,6rem)] font-black font-heavy tracking-tighter uppercase leading-[0.9] md:leading-[0.8] reveal-text mb-8 md:mb-12">
              LET&apos;S <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-blood">COLLAB</span>
            </h2>
            
            <div className="space-y-8 md:space-y-12">
              <div className="flex items-start gap-4 md:gap-6 group reveal-text">
                <div className="p-3 md:p-5 glass group-hover:bg-blood transition-colors duration-500 rounded-xl md:rounded-2xl flex-shrink-0">
                  <Mail className="w-5 md:w-8 h-5 md:h-8 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase font-black tracking-[0.3em] text-blood mb-1 italic">Email Terminal</span>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-black font-heavy tracking-tight break-words text-white leading-tight">
                    praneet.kashyap04@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group reveal-text">
                <div className="p-3 md:p-5 glass group-hover:bg-blood transition-colors duration-500 rounded-xl md:rounded-2xl flex-shrink-0">
                  <Phone className="w-5 md:w-8 h-5 md:h-8 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase font-black tracking-[0.3em] text-blood mb-1 italic">Tactical Status</span>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-black font-heavy text-white leading-tight uppercase">Available for Operations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 sm:p-8 md:p-16 rounded-[1.5rem] md:rounded-[3rem] relative z-50 bg-[#0c0c0c] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] reveal-text">
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-blood/30 blur-[120px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10 relative z-[60]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/50 flex items-center gap-2">
                    <User className="w-3 h-3" /> Identity Signature
                  </label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    required
                    className="w-full bg-white/5 border-b border-white/20 px-2 md:px-4 py-3 md:py-4 focus:border-blood outline-none transition-colors font-black text-base md:text-lg text-white placeholder:text-white/20"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/50 flex items-center gap-2">
                    <Phone className="w-3 h-3" /> Communication Node
                  </label>
                  <input 
                    type="text" 
                    placeholder="Contact Number"
                    required
                    className="w-full bg-white/5 border-b border-white/20 px-2 md:px-4 py-3 md:py-4 focus:border-blood outline-none transition-colors font-black text-base md:text-lg text-white placeholder:text-white/20"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-white/50 italic">Mission Objective</label>
                <div className="relative">
                  <select 
                    className="w-full bg-white/5 border-b border-white/20 px-2 md:px-4 py-3 md:py-4 focus:border-blood outline-none transition-colors font-black appearance-none cursor-pointer text-base md:text-lg text-white"
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  >
                    <option className="bg-[#111] text-white">Hire Me</option>
                    <option className="bg-[#111] text-white">Strategic Collaboration</option>
                    <option className="bg-[#111] text-white">Intelligence Report</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 text-white">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-white/50 italic">Briefing Particulars</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project mission..."
                  required
                  className="w-full bg-white/5 border-b border-white/20 px-2 md:px-4 py-3 md:py-4 focus:border-blood outline-none transition-colors font-black resize-none text-base md:text-lg text-white placeholder:text-white/20"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blood py-5 md:py-8 flex items-center justify-center gap-2 md:gap-4 group transition-all duration-500 hover:bg-white hover:text-black overflow-hidden relative text-white"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <span className="font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] sm:text-xs md:text-sm">INITIATE TRANSMISSION</span>
                <Send className="w-4 md:w-6 h-4 md:h-6 group-hover:translate-x-2 md:translate-x-4 transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>

      <footer className="mt-48 md:mt-64 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center max-w-[1400px] mx-auto text-white/10 text-[clamp(0.6rem,1.5vw,0.7rem)] font-black tracking-[0.4em] uppercase pb-12 gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span>© 2026 PRANEET KASHYAP / THE ARCHITECT</span>
          <span>ASSASSIN&apos;S CREED INSPIRED INTERFACE VER 4.0</span>
        </div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-blood transition-colors relative group">
            LINKEDIN
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-blood scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-500" />
          </a>
          <a href="#" className="hover:text-blood transition-colors relative group">
            GITHUB
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-blood scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-500" />
          </a>
          <a href="#" className="hover:text-blood transition-colors relative group">
            TWITTER
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-blood scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-500" />
          </a>
        </div>
      </footer>
    </section>
  );
}
