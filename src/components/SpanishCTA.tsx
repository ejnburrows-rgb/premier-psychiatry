export default function SpanishCTA() {
  return (
    <section id="spanish" className="bg-[rgba(124,161,140,0.10)] py-16">
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="font-playfair text-[20px] md:text-[24px] font-bold text-[#7CA18C] mb-6 leading-relaxed">
          <span role="img" aria-label="Spain Flag Emoji" className="mr-2">🇪🇸</span> 
          Atención psiquiátrica en español. Hablo español con fluidez para que puedas expresarte en el idioma que te sea más cómodo.
        </p>
        <a 
          href="https://care.headway.co/providers/aylin-sanchez-pmhnp-bc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-[#F2B8A0] text-[#25323D] px-8 py-3 rounded-full font-medium hover:bg-[#e8a78e] transition-colors"
        >
          Agenda tu cita
        </a>
      </div>
    </section>
  );
}
