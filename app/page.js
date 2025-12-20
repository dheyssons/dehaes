"use client";

// IMAGES
import Image from "next/image";
import HeroImage from "@/public/home.webp";
import AboutImage from "@/public/images/about.webp";

import Velux from "@/public/images/brands/velux.webp";
import Resitrix from "@/public/images/brands/resitrix.webp";
import Iko from "@/public/images/brands/iko.webp";
import Bosscover from "@/public/images/brands/bosscover.webp";

// SERVICES
import RenovatieImage from "@/public/images/services/renovation.webp";
import DaktimmerImage from "@/public/images/services/daktimmer.webp";
import GevelbekledingImage from "@/public/images/services/cladding.webp";
import PlattedakenImage from "@/public/images/services/epdm.webp";
import Groendaken from "@/public/images/services/greenroof.webp";
import IsolatieImage from "@/public/images/services/insulation.webp";

import Maps from "@/public/images/maps.png";

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
        <section className="flex flex-col justify-center h-screen relative">
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
              <div className="space-y-6">
                <div>
                  <div className="flex flex-row items-center">
                    <div className="accent !bg-white"></div>
                    <p className="body !text-white">algemene dakwerken</p>
                  </div>

                  <motion.h1
                    variants={item}
                    className="display-large !text-white"
                  >
                    Schrijnwerkerij De Haes
                  </motion.h1>
                </div>

                <motion.p
                  variants={item}
                  className="p !text-[#ffffffed] lg:!text-[#f2f2f2ed]"
                >
                  Traditie en kwaliteit die generaties overstijgen, met
                  vakkundige dakwerken in Sint-Katelijne-Waver en omgeving zoals
                  Mechelen, Lier en Bornem.
                </motion.p>
                <JsonLd data={jsonLdData} />
              </div>
              {/* CALL TO ACTION  */}
              <div className="flex flex-col gap-x-3 md:flex-row gap-y-2">
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

          {/* SCROLL INDICATOR - chevron indiquant du contenu dessous */}
          <a
            href="#about"
            aria-label="Descendre vers la section À propos"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white opacity-90 hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </section>

        {/* ABOUT US */}
        <section className="flex flex-col lg:flex-row justify-between gap-8">
          {/* texts */}
          <div className="flex flex-col gap-y-8 md:gap-y-10 justify-between">
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
                    Over <span className="text-[--primary-color]">De Haes</span>
                  </motion.h2>
                </div>
                <div className="space-y-4">
                  {/* PARAGRAPH */}
                  <p className="p ">
                    Schrijnwerkerij De Haes is een familiebedrijf actief in de
                    regio Sint-Katelijne-Waver, dat kan terugblikken op een eeuw
                    vakmanschap. Met Rudy De Haes, de huidige zaakvoerder, is
                    het bedrijf al aan de vierde generatie schrijnwerkers toe.
                    De rode draad door deze familiekroniek is een grote passie
                    voor 'de stiel', een degelijke vakkennis en de wil om
                    klanten een optimale kwaliteit en service te bieden, zoals
                    alleen een familiebedrijf dat kan.
                  </p>
                  <p className="p">
                    Zaakvoerder Rudy volgt het technische aspect van ieder
                    project volledig op. De werknemers zijn hooggekwalificeerd
                    en hebben elk hun eigen specialiteit. Het resultaat? Een dak
                    dat tot in de puntjes afgewerkt is.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between md:flex-row gap-2">
              <a className="btn !w-full lg:self-start uppercase" href="/about">
                Meer weten
              </a>
              <a
                className="btn-ghost !w-full !outline-[--primary-color] !text-[--primary-color] hover:!text-white lg:self-start uppercase"
                href="/portfolio"
              >
                projecten <LuArrowUpRight className="ml-2" />
              </a>
            </div>
          </div>
          {/* CAROUSEL */}
          <EmblaCarousel></EmblaCarousel>
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
        <section id="services" className="flex flex-col gap-y-2 py-4">
          <div className="overflow-hidden space-y-10 md:space-y-20">
            {/* title */}
            <div>
              <div className="flex flex-row items-center">
                <div className="accent"></div>
                <span className="body">Découvrez nos services</span>
              </div>

              <motion.h2
                variants={lefttoright}
                initial="variantInit"
                whileInView="variantAnim"
                viewport={{ once: true }}
                transition={transition1}
                className="h1"
              >
                Services principaux
              </motion.h2>
            </div>

            {/* services */}
            <div className="flex flex-col gap-y-32">
              {/* Daktimmer > */}
              <a
                href="/services/daktimmer"
                className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
              >
                <div>
                  <Image
                    src={DaktimmerImage}
                    className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>
                <div className="lg:absolute mt-4 lg:mt-14 bottom-0 right-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                  <div className="flex flex-col justify-between h-full">
                    {/* texts */}
                    <div className="flex flex-col h-full gap-y-3 justify-evenly">
                      <h2 className="h3 group-hover:lg:text-white duration-500">
                        Daktimmer
                      </h2>
                      <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                        Daktimmers vormen de ruggengraat van een stevig en goed
                        gebouwd dak. Met meer dan een eeuw ervaring werken wij
                        met hoogwaardige houtsoorten en verfijnde technieken om
                        duurzaamheid, veiligheid en een onberispelijke afwerking
                        te garanderen, zowel bij nieuwbouw als renovaties.
                      </p>
                      {/* button */}
                      <div className="flex flex-row gap-x-2 items-center">
                        <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                          <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                        </div>
                        <span className="group-hover:lg:text-white duration-500 uppercase">
                          Meer weten
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Gevelbekleding < */}
              <a
                href="/services/gevelbekleding"
                className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
              >
                <div>
                  <Image
                    src={GevelbekledingImage}
                    className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>
                <div className="lg:absolute mt-4 lg:mt-14 bottom-0 left-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                  <div className="flex flex-col justify-between h-full">
                    {/* texts */}
                    <div className="flex flex-col h-full gap-y-3 justify-evenly">
                      <h2 className="h3 group-hover:lg:text-white duration-500">
                        Gevelbekleding
                      </h2>
                      <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                        Gevelbekleding zorgt voor de esthetische uitstraling en
                        bescherming van uw gebouw. Wij bieden een breed scala
                        aan gevelbekledingdiensten, van installatie tot
                        renovatie, met materialen die zowel visueel
                        aantrekkelijk als functioneel zijn.
                      </p>
                      {/* button */}
                      <div className="flex flex-row gap-x-2 items-center">
                        <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                          <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                        </div>
                        <span className="group-hover:lg:text-white duration-500 uppercase">
                          Meer weten
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Plattedaken > */}
              <a
                href="/services/plattedaken"
                className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
              >
                <div>
                  <Image
                    src={PlattedakenImage}
                    className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>
                <div className="lg:absolute mt-4 lg:mt-14 bottom-0 right-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                  <div className="flex flex-col justify-between h-full">
                    {/* texts */}
                    <div className="flex flex-col h-full gap-y-3 justify-evenly">
                      <h2 className="h3 group-hover:lg:text-white duration-500">
                        Platte daken
                      </h2>
                      <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                        Platte daken bieden efficiëntie en functionaliteit voor
                        diverse projecten en excelleren in waterdichting en
                        isolatie. Met onze maatwerkoplossingen garanderen we
                        duurzaamheid en optimale prestaties, zodat uw dak
                        beschermd blijft tegen weersinvloeden en
                        afwateringsproblemen.
                      </p>
                      {/* button */}
                      <div className="flex flex-row gap-x-2 items-center">
                        <div className="bg-[--primary-color] p-2 group-hover:bg-white duration-500">
                          <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                        </div>
                        <span className="group-hover:lg:text-white duration-500 uppercase">
                          Meer weten
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Isolatie < */}
              <a
                href="/services/isolatie"
                className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
              >
                <div>
                  <Image
                    src={IsolatieImage}
                    className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>
                <div className="lg:absolute mt-4 lg:mt-14 bottom-0 left-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                  <div className="flex flex-col justify-between h-full">
                    {/* texts */}
                    <div className="flex flex-col h-full gap-y-3 justify-evenly">
                      <h2 className="h3 group-hover:lg:text-white duration-500">
                        Isolatie
                      </h2>
                      <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                        Wij bieden thermische isolatie-oplossingen voor daken
                        die zorgen voor meer comfort en een aanzienlijke
                        vermindering van energiekosten. Onze diensten worden
                        volledig gepersonaliseerd om te voldoen aan de
                        specifieke behoeften van schuine of platte daken.
                      </p>
                      {/* button */}
                      <div className="flex flex-row gap-x-2 items-center">
                        <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                          <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                        </div>
                        <span className="group-hover:lg:text-white duration-500 uppercase">
                          Meer weten
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Renovatie > */}
              <a
                href="/services/renovatie"
                className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
              >
                <div>
                  <Image
                    src={RenovatieImage}
                    className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>
                <div className="lg:absolute mt-4 lg:mt-14 bottom-0 right-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                  <div className="flex flex-col justify-between h-full">
                    {/* texts */}
                    <div className="flex flex-col h-full gap-y-3 justify-evenly">
                      <h2 className="h3 group-hover:lg:text-white duration-500">
                        Renovatie
                      </h2>
                      <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                        Renovatie is een essentiële stap om uw gebouwen en
                        ruimtes te verbeteren, moderniseren of herstellen. Of
                        het nu gaat om schadeherstel, structurele vernieuwing of
                        het verhogen van energie-efficiëntie, onze
                        renovatiediensten zijn ontworpen om aan uw behoeften te
                        voldoen en uw verwachtingen te overtreffen.
                      </p>
                      {/* button */}
                      <div className="flex flex-row gap-x-2 items-center">
                        <div className="bg-[--primary-color] p-2 group-hover:bg-white duration-500">
                          <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                        </div>
                        <span className="group-hover:lg:text-white duration-500 uppercase">
                          Meer weten
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Groendaken < */}
              <a
                href="/services/groendaken"
                className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
              >
                <div>
                  <Image
                    src={Groendaken}
                    className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>
                <div className="lg:absolute mt-4 lg:mt-14 bottom-0 left-0 bg-white lg:p-14 h-[70%] w-[90%] lg:w-[50%] group-hover:lg:bg-[--primary-color] duration-500">
                  <div className="flex flex-col justify-between h-full">
                    {/* texts */}
                    <div className="flex flex-col h-full gap-y-3 justify-evenly">
                      <h2 className="h3 group-hover:lg:text-white duration-500">
                        Groendaken
                      </h2>
                      <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                        Groendaken zijn een innovatieve en duurzame oplossing
                        voor zowel residentiële als commerciële gebouwen. Ze
                        verbeteren de energie-efficiëntie, verlengen de
                        levensduur van het dak en dragen bij aan een beter
                        milieu door waterretentie en luchtzuivering.
                      </p>
                      {/* button */}
                      <div className="flex flex-row gap-x-2 items-center">
                        <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                          <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                        </div>
                        <span className="group-hover:lg:text-white duration-500 uppercase">
                          Meer weten
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* About Image section */}
        <section className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          {/* image */}
          <Image
            className="order-2 lg:order-none rounded-md hidden md:flex lg:w-[32rem] xl:w-[40rem] object-cover"
            src={AboutImage}
            alt=""
          />
          {/* text */}
          <div className="order-1 lg:order-none flex flex-col justify-between items-center lg:items-start gap-y-6">
            <div className="flex flex-col gap-10 justify-between h-full items-start w-full">
              <div>
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
                    Uw dak verdient topkwaliteit in <strong>isolatie</strong> en{" "}
                    <strong>afwerking</strong>. Ons team combineert
                    functionaliteit en esthetiek om elk project perfect uit te
                    voeren. Onze <strong>passie</strong> voor het vak en focus
                    op kwaliteit maken het verschil.
                  </p>

                  <p className="p">
                    Actief in Brussel, Waals-Brabant en omliggende regio’s
                    bieden wij complete dakoplossingen, van onderhoud tot
                    volledige renovaties, voor zowel platte als hellende daken.
                  </p>

                  <p className="p">
                    Met generaties aan ervaring verzorgen wij alles van
                    dakconstructie tot afwerking. Wij werken met{" "}
                    <strong>dakpannen, leisteen, zink en aluminium</strong> en
                    plaatsen ook isolatie en dakramen.
                  </p>

                  <p className="p">
                    Elk project krijgt een persoonlijke aanpak voor een
                    duurzaam, veilig en perfect afgewerkt dak.
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
                    combineren voor het perfecte resultaat. Wat ons
                    onderscheidt? Onze <strong>passie</strong> en inzet om
                    altijd uw verwachtingen te overtreffen.
                  </p>

                  <p className="p small">
                    Wij zijn actief in Brussel, Waals-Brabant en omgeving. Van
                    klein onderhoud tot renovaties, wij garanderen service van
                    hoge kwaliteit met oog voor detail en vakmanschap, zowel bij
                    platte als hellende daken.
                  </p>

                  <p className="p small">
                    Met ervaring van generatie op generatie pakken wij alles
                    aan: constructie, afwerking en accessoires. We werken met{" "}
                    <strong>dakpannen, leisteen, zink en aluminium</strong>, en
                    verzorgen ook isolatie- en dakraaminstallaties.
                  </p>

                  <p className="p small">
                    Voor elk project leveren wij een oplossing op maat. Vertrouw
                    op ons team voor een duurzaam, veilig en perfect afgewerkt
                    dak!
                  </p>
                </div>
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

        <Whyus />

        <Testimonials />

        <ContactForm />
      </div>
    </main>
  );
}
