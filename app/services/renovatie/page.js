import Image from "next/image";
import RenovatieImage from "@/public/images/services/renovation.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";

export default function Renovatie() {
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div className="py-12">
          <div>
            {/* Título */}
            <h1 className="h1">Renovatie</h1>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-6">
                <p className="p">
                  Een goed uitgevoerde{" "}
                  <strong className="text-[--primary-color]">renovatie</strong>{" "}
                  kan de waarde,{" "}
                  <strong className="text-[--primary-color]">
                    energie-efficiëntie
                  </strong>{" "}
                  en functionaliteit van een gebouw aanzienlijk verbeteren. Bij{" "}
                  <strong className="text-[--primary-color]">
                    Schrijnwerkerij De Haes
                  </strong>{" "}
                  combineren we traditioneel vakmanschap met moderne technieken
                  om uw woning of bedrijfspand nieuw leven in te blazen.
                </p>
                <p className="p">
                  Onze renovatiediensten omvatten zowel structurele aanpassingen
                  als esthetische vernieuwingen. We verzorgen alles, van
                  dakrenovaties en gevelherstel tot interieurverbeteringen en
                  houtwerkrestauratie. Of het nu gaat om het behoud van een
                  historisch pand of het moderniseren van een bestaande
                  constructie, wij zorgen voor een resultaat dat zowel
                  functioneel als visueel aantrekkelijk is.
                </p>
                <p className="p">
                  Door het gebruik van{" "}
                  <strong className="text-[--primary-color]">
                    duurzame materialen
                  </strong>{" "}
                  en{" "}
                  <strong className="text-[--primary-color]">
                    energie-efficiënte oplossingen
                  </strong>{" "}
                  garanderen we een renovatie die niet alleen de levensduur van
                  het gebouw verlengt, maar ook bijdraagt aan comfort en
                  besparingen op energiekosten. We werken nauw samen met onze
                  klanten om op maat gemaakte oplossingen te bieden die
                  aansluiten bij hun wensen en budget.
                </p>
                <p className="p">
                  Met onze expertise en toewijding aan{" "}
                  <strong className="text-[--primary-color]">kwaliteit</strong>{" "}
                  bent u verzekerd van een renovatie die zowel esthetisch als
                  structureel uitmuntend is.
                </p>
                {/* Call-to-Action */}
                <div className="mt-14">
                  <a className="btn max-w-max uppercase" href="/contact">
                    offerte aanvragen
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="order-1 lg:order-none rounded-md max-w-lg overflow-hidden shadow-md">
                <Image
                  src={RenovatieImage} // Substitua pela imagem correta
                  alt="Renovatie"
                  className=""
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
          <div className="order-2 lg:order-none">
            {/* Título */}
            <h2 className="h2 mb-8">Veelgestelde Vragen over Renovatie</h2>

            {/* Lista de Perguntas e Respostas */}
            <div className="space-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Wat zijn de voordelen van een renovatie?
                </h3>
                <p className="p">
                  Een renovatie kan de waarde,{" "}
                  <strong className="text-[--primary-color]">
                    energie-efficiëntie
                  </strong>{" "}
                  en functionaliteit van een gebouw aanzienlijk verbeteren. Het
                  brengt nieuw leven in uw woning of bedrijfspand.
                </p>
              </div>

              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Welke diensten biedt u aan bij een renovatie?
                </h3>
                <p className="p">
                  Onze renovatiediensten omvatten structurele aanpassingen,
                  esthetische vernieuwingen, dakrenovaties, gevelherstel,
                  interieurverbeteringen en houtwerkrestauratie.
                </p>
              </div>

              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Kunt u ook historische panden renoveren?
                </h3>
                <p className="p">
                  Ja, wij hebben ervaring met het behoud en de renovatie van
                  historische panden, waarbij we traditioneel vakmanschap
                  combineren met moderne technieken.
                </p>
              </div>

              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Hoe draagt een renovatie bij aan energie-efficiëntie?
                </h3>
                <p className="p">
                  Door het gebruik van{" "}
                  <strong className="text-[--primary-color]">
                    duurzame materialen
                  </strong>{" "}
                  en{" "}
                  <strong className="text-[--primary-color]">
                    energie-efficiënte oplossingen
                  </strong>{" "}
                  verbeteren we de isolatie en verminderen we de energiekosten.
                </p>
              </div>

              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Waarom kiezen voor Schrijnwerkerij De Haes?
                </h3>
                <p className="p">
                  Met onze expertise en toewijding aan{" "}
                  <strong className="text-[--primary-color]">kwaliteit</strong>{" "}
                  bent u verzekerd van een renovatie die zowel esthetisch als
                  structureel uitmuntend is.
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
