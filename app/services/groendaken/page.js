import Image from "next/image";
import GroendakenImage from "@/public/images/services/groendaken/image1.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";

export const metadata = {
  title: "Groendaken",
  description:
    "Een groendak biedt esthetische meerwaarde, verbetert de isolatie en reguleert de binnentemperatuur, wat zorgt voor lagere energiekosten en meer comfort. Daarnaast absorbeert het regenwater, zuivert het de lucht en bevordert het de biodiversiteit. Met een professionele plaatsing kiest u voor een duurzame en energiezuinige oplossing.",
};

export default function Groendaken() {
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div>
          {/* Título */}
          <h1 className="h1">Groendaken</h1>

          {/* Conteúdo com Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
            {/* Texto */}
            <div className="order-2 lg:order-none space-y-10">
              <p className="p">
                Een <strong className="text-[--primary-color]">groendak</strong>{" "}
                biedt niet alleen een esthetische meerwaarde maar ook tal van
                functionele voordelen. Dankzij de natuurlijke
                isolatiecapaciteiten van planten helpt het de binnentemperatuur
                te reguleren, waardoor de behoefte aan{" "}
                <strong className="text-[--primary-color]">verwarming</strong>{" "}
                en <strong className="text-[--primary-color]">koeling</strong>{" "}
                wordt verminderd. Dit kan leiden tot{" "}
                <strong className="text-[--primary-color]">
                  lagere energiekosten
                </strong>{" "}
                en een verhoogd{" "}
                <strong className="text-[--primary-color]">
                  thermisch comfort
                </strong>{" "}
                gedurende het hele jaar.
              </p>
              <p className="p">
                Bovendien absorberen groendaken regenwater, waardoor ze
                bijdragen aan een betere waterhuishouding en de druk op het{" "}
                <strong className="text-[--primary-color]">rioolstelsel</strong>{" "}
                verminderen. Ze{" "}
                <strong className="text-[--primary-color]">filteren</strong> ook
                vervuilende stoffen uit de lucht en bevorderen de biodiversiteit
                door een leefomgeving te creëren voor{" "}
                <strong className="text-[--primary-color]">vogels</strong> en{" "}
                <strong className="text-[--primary-color]">insecten</strong>.
              </p>
              <p className="p">
                Of het nu gaat om een nieuwbouwproject of de{" "}
                <strong className="text-[--primary-color]">renovatie</strong>{" "}
                van een bestaand dak, wij zorgen voor een{" "}
                <strong className="text-[--primary-color]">
                  professionele installatie
                </strong>{" "}
                met{" "}
                <strong className="text-[--primary-color]">
                  hoogwaardige materialen
                </strong>
                . Met een{" "}
                <strong className="text-[--primary-color]">groendak</strong>{" "}
                investeert u in een duurzamer, energiezuiniger en gezonder
                leefklimaat.
              </p>
              {/* Call-to-Action */}
              <div className="mt-8">
                <a className="btn max-w-max uppercase" href="/contact">
                  offerte aanvragen
                </a>
              </div>
            </div>

            {/* Imagem */}
            <div className="order-1 lg:order-none rounded-md max-w-lg max-h-96 overflow-hidden shadow-md">
              <Image
                src={GroendakenImage}
                alt="Groendaken"
                className=""
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
          <div className="order-2 lg:order-none">
            <h2 className="h2 mb-8">Veelgestelde Vragen</h2>
            <div className="flex flex-col gap-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Hoe onderhoud ik een groendak?
                </h3>
                <p className="p">
                  Een groendak vereist minimaal onderhoud. Af en toe onkruid
                  verwijderen en controleren op verstoppingen van de afvoer is
                  voldoende.
                </p>
              </div>
              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Is een groendak geschikt voor elk dak?
                </h3>
                <p className="p">
                  Bijna elk dak is geschikt, maar het is belangrijk om de
                  draagkracht te controleren. Ons team kan u hierover adviseren.
                </p>
              </div>
              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Wat zijn de kosten van een groendak?
                </h3>
                <p className="p">
                  De kosten variëren afhankelijk van de grootte en complexiteit
                  van het project. Neem contact op voor een vrijblijvende
                  offerte.
                </p>
              </div>
            </div>
          </div>
          <Image
            alt=""
            src={QuestionMark}
            className="order-1 lg:order-none lg:w-[34rem]"
          />
        </div>
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
