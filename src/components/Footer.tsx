export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-16 pb-28 md:pb-16 scroll-mt-20 flex flex-col relative z-30" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer Contact and Links</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-2xl font-bold text-white">Premier Psychiatry of Wellington</h3>
            <p className="font-lato text-[16px] md:text-[18px] text-white/80 leading-relaxed">Compassionate psychiatric care for a calmer, more balanced life.</p>
            <div className="mt-2 font-lato text-[16px] md:text-[18px] text-white/80">
              <p>Wellington, FL 33414</p>
              <p>Virtual / Telehealth Only</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-lato font-bold uppercase tracking-wider text-sm text-sage">Contact</h4>
            <a href="tel:5618345705" className="font-lato text-[16px] md:text-[18px] text-white hover:text-apricot transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-sage rounded w-max">
              (561) 834-5705
            </a>
            <a href="mailto:aylin@premierpsychiatrywellington.com" className="font-lato text-[16px] md:text-[18px] text-white hover:text-apricot transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-sage rounded w-max break-all">
              aylin@premierpsychiatrywellington.com
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-lato font-bold uppercase tracking-wider text-sm text-sage">Directories</h4>
            <a href="https://care.headway.co/providers/aylin-sanchez-pmhnp-bc" target="_blank" rel="noopener noreferrer" className="font-lato text-[16px] md:text-[18px] text-white hover:underline focus:outline-none focus:ring-2 focus:ring-sage rounded w-max min-h-[44px] flex items-center">
              Headway Profile
            </a>
            <a href="https://www.zocdoc.com/doctor/aylin-trujillo-aprn-rn-664547" target="_blank" rel="noopener noreferrer" className="font-lato text-[16px] md:text-[18px] text-white hover:underline focus:outline-none focus:ring-2 focus:ring-sage rounded w-max min-h-[44px] flex items-center">
              ZocDoc Profile
            </a>
            <a href="https://www.psychologytoday.com/us/psychiatrists/aylin-sanchez-wellington-fl/1672846" target="_blank" rel="noopener noreferrer" className="font-lato text-[16px] md:text-[18px] text-white hover:underline focus:outline-none focus:ring-2 focus:ring-sage rounded w-max min-h-[44px] flex items-center">
              Psychology Today
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col items-center text-center gap-4 text-sm font-lato text-charcoal-light">
          <p className="max-w-3xl leading-relaxed">
            This website is for informational purposes only and does not constitute medical advice. If you are in crisis, call 988 or go to your nearest emergency room.
          </p>
          <p>&copy; 2026 Premier Psychiatry of Wellington. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
