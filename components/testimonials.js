import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

export default function Testimonials() {
    return (
        <div className="bg-white py-10 lg:py-20">
         <div className="container mx-auto max-w-screen-xl px-4">
            <h3 className="h3 font-bold text-center mb-8">
            Wat Onze Klanten Zeggen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Depoimento 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col gap-y-3">
                <div className="flex flex-row gap-x-1">
                    <FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaRegStar />
                </div>
                <p className="text-gray-700 italic">
                "deze schrijnwerker heeft voor mij twee opdrachten uitgevoerd.
                Telkens correct en degelijk genoeg afgewerkt."
                </p>
                <p className="text-[--primary-color] font-semibold">- Jan Courtois</p>
            </div>
            {/* Depoimento 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col gap-y-3">
                <div className="flex flex-row gap-x-1">
                    <FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaStar color="#FFC107" />
                </div>
                <p className="text-gray-700 italic">
                "Ze doen daktimmers en dakbedekking en gevelbekleding alleen maar positieve ervaring"
                </p>
                <p className="text-[--primary-color] font-semibold">- Yves Sijmus</p>
            </div>
            {/* Depoimento 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col gap-y-3 ">
                <div className="flex flex-row gap-x-1">
                    <FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaStar color="#FFC107" /><FaStar color="#FFC107" />
                </div>
                <p className="text-gray-700 italic">
                "Goed gelegen in industrie"
                </p>
                <p className="text-[--primary-color] font-semibold">- Robert Leonard</p>
            </div>
            </div>
         </div>
        </div>
    )
}