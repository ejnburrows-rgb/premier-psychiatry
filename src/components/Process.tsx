export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Book Your Appointment",
      desc: "Use the link below to check your insurance and schedule through Headway, or call (561) 834-5705 for a free 15-minute consultation."
    },
    {
      num: "02",
      title: "Initial Evaluation",
      desc: "A thorough 60-minute assessment where we review your history, symptoms, and goals. Together we'll create a personalized treatment plan."
    },
    {
      num: "03",
      title: "Ongoing Care",
      desc: "Regular follow-up sessions to monitor progress, adjust medications, and refine your plan. I check in and adapt as your needs evolve."
    }
  ];

  return (
    <section id="process" className="bg-[#F0EDE8] py-16 md:py-24 scroll-mt-20" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="process-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#25323D] mb-16" style={{ textShadow: "2px 2px 0 #1B2A4A" }}>
          What to Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col text-left">
              <span className="block font-serif text-6xl font-bold text-[#7CA18C] opacity-30 mb-2" aria-hidden="true">
                {step.num}
              </span>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F0EDE8] flex-grow">
                <h3 className="font-playfair text-[20px] md:text-[22px] font-bold text-[#25323D] mb-3">
                  {step.title}
                </h3>
                <p className="font-lato text-[16px] md:text-[18px] text-[#25323D] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="font-lato text-[16px] md:text-[18px] font-medium text-[#4A5568] bg-[rgba(124,161,140,0.10)] py-3 px-6 rounded-full inline-block mx-auto shadow-sm">
             All sessions are conducted via secure, HIPAA-compliant telehealth.
          </p>
        </div>
      </div>
    </section>
  );
}
