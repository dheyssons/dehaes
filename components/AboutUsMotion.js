"use client";

import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";

import { transition1 } from "@/public/transitions/transition1";
import { upward } from "@/public/variants/upward";

export default function AboutUsMotion() {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-10 justify-between">
      {/* TITLE */}
      <motion.div
        variants={upward}
        initial="variantInit"
        whileInView="variantAnim"
        viewport={{ once: true }}
        transition={transition1}
      >
        <h2 className="h2">
          Over <span className="text-[--primary-color]">De Haes</span>
        </h2>
      </motion.div>

      {/* TEXT */}
      <motion.div
        variants={upward}
        initial="variantInit"
        whileInView="variantAnim"
        viewport={{ once: true }}
        transition={transition1}
        className="space-y-4"
      >
        <p className="p">
          Schrijnwerkerij De Haes is een familiebedrijf actief in de regio
          Sint-Katelijne-Waver, dat kan terugblikken op een eeuw vakmanschap.
          Met Rudy De Haes, de huidige zaakvoerder, is het bedrijf al aan de
          vierde generatie schrijnwerkers toe. De rode draad door deze
          familiekroniek is een grote passie voor de stiel, een degelijke
          vakkennis en de wil om klanten een optimale kwaliteit en service te
          bieden.
        </p>

        <p className="p">
          Zaakvoerder Rudy volgt het technische aspect van ieder project
          volledig op. De werknemers zijn hooggekwalificeerd en hebben elk hun
          eigen specialiteit. Het resultaat? Een dak dat tot in de puntjes
          afgewerkt is.
        </p>
      </motion.div>

      {/* ACTIONS */}
      <motion.div
        variants={upward}
        initial="variantInit"
        whileInView="variantAnim"
        viewport={{ once: true }}
        transition={transition1}
        className="flex flex-col md:flex-row gap-2"
      >
        <a className="btn !w-full lg:self-start uppercase" href="/about">
          Meer weten
        </a>

        <a
          className="btn-ghost !w-full !outline-[--primary-color] !text-[--primary-color] hover:!text-white lg:self-start uppercase flex items-center justify-center"
          href="/portfolio"
        >
          Projecten
          <LuArrowUpRight className="ml-2" />
        </a>
      </motion.div>
    </div>
  );
}
