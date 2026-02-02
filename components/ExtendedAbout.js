"use client";

import Image from "next/image";
import { useState } from "react";
import AboutImage from "@/public/images/about.webp";

import { useTranslations } from "next-intl";
import { LuArrowUpRight } from "react-icons/lu";

export default function ExtendedAbout() {
  const t = useTranslations("extendedabout");

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-[--space-section-lg]">
      <section className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* IMAGE */}
        <Image
          className="order-2 lg:order-none rounded-md hidden md:flex lg:w-[32rem] xl:w-[40rem] object-cover"
          src={AboutImage}
          alt=""
        />

        {/* TEXT */}
        <div className="order-1 lg:order-none flex flex-col justify-between gap-y-6">
          <div>
            <h2 className="h2">
              {t("about_title_part1")}
              <span className="text-[--primary-color]">
                {t("about_title_part2")}
              </span>
            </h2>

            {/* DESKTOP — ALWAYS EXPANDED */}
            <div className="hidden lg:flex flex-col gap-y-4">
              <p className="p">{t("about_desktop_p1")}</p>

              <p className="p">{t("about_desktop_p2")}</p>

              <p className="p">{t("about_desktop_p3")}</p>

              <p className="p">{t("about_desktop_p4")}</p>
            </div>

            {/* MOBILE — TOGGLE */}
            <div
              className={`lg:hidden flex flex-col gap-y-6 transition-all ${
                expanded ? "" : "max-h-72 overflow-hidden"
              }`}
            >
              <p className="p small">{t("about_mobile_p1")}</p>

              <p className="p small">{t("about_mobile_p2")}</p>

              <p className="p small">{t("about_mobile_p3")}</p>

              <p className="p small">{t("about_mobile_p4")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <a className="btn md:max-w-max uppercase" href="/contact">
              {t("about_cta")}
            </a>
            <a
              className="btn-ghost !w-full !outline-[--primary-color] !text-[--primary-color] hover:!text-white lg:self-start uppercase flex items-center justify-center0 md:max-w-max"
              href="/portfolio"
            >
              {t("about_projects")}
              <LuArrowUpRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
