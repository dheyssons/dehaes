import Counter from "./counter";
import { BiSolidLeaf } from "react-icons/bi";
import { BsShieldFillCheck } from "react-icons/bs";

export default function Whyus() {
    return (
        <div className="flex flex-col items-center bg-gray-50 py-12">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <h3 className="text-3xl font-bold text-[--primary-color] text-center mb-8">
                    Waarom Kiezen voor Ons?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Benefício 1 */}
                    <div className="flex flex-col items-center text-center">
                        <BiSolidLeaf className="text-[--primary-color] w-8 h-8"/>
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">Duurzaamheid</h4>
                        <p className="text-gray-700">
                        Wij gebruiken alleen duurzame materialen en milieuvriendelijke technieken.
                        </p>
                    </div>
                    {/* Benefício 2 */}
                    <div className=" flex flex-col items-center text-center shadow-md rounded-md p-4">
                        <Counter target={100} duration={3000}/>
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">Ervaring</h4>
                        <p className="text-gray-700">
                        Vier generaties ervaring in het ontwerpen en bouwen van dakstructuren.
                        </p>
                    </div>
                    {/* Benefício 3 */}
                    <div className="flex flex-col items-center text-center">
                        <BsShieldFillCheck className="text-[--primary-color] w-8 h-8"/>
                        <h4 className="text-xl font-semibold text-[--primary-color] mb-2">Kwaliteit</h4>
                        <p className="text-gray-700">
                        Onze projecten zijn ontworpen om generaties lang mee te gaan.
                        </p>
                    </div>
                    </div>
                </div>
                {/* Call-to-Action */}
                <div className="mt-10">
                    <a className="btn max-w-max uppercase" href="#contactus">
                    Vraag een offerte aan
                    </a>
                </div>
            </div>
    )
}