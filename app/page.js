"use client";

// IMAGES
import Image from "next/image";
import HeroImage from "@/public/home.webp";
import AboutImage from "@/public/images/about.webp";

import Velux from "@/public/images/brands/velux.webp";
import Resitrix from "@/public/images/brands/resitrix.webp";
import Iko from "@/public/images/brands/iko.webp";
import Bosscover from "@/public/images/brands/bosscover.webp";

// ICONS
import { LuArrowUpRight } from "react-icons/lu";

// MOTION
import { motion } from "framer-motion";
import { transition1 } from "@/public/transitions/transition1";
import { upward } from "@/public/variants/upward";
import { item } from "@/public/variants/item";
import { transition1_s } from "@/public/transitions/transition1_s";
import { lefttoright } from "@/public/variants/lefttoright";
import { EmblaCarousel } from "@/components/emblacarousel";

// OTHERS IMPORTS
import JsonLd from "@/components/jsonld";
import ContactForm from "@/components/contactform";
import Whyus from "@/components/whyus";
import Testimonials from "@/components/testimonials";

import { useState, useEffect, useRef } from "react";

const images = [
  "/images/brands/velux.webp",
  "/images/brands/resitrix.webp",
  "/images/brands/iko.webp",
  "/images/brands/bosscover.webp",
];

export default function Home() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [ExtendedText, setExtendedText] = useState(false);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);

    if (window.matchMedia("(min-width: 1024px)").matches) {
      setExtendedText(true);
    } else {
      setExtendedText(false);
    }
  }, []);

  function SetExtendedText() {
    if (ExtendedText) {
      setExtendedText(false);
    } else {
      setExtendedText(true);
    }
  }

  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "schrijnwerkerij de haes",
    telephone: "015 55 19 35",
    email: "info@schrijnwerkerij-dehaes.be",
    address: {
      "@type": "PostalAddress",
      postalCode: "2806",
    },
  };

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
        {/* HERO */}
        <section className="flex flex-col justify-center h-screen">
          {/* title */}
          <motion.div
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1_s}
            className="flex flex-col"
          >
            <div className="flex flex-col gap-y-20 lg:gap-y-20">
              {/* TITLE */}
              <div>
                <motion.h1
                  variants={item}
                  className="display-large text-white lg:text-[#ffffff]"
                >
                  Schrijnwerkerij De Haes
                </motion.h1>
                <motion.p
                  variants={item}
                  className="h6 !text-[#ffffffed] lg:!text-[#f2f2f2] leading-6"
                >
                  Traditie en kwaliteit die generaties overstijgen.
                </motion.p>
                <JsonLd data={jsonLdData} />
              </div>
              {/* CALL TO ACTION  */}
              <div className="flex flex-col gap-x-2 lg:flex-row gap-y-2">
                <a className="btn self-start uppercase" href="/contact">
                  Contact opnemen
                </a>
                <a
                  className="btn-ghost self-start lg:self-baseline uppercase"
                  href="#services"
                >
                  Onze diensten <LuArrowUpRight className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT US */}
        <section className="flex flex-col ">
          {/* about */}
          <div className="flex flex-col lg:flex-row gap-y-8 items-center justify-between">
            {/* texts */}
            <div className="flex flex-col gap-y-8 md:gap-y-14">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  {/* H2 */}
                  <div>
                    <motion.h2
                      variants={upward}
                      initial="variantInit"
                      whileInView="variantAnim"
                      viewport={{ once: true }}
                      transition={transition1}
                      className="h2"
                    >
                      Over{" "}
                      <span className="text-[--primary-color]">De Haes</span>
                    </motion.h2>
                  </div>
                  <div className="space-y-4">
                    {/* PARAGRAPH */}
                    <p className="p ">
                      Schrijnwerkerij De Haes is een familiebedrijf dat kan
                      terugblikken op een eeuw vakmanschap. Met Rudy De Haes, de
                      huidige zaakvoerder, is het bedrijf al aan de vierde
                      generatie schrijnwerkers toe. De rode draad door deze
                      familiekroniek is een grote passie voor 'de stiel', een
                      degelijke vakkennis en de wil om klanten een optimale
                      kwaliteit en service te bieden, zoals alleen een
                      familiebedrijf dat kan.
                    </p>
                    <p className="p">
                      Zaakvoerder Rudy volgt het technische aspect van ieder
                      project volledig op. De werknemers zijn hooggekwalificeerd
                      en hebben elk hun eigen specialiteit. Het resultaat? Een
                      dak dat tot in de puntjes afgewerkt is.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="btn max-w-max lg:self-start uppercase"
                href="/about"
              >
                Meer weten
              </a>
            </div>
            {/* CAROUSEL */}
            <EmblaCarousel></EmblaCarousel>
          </div>
        </section>

        {/* About Image section */}
        <section className="flex flex-col lg:flex-row justify-evenly">
          {/* image */}
          <Image
            className="rounded-md hidden md:block md:w-[27rem]"
            src={AboutImage}
            alt=""
          />
          {/* text */}
          <div className="flex flex-col justify-between items-center lg:items-start gap-y-6">
            <div className="flex flex-col gap-4 justify-between h-full items-start">
              <h2 className="h2">
                Uw dak,
                <span className="text-[--primary-color]">
                  {" "}
                  Onze toewijding!
                </span>
              </h2>

              {/* DESKTOP */}
              <div
                className={`hidden lg:flex flex-col gap-y-4 ${
                  ExtendedText ? "" : "!max-h-72 overflow-hidden"
                }`}
              >
                <p className="p">
                  Uw dak verdient het beste op het gebied van kwaliteit,{" "}
                  <strong>isolatie</strong> en <strong>gafwerking</strong>. Ons
                  gespecialiseerde team werkt met toewijding om uw projecten tot
                  leven te brengen, waarbij we functionaliteit en esthetiek
                  combineren voor het perfecte resultaat. Wat ons onderscheidt?
                  Onze <strong>passie</strong> voor het vak en onze inzet om uw
                  verwachtingen te overtreffen, ongeacht de complexiteit van de
                  opdracht.
                </p>
                <p className="p">
                  Wij zijn actief in Brussel, Waals-Brabant en omliggende
                  regio’s en bieden complete dakoplossingen, van klein onderhoud
                  tot grootschalige renovaties. Met uitgebreide ervaring in de
                  sector garanderen wij hoogwaardige service, met oog voor
                  detail en vakmanschap, zowel voor platte als hellende daken.
                </p>
                <p className="p">
                  Onze expertise, van generatie op generatie doorgegeven, stelt
                  ons in staat om alle aspecten van uw dak aan te pakken, van
                  constructie tot de installatie van afwerkingen en accessoires.
                  We werken met verschillende soorten{" "}
                  <strong>
                    {" "}
                    dakbedekking, zoals dakpannen, leisteen, zink en aluminium
                  </strong>
                  , en bieden daarnaast isolatie- en dakraaminstallaties.
                </p>
                <p className="p">
                  Wat uw project ook is, wij leveren een op maat gemaakte
                  service die perfect aansluit bij uw wensen. Vertrouw op ons
                  team voor een duurzaam, veilig en perfect afgewerkt dak!
                </p>
              </div>
              {/* MOBILE */}
              <div
                className={`lg:hidden flex flex-col gap-y-6 ${
                  ExtendedText ? "" : "!max-h-72 overflow-hidden"
                }`}
              >
                <p className="p small">
                  Uw dak verdient het beste in <strong>kwaliteit</strong>,{" "}
                  <strong>isolatie</strong> en <strong>afwerking</strong>. Ons
                  team werkt met toewijding om functionaliteit en esthetiek te
                  combineren voor het perfecte resultaat. Wat ons onderscheidt?
                  Onze <strong>passie</strong> en inzet om altijd uw
                  verwachtingen te overtreffen.
                </p>

                <p className="p small">
                  Wij zijn actief in Brussel, Waals-Brabant en omgeving. Van
                  klein onderhoud tot renovaties, wij garanderen service van
                  hoge kwaliteit met oog voor detail en vakmanschap, zowel bij
                  platte als hellende daken.
                </p>

                <p className="p small">
                  Met ervaring van generatie op generatie pakken wij alles aan:
                  constructie, afwerking en accessoires. We werken met{" "}
                  <strong>dakpannen, leisteen, zink en aluminium</strong>, en
                  verzorgen ook isolatie- en dakraaminstallaties.
                </p>

                <p className="p small">
                  Voor elk project leveren wij een oplossing op maat. Vertrouw
                  op ons team voor een duurzaam, veilig en perfect afgewerkt
                  dak!
                </p>
              </div>

              <button
                className="lg:hidden text-lg !text-[--primary-color]"
                onClick={() => SetExtendedText()}
              >
                {ExtendedText ? "lees minder" : "lees verder..."}
              </button>

              <a className="btn max-w-max uppercase" href="/contact">
                Contact opnemen
              </a>
            </div>
          </div>
        </section>

        {/* BRANDs and certifications */}
        <section className="flex flex-col items-center gap-y-6">
          <h3 className="h4 !text-center text-balance">
            Schrijnwerkerij De Haes,{" "}
            <span className="text-[--primary-color]">deskundigen</span> in
            dakwerken, gevelbekleding, groendaken en isolatie
          </h3>
          <p className="p !text-center !max-w-screen-lg">
            Wij werken met de beste merken op de markt, van
            kwaliteitsleveranciers met alle nodige certificeringen:
            <i> Resitrix, Velux, Iko enertherm, </i>enz.
          </p>

          <motion.div
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1_s}
            className="hidden lg:flex flex-row gap-x-20"
          >
            <motion.div variants={item}>
              <Image className="w-36" src={Velux} alt="" />
            </motion.div>
            <motion.div variants={item}>
              <Image className="w-36" src={Iko} alt="" />
            </motion.div>
            <motion.div variants={item}>
              <Image className="w-36" src={Resitrix} alt="" />
            </motion.div>
            <motion.div variants={item}>
              <Image
                className="w-36 h-36 object-scale-down"
                src={Bosscover}
                alt=""
              />
            </motion.div>
          </motion.div>

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
        </section>

        {/* OUR SERVICES */}
        <section id="services" className="space-y-14">
          <div className="overflow-hidden flex flex-col">
            <div className="flex flex-row items-center">
              <div className="accent"></div>
              <span className="h6 !text-[--primary-color]">Diensten</span>
            </div>
            <motion.h2
              variants={lefttoright}
              initial="variantInit"
              whileInView="variantAnim"
              viewport={{ once: true }}
              transition={transition1}
              className="h2"
            >
              Belangrijkste diensten
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
            {/* daktimmer */}
            <div className="card-services">
              <img
                className="image-services"
                alt="bardage"
                src="images/services/charpenter.webp"
                loading="lazy"
              ></img>
              {/* text */}
              <div className="flex flex-col gap-y-3 justify-around h-56">
                {/* title */}
                <div className="h-56">
                  <h3 className="h3 card-services_title">Daktimmers</h3>
                  <p className="p line-clamp-6 lg:line-clamp-none">
                    Daktimmers vormen de ruggengraat van een stevig en goed
                    gebouwd dak. Met meer dan een eeuw ervaring werken wij met
                    hoogwaardige houtsoorten en verfijnde technieken om
                    duurzaamheid, veiligheid en een onberispelijke afwerking te
                    garanderen, zowel bij nieuwbouw als renovaties.
                  </p>
                </div>
              </div>
              <a
                className="btn self-start uppercase"
                href="/services/daktimmer"
              >
                meer informatie <LuArrowUpRight className="ml-2" />
              </a>
            </div>
            {/* groendaken */}
            <div className="card-services">
              <img
                className="image-services"
                alt="groendaken"
                src="images/services/groendaken/image1.webp"
                loading="lazy"
              ></img>
              {/* text */}
              <div className="flex flex-col gap-y-3 justify-around h-56">
                {/* title */}
                <div className="h-56">
                  <h3 className="h3 card-services_title">Groendaken</h3>
                  <p className="p line-clamp-6 lg:line-clamp-none">
                    Groendaken zijn een innovatieve en duurzame oplossing voor
                    zowel residentiële als commerciële gebouwen. Ze verbeteren
                    de energie-efficiëntie, verlengen de levensduur van het dak
                    en dragen bij aan een beter milieu door waterretentie en
                    luchtzuivering.
                  </p>
                </div>
              </div>
              <a
                className="btn self-start uppercase"
                href="/services/groendaken"
              >
                meer informatie <LuArrowUpRight className="ml-2" />
              </a>
            </div>
            {/* gevelbekleding */}
            <div className="card-services">
              <img
                className="image-services"
                alt="gevelbekleding"
                src="images/services/gevelbekleding/image1.webp"
                loading="lazy"
              ></img>
              {/* text */}
              <div className="flex flex-col gap-y-3 justify-around">
                {/* title */}
                <div className="h-56">
                  <h3 className="h3 card-services_title">Gevelbekleding</h3>
                  <p className="p line-clamp-6 lg:line-clamp-none">
                    Gevelbekleding zorgt voor de esthetische uitstraling en
                    bescherming van uw gebouw. Wij bieden een breed scala aan
                    gevelbekledingdiensten, van installatie tot renovatie, met
                    materialen die zowel visueel aantrekkelijk als functioneel
                    zijn.
                  </p>
                </div>
              </div>
              <a
                className="btn self-start uppercase"
                href="/services/gevelbekleding"
              >
                meer informatie <LuArrowUpRight className="ml-2" />
              </a>
            </div>
            {/* plattedaken */}
            <div className="card-services">
              <img
                className="image-services"
                alt="plateforme"
                src="images/services/plateforme.webp"
                loading="lazy"
              ></img>
              {/* text */}
              <div className="flex flex-col gap-y-3 justify-around">
                {/* title */}
                <div className="h-56">
                  <h3 className="h3 card-services_title">Platte daken</h3>
                  <p className="p line-clamp-6 lg:line-clamp-none">
                    Platte daken bieden efficiëntie en functionaliteit voor
                    diverse projecten en excelleren in waterdichting en
                    isolatie. Met onze maatwerkoplossingen garanderen we
                    duurzaamheid en optimale prestaties, zodat uw dak beschermd
                    blijft tegen weersinvloeden en afwateringsproblemen.
                  </p>
                </div>
              </div>
              <a
                className="btn self-start uppercase"
                href="/services/plattedaken"
              >
                meer informatie <LuArrowUpRight className="ml-2" />
              </a>
            </div>
            {/* renovatie */}
            <div className="card-services">
              <img
                className="image-services"
                alt="renovatie"
                src="images/services/renovation.webp"
                loading="lazy"
              ></img>
              <div className="flex flex-col gap-y-3 justify-around h-56">
                <div className="h-56">
                  <h3 className="h3 card-services_title">Renovatie</h3>
                  <p className="p line-clamp-6 lg:line-clamp-none">
                    Renovatie is een essentiële stap om uw gebouwen en ruimtes
                    te verbeteren, moderniseren of herstellen. Of het nu gaat om
                    schadeherstel, structurele vernieuwing of het verhogen van
                    energie-efficiëntie, onze renovatiediensten zijn ontworpen
                    om aan uw behoeften te voldoen en uw verwachtingen te
                    overtreffen.
                  </p>
                </div>
              </div>
              <a
                className="btn self-start uppercase"
                href="/services/renovatie"
              >
                meer informatie <LuArrowUpRight className="ml-2" />
              </a>
            </div>
            {/* isolatie */}
            <div className="card-services">
              <img
                className="image-services"
                alt="isolatie"
                src="images/services/isolatie.webp"
                loading="lazy"
              ></img>
              {/* text */}
              <div className="flex flex-col gap-y-3 justify-around h-56">
                <div className="h-56">
                  <h3 className="h3 card-services_title">Isolatie</h3>
                  <p className="p line-clamp-6 lg:line-clamp-none">
                    Wij bieden thermische isolatie-oplossingen voor daken die
                    zorgen voor meer comfort en een aanzienlijke vermindering
                    van energiekosten. Onze diensten worden volledig
                    gepersonaliseerd om te voldoen aan de specifieke behoeften
                    van schuine of platte daken.
                  </p>
                </div>
              </div>
              <a className="btn self-start" href="/services/isolatie">
                MEER INFORMATIE <LuArrowUpRight className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        <Whyus />

        <Testimonials />

        <ContactForm />
      </div>
    </main>
  );
}
