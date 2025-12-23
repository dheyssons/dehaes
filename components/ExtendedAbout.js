"use client";

import Image from "next/image";
import { useState } from "react";
import AboutImage from "@/public/images/about.webp";

export default function ExtendedAbout() {
  const [expanded, setExpanded] = useState(false);

  return (
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
            Uw dak,
            <span className="text-[--primary-color]"> Onze toewijding!</span>
          </h2>

          {/* DESKTOP — ALWAYS EXPANDED */}
          <div className="hidden lg:flex flex-col gap-y-4">
            <p className="p">
              Uw dak verdient topkwaliteit in <strong>isolatie</strong> en{" "}
              <strong>afwerking</strong>. Ons team combineert functionaliteit en
              esthetiek om elk project perfect uit te voeren.
            </p>

            <p className="p">
              Actief in Brussel, Waals-Brabant en omliggende regio’s bieden wij
              complete dakoplossingen.
            </p>

            <p className="p">
              Met generaties aan ervaring verzorgen wij alles van dakconstructie
              tot afwerking.
            </p>

            <p className="p">
              Elk project krijgt een persoonlijke aanpak voor een duurzaam,
              veilig en perfect afgewerkt dak.
            </p>
          </div>

          {/* MOBILE — TOGGLE */}
          <div
            className={`lg:hidden flex flex-col gap-y-6 transition-all ${
              expanded ? "" : "max-h-72 overflow-hidden"
            }`}
          >
            <p className="p small">
              Uw dak verdient het beste in kwaliteit, isolatie en afwerking. Ons
              team werkt met toewijding om functionaliteit en esthetiek te
              combineren.
            </p>

            <p className="p small">
              Wij zijn actief in Brussel, Waals-Brabant en omgeving.
            </p>

            <p className="p small">
              Met ervaring van generatie op generatie pakken wij alles aan:
              constructie, afwerking en accessoires.
            </p>

            <p className="p small">
              Voor elk project leveren wij een oplossing op maat.
            </p>
          </div>
        </div>

        <a className="btn max-w-max uppercase" href="/contact">
          Contact opnemen
        </a>
      </div>
    </section>
  );
}
