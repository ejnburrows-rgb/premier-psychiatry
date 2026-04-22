export default function Hero() {
  return (
    <section id="hero" className="bg-background pt-32 pb-16 md:pt-40 md:pb-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1 animate-fade-in-up">
            <h1 className="font-playfair text-[32px] md:text-[40px] font-bold text-charcoal leading-tight" style={{ textShadow: "2px 2px 0 #1B2A4A" }}>
              Compassionate Psychiatric Care for Adults and Adolescents in Wellington, Florida
            </h1>
            <p className="text-[16px] md:text-[18px] text-charcoal-light leading-[1.7] delay-150">
              Medication management, therapy, and support for anxiety, depression, ADHD, trauma, and more. Bilingual (English/Spanish). 100% virtual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 delay-300">
              <a 
                href="https://care.headway.co/providers/aylin-sanchez-pmhnp-bc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-apricot text-charcoal text-center px-6 py-3 min-h-[44px] min-w-[44px] rounded font-bold hover:bg-teal hover:text-white transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-apricot focus:ring-offset-2 shadow-sm flex items-center justify-center"
              >
                Check Insurance & Book
              </a>
              <a 
                href="tel:5618345705"
                className="border-2 border-sage text-charcoal text-center px-6 py-3 min-h-[44px] min-w-[44px] rounded font-bold hover:bg-sage transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sage flex items-center justify-center bg-transparent mt-2 sm:mt-0 shadow-sm"
              >
                Call for Free 15-Min Consult
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up delay-500">
            <div className="w-full max-w-[400px] aspect-[4/5] bg-card rounded-2xl border-4 border-sage shadow-xl overflow-hidden relative transform hover:rotate-1 transition-transform duration-500">
               <img src="/Aylin.png" alt="Aylin Sanchez, PMHNP-BC — Psychiatric Nurse Practitioner" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
