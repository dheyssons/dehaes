"use client";

// IMAGES
import Image from "next/image";
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

// COMPONENTS
import Carousel from "../components/carousel";
import CarouselMobile from "@/components/carouselmobile";
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

  const items = [
    <div key="slide1" className="flex flex-row gap-x-10">
      {/* toits plats */}
      <div className="card-services">
        <img
          className="image-services"
          alt="toits plats"
          src="images/services/plateforme.webp"
          loading="lazy"
        ></img>
        {/* text */}
        <div className="flex flex-col gap-y-3 justify-around h-60">
          {/* title */}
          <div className="overflow-hidden max-w-max h-56">
            <h4 className="h4">Toits plats</h4>
            <p className="p small">
              Les toits plats offrent efficacité et fonctionnalité pour divers
              projets, et sont particulièrement performants en étanchéité et
              isolation. Grâce à des solutions sur mesure, nous garantissons la
              durabilité et les performances de votre toit, en protégeant la
              structure contre les variations climatiques et les problèmes
              d'évacuation.
            </p>
          </div>
        </div>
        <a className="btn uppercase" href="/services/plattedaken">
          Voir sur toits plats <LuArrowUpRight className="mx-1" />{" "}
        </a>
      </div>
      {/* rénovation */}
      <div className="card-services">
        <img
          className="image-services"
          alt="rénovation"
          src="images/services/renovation.webp"
          loading="lazy"
        ></img>
        <div className="flex flex-col gap-y-3 justify-around h-60">
          <div className="overflow-hidden max-w-max h-56">
            <h4 className="h4">Démoussage</h4>
            <p className="p small">
              Le démoussage est une étape essentielle pour préserver la
              durabilité et l’esthétique de votre toiture. Avec le temps, la
              mousse, les lichens et les algues peuvent s’accumuler et
              fragiliser les matériaux. Nos services de démoussage éliminent
              efficacement ces impuretés tout en protégeant votre toit contre
              l’humidité et les dégradations futures.
            </p>
          </div>
        </div>
        <a className="btn uppercase" href="/services/demoussage">
          Voir sur démoussage <LuArrowUpRight className="mx-1" />{" "}
        </a>
      </div>
      {/* isolation */}
      <div className="card-services">
        <img
          className="image-services"
          alt="isolation"
          src="images/services/isolatie.webp"
          loading="lazy"
        ></img>
        {/* text */}
        <div className="flex flex-col gap-y-3 justify-around h-60">
          <div className="overflow-hidden max-w-max h-56">
            <h4 className="h4">Isolation</h4>
            <p className="p small">
              Nous proposons des solutions d'isolation thermique pour toits,
              garantissant plus de confort et une réduction significative des
              coûts énergétiques. Nos services sont entièrement personnalisés
              pour répondre aux besoins spécifiques des toits inclinés ou plats.
            </p>
          </div>
        </div>
        <a className="btn uppercase" href="/services/isolatie">
          Voir sur isolation <LuArrowUpRight className="mx-1" />{" "}
        </a>
      </div>
    </div>,
  ];

  const itemsMobile = [
    <div key="slide1" className="flex flex-row gap-x-10">
      {/* Toits plats */}
      <div className="card-services">
        <img
          className="image-services"
          alt="toits plats"
          src="images/services/plateforme.webp"
          loading="lazy"
        ></img>
        {/* text */}
        <div className="flex flex-col gap-y-3 justify-around h-36">
          {/* title */}
          <div className="overflow-hidden max-w-max lg:h-56">
            <h4 className="h4">Toits plats</h4>
            <p className="p small">
              Solutions sur mesure pour étanchéité et isolation des toits plats.
            </p>
          </div>
        </div>
        <a className="btn uppercase" href="/services/plattedaken">
          Voir sur toits plats <LuArrowUpRight className="mx-1" />{" "}
        </a>
      </div>
    </div>,
    <div key="slide2" className="flex flex-row gap-x-10">
      {/* Isolation */}
      <div className="card-services">
        <img
          className="image-services"
          alt="isolation"
          src="images/services/isolatie.webp"
          loading="lazy"
        ></img>
        {/* text */}
        <div className="flex flex-col gap-y-3 justify-around h-36">
          <div className="overflow-hidden max-w-max lg:h-56">
            <h4 className="h4">Isolation</h4>
            <p className="p small">
              Solutions d'isolation thermique pour plus de confort et
              d'économies d'énergie.
            </p>
          </div>
        </div>
        <a className="btn uppercase" href="/services/isolatie">
          Voir sur isolation <LuArrowUpRight className="mx-1" />{" "}
        </a>
      </div>
    </div>,
    <div key="slide3" className="flex flex-row gap-x-10">
      {/* Rénovation */}
      <div className="card-services">
        <img
          className="image-services"
          alt="démoussage"
          src="images/services/renovation.webp"
          loading="lazy"
        ></img>
        <div className="flex flex-col gap-y-3 justify-around h-36">
          <div className="overflow-hidden max-w-max lg:h-56">
            <h4 className="h4">Démoussage</h4>
            <p className="p small">
              Services de démoussage pour nettoyer, protéger et prolonger la
              durée de vie de votre toiture.
            </p>
          </div>
        </div>
        <a className="btn uppercase" href="/services/demoussage">
          Voir sur démoussage <LuArrowUpRight className="mx-1" />{" "}
        </a>
      </div>
    </div>,
  ];

  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "WD Toitures",
    telephone: "472 93 17 55",
    email: "wdtoitures@gmail.com",
    address: {
      "@type": "PostalAddress",
      postalCode: "2806",
    },
  };

  return (
    <main className="section flex flex-col gap-y-14 lg:gap-y-24">
      {/* HERO and ABOUT */}
      <div className="bg-white">
        {/* HERO */}
        <section className="bg-[url('../public/home.webp')] lg:bg-[url('../public/home.webp')] bg-cover bg-no-repeat flex flex-col w-full h-screen items-start relative">
          {/* title */}
          <motion.div
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1_s}
            className="mt-44 lg:mt-52 mx-10 md:mx-12 lg:mx-0 flex flex-col"
          >
            <div className="flex flex-col gap-y-20 lg:gap-y-16 lg:ml-20">
              {/* TITLE */}
              <div>
                <motion.h1
                  variants={item}
                  className="h1 !text-8xl text-white lg:text-[#ffffff] pb-3"
                >
                  WD Toitures
                </motion.h1>
                <motion.p
                  variants={item}
                  className="p large text-[#ffffffed] lg:text-[#ffffff] leading-6"
                >
                  Bâtir la confiance, un toit à la fois
                </motion.p>
                <JsonLd data={jsonLdData} />
              </div>
              {/* CALL TO ACTION  */}
              <div className="flex flex-col gap-y-2">
                <a className="btn max-w-max uppercase" href="#contactus">
                  DEMANDEZ UN DEVIS GRATUIT
                  <LuArrowUpRight className="ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SCROLL INDICATOR - chevron indiquant du contenu dessous */}
        <a
          href="#about"
          aria-label="Descendre vers la section À propos"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white opacity-90 hover:opacity-100"
        >
          <span className="text-md tracking-wide">Voir plus</span>
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

        {/* ABOUT US */}
        <section
          id="about"
          className="container px-5 mx-auto flex flex-col items-center gap-y-24 lg:gap-y-28 py-20"
        >
          {/* about */}
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-y-20">
            {/* texts */}
            <div className="flex flex-col gap-y-8 md:gap-y-14 items-center">
              <div className="flex flex-col gap-y-8 items-start ">
                <div className="flex flex-col gap-y-2 items-center lg:items-start">
                  <div>
                    <motion.h3
                      variants={upward}
                      initial="variantInit"
                      whileInView="variantAnim"
                      viewport={{ once: true }}
                      transition={transition1}
                      className="h2"
                    >
                      À propos de{" "}
                      <span className="text-[--primary-color] font-bold">
                        WD Toitures
                      </span>
                    </motion.h3>
                  </div>
                </div>
                <p className="p md:large w-[20rem] md:w-[32rem] leading-8">
                  Depuis de nombreuses années, WD Toitures est votre partenaire
                  de confiance en Belgique pour tous vos besoins en matière de
                  couverture et de toitures. Fort de notre expertise et de notre
                  engagement envers l'excellence, nous proposons des solutions
                  complètes et durables pour vos projets résidentiels,
                  commerciaux et industriels.
                </p>
                <p className="p md:large w-[20rem] md:w-[32rem] leading-8">
                  Notre mission est simple : offrir des services de toiture de
                  qualité supérieure avec un professionnalisme irréprochable.
                  Nous croyons que chaque projet mérite une attention
                  particulière et une exécution impeccable. Vos toits les
                  meilleures mains.
                </p>
              </div>
              {/* <a
                className="btn max-w-max lg:self-start uppercase"
                href="/about"
              >
                En savoir plus
              </a> */}
            </div>
            {/* CAROUSEL */}
            <EmblaCarousel></EmblaCarousel>
          </div>

          {/* BRANDs and certifications */}
          <section className="container px-5 mx-auto flex flex-col items-center max-w-screen-lg gap-y-6">
            <h3 className="h3 !text-3xl text-center">
              WD Toitures,{" "}
              <span className="text-[--primary-color]">experts</span> en
              toitures, démmoussage et isolation
            </h3>
            <p className="p small text-center !max-w-screen-lg">
              Nous travaillons avec les meilleures marques du marché, auprès de
              fournisseurs certifiés : <i>Resitrix, Velux, Iko enertherm</i>,
              etc.
            </p>

            <div className="hidden lg:flex flex-row gap-x-20">
              <Image className="w-36" src={Velux} alt="" />
              <Image className="w-36" src={Iko} alt="" />
              <Image className="w-36" src={Resitrix} alt="" />
              <Image
                className="w-36 object-scale-down"
                src={Bosscover}
                alt=""
              />
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
                      className="rounded-md object-scale-down px-4"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* About Image section */}
          <div className="flex flex-col lg:flex-row gap-x-12">
            {/* image */}
            <Image
              className="rounded-sm hidden lg:block w-96 object-cover"
              src={AboutImage}
              alt=""
            />
            {/* text */}
            <div className="flex flex-col items-center md:items-start gap-y-10">
              <h2 className="h2">
                Votre toit,
                <span className="text-[--primary-color]">
                  {" "}
                  notre engagement !
                </span>
              </h2>

              <div>
                {/* DESKTOP */}
                <div
                  className={`hidden lg:flex flex-col gap-y-6 max-w-sm md:max-w-lg ${
                    ExtendedText ? "" : "!max-h-72 overflow-hidden"
                  }`}
                >
                  <p className="p small">
                    Votre toit mérite le meilleur en matière de qualité,
                    d'isolation et de finition. Notre équipe spécialisée
                    travaille avec dévouement pour donner vie à vos projets, en
                    combinant fonctionnalité et esthétique pour un résultat
                    parfait. Ce qui nous distingue ? Notre passion pour le
                    métier et notre engagement à dépasser vos attentes, quelle
                    que soit la complexité de la mission.
                  </p>
                  <p className="p small">
                    Nous intervenons à Bruxelles, dans le Brabant wallon et les
                    régions avoisinantes et proposons des solutions complètes
                    pour toits, de la petite maintenance aux rénovations de
                    grande envergure. Grâce à notre vaste expérience dans le
                    secteur, nous garantissons un service de haute qualité, avec
                    une attention au détail et au savoir‑faire, aussi bien pour
                    les toits plats que inclinés.
                  </p>
                  <p className="p small">
                    Notre expertise nous permet d'aborder tous les aspects de
                    votre toit, de la construction à l'installation des
                    finitions et accessoires. Nous travaillons avec différents
                    types de couvertures, comme les tuiles, l'ardoise, le zinc
                    et l'aluminium, et proposons également des installations
                    d'isolation et de fenêtres de toit.
                  </p>
                  <p className="p small">
                    Quel que soit votre projet, nous fournissons un service sur
                    mesure parfaitement adapté à vos souhaits. Faites confiance
                    à notre équipe pour un toit durable, sûr et parfaitement
                    fini !
                  </p>
                </div>
                {/* MOBILE */}
                <div
                  className={`lg:hidden flex flex-col gap-y-6 max-w-sm md:max-w-lg ${
                    ExtendedText ? "" : "!max-h-72 overflow-hidden"
                  }`}
                >
                  <p className="p small">
                    Votre toit mérite le meilleur en qualité, isolation et
                    finition. Notre équipe travaille avec dévouement pour
                    combiner fonctionnalité et esthétique pour un résultat
                    parfait. Ce qui nous distingue ? Notre passion et notre
                    engagement à toujours dépasser vos attentes.
                  </p>

                  <p className="p small">
                    Nous intervenons à Bruxelles, dans le Brabant wallon et les
                    environs. De la petite maintenance aux rénovations, nous
                    garantissons un service de haute qualité, avec attention au
                    détail et savoir‑faire, pour toits plats et inclinés.
                  </p>

                  <p className="p small">
                    Fort d'une expertise transmise de génération en génération,
                    nous prenons en charge tous les aspects : construction,
                    finitions et accessoires. Nous travaillons avec tuiles,
                    ardoise, zinc et aluminium, et assurons également les
                    installations d'isolation et de fenêtres de toit.
                  </p>

                  <p className="p small">
                    Pour chaque projet, nous livrons une solution sur mesure.
                    Faites confiance à notre équipe pour un toit durable, sûr et
                    parfaitement fini !
                  </p>
                </div>

                <button
                  className="lg:hidden text-lg !text-[--primary-color]"
                  onClick={() => SetExtendedText()}
                >
                  {ExtendedText ? "lire moins" : "lire la suite..."}
                </button>
              </div>

              <a className="btn max-w-max uppercase" href="#contactus">
                Contactez‑nous
              </a>
            </div>
          </div>

          {/* bottom text  DESKTOP*/}
          {/* <div className="hidden lg:flex flex-col gap-y-6 max-w-sm md:max-w-xl lg:max-w-screen-2xl">
            <h3 className="h4">
              Spécialistes en{" "}
              <span className="text-[--primary-color]">charpentes</span>
            </h3>
            <p className="p small !max-w-screen-lg">
              Une charpente bien conçue est l'épine dorsale d'un toit solide et
              durable. Elle assure une répartition uniforme des charges et
              protège le bâtiment de toutes les intempéries. Nous n'utilisons
              que des essences de bois traitées de haute qualité, résistantes à
              l'humidité et aux nuisibles, garantissant une stabilité durable.
              Notre expertise couvre les charpentes traditionnelles comme les
              fermes modernes, avec un souci constant de précision et de
              personnalisation.
            </p>
            <p className="p small !max-w-screen-lg">
              Outre une structure solide, une bonne conception est essentielle
              pour une ventilation optimale, une isolation thermique et un
              drainage efficace des eaux de pluie. Grâce à un positionnement
              précis et au choix des bons matériaux, nous évitons des problèmes
              futurs tels que les fuites ou les affaissements. Qu'il s'agisse de
              construction neuve ou de rénovation, nous fournissons des
              charpentes sur mesure qui allient fonctionnalité, durabilité et
              savoir‑faire.
            </p>
          </div> */}
          {/* bottom text MOBILE */}
          {/* <div className="lg:hidden flex flex-col gap-y-6 max-w-sm md:max-w-xl lg:max-w-screen-2xl">
            <h3 className="h4 text-center">
              Spécialistes en{" "}
              <span className="text-[--primary-color]">toiture</span>
            </h3>

            <p className="p small !max-w-screen-lg">
              Une charpente bien conçue est la base d'un toit solide et durable.
              Elle répartit les charges uniformément et protège contre les
              intempéries. Nous utilisons uniquement du bois traité de haute
              qualité, résistant à l'humidité et aux parasites, et intervenons
              tant sur des structures traditionnelles que sur des fermes
              modernes, avec un souci constant de précision.
            </p>

            <p className="p small !max-w-screen-lg">
              Un bon design assure également une ventilation, une isolation et
              un drainage efficaces. Avec les matériaux et la mise en œuvre
              adaptés, nous évitons les problèmes futurs (fuites,
              affaissements). Que ce soit en construction neuve ou en
              rénovation, nous livrons des charpentes alliant fonctionnalité,
              durabilité et savoir‑faire.
            </p>
          </div> */}
        </section>
      </div>

      {/* OUR SERVICES */}
      <section
        id="services"
        className="container mx-auto flex flex-col gap-y-2 py-4"
      >
        <div className="overflow-hidden max-w-max mx-20">
          <div className="flex flex-row items-center">
            <div className="accent"></div>
            <h4 className="h5 !text-[--primary-color]">Services</h4>
          </div>
          <motion.h2
            variants={lefttoright}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1}
            className="h2"
          >
            Services principaux
          </motion.h2>
        </div>

        <Carousel>{items}</Carousel>

        <CarouselMobile>{itemsMobile}</CarouselMobile>
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </main>
  );
}
