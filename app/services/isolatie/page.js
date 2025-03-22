import Image from "next/image";
import IsolatieImage from "@/public/images/services/isolatie.webp"

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Isolatie() {
    return (
        <div className="">
            {/* main */}
            <section className="container mx-auto max-w-screen-xl pt-32">
                <div className="bg-white py-12">
                    <div className="container mx-auto px-4">
                        {/* Título */}
                        <h2 className="h2 font-bold !text-[--primary-color]">
                            Isolatie
                        </h2>

                        {/* Conteúdo com Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                            {/* Texto */}
                            <div className="space-y-6">
                                <p className="text-gray-700 p small leading-relaxed">
                                    De juiste <strong className="text-[--primary-color]">isolatie</strong> van uw dak is essentieel om de <strong className="text-[--primary-color]">energie-efficiëntie</strong> te optimaliseren en het hele jaar door een comfortabele omgeving te garanderen. We gebruiken alleen materialen van hoge kwaliteit, zoals minerale wol en ecologische opties, om de beste bescherming tegen klimaatveranderingen te bieden, waardoor warmteverlies in de winter wordt voorkomen en de ruimte in de zomer koel blijft.

                                </p>
                                <p className="text-gray-700 p small leading-relaxed">
                                    Naast het comfort kan de installatie van een goede isolatie aanzienlijke besparingen opleveren op uw <strong className="text-[--primary-color]">energiekosten</strong>, waardoor het een investering is die zichzelf in de loop van de tijd terugbetaalt. Deze service is ideaal voor zowel nieuwbouwprojecten als renovaties, en ons gespecialiseerde team zorgt voor een snelle, efficiënte installatie met uitstekende afwerking.

                                </p>
                                <p className="text-gray-700 p small leading-relaxed">
                                    Met onze toewijding aan <strong className="text-[--primary-color]">kwaliteit</strong> en <strong className="text-[--primary-color]">efficiëntie</strong>, zorgt u voor een dak dat de ideale temperatuur behoudt in elk seizoen, wat resulteert in een duurzamer en economischer huis.

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
                                src={IsolatieImage} // Substitua pela imagem correta
                                alt="Isolatie"
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
                    Veelgestelde Vragen over Isolatie
                    </h2>

                    {/* Lista de Perguntas e Respostas */}
                    <div className="space-y-4 max-w-2xl mx-auto">
                    {/* Pergunta 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Waarom is dakisolatie belangrijk?
                        </h4>
                        <p className="text-gray-700">
                        Dakisolatie is essentieel om de <strong className="text-[--primary-color]">energie-efficiëntie</strong> te verbeteren en een comfortabele omgeving te garanderen. Het voorkomt warmteverlies in de winter en houdt de ruimte koel in de zomer.
                        </p>
                    </div>

                    {/* Pergunta 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Welke materialen worden gebruikt voor dakisolatie?
                        </h4>
                        <p className="text-gray-700">
                        Wij gebruiken hoogwaardige materialen zoals <strong className="text-[--primary-color]">minerale wol</strong> en <strong className="text-[--primary-color]">ecologische opties</strong> om de beste bescherming tegen klimaatveranderingen te bieden.
                        </p>
                    </div>

                    {/* Pergunta 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Hoeveel kan ik besparen met dakisolatie?
                        </h4>
                        <p className="text-gray-700">
                        De installatie van goede isolatie kan aanzienlijke besparingen opleveren op uw <strong className="text-[--primary-color]">energiekosten</strong>, waardoor het een investering is die zichzelf in de loop van de tijd terugbetaalt.
                        </p>
                    </div>

                    {/* Pergunta 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Is isolatie geschikt voor zowel nieuwbouw als renovaties?
                        </h4>
                        <p className="text-gray-700">
                        Ja, onze isolatiediensten zijn ideaal voor zowel <strong className="text-[--primary-color]">nieuwbouwprojecten</strong> als <strong className="text-[--primary-color]">renovaties</strong>. Ons team zorgt voor een snelle en efficiënte installatie.
                        </p>
                    </div>

                    {/* Pergunta 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Wat zijn de voordelen van professionele dakisolatie?
                        </h4>
                        <p className="text-gray-700">
                        Professionele dakisolatie zorgt voor een <strong className="text-[--primary-color]">comfortabele omgeving</strong>, bespaart op energiekosten en draagt bij aan een <strong className="text-[--primary-color]">duurzamer</strong> en <strong className="text-[--primary-color]">economischer</strong> huis.
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