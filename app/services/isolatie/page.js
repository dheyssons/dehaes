import Image from "next/image";
import IsolatieImage from "@/public/images/services/insulation.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";

export const metadata = {
  title: "Isolatie",
  description:
    "Hoogwaardige dakisolatie verbetert de energie-efficiëntie en het wooncomfort het hele jaar door. Met kwaliteitsmaterialen zorgen wij voor minder warmteverlies, lagere energiekosten en een duurzame oplossing voor zowel nieuwbouw als renovatie.",
};

export default function Isolatie() {
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">Isolatie</h1>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-6">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-6">
                <p className="p">
                  De juiste{" "}
                  <strong className="text-[--primary-color]">isolatie</strong>{" "}
                  van uw dak is essentieel om de{" "}
                  <strong className="text-[--primary-color]">
                    energie-efficiëntie
                  </strong>{" "}
                  te optimaliseren en het hele jaar door een comfortabele
                  omgeving te garanderen. We gebruiken alleen materialen van
                  hoge kwaliteit, zoals minerale wol en ecologische opties, om
                  de beste bescherming tegen klimaatveranderingen te bieden,
                  waardoor warmteverlies in de winter wordt voorkomen en de
                  ruimte in de zomer koel blijft.
                </p>
                <p className="p">
                  Naast het comfort kan de installatie van een goede isolatie
                  aanzienlijke besparingen opleveren op uw{" "}
                  <strong className="text-[--primary-color]">
                    energiekosten
                  </strong>
                  , waardoor het een investering is die zichzelf in de loop van
                  de tijd terugbetaalt. Deze service is ideaal voor zowel
                  nieuwbouwprojecten als renovaties, en ons gespecialiseerde
                  team zorgt voor een snelle, efficiënte installatie met
                  uitstekende afwerking.
                </p>
                <p className="p">
                  Met onze toewijding aan{" "}
                  <strong className="text-[--primary-color]">kwaliteit</strong>{" "}
                  en{" "}
                  <strong className="text-[--primary-color]">
                    efficiëntie
                  </strong>
                  , zorgt u voor een dak dat de ideale temperatuur behoudt in
                  elk seizoen, wat resulteert in een duurzamer en economischer
                  huis.
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
                  src={IsolatieImage} // Substitua pela imagem correta
                  alt="Isolatie"
                  className=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
          {/* Título */}
          <div className="order-2 lg:order-none">
            <h2 className="h2 mb-8">Veelgestelde Vragen over Isolatie</h2>
            {/* Lista de Perguntas e Respostas */}
            <div className="space-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Waarom is dakisolatie belangrijk?
                </h3>
                <p className="p">
                  Dakisolatie is essentieel om de{" "}
                  <strong className="text-[--primary-color]">
                    energie-efficiëntie
                  </strong>{" "}
                  te verbeteren en een comfortabele omgeving te garanderen. Het
                  voorkomt warmteverlies in de winter en houdt de ruimte koel in
                  de zomer.
                </p>
              </div>

              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Welke materialen worden gebruikt voor dakisolatie?
                </h3>
                <p className="p">
                  Wij gebruiken hoogwaardige materialen zoals{" "}
                  <strong className="text-[--primary-color]">
                    minerale wol
                  </strong>{" "}
                  en{" "}
                  <strong className="text-[--primary-color]">
                    ecologische opties
                  </strong>{" "}
                  om de beste bescherming tegen klimaatveranderingen te bieden.
                </p>
              </div>

              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Hoeveel kan ik besparen met dakisolatie?
                </h3>
                <p className="p">
                  De installatie van goede isolatie kan aanzienlijke besparingen
                  opleveren op uw{" "}
                  <strong className="text-[--primary-color]">
                    energiekosten
                  </strong>
                  , waardoor het een investering is die zichzelf in de loop van
                  de tijd terugbetaalt.
                </p>
              </div>

              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Is isolatie geschikt voor zowel nieuwbouw als renovaties?
                </h3>
                <p className="p">
                  Ja, onze isolatiediensten zijn ideaal voor zowel{" "}
                  <strong className="text-[--primary-color]">
                    nieuwbouwprojecten
                  </strong>{" "}
                  als{" "}
                  <strong className="text-[--primary-color]">renovaties</strong>
                  . Ons team zorgt voor een snelle en efficiënte installatie.
                </p>
              </div>

              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  Wat zijn de voordelen van professionele dakisolatie?
                </h3>
                <p className="p">
                  Professionele dakisolatie zorgt voor een{" "}
                  <strong className="text-[--primary-color]">
                    comfortabele omgeving
                  </strong>
                  , bespaart op energiekosten en draagt bij aan een{" "}
                  <strong className="text-[--primary-color]">duurzamer</strong>{" "}
                  en{" "}
                  <strong className="text-[--primary-color]">
                    economischer
                  </strong>{" "}
                  huis.
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
