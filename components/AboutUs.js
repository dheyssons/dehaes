"use client";

// ICONS
import { LuArrowUpRight } from "react-icons/lu";

// MOTION
import { motion } from "framer-motion";
import { transition1 } from "@/public/transitions/transition1";
import { upward } from "@/public/variants/upward";

// CAROUSEL
import { EmblaCarousel } from "@/components/emblacarousel";

export default function AboutUs() {
  return (
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
              <p className="p">
                Schrijnwerkerij De Haes is een familiebedrijf actief in de regio
                Sint-Katelijne-Waver, dat kan terugblikken op een eeuw
                vakmanschap. Met Rudy De Haes, de huidige zaakvoerder, is het
                bedrijf al aan de vierde generatie schrijnwerkers toe. De rode
                draad door deze familiekroniek is een grote passie voor 'de
                stiel', een degelijke vakkennis en de wil om klanten een
                optimale kwaliteit en service te bieden, zoals alleen een
                familiebedrijf dat kan.
              </p>

              <p className="p">
                Zaakvoerder Rudy volgt het technische aspect van ieder project
                volledig op. De werknemers zijn hooggekwalificeerd en hebben elk
                hun eigen specialiteit. Het resultaat? Een dak dat tot in de
                puntjes afgewerkt is.
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
      <EmblaCarousel />
    </section>
  );
}
