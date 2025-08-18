import Image from "next/image";
import GevelbekledingImage from "@/public/images/services/gevelbekleding/image1.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Gevelbekleding() {
  return (
    <div className="">
      {/* main */}
      <section className="container mx-auto max-w-screen-xl pt-32">
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Título */}
            <h2 className="h2 font-bold !text-[--primary-color]">
              Gevelbekleding
            </h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
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
                <p className="text-gray-700 p small leading-relaxed">
                  We bieden een uitgebreide keuze aan materialen voor
                  gevelbekleding, zoals hout, composiet en metalen panelen,
                  afhankelijk van uw voorkeur en de vereisten van het gebouw. Of
                  het nu gaat om het creëren van een moderne uitstraling of het
                  behouden van een traditioneel karakter, wij zorgen voor een
                  perfecte afwerking die bij de stijl van uw pand past.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Onze gevelbekleding zorgt voor uitstekende isolatie,
                  bescherming tegen regen, wind en zon, en biedt een lange
                  levensduur. We werken nauw samen met u om te zorgen dat uw
                  gevel niet alleen functioneel is, maar ook visueel
                  aantrekkelijk en duurzaam blijft, ongeacht de
                  weersomstandigheden.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Met oog voor detail en vakmanschap zorgen wij ervoor dat de
                  gevel van uw gebouw niet alleen mooi, maar ook optimaal
                  beschermd is.
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
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Título */}
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Veelgestelde Vragen over Gevelbekleding
          </h2>

          {/* Lista de Perguntas e Respostas */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Pergunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Wat is gevelbekleding?
              </h4>
              <p className="text-gray-700">
                Gevelbekleding is een beschermende en decoratieve laag die aan
                de buitenkant van een gebouw wordt aangebracht. Het verbetert
                niet alleen het uiterlijk, maar biedt ook bescherming tegen
                weersinvloeden zoals regen, wind en zon.
              </p>
            </div>

            {/* Pergunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Welke materialen kunnen worden gebruikt voor gevelbekleding?
              </h4>
              <p className="text-gray-700">
                Wij bieden een uitgebreide keuze aan materialen, waaronder{" "}
                <strong className="text-[--primary-color]">hout</strong>,{" "}
                <strong className="text-[--primary-color]">composiet</strong> en{" "}
                <strong className="text-[--primary-color]">
                  metalen panelen
                </strong>
                . Elk materiaal heeft zijn eigen voordelen en wordt gekozen op
                basis van uw voorkeur en de vereisten van het gebouw.
              </p>
            </div>

            {/* Pergunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Hoe onderhoud ik gevelbekleding?
              </h4>
              <p className="text-gray-700">
                Het onderhoud hangt af van het gebruikte materiaal. Houten
                gevelbekleding vereist bijvoorbeeld regelmatig onderhoud zoals
                schilderen, terwijl composiet en metalen panelen onderhoudsarm
                zijn. Wij adviseren u graag over het juiste onderhoud.
              </p>
            </div>

            {/* Pergunta 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Is gevelbekleding geschikt voor alle gebouwen?
              </h4>
              <p className="text-gray-700">
                Ja, gevelbekleding kan worden toegepast op zowel nieuwe als
                bestaande gebouwen. Wij zorgen voor een oplossing die perfect
                aansluit bij de stijl en structuur van uw pand.
              </p>
            </div>

            {/* Pergunta 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Wat zijn de voordelen van gevelbekleding?
              </h4>
              <p className="text-gray-700">
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
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
