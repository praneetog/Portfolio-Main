'use client';
import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            const reveals = entry.target.querySelectorAll('.reveal-text');
            reveals.forEach((el) => (el as HTMLElement).classList.add('active'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
