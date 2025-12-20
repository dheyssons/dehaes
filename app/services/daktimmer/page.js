import Image from "next/image";
import DaktimmerImage from "@/public/images/services/daktimmer.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";

export const metadata = {
  title: "Daktimmerwerk",
  description:
    "Vakkundig daktimmerwerk op maat voor nieuwbouw en renovatie. Met vier generaties ervaring realiseren wij sterke, duurzame dakconstructies die stabiliteit, veiligheid en een perfecte afwerking garanderen.",
};

export default function Daktimmer() {
  return (
    <div className="flex flex-col gap-y-40">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">Daktimmer</h1>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-10">
                <p className="p !text-start lg:text-center">
                  Een goed geconstrueerd dak begint met vakkundig{" "}
                  <strong className="text-[--primary-color]">
                    daktimmerwerk
                  </strong>
                  . Bij{" "}
                  <strong className="text-[--primary-color]">
                    Schrijnwerkerij De Haes
                  </strong>{" "}
                  hebben we vier generaties ervaring in het ontwerpen en
                  realiseren van robuuste dakstructuren die bestand zijn tegen
                  weer en wind.
                </p>
                <p className="p !text-start lg:text-center">
                  Wij bieden maatwerkoplossingen voor zowel nieuwbouw als
                  renovatieprojecten, waarbij we werken met duurzame houtsoorten
                  en moderne bouwtechnieken. Onze constructies zijn ontworpen
                  voor{" "}
                  <strong className="text-[--primary-color]">
                    maximale stabiliteit
                  </strong>{" "}
                  en draagkracht, wat essentieel is voor een veilig en langdurig
                  dak.
                </p>
                <p className="p !text-start lg:text-center">
                  Onze diensten omvatten de volledige opbouw van
                  dakconstructies, inclusief het plaatsen van spanten, gordingen
                  en kepers. Daarnaast zorgen wij voor de perfecte aansluiting
                  op dakisolatie en dakbedekking, waardoor uw woning of gebouw
                  optimaal beschermd blijft tegen weersinvloeden.
                </p>
                <p className="p !text-start lg:text-center">
                  Wij werken nauw samen met onze klanten om een resultaat te
                  leveren dat niet alleen technisch perfect is, maar ook
                  esthetisch aansluit bij de stijl van het gebouw. Met precisie
                  en vakmanschap garanderen wij een dakstructuur die generaties
                  lang meegaat.
                </p>
                {/* Call-to-Action */}
                <div className="mt-10">
                  <a className="btn max-w-max uppercase" href="/contact">
                    offerte aanvragen
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="order-1 lg:order-none rounded-md max-w-lg max-h-96 overflow-hidden shadow-md">
                <Image
                  src={DaktimmerImage}
                  alt="Daktimmer"
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
            <h2 className="h2 mb-8">Veelgestelde Vragen over Daktimmers</h2>
            <div className="flex flex-col gap-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  Wat is daktimmerwerk?
                </h3>
                <p className="p !text-start md:text-center">
                  Daktimmerwerk verwijst naar het vakmanschap van het ontwerpen
                  en bouwen van dakconstructies. Het omvat het plaatsen van
                  spanten, gordingen en kepers om een robuuste en duurzame
                  dakstructuur te creëren.
                </p>
              </div>
              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  Waarom is een goede dakconstructie belangrijk?
                </h3>
                <p className="p !text-start md:text-center">
                  Een goede dakconstructie zorgt voor maximale stabiliteit,
                  draagkracht en bescherming tegen weersinvloeden. Het is
                  essentieel voor de veiligheid en duurzaamheid van uw woning of
                  gebouw.
                </p>
              </div>
              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  Welke materialen worden gebruikt bij daktimmerwerk?
                </h3>
                <p className="p !text-start md:text-center">
                  Wij werken met duurzame houtsoorten en moderne bouwtechnieken
                  om ervoor te zorgen dat uw dakconstructie van hoge kwaliteit
                  is en bestand is tegen de elementen.
                </p>
              </div>
              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  Kan daktimmerwerk worden toegepast bij renovatieprojecten?
                </h3>
                <p className="p !text-start md:text-center">
                  Ja, wij bieden maatwerkoplossingen voor zowel nieuwbouw als
                  renovatieprojecten. Ons team zorgt ervoor dat de bestaande
                  structuur wordt versterkt en verbeterd.
                </p>
              </div>
              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  Hoe lang duurt het om een dakconstructie te bouwen?
                </h3>
                <p className="p !text-start md:text-center">
                  De duur hangt af van de omvang en complexiteit van het
                  project. Wij zorgen altijd voor een efficiënte planning en
                  uitvoering om uw project op tijd af te ronden.
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
