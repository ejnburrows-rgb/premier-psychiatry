export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-16 pb-28 md:pb-16 scroll-mt-20 flex flex-col relative z-30" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer Contact and Links</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-playfair text-2xl font-bold text-white">Premier Psychiatry of Wellington</h3>
            <p className="font-lato text-[16px] md:text-[18px] text-white/80 leading-relaxed">Compassionate psychiatric care for a calmer, more balanced life.</p>
            <div className="mt-2 font-lato text-[16px] md:text-[18px] text-white/80">
              <p>Wellington, FL 33414</p>
              <p>Virtual / Telehealth Only</p>
            </div>
          </div>
          
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-lato font-bold uppercase tracking-wider text-sm text-sage">Contact</h4>
            <a href="tel:5618345705" className="font-lato text-[16px] md:text-[18px] text-white hover:text-apricot transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-sage rounded w-max">
              (561) 834-5705
            </a>
            <a href="mailto:aylin@premierpsychiatrywellington.com" className="font-lato text-[16px] md:text-[18px] text-white hover:text-apricot transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-sage rounded w-max break-all">
              aylin@premierpsychiatrywellington.com
            </a>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 text-sm font-lato text-white/60">
            <div className="flex flex-col gap-1">
              <p className="leading-relaxed">
                Under the federal No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges for self-pay or uninsured care. Contact (561) 834-5705 or <a href="mailto:aylin@premierpsychiatrywellington.com" className="underline hover:text-sage transition-colors">aylin@premierpsychiatrywellington.com</a> to request one. More info: <a href="http://cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="underline hover:text-sage transition-colors">cms.gov/nosurprises</a>
              </p>
            </div>
            
            <div className="flex flex-col gap-1">
              <p className="leading-relaxed">
                Telehealth psychiatric services are provided exclusively to individuals physically located in the State of Florida at the time of service, in accordance with Florida Statute §456.47.
              </p>
            </div>
            
            <div className="flex flex-col gap-1">
              <p className="leading-relaxed">
                This website is not monitored in real time and does not provide emergency services. If you or someone you know is in crisis, call <strong>911</strong>, call or text <strong>988</strong> (Suicide & Crisis Lifeline), or text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line).
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8">
          <div className="lg:col-span-4 hidden lg:block"></div>
          <div className="lg:col-span-3 hidden lg:block"></div>
          <div className="lg:col-span-5 flex flex-col gap-4">
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
        
        <div className="border-t border-white/20 pt-8 flex flex-col gap-4 items-center text-center text-sm font-lato text-white/60">
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2">
            <a href="/privacy" className="hover:text-white transition-colors underline">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="/terms" className="hover:text-white transition-colors underline">Terms of Use</a>
            <span aria-hidden="true">|</span>
            <a href="/disclaimer" className="hover:text-white transition-colors underline">Disclaimer</a>
            <span aria-hidden="true">|</span>
            <a href="/privacy-practices" className="hover:text-white transition-colors underline">Notice of Privacy Practices</a>
          </div>
          <p>&copy; 2026 Premier Psychiatry of Wellington. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
