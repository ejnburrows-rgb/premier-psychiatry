"use client";

import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      const footerTop = contact ? contact.getBoundingClientRect().top : window.innerHeight;
      
      // Show when hero is scrolled past, hide when footer is coming into view
      if (heroBottom < 0 && footerTop > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check immediately to avoid hydration mismatch delay

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-apricot p-2 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] md:hidden transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-full"}`}
      style={{ height: '56px' }}
    >
      <div className="flex gap-2 max-w-sm mx-auto h-full">
        <a 
          href="tel:5618345705"
          className="flex-1 bg-white text-charcoal text-center rounded-md font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center font-lato text-[16px]"
        >
          Call
        </a>
        <a 
          href="https://care.headway.co/providers/aylin-sanchez-pmhnp-bc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-charcoal text-white text-center rounded-md font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-charcoal flex items-center justify-center font-lato text-[16px]"
        >
          Book
        </a>
      </div>
    </div>
  );
}
