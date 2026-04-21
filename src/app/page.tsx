import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import Empathy from "@/components/Empathy";
import Services from "@/components/Services";
import Conditions from "@/components/Conditions";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Insurance from "@/components/Insurance";
import SelfPay from "@/components/SelfPay";
import SpanishCTA from "@/components/SpanishCTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main id="main-content" className="w-full">
      <Hero />
      <TrustTicker />
      <Empathy />
      <Services />
      <Conditions />
      <About />
      <Process />
      <Testimonials />
      <Insurance />
      <SelfPay />
      <SpanishCTA />
      <FAQ />
    </main>
  );
}
