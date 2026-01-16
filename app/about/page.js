"use client";

import Image from "next/image";
import Frans from "@/public/images/about/frans.webp";
import Jos from "@/public/images/about/jos.webp";
import Marcel from "@/public/images/about/marcel.webp";
import Rudy from "@/public/images/about/rudy.webp";
import Velux from "@/public/images/brands/velux.webp";
import Resitrix from "@/public/images/brands/resitrix.webp";
import Iko from "@/public/images/brands/iko.webp";
import Bosscover from "@/public/images/brands/bosscover.webp";

import ContactForm from "@/components/contactform";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const images = [
    "/images/brands/velux.webp",
    "/images/brands/resitrix.webp",
    "/images/brands/iko.webp",
    "/images/brands/bosscover.webp",
  ];

  const people = [
    "/images/about/frans.webp",
    "/images/about/jos.webp",
    "/images/about/marcel.webp",
    "/images/about/rudy.webp",
  ];

  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className="section_gap">
      <section className="flex flex-col md:flex-row items-center justify-center pt-40 gap-x-20">
        {/* IMAGES */}
        <div className="hidden md:flex flex-col items-center">
          <Image className="w-32 rounded-sm" src={Frans} alt="" />
          <div className="accentV"></div>
          <Image className="w-32 rounded-sm" src={Jos} alt="" />
          <div className="accentV"></div>
          <Image className="w-32 rounded-sm" src={Marcel} alt="" />
          <div className="accentV"></div>
          <Image className="w-32 rounded-sm" src={Rudy} alt="" />
        </div>
        {/* TEXTS */}
        <div className="flex flex-col gap-y-8">
          <div>
            <div className="flex flex-row items-center">
              <div className="accent"></div>
              <h2 className="body !text-[--primary-color]">
                Vier Generaties van Uitmuntendheid in Schrijnwerk{" "}
              </h2>
            </div>
            <h1 className="h1">Onze Geschiedenis</h1>
          </div>
          <div className="flex flex-col gap-y-6">
            <p className="p !text-start lg:text-center">
              In het hart van traditioneel vakmanschap begon onze reis meer dan
              een eeuw geleden, met een onwrikbare toewijding aan kwaliteit en
              oog voor detail in elk project. Alles begon in 1906, toen Frans De
              Haes de oude wagenmakerij overnam en een benijdenswaardige
              reputatie opbouwde. Zijn creaties, van kruiwagens tot
              transportwagens, stonden synoniem voor duurzaamheid en precisie.
              Zijn geheim? Droog hout en een scherp oog voor de perfecte
              afwerking.
            </p>
            <p className="p !text-start lg:text-center">
              Het nalatenschap van Frans werd voortgezet door zijn zonen,
              Michiel en Jos, die in 1946 het bedrijf uitbreidden. Onder leiding
              van Jos evolueerde de werkplaats en paste zich aan de nieuwe
              marktvraag aan. De focus verschoof naar residentieel schrijnwerk,
              met specialisaties in daken, ramen, deuren en houten structuren,
              zonder ooit de kern van traditioneel vakmanschap te verliezen.
            </p>
            <p className="p !text-start lg:text-center">
              De groei zette door met Marcel De Haes, die de processen
              moderniseerde en de productiecapaciteit verhoogde, waardoor het
              bedrijf van één woning per maand naar meerdere constructies per
              week ging. Innovatie werd een essentieel onderdeel van onze
              identiteit, zodat elk project met maximale efficiëntie en precisie
              werd uitgevoerd. Met de tijd nam zijn zoon, Rudy De Haes, het roer
              over en verstevigde de positie van het bedrijf als marktleider in
              de sector.
            </p>
            <p className="p !text-start lg:text-center">
              Vandaag houdt de vierde generatie de pioniersgeest van de familie
              De Haes levend. Wij combineren traditie en technologie om
              schrijnwerkoplossingen te bieden die generaties overstijgen,
              altijd met een sterke focus op kwaliteit en klanttevredenheid. Elk
              dak dat we bouwen, elke deur die we plaatsen en elk detail dat we
              verfijnen, draagt meer dan 100 jaar ervaring en passie voor het
              vak in zich.
            </p>
            <p className="p !text-start lg:text-center italic">
              ´
              <strong>
                Wij bouwen aan de toekomst zonder onze roots te vergeten.
              </strong>
            </p>
          </div>
        </div>
        {/* IMAGE SLIDER */}
        <div className="md:hidden relative overflow-hidden w-full py-4">
          <div className="absolute top-0 left-0 w-30 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-50" />
          <div className="absolute top-0 right-0 w-30 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-50" />

          <motion.div
            ref={carouselRef}
            className="flex space-x-6 cursor-grab"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: [0, -width] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {people.concat(people).map((src, index) => (
              <div
                key={index}
                className="flex flex-row items-center min-w-[200px]"
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BRANDs and certifications */}
      <section className="space-y-14">
        <div className="flex flex-col gap-y-6 items-center">
          <h3 className="h3">Dakwerken De Haes</h3>

          <div className="flex flex-col gap-y-4 items-center">
            <p className="p !text-center !max-w-[100ch]">
              Wij zijn gespecialiseerd in dakwerken, waaronder onderhoud,
              renovaties, waterdichting, isolatie en dakreparaties. Ongeacht de
              dienst die u nodig heeft, zorgt ons hooggekwalificeerd team voor
              kwaliteitsvol werk en een professionele en efficiënte aanpak van
              uw dak. Uw tevredenheid is onze prioriteit.
            </p>
            <p className="p !text-center !max-w-[100ch]">
              Wij hechten veel belang aan een directe en duidelijke
              communicatie. U krijgt altijd een vast aanspreekpunt om uw project
              van dichtbij op te volgen en volledige transparantie over de
              kosten, zodat u precies weet wat u kunt verwachten voordat de
              werkzaamheden beginnen.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 items-center">
          <h3 className="h3 text-center">
            <span className="text-[--primary-color]">deskundigen</span> in
            dakwerken, gevelbekleding, groendaken en isolatie
          </h3>
          <p className="p !text-center !max-w-[100ch]">
            Wij werken met de beste merken op de markt, van
            kwaliteitsleveranciers met alle nodige certificeringen:
            <i> Resitrix, Velux, Iko enertherm, </i>enz.
          </p>
          <div className="hidden lg:flex flex-row gap-x-20">
            <Image className="w-36" src={Velux} alt="" />
            <Image className="w-36" src={Iko} alt="" />
            <Image className="w-36" src={Resitrix} alt="" />
            <Image className="w-36 object-scale-down" src={Bosscover} alt="" />
          </div>

          {/* IMAGE SLIDER */}
          <div className=" lg:hidden relative overflow-hidden w-full py-4">
            <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-50" />
            <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-50" />

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
                <div
                  key={index}
                  className="flex flex-row items-center min-w-[144px]"
                >
                  <Image
                    src={src}
                    alt={`Slide ${index}`}
                    width={300}
                    height={200}
                    className="rounded-lg object-scale-down px-4"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
