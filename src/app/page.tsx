'use client';
import { useState } from 'react';
import SmoothScroll from '../components/SmoothScroll';
import KunaiCanvas from '../components/KunaiCanvas';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Armory from '../components/Armory';
import Projects from '../components/Projects';
import Gaming from '../components/Hobbies'; // Note: Gaming component is in Hobbies.tsx
import MessiSection from '../components/Messi';
import Contact from '../components/Contact';
import Preloader from '../components/Preloader';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      <div className="relative">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        
        <CustomCursor />
        
        {/* The 3D Kunai follows the scroll */}
        <KunaiCanvas />

        <main className={`${loading ? 'opacity-0' : 'opacity-100'} transition-all duration-1000`}>
          <Navbar />
          <Hero />
          <Armory />
          <Projects />
          <Gaming />
          <MessiSection />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}
