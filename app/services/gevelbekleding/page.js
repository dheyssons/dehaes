import Image from "next/image";
import GevelbekledingImage from "@/public/images/services/gevelbekleding/image1.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";

export const metadata = {
  title: "Gevelbekleding",
  description:
    "Professionele gevelbekleding die esthetiek en bescherming combineert. Met duurzame materialen zoals hout, composiet en metaal zorgen wij voor een perfecte afwerking, uitstekende isolatie en een gevel die bestand is tegen alle weersomstandigheden.",
};

export default function Gevelbekleding() {
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">Gevelbekleding</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-6">
                <p className="p">
                  De <strong className="text-[--primary-color]">gevel</strong>{" "}
                  van een gebouw speelt een cruciale rol in zowel het uiterlijk
                  als de bescherming tegen externe factoren. Bij{" "}
                  <strong className="text-[--primary-color]">
                    Schrijnwerkerij De Haes
                  </strong>{" "}
                  specialiseren wij ons in het aanbrengen van gevelbekleding die
                  niet alleen de esthetiek van uw woning of bedrijfspand
                  verbetert, maar ook een sterke barrière biedt tegen de
                  elementen.
                </p>
                <p className="p">
                  We bieden een uitgebreide keuze aan materialen voor
                  gevelbekleding, zoals hout, composiet en metalen panelen,
                  afhankelijk van uw voorkeur en de vereisten van het gebouw. Of
                  het nu gaat om het creëren van een moderne uitstraling of het
                  behouden van een traditioneel karakter, wij zorgen voor een
                  perfecte afwerking die bij de stijl van uw pand past.
                </p>
                <p className="p">
                  Onze gevelbekleding zorgt voor uitstekende isolatie,
                  bescherming tegen regen, wind en zon, en biedt een lange
                  levensduur. We werken nauw samen met u om te zorgen dat uw
                  gevel niet alleen functioneel is, maar ook visueel
                  aantrekkelijk en duurzaam blijft, ongeacht de
                  weersomstandigheden.
                </p>
                <p className="p">
                  Met oog voor detail en vakmanschap zorgen wij ervoor dat de
                  gevel van uw gebouw niet alleen mooi, maar ook optimaal
                  beschermd is.
                </p>
                {/* Call-to-Action */}
                <div className="mt-14">
                  <a className="btn max-w-max uppercase" href="#contactus">
                    offerte aanvragen
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="order-1 lg:order-none rounded-md max-w-lg overflow-hidden shadow-md">
                <Image
                  src={GevelbekledingImage} // Substitua pela imagem correta
                  alt="Daktimmers"
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
          <div className="order-2 lg:order-none">
            {/* Título */}
            <h2 className="h2 mb-8">Veelgestelde Vragen over Gevelbekleding</h2>

            {/* Lista de Perguntas e Respostas */}
            <div className="flex flex-col gap-y-10">
              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-2">
                  Welke materialen kunnen worden gebruikt voor gevelbekleding?
                </h3>
                <p className="p">
                  Wij bieden een uitgebreide keuze aan materialen, waaronder{" "}
                  <strong className="text-[--primary-color]">hout</strong>,{" "}
                  <strong className="text-[--primary-color]">composiet</strong>{" "}
                  en{" "}
                  <strong className="text-[--primary-color]">
                    metalen panelen
                  </strong>
                  . Elk materiaal heeft zijn eigen voordelen en wordt gekozen op
                  basis van uw voorkeur en de vereisten van het gebouw.
                </p>
              </div>

              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-2">
                  Hoe onderhoud ik gevelbekleding?
                </h3>
                <p className="p">
                  Het onderhoud hangt af van het gebruikte materiaal. Houten
                  gevelbekleding vereist bijvoorbeeld regelmatig onderhoud zoals
                  schilderen, terwijl composiet en metalen panelen onderhoudsarm
                  zijn. Wij adviseren u graag over het juiste onderhoud.
                </p>
              </div>

              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-2">
                  Is gevelbekleding geschikt voor alle gebouwen?
                </h3>
                <p className="p">
                  Ja, gevelbekleding kan worden toegepast op zowel nieuwe als
                  bestaande gebouwen. Wij zorgen voor een oplossing die perfect
                  aansluit bij de stijl en structuur van uw pand.
                </p>
              </div>

              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-2">
                  Wat zijn de voordelen van gevelbekleding?
                </h3>
                <p className="p">
                  Gevelbekleding biedt{" "}
                  <strong className="text-[--primary-color]">
                    uitstekende isolatie
                  </strong>
                  , bescherming tegen{" "}
                  <strong className="text-[--primary-color]">
                    weersinvloeden
                  </strong>
                  , en een{" "}
                  <strong className="text-[--primary-color]">
                    lange levensduur
                  </strong>
                  . Bovendien verbetert het de{" "}
                  <strong className="text-[--primary-color]">esthetiek</strong>{" "}
                  van uw gebouw.
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
