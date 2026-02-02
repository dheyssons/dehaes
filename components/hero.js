"use client";

// NEXT
import Image from "next/image";

// IMAGES
import HeroImage from "@/public/home.jpg";

// ICONS
import { LuArrowUpRight } from "react-icons/lu";

// MOTION
import { motion } from "framer-motion";
import { upward } from "@/public/variants/upward";
import { item } from "@/public/variants/item";
import { transition1_s } from "@/public/transitions/transition1_s";

import RequestEvaluationForm from "@/components/RequestEvaluationForm";

import { useTranslations } from "next-intl";

// OTHERS
import JsonLd from "@/components/jsonld";
import RatingWithAvatars from "./RatingWithAvatars";

export default function Hero() {
  const t = useTranslations("hero");

  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Dakwerken de haes",
    telephone: "015 55 19 35",
    email: "info@schrijnwerkerij-dehaes.be",
    address: {
      "@type": "PostalAddress",
      postalCode: "2806",
    },
  };

  return (
    <div className="w-screen">
      <section className="relative h-screen">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
          <Image
            src={HeroImage}
            alt=""
            priority
            fill
            className="object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full flex flex-row items-center justify-between h-full lg:h-auto">
          <motion.div
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1_s}
            className="flex flex-col gap-y-20"
          >
            {/* TITLE */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="accent !bg-white" />
                <p className="body !text-white">{t("eyebrow")}</p>
              </div>

              <motion.h1 variants={item} className="display-large !text-white">
                {t("title")}
              </motion.h1>

              <motion.p variants={item} className="p text-white max-w-2xl">
                {t("description")}
              </motion.p>

              <JsonLd data={jsonLdData} />
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3">
                <a href="/contact" className="btn self-start uppercase">
                  {t("cta.contact")}
                </a>

                <a
                  href="#services"
                  className="btn-secondary self-start uppercase flex items-center"
                >
                  {t("cta.services")}
                  <LuArrowUpRight className="ml-2" />
                </a>
              </div>

              <RatingWithAvatars
                rating={4.2}
                avatars={[
                  {
                    kind: "letter",
                    letter: "D",
                    bg: "#522da8",
                    fg: "#fff",
                    alt: "De winter Kris",
                  },

                  {
                    kind: "letter",
                    letter: "J",
                    bg: "#c2175b",
                    fg: "#fff",
                    alt: "Johan Marien",
                  },
                  { kind: "image", src: "/icons/rating.webp", alt: "Pessoa 1" },
                ]}
              />
            </div>
          </motion.div>

          <div className="hidden lg:block mt-20">
            <RequestEvaluationForm />
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <a
          href="#about"
          aria-label="Scroll naar beneden"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white opacity-90 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 animate-bounce"
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

      <div className="w-[90%] mx-auto flex flex-col items-center justify-center lg:hidden mt-[--space-section]">
        <RequestEvaluationForm />
      </div>
    </div>
  );
}
