import Image from "next/image";
import RenovatieImage from "@/public/images/services/renovation.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Renovatie() {
  return (
    <div className="">
      {/* main */}
      <section className="container mx-auto max-w-screen-xl pt-28">
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Título */}
            <h2 className="h2 font-bold !text-[--primary-color]">Renovatie</h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
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
                <p className="text-gray-700 p small leading-relaxed">
                  Onze renovatiediensten omvatten zowel structurele aanpassingen
                  als esthetische vernieuwingen. We verzorgen alles, van
                  dakrenovaties en gevelherstel tot interieurverbeteringen en
                  houtwerkrestauratie. Of het nu gaat om het behoud van een
                  historisch pand of het moderniseren van een bestaande
                  constructie, wij zorgen voor een resultaat dat zowel
                  functioneel als visueel aantrekkelijk is.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
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
                <p className="text-gray-700 p small leading-relaxed">
                  Met onze expertise en toewijding aan{" "}
                  <strong className="text-[--primary-color]">kwaliteit</strong>{" "}
                  bent u verzekerd van een renovatie die zowel esthetisch als
                  structureel uitmuntend is.
                </p>
                {/* Call-to-Action */}
                <div className="mt-10">
                  <a className="btn max-w-max uppercase" href="#contactus">
                    Vraag een offerte aan
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="rounded-md max-w-lg overflow-hidden shadow-md">
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
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Título */}
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Veelgestelde Vragen over Renovatie
          </h2>

          {/* Lista de Perguntas e Respostas */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Pergunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Wat zijn de voordelen van een renovatie?
              </h4>
              <p className="text-gray-700">
                Een renovatie kan de waarde,{" "}
                <strong className="text-[--primary-color]">
                  energie-efficiëntie
                </strong>{" "}
                en functionaliteit van een gebouw aanzienlijk verbeteren. Het
                brengt nieuw leven in uw woning of bedrijfspand.
              </p>
            </div>

            {/* Pergunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Welke diensten biedt u aan bij een renovatie?
              </h4>
              <p className="text-gray-700">
                Onze renovatiediensten omvatten structurele aanpassingen,
                esthetische vernieuwingen, dakrenovaties, gevelherstel,
                interieurverbeteringen en houtwerkrestauratie.
              </p>
            </div>

            {/* Pergunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Kunt u ook historische panden renoveren?
              </h4>
              <p className="text-gray-700">
                Ja, wij hebben ervaring met het behoud en de renovatie van
                historische panden, waarbij we traditioneel vakmanschap
                combineren met moderne technieken.
              </p>
            </div>

            {/* Pergunta 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Hoe draagt een renovatie bij aan energie-efficiëntie?
              </h4>
              <p className="text-gray-700">
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
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Waarom kiezen voor Schrijnwerkerij De Haes?
              </h4>
              <p className="text-gray-700">
                Met onze expertise en toewijding aan{" "}
                <strong className="text-[--primary-color]">kwaliteit</strong>{" "}
                bent u verzekerd van een renovatie die zowel esthetisch als
                structureel uitmuntend is.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
