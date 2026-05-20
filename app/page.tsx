import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AIActivations from "@/sections/AIActivations";
import Entertainment from "@/sections/Entertainment";
import EventsPlatform from "@/sections/EventsPlatform";
import FinalCTA from "@/sections/FinalCTA";
import Hero from "@/sections/Hero";
import RetailLuxury from "@/sections/RetailLuxury";
import WhyDubaiMall from "@/sections/WhyDubaiMall";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyDubaiMall />
      <RetailLuxury />
      <Entertainment />
      <EventsPlatform />
      <AIActivations />
      <FinalCTA />
      <Footer />
    </main>
  );
}
