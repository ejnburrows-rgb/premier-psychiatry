"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Do you prescribe controlled substances?",
      a: "I evaluate each patient individually. Medication decisions are made collaboratively based on your clinical needs, history, and treatment goals."
    },
    {
      q: "What happens during the first appointment?",
      a: "We'll spend about 60 minutes reviewing your mental health history, current symptoms, medications, and goals. By the end, you'll have a clear treatment plan."
    },
    {
      q: "Do you offer therapy, medication, or both?",
      a: "I offer both medication management and supportive individual therapy. We can also coordinate with your existing therapist if you have one."
    },
    {
      q: "How does telehealth work?",
      a: "All sessions are conducted via secure, HIPAA-compliant video. You'll receive a link before your appointment. All you need is a private space and a device with a camera."
    },
    {
      q: "What ages do you treat?",
      a: "I see preteens (10+), adolescents, adults, and seniors (65+)."
    },
    {
      q: "Do you speak Spanish?",
      a: "Yes! I'm fully bilingual (English/Spanish) and provide care in both languages. Se habla español."
    },
    {
      q: "What if I need help between appointments?",
      a: "I'm available for questions between sessions. For emergencies, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room."
    },
    {
      q: "How do I check if my insurance is accepted?",
      a: "Click the 'Check Insurance & Book' button on this page. Headway will verify your coverage instantly."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  return (
    <section id="faq" className="bg-card py-16 md:py-24 scroll-mt-20" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-charcoal mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full text-left px-6 py-5 hover:bg-background transition-colors flex justify-between items-center focus:outline-none focus-visible:outline-2 focus-visible:outline-sage focus-visible:outline-offset-2 min-h-[44px]"
                >
                  <span className="font-playfair font-bold text-charcoal text-[18px] md:text-[20px] pr-4">{faq.q}</span>
                  <span className={`text-sage transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-heading-${i}`}
                  className={`px-6 transition-all overflow-hidden ${isOpen ? 'max-h-64 py-5 border-t border-card' : 'max-h-0 py-0'}`}
                >
                  <p className="font-lato text-[16px] md:text-[18px] text-charcoal-light leading-[1.7]">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
