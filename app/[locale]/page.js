// IMAGES
import Image from "next/image";
import HeroImage from "@/public/home.jpg";

import ContactForm from "@/components/contactform";
import Whyus from "@/components/whyus";
import Testimonials from "@/components/testimonials";

import Hero from "@/components/hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";

export const metadata = {
  title: "Dakwerken in Sint-Katelijne-Waver",
  description:
    "Erkend dakwerker in Sint-Katelijne-Waver gespecialiseerd in dakrenovatie, platte daken, hellende daken, gevelbekleding en zinkwerken. Vraag vrijblijvend uw offerte aan.",
};

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

        <Services />

        <Whyus />

        <Testimonials />

        <AboutUs />

        <ContactForm />
      </div>
    </main>
  );
}
