"use client";
import { services, city } from "./services";

import { motion } from "framer-motion";

import { transition1 } from "@/public/transitions/transition1";
import { lefttoright } from "@/public/variants/lefttoright";

import { useTranslations } from "next-intl";
import { ServiceCard } from "./ui/service-card";

export default function ServicesMotion() {
  const t = useTranslations("services");
  return (
    <div className="w-screen ">
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
              {t("mainTitle")}
            </motion.h2>
          </div>

          {/* services */}
          <div className="flex flex-col gap-y-32">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                image={service.image}
                city={city}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
