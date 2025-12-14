"use client";

import { useEffect, useRef, useState } from "react";

import { LuArrowUpRight } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";

import { motion } from "framer-motion";
import { upward } from "@/public/variants/upward";
import { transition1 } from "@/public/transitions/transition1";
import { transition1_s } from "@/public/transitions/transition1_s";
import { item } from "@/public/variants/item";

import Image from "next/image";
import Duffel1 from "@/public/images/portfolio/duffel/image1.webp";
import Duffel2 from "@/public/images/portfolio/duffel/image2.webp";
import Duffel3 from "@/public/images/portfolio/duffel/image3.webp";

import Onzelieve1 from "@/public/images/portfolio/onzelieve/image1.webp";
import Onzelieve2 from "@/public/images/portfolio/onzelieve/image2.webp";
import Onzelieve3 from "@/public/images/portfolio/onzelieve/image3.webp";
import Onzelieve4 from "@/public/images/portfolio/onzelieve/image4.webp";
import Onzelieve5 from "@/public/images/portfolio/onzelieve/image5.webp";

import Putte1 from "@/public/images/portfolio/putte/image1.webp";
import Putte2 from "@/public/images/portfolio/putte/image2.webp";
import Putte3 from "@/public/images/portfolio/putte/image3.webp";

import Waarloos1 from "@/public/images/portfolio/waarloos/image (1).webp";
import Waarloos2 from "@/public/images/portfolio/waarloos/image (2).webp";
import Waarloos3 from "@/public/images/portfolio/waarloos/image (3).webp";
import Waarloos4 from "@/public/images/portfolio/waarloos/image (4).webp";
import Waarloos5 from "@/public/images/portfolio/waarloos/image (5).webp";
import Waarloos6 from "@/public/images/portfolio/waarloos/image (6).webp";
import Waarloos7 from "@/public/images/portfolio/waarloos/image (7).webp";
import Waarloos8 from "@/public/images/portfolio/waarloos/image (8).webp";

import Tremelo1 from "@/public/images/portfolio/tremelo/image1.webp";
import Tremelo2 from "@/public/images/portfolio/tremelo/image2.webp";
import Tremelo3 from "@/public/images/portfolio/tremelo/image3.webp";
import Tremelo4 from "@/public/images/portfolio/tremelo/image4.webp";
import Tremelo5 from "@/public/images/portfolio/tremelo/image5.webp";
import Tremelo6 from "@/public/images/portfolio/tremelo/image6.webp";

import Sint1 from "@/public/images/portfolio/sintkatelijnewaver/image1.webp";
import Sint2 from "@/public/images/portfolio/sintkatelijnewaver/image2.webp";

import Carousel from "@/components/carousel";
import CarouselMobile from "@/components/carouselmobile";
import Whyus from "@/components/whyus";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contactform";

const images = [
  "/images/portfolio/duffel/image1.webp",
  "/images/portfolio/onzelieve/image1.webp",
  "/images/portfolio/putte/image1.webp",
  "/images/portfolio/waarloos/image (6).webp",
  "/images/portfolio/tremelo/image4.webp",
  "/images/portfolio/sintkatelijnewaver/image2.webp",
];

const duffel = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Duffel1} alt="" />
    <Image className="max-w-lg rounded-md" src={Duffel2} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Duffel3} alt="" />
  </div>,
];
const waarloos = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Waarloos1} alt="" />
    <Image className="max-w-lg rounded-md" src={Waarloos2} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Waarloos3} alt="" />
    <Image className="max-w-lg rounded-md" src={Waarloos4} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Waarloos5} alt="" />
    <Image className="max-w-lg rounded-md" src={Waarloos6} alt="" />
  </div>,
  <div key="slide4" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Waarloos7} alt="" />
    <Image className="max-w-lg rounded-md" src={Waarloos8} alt="" />
  </div>,
];
const putte = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Putte1} alt="" />
    <Image className="max-w-lg rounded-md" src={Putte2} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Putte3} alt="" />
  </div>,
];
const tremelo = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Tremelo1} alt="" />
    <Image className="max-w-lg rounded-md" src={Tremelo2} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Tremelo3} alt="" />
    <Image className="max-w-lg rounded-md" src={Tremelo4} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Tremelo5} alt="" />
    <Image className="max-w-lg rounded-md" src={Tremelo6} alt="" />
  </div>,
];
const sint = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Sint1} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Sint2} alt="" />
  </div>,
];
const onze = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Onzelieve1} alt="" />
    <Image className="max-w-lg rounded-md" src={Onzelieve2} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Onzelieve3} alt="" />
    <Image className="max-w-lg rounded-md" src={Onzelieve4} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-lg rounded-md" src={Onzelieve5} alt="" />
  </div>,
];

const duffelMobile = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Duffel1} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Duffel2} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Duffel3} alt="" />
  </div>,
];
const waarloosMobile = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Waarloos1} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Waarloos2} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Waarloos3} alt="" />
  </div>,
  <div key="slide4" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Waarloos4} alt="" />
  </div>,
  <div key="slide5" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Waarloos5} alt="" />
  </div>,
  <div key="slide6" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Waarloos6} alt="" />
  </div>,
  <div key="slide7" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Waarloos7} alt="" />
  </div>,
  <div key="slide8" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Waarloos8} alt="" />
  </div>,
];
const putteMobile = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Putte1} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Putte2} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Putte3} alt="" />
  </div>,
];
const tremeloMobile = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Tremelo1} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Tremelo2} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Tremelo3} alt="" />
  </div>,
  <div key="slide4" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Tremelo4} alt="" />
  </div>,
  <div key="slide5" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Tremelo5} alt="" />
  </div>,
  <div key="slide6" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Tremelo6} alt="" />
  </div>,
];
const sintMobile = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Sint1} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Sint2} alt="" />
  </div>,
];
const onzeMobile = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image
      className="max-w-sm lg:max-w-lg rounded-md"
      src={Onzelieve1}
      alt=""
    />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image
      className="max-w-sm lg:max-w-lg rounded-md"
      src={Onzelieve2}
      alt=""
    />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image
      className="max-w-sm lg:max-w-lg rounded-md"
      src={Onzelieve3}
      alt=""
    />
  </div>,
  <div key="slide4" className="flex flex-row gap-x-10">
    <Image
      className="max-w-sm lg:max-w-lg rounded-md"
      src={Onzelieve4}
      alt=""
    />
  </div>,
  <div key="slide5" className="flex flex-row gap-x-10">
    <Image
      className="max-w-sm lg:max-w-lg rounded-md"
      src={Onzelieve5}
      alt=""
    />
  </div>,
];

export default function Portfolio() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className="section_gap">
      <section className="flex flex-col max-w-sm md:max-w-xl lg:max-w-screen-xl gap-y-20 pt-40">
        {/* TEXTS */}
        <div className="flex flex-col gap-y-4 overflow-hidden">
          <div className="flex flex-row items-center">
            <div className="accent"></div>
            <span className="h6 !text-[--primary-color]">Projecten</span>
          </div>
          <motion.h1
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1}
            className="h1"
          >
            Een greep uit onze projecten
          </motion.h1>
          <div className="flex flex-col gap-y-4">
            <p className="p !max-w-screen-md">
              Het dak is ‘de kroon’ op uw huis. Een stevige dakconstructie, in
              degelijke materialen en met vakmanschap geplaatst, is dus van
              groot belang. De Haes heeft een uitzonderlijke ervaring en
              know-how opgebouwd inzake daktimmers, zowel traditioneel als met
              spanten. Alle timmerwerken gebeuren in de stevigste houtsoorten
              met drenkingsattest – uw garantie tegen houtrot en eventuele
              verzakkingen.
            </p>
            <p className="p !max-w-screen-md">
              De moderne architectuur stelt daktimmerlui vaak voor grote
              uitdagingen. Ingewikkelde dakconstructies gebeuren dan ook steeds
              in nauw overleg met de architect. Ook voor renovatieprojecten mag
              u rekenen op een perfecte uitvoering in stevige materialen die de
              tijd doorstaan. U hebt steeds de keuze tussen een afwerking met of
              zonder onderdak. Ook veluxramen worden vakkundig geplaatst voor
              een prijs/kwaliteitsverhouding die elke vergelijking met
              concurrenten kan doorstaan.
            </p>
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative overflow-hidden w-full py-10">
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r  from-white to-transparent to-[5%] pointer-events-none z-50" />
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l  from-white to-transparent to-[5%] pointer-events-none z-50" />

          <motion.div
            ref={carouselRef}
            className="flex space-x-6 cursor-grab"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: [0, -width] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {images.concat(images).map((src, index) => (
              <div key={index} className="min-w-[300px]">
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex flex-col gap-y-24">
            {/* renovatie */}
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center">
                  <div className="accent"></div>
                  <span className="body !text-[--primary-color]">
                    Onze-Lieve-Vrouw-Waver, Heiken
                  </span>
                </div>
                <h2 className="h2">Renovatie</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Image alt="" src={Duffel1} className="rounded-md" />
                <Image alt="" src={Duffel2} className="rounded-md" />
                <Image alt="" src={Duffel3} className="rounded-md" />
              </div>
            </div>

            {/* Daktimmer, dakkapel en gevelbekleding */}
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center">
                  <div className="accent"></div>
                  <span className="body !text-[--primary-color]">
                    Waarloos, Kerkelei
                  </span>
                </div>
                <h2 className="h2">Daktimmer, dakkapel en gevelbekleding</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Image alt="" src={Waarloos1} className="rounded-md" />
                <Image alt="" src={Waarloos2} className="rounded-md" />
                <Image alt="" src={Waarloos3} className="rounded-md" />
                <Image alt="" src={Waarloos4} className="rounded-md" />
                <Image alt="" src={Waarloos5} className="rounded-md" />
                <Image alt="" src={Waarloos6} className="rounded-md" />
                <Image alt="" src={Waarloos7} className="rounded-md" />
                <Image alt="" src={Waarloos8} className="rounded-md" />
                <div className="bg-[--primary-color] rounded-md"></div>
              </div>
            </div>

            {/* Gevelbekleding */}
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center">
                  <div className="accent"></div>
                  <span className="body !text-[--primary-color]">
                    Putte, Alice Nahonstraat
                  </span>
                </div>
                <h2 className="h2">Gevelbekleding</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Image alt="" src={Putte1} className="rounded-md" />
                <Image alt="" src={Putte2} className="rounded-md" />
                <Image alt="" src={Putte3} className="rounded-md" />
              </div>
            </div>

            {/* Timmerwerk en gevelbekleding */}
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center">
                  <div className="accent"></div>
                  <span className="body !text-[--primary-color]">
                    Tremelo, Pharma Finance
                  </span>
                </div>
                <h2 className="h2">Timmerwerk en gevelbekleding</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Image alt="" src={Tremelo1} className="rounded-md" />
                <Image alt="" src={Tremelo2} className="rounded-md" />
                <Image alt="" src={Tremelo3} className="rounded-md" />
                <Image alt="" src={Tremelo4} className="rounded-md" />
                <Image alt="" src={Tremelo5} className="rounded-md" />
                <Image alt="" src={Tremelo6} className="rounded-md" />
              </div>
            </div>

            {/* Gevelbekleding */}
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center">
                  <div className="accent"></div>
                  <span className="body !text-[--primary-color]">
                    Sint-Katelijne-Waver, Dorp
                  </span>
                </div>
                <h2 className="h2">Gevelbekleding</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Image alt="" src={Sint1} className="rounded-md" />
                <Image alt="" src={Sint2} className="rounded-md" />
                <div className="bg-[--primary-color] rounded-md"></div>
              </div>
            </div>

            {/* Renovatie */}
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center">
                  <div className="accent"></div>
                  <span className="body !text-[--primary-color]">
                    Onze-Lieve-Vrouw-Waver, Heiken
                  </span>
                </div>
                <h2 className="h2">Renovatie</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Image alt="" src={Onzelieve1} className="rounded-md" />
                <Image alt="" src={Onzelieve2} className="rounded-md" />
                <Image alt="" src={Onzelieve3} className="rounded-md" />
                <Image alt="" src={Onzelieve4} className="rounded-md" />
                <Image alt="" src={Onzelieve5} className="rounded-md" />
                <div className="bg-[--primary-color] rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
