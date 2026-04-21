export default function SelfPay() {
  const payMethods = ["Amex", "Cash", "Discover", "Mastercard", "PayPal", "Venmo", "Visa", "Zelle"];

  return (
    <section id="fees" className="bg-background py-16 md:py-24 scroll-mt-20" aria-labelledby="selfpay-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="selfpay-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-charcoal mb-16">
          Self-Pay & Details
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Card 1 */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-card flex flex-col items-center text-center">
            <h3 className="font-playfair text-[20px] md:text-[22px] font-bold text-charcoal mb-2">Initial Evaluation</h3>
            <p className="font-lato text-[16px] md:text-[18px] text-charcoal-light mb-6">Comprehensive 60-minute assessment</p>
            <span className="font-playfair text-3xl font-bold text-sage">$250</span>
          </div>
          {/* Card 2 */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-card flex flex-col items-center text-center">
            <h3 className="font-playfair text-[20px] md:text-[22px] font-bold text-charcoal mb-2">Follow-Up Visit</h3>
            <p className="font-lato text-[16px] md:text-[18px] text-charcoal-light mb-6">Ongoing care and monitoring</p>
            <span className="font-playfair text-3xl font-bold text-sage">$125</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center border-t border-card py-10">
          <span className="block font-playfair text-lg font-bold text-charcoal mb-4">Accepted Payment Methods</span>
          <div className="flex flex-wrap justify-center gap-3">
             {payMethods.map((pm, i) => (
                <span key={i} className="bg-card text-charcoal px-4 py-2 rounded-full text-sm font-medium">
                  {pm}
                </span>
             ))}
          </div>
        </div>

        <div className="max-w-md mx-auto text-center mt-6">
          <a 
            href="https://care.headway.co/providers/aylin-sanchez-pmhnp-bc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-apricot text-charcoal px-6 w-full py-4 rounded-full font-bold hover:bg-teal hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sage flex justify-center items-center gap-2 min-h-[44px] shadow-sm mb-4 text-[16px] md:text-[18px]"
          >
            Check Your Insurance on Headway
          </a>
          <p className="font-lato text-[15px] text-charcoal-light italic">
            Not sure if you&apos;re covered? Book a free 15-minute call and we&apos;ll figure it out together.
          </p>
        </div>

      </div>
    </section>
  );
}
