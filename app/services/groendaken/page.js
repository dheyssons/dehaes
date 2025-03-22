import Image from "next/image";
import GroendakenImage from "@/public/images/services/groendaken/image1.webp"

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Groendaken() {
    return (
        <div className="">
            {/* main */}
            <section className="container mx-auto max-w-screen-xl pt-32">
                <div className="bg-white py-12">
                    <div className="container mx-auto px-4">
                        {/* Título */}
                        <h2 className="h2 font-bold !text-[--primary-color]">
                        Groendaken
                        </h2>

                        {/* Conteúdo com Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
                        {/* Texto */}
                        <div className="space-y-6">
                            <p className="text-gray-700 p small leading-relaxed">
                            Een <strong className="text-[--primary-color]">groendak</strong> biedt niet alleen een esthetische meerwaarde maar ook tal van functionele voordelen. Dankzij de natuurlijke isolatiecapaciteiten van planten helpt het de binnentemperatuur te reguleren, waardoor de behoefte aan <strong className="text-[--primary-color]">verwarming</strong> en <strong className="text-[--primary-color]">koeling</strong> wordt verminderd. Dit kan leiden tot <strong className="text-[--primary-color]">lagere energiekosten</strong> en een verhoogd <strong className="text-[--primary-color]">thermisch comfort</strong> gedurende het hele jaar.
                            </p>
                            <p className="text-gray-700 p small leading-relaxed">
                            Bovendien absorberen groendaken regenwater, waardoor ze bijdragen aan een betere waterhuishouding en de druk op het <strong className="text-[--primary-color]">rioolstelsel</strong> verminderen. Ze <strong className="text-[--primary-color]">filteren</strong> ook vervuilende stoffen uit de lucht en bevorderen de biodiversiteit door een leefomgeving te creëren voor <strong className="text-[--primary-color]">vogels</strong> en <strong className="text-[--primary-color]">insecten</strong>.
                            </p>
                            <p className="text-gray-700 p small leading-relaxed">
                            Of het nu gaat om een nieuwbouwproject of de <strong className="text-[--primary-color]">renovatie</strong> van een bestaand dak, wij zorgen voor een <strong className="text-[--primary-color]">professionele installatie</strong> met <strong className="text-[--primary-color]">hoogwaardige materialen</strong>. Met een <strong className="text-[--primary-color]">groendak</strong> investeert u in een duurzamer, energiezuiniger en gezonder leefklimaat.
                            </p>
                            {/* Call-to-Action */}
                            <div className="mt-8">
                            <a className="btn max-w-max uppercase" href="#contactus">Vraag een offerte aan</a>
                            </div>
                        </div>

                        {/* Imagem */}
                        <div className="rounded-md max-w-md overflow-hidden shadow-md">
                            <Image
                            src={GroendakenImage}
                            alt="Groendaken"
                            className=""
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* frequent questions */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h3 className="h3 font-bold text-black text-center mb-8">
                    Veelgestelde Vragen
                    </h3>
                    <div className="space-y-4 max-w-2xl mx-auto">
                    {/* Pergunta 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Hoe onderhoud ik een groendak?
                        </h4>
                        <p className="text-gray-700">
                        Een groendak vereist minimaal onderhoud. Af en toe onkruid verwijderen en controleren op verstoppingen van de afvoer is voldoende.
                        </p>
                    </div>
                    {/* Pergunta 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Is een groendak geschikt voor elk dak?
                        </h4>
                        <p className="text-gray-700">
                        Bijna elk dak is geschikt, maar het is belangrijk om de draagkracht te controleren. Ons team kan u hierover adviseren.
                        </p>
                    </div>
                    {/* Pergunta 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                        Wat zijn de kosten van een groendak?
                        </h4>
                        <p className="text-gray-700">
                        De kosten variëren afhankelijk van de grootte en complexiteit van het project. Neem contact op voor een vrijblijvende offerte.
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <Whyus />

            <Testimonials />

            <ContactForm />
        </div>
    )
}