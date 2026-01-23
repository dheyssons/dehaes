"use client";

// ICONS
import { LuArrowUpRight } from "react-icons/lu";

// MOTION
import { motion } from "framer-motion";
import { transition1 } from "@/public/transitions/transition1";
import { upward } from "@/public/variants/upward";

// CAROUSEL
import { EmblaCarousel } from "@/components/emblacarousel";

import { useTranslations } from "next-intl";
import { SplitText } from "./scripts/SplitWords";

export default function AboutUs() {
  const t = useTranslations("about");

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-8">
      {/* TEXTS */}
      <div className="flex flex-col gap-y-8 md:gap-y-10 justify-between">
        <div className="flex flex-col">
          {/* H2 */}
          <motion.h2
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1}
            className="h2"
          >
            <SplitText
              text={t("title.prefix")}
              letterClassName="letter"
            ></SplitText>{" "}
            <span className="text-[--primary-color]">
              <SplitText text={t("title.highlight")}></SplitText>
            </span>
          </motion.h2>

          {/* PARAGRAPHS */}
          <div className="space-y-4">
            <p className="p">{t("content.paragraph1")}</p>

            <p className="p">{t("content.paragraph2")}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-between md:flex-row gap-2">
          <a className="btn !w-full lg:self-start uppercase" href="/about">
            {t("cta.about")}
          </a>

          <a
            className="btn-ghost !w-full !outline-[--primary-color] !text-[--primary-color] hover:!text-white lg:self-start uppercase flex items-center justify-center"
            href="/portfolio"
          >
            {t("cta.portfolio")}
            <LuArrowUpRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* CAROUSEL */}
      <EmblaCarousel />
    </section>
  );
}
