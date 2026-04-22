export default function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24 scroll-mt-20" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* INFO-HEADER STACKED ABOVE */}
        <div className="text-center mb-12 relative">
          {/* Sunset glow decorative element (Option A) */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[560px] h-[560px] pointer-events-none z-0" 
            style={{ background: "radial-gradient(circle, rgba(242,184,160,0.45) 0%, transparent 70%)" }}
          ></div>
          
          <div className="relative z-10">
            {/* a) Company name */}
            <h2 className="font-playfair text-[32px] md:text-[44px] lg:text-[52px] font-bold text-charcoal leading-tight mb-14" style={{ textShadow: "2px 2px 0 #1B2A4A" }}>
              Premier Psychiatry of Wellington
            </h2>

            {/* c) Eyebrow label */}
            <p className="text-sage uppercase tracking-widest text-sm font-bold mb-3">
              MEET THE PROVIDER
            </p>

            {/* d) Provider name */}
            <h3 id="about-heading" className="font-playfair text-[28px] md:text-[36px] font-bold text-charcoal mb-4" style={{ textShadow: "2px 2px 0 #1B2A4A" }}>
              Aylin Sanchez, PMHNP-BC
            </h3>

            {/* e) Tagline */}
            <p className="font-lato text-[16px] md:text-[18px] text-charcoal-light">
              Board-certified Psychiatric Nurse Practitioner &middot; Bilingual EN/ES
            </p>
          </div>
        </div>

        {/* PHOTO CENTERED */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[500px] aspect-[4/5] bg-card rounded-2xl shadow-md overflow-hidden relative">
            <img src="/Aylin.png" alt="Aylin Sanchez, PMHNP-BC — Psychiatric Nurse Practitioner" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* BIO & CREDENTIALS BELOW */}
        <div className="flex flex-col gap-8">
          <div className="font-lato text-[16px] md:text-[18px] text-charcoal leading-[1.7] space-y-4">
            <p>
              My name is Aylin Sanchez, and I&apos;m a bilingual (English/Spanish) Psychiatric Mental Health Nurse Practitioner with over 15 years of experience in healthcare.
            </p>
            <p>
              If you&apos;ve been feeling overwhelmed, anxious, or simply not like yourself lately, you&apos;re not alone and you don&apos;t have to go through it by yourself. My goal is to help you reconnect with yourself and move toward a calmer, more balanced life.
            </p>
            <p>
              I believe mental health care works best when it is collaborative. I take time to truly listen to my patients and understand what they&apos;re going through. While I provide guidance through my clinical knowledge and experience, I believe you should feel empowered and in charge of your own treatment.
            </p>
            <p>
              Together we look at the full picture—therapy, medication when appropriate, lifestyle, and the unique factors that shape your life. It brings me great fulfillment to be part of someone&apos;s healing process and to witness meaningful changes in their life.
            </p>
            <p className="font-bold text-sage mt-4 flex items-center gap-2">
              <span role="img" aria-label="Spain Flag Emoji">🇪🇸</span> Se habla español
            </p>
          </div>
          
          <div className="mt-2 p-6 md:p-8 bg-card rounded-xl shadow-sm border border-card">
            <h3 className="font-playfair text-[20px] md:text-[22px] font-bold text-charcoal mb-5">Credentials & Education</h3>
            <ul className="grid md:grid-cols-2 gap-4 font-lato text-[16px] md:text-[18px] text-charcoal-light">
              <li className="flex gap-3 items-start"><span className="text-sage font-bold mt-0.5" aria-hidden="true">✓</span> PMHNP-BC (ANCC Board Certified)</li>
              <li className="flex gap-3 items-start"><span className="text-sage font-bold mt-0.5" aria-hidden="true">✓</span> APRN, Florida Licensed (Autonomous Practice)</li>
              <li className="flex gap-3 items-start"><span className="text-sage font-bold mt-0.5" aria-hidden="true">✓</span> DNP, Chamberlain University (2026)</li>
              <li className="flex gap-3 items-start"><span className="text-sage font-bold mt-0.5" aria-hidden="true">✓</span> MSN Psychiatry, Chamberlain University (2024)</li>
              <li className="flex gap-3 items-start"><span className="text-sage font-bold mt-0.5" aria-hidden="true">✓</span> 15+ Years Healthcare Experience</li>
              <li className="flex gap-3 items-start"><span className="text-sage font-bold mt-0.5" aria-hidden="true">✓</span> NPI 1790517449</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
