"use client";

import { useState } from "react";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    { quote: "Aylin made me feel heard from the very first session. After years of struggling with anxiety, I finally feel like I have a plan that works. She explains everything clearly and never rushes.", name: "Maria L.", tag: "Anxiety" },
    { quote: "I was nervous about medication management, but Aylin walked me through every option and let me make the decision. My depression has improved significantly in just three months.", name: "James R.", tag: "Depression" },
    { quote: "As a Spanish speaker, finding a bilingual provider who truly understands my culture made all the difference. Aylin is compassionate, professional, and genuinely cares.", name: "Carmen D.", tag: "Bilingual Care" },
    { quote: "My teenager was diagnosed with ADHD and I felt lost. Aylin gave us strategies for school and home. She's been a lifesaver.", name: "Patricia M.", tag: "ADHD" },
    { quote: "The telehealth format is so convenient. I never miss appointments anymore and Aylin is always on time and fully present. Best psychiatric care I've ever received.", name: "Robert K.", tag: "Telehealth" },
    { quote: "After my second baby, I was drowning in postpartum anxiety. Aylin understood exactly what I was going through and helped me feel like myself again. I'm so grateful.", name: "Jessica T.", tag: "Maternal Mental Health" },
    { quote: "I've seen multiple providers for my bipolar disorder and none of them took the time Aylin does. She checks in between appointments and adjusts my plan as needed. Truly exceptional.", name: "Daniel S.", tag: "Bipolar Disorder" },
    { quote: "Aylin helped me process trauma I'd been carrying for over a decade. Her approach is gentle but effective. I finally sleep through the night.", name: "Stephanie W.", tag: "PTSD & Trauma" },
    { quote: "The free consultation call sold me immediately. Aylin was warm, direct, and made me feel comfortable before I even booked. The insurance process through Headway was seamless.", name: "Michael A.", tag: "Getting Started" },
    { quote: "I was skeptical about virtual psychiatry but Aylin changed my mind completely. She is thorough, remembers details from previous sessions, and my insomnia is finally under control.", name: "Laura G.", tag: "Insomnia" }
  ];

  const displayedReviews = reviews.slice(0, showAll ? 10 : 3);

  return (
    <section id="testimonials" className="bg-[#F7F5F0] py-16 md:py-24 scroll-mt-20" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#25323D] mb-16">
          What My Patients Say
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div 
              key={r.name} 
              className={`bg-[#F0EDE8] rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1 hover:shadow-md ${!showAll && i >= 3 ? 'hidden' : 'block animate-fade-in-up'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
               <p className="italic text-[#25323D] mb-6 leading-relaxed flex-grow">
                 &quot;{r.quote}&quot;
               </p>
               <div className="flex flex-col gap-2 pt-4 border-t border-[rgba(37,50,61,0.1)] mt-auto">
                 <span className="font-bold text-[#25323D]">{r.name}</span>
                 <span className="bg-[rgba(124,161,140,0.10)] text-[#7CA18C] px-3 py-1 text-xs font-medium rounded-full w-max">
                   {r.tag}
                 </span>
               </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 md:mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="border-2 border-[#7CA18C] text-[#25323D] px-8 py-3 rounded-full font-bold hover:bg-[rgba(124,161,140,0.10)] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7CA18C]"
          >
            {showAll ? "Show Less" : "Show All Reviews"}
          </button>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 text-[#4A5568] font-medium pt-8">
          <a href="https://www.zocdoc.com/doctor/aylin-trujillo-aprn-rn-664547" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#5B8583] transition-colors focus:outline-none focus:underline p-1">
            <span className="text-[#FEC037] text-xl" aria-hidden="true">★</span> 4.9 on ZocDoc (22 reviews)
          </a>
          <span className="hidden sm:inline opacity-30">|</span>
          <a href="https://www.psychologytoday.com/us/psychiatrists/aylin-sanchez-wellington-fl/1672846" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#5B8583] transition-colors focus:outline-none focus:underline p-1">
            <span className="bg-[#7CA18C] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold leading-none" aria-hidden="true">✓</span> Verified on Psychology Today
          </a>
        </div>
      </div>
    </section>
  );
}
