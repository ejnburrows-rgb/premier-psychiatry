export default function Insurance() {
  const insurers = [
    "Aetna", "Ascension", "BCBS of Massachusetts", "Carelon Behavioral Health", 
    "Cigna/Evernorth", "Horizon BCBS of NJ", "Independence Blue Cross PA", 
    "Optum", "Oscar Health", "Oxford", "Quest Behavioral Health", "United Healthcare"
  ];

  return (
    <section id="insurance" className="bg-[#F0EDE8] py-16 md:py-24 scroll-mt-20" aria-labelledby="insurance-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 id="insurance-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#25323D] mb-4">
            Insurance Accepted
           </h2>
           <p className="font-lato text-[16px] md:text-[18px] text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            I accept several insurances through Headway in-network. My services are covered by:
           </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {insurers.map((name, i) => (
            <div 
              key={name} 
              className="bg-white rounded-xl px-4 py-3 text-center text-sm font-medium text-[#25323D] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
