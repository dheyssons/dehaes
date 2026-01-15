// IMAGES
import Image from "next/image";
import HeroImage from "@/public/home.webp";

import ContactForm from "@/components/contactform";
import Whyus from "@/components/whyus";
import Testimonials from "@/components/testimonials";

import Hero from "@/components/hero";
import ExtendedAbout from "@/components/ExtendedAbout";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <div className="absolute">
        <div className="absolute h-full w-full opacity-35 from-black bg-gradient-to-b to-[#fff0]"></div>
        <Image
          alt=""
          src={HeroImage}
          className="w-screen h-screen object-cover"
        />
      </div>

      <div className="section_gap relative">
        <Hero />

        <AboutUs />

        <Services />

        <ExtendedAbout />

        <Whyus />

        <Testimonials />

        <ContactForm />
      </div>
    </main>
  );
}
