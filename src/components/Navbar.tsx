"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between pointer-events-auto">
        <Link href="/" className={`font-playfair text-xl md:text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded ${scrolled ? 'text-sage' : 'text-charcoal'}`}>
          Premier Psychiatry of Wellington
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#services" className="text-charcoal-light hover:text-teal transition-colors font-medium">Services</Link>
          <Link href="#conditions" className="text-charcoal-light hover:text-teal transition-colors font-medium">What I Treat</Link>
          <Link href="#about" className="text-charcoal-light hover:text-teal transition-colors font-medium">About</Link>
          <Link href="#faq" className="text-charcoal-light hover:text-teal transition-colors font-medium">FAQ</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:5618345705" className="text-charcoal font-bold hover:text-teal transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded">
            (561) 834-5705
          </a>
          <a 
            href="https://care.headway.co/providers/aylin-sanchez-pmhnp-bc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-apricot text-charcoal px-6 py-2 rounded-full font-bold hover:bg-teal hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
          >
            Book Now
          </a>
        </div>
        <button 
          className="md:hidden p-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage rounded min-h-[44px] min-w-[44px] flex items-center justify-center bg-white/80 backdrop-blur"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      
      {/* Mobile Sliding Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 px-6 flex flex-col gap-8 h-full">
          <div className="flex flex-col gap-6">
            <Link href="#services" className="text-charcoal text-lg font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#conditions" className="text-charcoal text-lg font-medium" onClick={() => setIsOpen(false)}>What I Treat</Link>
            <Link href="#about" className="text-charcoal text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#faq" className="text-charcoal text-lg font-medium" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link href="#contact" className="text-charcoal text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          <div className="flex flex-col gap-4 border-t border-card pt-6">
            <span className="text-charcoal-light italic">Se habla español</span>
            <a href="tel:5618345705" className="text-charcoal text-xl font-medium focus:outline-none focus:ring-2 focus:ring-sage rounded min-h-[44px] flex items-center" onClick={() => setIsOpen(false)}>
              (561) 834-5705
            </a>
          </div>
          <div className="border-t border-card pt-8">
            <a 
              href="https://care.headway.co/providers/aylin-sanchez-pmhnp-bc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-apricot text-charcoal text-center px-6 py-4 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px] flex items-center justify-center w-full"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
