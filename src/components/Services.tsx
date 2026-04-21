export default function Services() {
  const services = [
    {
      title: "Psychiatric Evaluation",
      icon: "🧠",
      desc: "Comprehensive assessment of your mental health history, symptoms, and goals to build a personalized treatment plan."
    },
    {
      title: "Medication Management",
      icon: "📋",
      desc: "Thoughtful prescribing and ongoing monitoring to find the right medication at the right dose for you."
    },
    {
      title: "Individual Therapy",
      icon: "💬",
      desc: "Supportive talk therapy using CBT, DBT, CPT, and ACT to build coping skills and process what you're going through."
    },
    {
      title: "Collaboration",
      icon: "🤝",
      desc: "I work alongside your therapist, primary care doctor, or other providers to coordinate your care comprehensively."
    },
    {
      title: "Telehealth",
      icon: "💻",
      desc: "All sessions are virtual via secure, HIPAA-compliant video. Access quality care from anywhere in Florida."
    }
  ];

  return (
    <section id="services" className="bg-background py-16 md:py-24 scroll-mt-20" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="services-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-charcoal mb-16">
          How I Help
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`bg-card p-8 rounded-2xl shadow-sm border border-card flex flex-col gap-4 hover:border-sage-15 hover:shadow-md transition-all ${idx === services.length - 1 && services.length % 2 !== 0 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''}`}>
              <div className="text-4xl mb-2" aria-hidden="true">{service.icon}</div>
              <h3 className="font-playfair text-[20px] md:text-[22px] font-bold text-sage">
                {service.title}
              </h3>
              <p className="font-lato text-charcoal text-[16px] md:text-[18px] leading-[1.7]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
