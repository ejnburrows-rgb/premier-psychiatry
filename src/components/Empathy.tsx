export default function Empathy() {
  const quotes = [
    "Racing thoughts keep you up at night, and mornings feel heavier than they should.",
    "You've been putting everyone else first, and somewhere along the way, lost yourself.",
    "Focusing at work feels impossible, and you're tired of people telling you to 'just try harder.'",
    "The sadness won't lift, no matter what you do, and you're wondering if this is just how life is now.",
    "You survived something painful, and your body still carries it even when your mind tries to move on."
  ];

  return (
    <section id="empathy" className="bg-card py-16 md:py-24 scroll-mt-20" aria-labelledby="empathy-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="empathy-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-charcoal mb-12">
          You might be feeling...
        </h2>
        <div className="space-y-6 text-[16px] md:text-[18px] text-charcoal leading-[1.7]">
          {quotes.map((quote, idx) => (
            <p key={idx} className={`bg-white p-6 rounded-xl shadow-sm border border-white/50 border-l-4 border-l-sage pl-6 italic md:w-[90%] ${idx % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
              &quot;{quote}&quot;
            </p>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="font-playfair text-lg md:text-xl text-sage font-bold px-4">
            You deserve care that meets you where you are. I&apos;m here to help.
          </p>
        </div>
      </div>
    </section>
  );
}
