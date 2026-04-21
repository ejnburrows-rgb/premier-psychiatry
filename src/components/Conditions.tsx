export default function Conditions() {
  const groups = [
    { title: "Mood", items: ["Depression", "Bipolar Disorder", "Irritability & Mood Swings"] },
    { title: "Anxiety", items: ["Generalized Anxiety", "Panic Disorders", "OCD", "Social Anxiety"] },
    { title: "Attention", items: ["ADHD (all ages)"] },
    { title: "Trauma", items: ["PTSD", "Trauma-Related Conditions"] },
    { title: "Women's Health", items: ["Maternal Mental Health", "Postpartum Depression & Anxiety", "Women's Issues"] },
    { title: "Other", items: ["Insomnia & Sleep Problems", "Eating Disorders", "Stress & Burnout", "Grief & Life Transitions", "BPD", "Personality Disorders", "ODD", "Psychosis", "Behavioral Issues", "Anger Management"] }
  ];

  return (
    <section id="conditions" className="bg-[#F0EDE8] py-16 md:py-24 scroll-mt-20" aria-labelledby="conditions-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="conditions-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#25323D] mb-16">
          What I Treat
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {groups.map((group, i) => (
            <div key={i}>
              <h3 className="font-playfair text-[20px] md:text-[22px] font-bold text-[#7CA18C] mb-4 pb-2 border-b border-[rgba(37,50,61,0.1)]">
                {group.title}
              </h3>
              <div className="flex flex-wrap">
                {group.items.map((item, j) => (
                  <span 
                    key={j} 
                    className="inline-block bg-[rgba(124,161,140,0.10)] text-[#7CA18C] px-4 py-2 text-sm font-medium rounded-full mr-2 mb-2 hover:bg-[rgba(124,161,140,0.20)] transition-all cursor-default transform hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#4A5568] italic mt-8 text-center">
          Not sure if I can help? Book a free 15-minute consultation and we&apos;ll figure it out together.
        </p>
      </div>
    </section>
  );
}
