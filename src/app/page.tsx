import Hero from "@/components/Hero";
// import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import LogosToBeAdded from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
// import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import CalendlyWidget from "@/components/Calendly-Widget";
// import Image from "next/image";
// import gymImage from "../../public/images/gym.jpg";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <LogosToBeAdded />
      <Container>
        <Benefits />
        <Section
          id="Book-a-meeting"
          title="Book a call with our founder"
          description="Not sure if it is right for you? Book a free 15 minute call with our Founder to help you make the decision. We really want to find YOUR training buddy!"
        >
          <CalendlyWidget />
        </Section>

        <Section
          id="pricing"
          title="Pricing"
          description="Users registered before February 2026 get the app lifetime for free. Simple and transparent."
        >
          {/* <Pricing /> */}
        </Section>

        {/* <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who use Scufflr."
        >
          <Testimonials />
        </Section> */}

        <FAQ />

        {/* <Stats /> */}

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
