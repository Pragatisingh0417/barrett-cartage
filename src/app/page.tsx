import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CTA from "./components/CTA";
import WhyChooseUs from "./components/WhyChooseUs";
import PainPoints from "./components/PainPoints";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import ValueProposition from "./components/ValueProposition";
import FreightProcess from "./components/FreightProcess";

export default function Home() {
  return (
    <div className=" ">
      <main >
       
        <Hero />
        <PainPoints />
        <Solutions />
        <ValueProposition />
        <FreightProcess />
       <WhyChooseUs />
       <Testimonials />
       <CTA />
      </main>
    </div>
  );
}
