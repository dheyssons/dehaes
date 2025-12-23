"use client";

// NEXT
import Image from "next/image";

// IMAGES
import HeroImage from "@/public/home.webp";

// ICONS
import { LuArrowUpRight } from "react-icons/lu";

// MOTION
import { motion } from "framer-motion";
import { upward } from "@/public/variants/upward";
import { item } from "@/public/variants/item";
import { transition1_s } from "@/public/transitions/transition1_s";

// OTHERS
import JsonLd from "@/components/jsonld";

export default function Hero() {
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
    <section className="relative h-screen">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <Image src={HeroImage} alt="" priority fill className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="section_gap flex flex-col justify-center h-full">
        <motion.div
          variants={upward}
          initial="variantInit"
          whileInView="variantAnim"
          viewport={{ once: true }}
          transition={transition1_s}
          className="flex flex-col gap-y-20"
        >
          {/* TITLE */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="accent !bg-white" />
              <p className="body !text-white">algemene dakwerken</p>
            </div>

            <motion.h1 variants={item} className="display-large !text-white">
              Schrijnwerkerij De Haes
            </motion.h1>

            <motion.p
              variants={item}
              className="p !text-[#ffffffed] lg:!text-[#f2f2f2ed] max-w-2xl"
            >
              Traditie en kwaliteit die generaties overstijgen, met vakkundige
              dakwerken in Sint-Katelijne-Waver en omgeving zoals Mechelen, Lier
              en Bornem.
            </motion.p>

            <JsonLd data={jsonLdData} />
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-3">
            <a href="/contact" className="btn self-start uppercase">
              Contact opnemen
            </a>

            <a
              href="#services"
              className="btn-ghost self-start uppercase flex items-center"
            >
              Onze diensten
              <LuArrowUpRight className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        aria-label="Scroll naar beneden"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white opacity-90 hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
