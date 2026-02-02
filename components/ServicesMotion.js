"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";

import RenovatieImage from "@/public/images/services/renovation.webp";
import DaktimmerImage from "@/public/images/services/daktimmer.webp";
import GevelbekledingImage from "@/public/images/services/cladding.webp";
import PlattedakenImage from "@/public/images/services/epdm.webp";
import Groendaken from "@/public/images/services/greenroof.webp";
import IsolatieImage from "@/public/images/services/insulation.webp";

import { transition1 } from "@/public/transitions/transition1";
import { lefttoright } from "@/public/variants/lefttoright";

import { useTranslations } from "next-intl";
import { SplitText } from "./scripts/SplitWords";

export default function ServicesMotion() {
  const t = useTranslations("services");
  return (
    <div className="w-screen mb-[--space-section-lg]">
      <section id="services" className="flex flex-col gap-y-2 py-4">
        <div className="overflow-hidden space-y-10 md:space-y-20">
          {/* title */}
          <div>
            <div className="flex flex-row items-center">
              <div className="accent"></div>
              <span className="body">{t("sectionLabel")}</span>
            </div>

            <motion.h2
              variants={lefttoright}
              initial="variantInit"
              whileInView="variantAnim"
              viewport={{ once: true }}
              transition={transition1}
              className="h2"
            >
              <SplitText text={t("mainTitle")} />
            </motion.h2>
          </div>

          {/* services */}
          <div className="flex flex-col gap-y-32">
            {/* Daktimmer */}
            <a
              href="/services/daktimmer-sint-katelijne-waver"
              className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
            >
              <Image
                src={DaktimmerImage}
                className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                alt=""
              />
              <div className="lg:absolute mt-4 lg:mt-14 bottom-0 right-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col h-full gap-y-3 justify-evenly">
                    <h2 className="h3 group-hover:lg:text-white duration-500">
                      {t("daktimmer.title")}
                    </h2>
                    <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                      {t("daktimmer.description")}
                    </p>
                    <div className="flex flex-row gap-x-2 items-center">
                      <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                        <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                      </div>
                      <span className="group-hover:lg:text-white duration-500 uppercase">
                        {t("cta")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Gevelbekleding */}
            <a
              href="/services/gevelbekleding-sint-katelijne-waver"
              className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
            >
              <Image
                src={GevelbekledingImage}
                className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                alt=""
              />
              <div className="lg:absolute mt-4 lg:mt-14 bottom-0 left-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col h-full gap-y-3 justify-evenly">
                    <h2 className="h3 group-hover:lg:text-white duration-500">
                      {t("gevelbekleding.title")}
                    </h2>
                    <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                      {t("gevelbekleding.description")}
                    </p>
                    <div className="flex flex-row gap-x-2 items-center">
                      <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                        <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                      </div>
                      <span className="group-hover:lg:text-white duration-500 uppercase">
                        {t("cta")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Plattedaken */}
            <a
              href="/services/platdak-sint-katelijne-waver"
              className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
            >
              <Image
                src={PlattedakenImage}
                className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                alt=""
              />
              <div className="lg:absolute mt-4 lg:mt-14 bottom-0 right-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col h-full gap-y-3 justify-evenly">
                    <h2 className="h3 group-hover:lg:text-white duration-500">
                      {t("plattedaken.title")}
                    </h2>
                    <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                      {t("plattedaken.description")}
                    </p>
                    <div className="flex flex-row gap-x-2 items-center">
                      <div className="bg-[--primary-color] p-2 group-hover:bg-white duration-500">
                        <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                      </div>
                      <span className="group-hover:lg:text-white duration-500 uppercase">
                        {t("cta")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Isolatie */}
            <a
              href="/services/isolatie-sint-katelijne-waver"
              className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
            >
              <Image
                src={IsolatieImage}
                className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                alt=""
              />
              <div className="lg:absolute mt-4 lg:mt-14 bottom-0 left-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col h-full gap-y-3 justify-evenly">
                    <h2 className="h3 group-hover:lg:text-white duration-500">
                      {t("isolatie.title")}
                    </h2>
                    <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                      {t("isolatie.description")}
                    </p>
                    <div className="flex flex-row gap-x-2 items-center">
                      <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                        <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                      </div>
                      <span className="group-hover:lg:text-white duration-500 uppercase">
                        {t("cta")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Renovatie */}
            <a
              href="/services/dakrenovatie-sint-katelijne-waver"
              className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
            >
              <Image
                src={RenovatieImage}
                className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                alt=""
              />
              <div className="lg:absolute mt-4 lg:mt-14 bottom-0 right-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col h-full gap-y-3 justify-evenly">
                    <h2 className="h3 group-hover:lg:text-white duration-500">
                      {t("renovatie.title")}
                    </h2>
                    <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                      {t("renovatie.description")}
                    </p>
                    <div className="flex flex-row gap-x-2 items-center">
                      <div className="bg-[--primary-color] p-2 group-hover:bg-white duration-500">
                        <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                      </div>
                      <span className="group-hover:lg:text-white duration-500 uppercase">
                        {t("cta")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Groendaken */}
            <a
              href="/services/groendak-sint-katelijne-waver"
              className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
            >
              <Image
                src={Groendaken}
                className="w-full group-hover:lg:scale-105 transition-transform duration-500"
                alt=""
              />
              <div className="lg:absolute mt-4 lg:mt-14 bottom-0 left-0 bg-white lg:p-14 h-[70%] w-[90%] lg:w-[50%] group-hover:lg:bg-[--primary-color] duration-500">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col h-full gap-y-3 justify-evenly">
                    <h2 className="h3 group-hover:lg:text-white duration-500">
                      {t("groendaken.title")}
                    </h2>
                    <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
                      {t("groendaken.description")}
                    </p>
                    <div className="flex flex-row gap-x-2 items-center">
                      <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                        <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
                      </div>
                      <span className="group-hover:lg:text-white duration-500 uppercase">
                        {t("cta")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
