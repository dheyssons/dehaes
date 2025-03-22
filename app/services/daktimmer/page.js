import Image from "next/image";
import DaktimmerImage from "@/public/images/services/charpenter.webp"

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Daktimmer() {
    return (
        <div className="">
            {/* main */}
            <section className="container mx-auto max-w-screen-xl pt-28">
                <div className="bg-white py-12">
                    <div className="container mx-auto px-4">
                        {/* Título */}
                        <h2 className="h2 font-bold !text-[--primary-color]">
                            Daktimmers
                        </h2>

                        {/* Conteúdo com Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
                            {/* Texto */}
                            <div className="space-y-6">
                                <p className="text-gray-700 p small leading-relaxed">
                                    Een goed geconstrueerd dak begint met vakkundig <strong className="text-[--primary-color]">daktimmerwerk</strong>. Bij <strong className="text-[--primary-color]">Schrijnwerkerij De Haes</strong> hebben we vier generaties ervaring in het ontwerpen en realiseren van robuuste dakstructuren die bestand zijn tegen weer en wind.
                                </p>
                                <p className="text-gray-700 p small leading-relaxed">
                                    Wij bieden maatwerkoplossingen voor zowel nieuwbouw als renovatieprojecten, waarbij we werken met duurzame houtsoorten en moderne bouwtechnieken. Onze constructies zijn ontworpen voor <strong className="text-[--primary-color]">maximale stabiliteit</strong> en draagkracht, wat essentieel is voor een veilig en langdurig dak.
                                </p>
                                <p className="text-gray-700 p small leading-relaxed">
                                    Onze diensten omvatten de volledige opbouw van dakconstructies, inclusief het plaatsen van spanten, gordingen en kepers. Daarnaast zorgen wij voor de perfecte aansluiting op dakisolatie en dakbedekking, waardoor uw woning of gebouw optimaal beschermd blijft tegen weersinvloeden.
                                </p>
                                <p className="text-gray-700 p small leading-relaxed">
                                    Wij werken nauw samen met onze klanten om een resultaat te leveren dat niet alleen technisch perfect is, maar ook esthetisch aansluit bij de stijl van het gebouw. Met precisie en vakmanschap garanderen wij een dakstructuur die generaties lang meegaat.
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
                                src={DaktimmerImage} // Substitua pela imagem correta
                                alt="Daktimmer"
                                className=""
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
                    Veelgestelde Vragen over Daktimmers
                    </h2>

                    {/* Lista de Perguntas e Respostas */}
                    <div className="space-y-4 max-w-2xl mx-auto">
                    {/* Pergunta 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Wat is daktimmerwerk?
                        </h4>
                        <p className="text-gray-700">
                        Daktimmerwerk verwijst naar het vakmanschap van het ontwerpen en bouwen van dakconstructies. Het omvat het plaatsen van spanten, gordingen en kepers om een robuuste en duurzame dakstructuur te creëren.
                        </p>
                    </div>

                    {/* Pergunta 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Waarom is een goede dakconstructie belangrijk?
                        </h4>
                        <p className="text-gray-700">
                        Een goede dakconstructie zorgt voor maximale stabiliteit, draagkracht en bescherming tegen weersinvloeden. Het is essentieel voor de veiligheid en duurzaamheid van uw woning of gebouw.
                        </p>
                    </div>

                    {/* Pergunta 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Welke materialen worden gebruikt bij daktimmerwerk?
                        </h4>
                        <p className="text-gray-700">
                        Wij werken met duurzame houtsoorten en moderne bouwtechnieken om ervoor te zorgen dat uw dakconstructie van hoge kwaliteit is en bestand is tegen de elementen.
                        </p>
                    </div>

                    {/* Pergunta 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Kan daktimmerwerk worden toegepast bij renovatieprojecten?
                        </h4>
                        <p className="text-gray-700">
                        Ja, wij bieden maatwerkoplossingen voor zowel nieuwbouw als renovatieprojecten. Ons team zorgt ervoor dat de bestaande structuur wordt versterkt en verbeterd.
                        </p>
                    </div>

                    {/* Pergunta 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Hoe lang duurt het om een dakconstructie te bouwen?
                        </h4>
                        <p className="text-gray-700">
                        De duur hangt af van de omvang en complexiteit van het project. Wij zorgen altijd voor een efficiënte planning en uitvoering om uw project op tijd af te ronden.
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <Whyus />

            <Testimonials />

            <ContactForm />
        </div>
    )
}