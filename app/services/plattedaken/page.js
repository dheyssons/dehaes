import Image from "next/image";
import PlattedakenImage from "@/public/images/services/epdm.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";

export const metadata = {
  title: "Platte daken",
  description:
    "Platte daken combineren een strak design met hoge functionaliteit. Met correcte isolatie, doordachte waterafvoer en duurzame dakbedekking zoals EPDM of bitumen zorgen wij voor een betrouwbaar, waterdicht en langdurig plat dak.",
};

export default function Plattedaken() {
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">Platte daken</h1>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-6">
                <p className="p">
                  <strong className="text-[--primary-color]">
                    Platte daken
                  </strong>{" "}
                  zijn ideaal voor wie op zoek is naar een eenvoudig en
                  functioneel ontwerp. Bij dit type dak wordt de isolatie direct
                  op de ondergrond aangebracht en bedekt met een waterdicht
                  membraan, wat zorgt voor een hoge weerstand tegen water en
                  extreme temperaturen.
                </p>
                <p className="p">
                  Een belangrijk aandachtspunt is de afwatering van regenwater.
                  Om lekkage te voorkomen, zorgen wij voor een subtiele helling
                  die met het blote oog niet zichtbaar is en installeren we
                  geschikte waterafvoeren om het snel naar de afvoer en goten te
                  leiden.
                </p>
                <p className="p">
                  Wij bieden twee dakbedekkingsopties:{" "}
                  <strong className="text-[--primary-color]">EPDM</strong>, een
                  synthetisch rubber dat bestand is tegen UV-straling, en{" "}
                  <strong className="text-[--primary-color]">
                    bitumen dakbedekking
                  </strong>
                  , met een levensduur van meer dan 30 jaar. Beide zijn ideaal
                  om een duurzaam dak te garanderen dat goed beschermd is tegen
                  de weersomstandigheden.
                </p>
                <p className="p">
                  Met onze ervaring kunt u rekenen op de zekerheid van een goed
                  gebouwd en hoogwaardig plat dak.
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
                  src={PlattedakenImage} // Substitua pela imagem correta
                  alt="Platte daken"
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
            <h2 className="h2 mb-8">Veelgestelde Vragen over Platte Daken</h2>

            {/* Lista de Perguntas e Respostas */}
            <div className="space-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Wat zijn de voordelen van een plat dak?
                </h3>
                <p className="p">
                  Platte daken zijn ideaal voor een eenvoudig en functioneel
                  ontwerp. Ze bieden een hoge weerstand tegen water en extreme
                  temperaturen, en zijn gemakkelijk te onderhouden.
                </p>
              </div>

              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Hoe wordt de afwatering van regenwater geregeld bij een plat
                  dak?
                </h3>
                <p className="p">
                  Om lekkage te voorkomen, zorgen wij voor een subtiele helling
                  die met het blote oog niet zichtbaar is en installeren we
                  geschikte waterafvoeren om het regenwater snel naar de afvoer
                  en goten te leiden.
                </p>
              </div>

              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Welke materialen worden gebruikt voor dakbedekking van platte
                  daken?
                </h3>
                <p className="p">
                  Wij bieden twee opties:{" "}
                  <strong className="text-[--primary-color]">EPDM</strong>, een
                  synthetisch rubber dat bestand is tegen UV-straling, en{" "}
                  <strong className="text-[--primary-color]">
                    bitumen dakbedekking
                  </strong>
                  , met een levensduur van meer dan 30 jaar.
                </p>
              </div>

              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Is een plat dak geschikt voor alle gebouwen?
                </h3>
                <p className="p">
                  Ja, platte daken kunnen worden toegepast op zowel nieuwe als
                  bestaande gebouwen. Wij zorgen voor een oplossing die perfect
                  aansluit bij de stijl en structuur van uw pand.
                </p>
              </div>

              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Wat zijn de belangrijkste aandachtspunten bij een plat dak?
                </h3>
                <p className="p">
                  Belangrijke aandachtspunten zijn een goede afwatering,
                  hoogwaardige dakbedekking en regelmatig onderhoud om de
                  levensduur van het dak te garanderen.
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
