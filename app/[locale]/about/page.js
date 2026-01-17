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
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("aboutuspage");

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
                {t("aboutus_generations_title")}
              </h2>
            </div>
            <h1 className="h1">{t("aboutus_history_title")}</h1>
          </div>
          <div className="flex flex-col gap-y-6">
            <p className="p !text-start lg:text-center">
              {t("aboutus_paragraph1")}
            </p>
            <p className="p !text-start lg:text-center">
              {t("aboutus_paragraph2")}
            </p>
            <p className="p !text-start lg:text-center">
              {t("aboutus_paragraph3")}
            </p>
            <p className="p !text-start lg:text-center">
              {t("aboutus_paragraph4")}
            </p>
            <p className="p !text-start lg:text-center italic">
              ´<strong>{t("aboutus_quote")}</strong>
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
          <h3 className="h3">{t("aboutus_specialization_title")}</h3>

          <div className="flex flex-col gap-y-4 items-center">
            <p className="p !text-center !max-w-[100ch]">
              {t("aboutus_specialization_desc1")}
            </p>
            <p className="p !text-center !max-w-[100ch]">
              {t("aboutus_specialization_desc2")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 items-center">
          <h3 className="h3 text-center">
            <span className="text-[--primary-color]">
              {t("aboutus_experts_title_part1")}
            </span>
            {t("aboutus_experts_title_part2")}
          </h3>
          <p className="p !text-center !max-w-[100ch]">
            {t("aboutus_experts_desc")}
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
