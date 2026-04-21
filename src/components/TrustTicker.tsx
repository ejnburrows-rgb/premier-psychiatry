"use client";

import { useEffect, useRef, useState } from "react";

export default function TrustTicker() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const items = [
    "ANCC Board Certified",
    "15+ Years Healthcare Experience",
    "Telehealth Throughout Florida",
    "Bilingual: EN/ES"
  ];

  return (
    <section ref={containerRef} className={`bg-background py-6 border-t border-b border-card overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Desktop Flex Row */}
      <div className="hidden md:flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        {items.map((item, idx) => (
          <span key={idx} className="bg-sage-10 text-sage px-4 py-2 rounded-full font-medium shadow-sm flex items-center gap-2">
            <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            {item}
          </span>
        ))}
      </div>

      {/* Mobile Auto-Scrolling Ticker */}
      <div className="md:hidden flex whitespace-nowrap group">
        <div className="flex animate-scroll-left group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, idx) => (
            <span key={idx} className="bg-sage-10 text-sage px-4 py-2 rounded-full font-medium inline-flex items-center gap-2 mx-3 shadow-sm shrink-0">
               <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
