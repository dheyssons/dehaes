export default function Testimonials() {
  return (
    <section className="flex flex-col">
      {/* Título */}
      <h2 className="h2 !text-center lg:!text-start mb-12">
        Wat Onze Klanten Zeggen
      </h2>

      {/* Grid dos cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col justify-between items-start gap-y-4 bg-white border border-[--primary-color] rounded-md p-6 lg:p-10 shadow-sm">
          <div>
            <div className="text-4xl text-[--primary-color] mb-4">“”</div>

            <p className="body !text-center text-[0.875rem]">
              Deze thuiswerker heeft voor mij twee opdrachten uitgevoerd.
              Telkens correct en degelijk genoeg afgewerkt.
            </p>
          </div>

          <div className="w-full">
            <div className="h-px w-full mb-4 bg-gray-200"></div>
            <div className="flex flex-row gap-x-2 justify-center items-center">
              <div className="flex flex-col items-center justify-center bg-[#522da8] w-2 h-2 rounded-full p-4">
                <span className="text-white">J</span>
              </div>
              <p className="text-center font-semibold">Jan Courtois</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between items-start gap-y-4 bg-white border border-[--primary-color] rounded-md p-6 lg:p-10 shadow-sm">
          <div>
            <div className="text-4xl text-[--primary-color] mb-4">“”</div>
            <p className="body !text-center text-[0.875rem]">
              Ze doen daktimmers en dakbedekking en gevelbekleding. Alleen maar
              positieve ervaring.
            </p>
          </div>

          <div className="w-full">
            <div className="h-px w-full mb-4 bg-gray-200"></div>
            <div className="flex flex-row gap-x-2 justify-center items-center">
              <div className="flex flex-col items-center justify-center bg-[#c2175b] w-2 h-2 rounded-full p-4">
                <span className="text-white">Y</span>
              </div>
              <p className="text-center font-semibold ">Yves Sijmus</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between items-start gap-y-4 bg-white border border-[--primary-color] rounded-md p-6 lg:p-10 shadow-sm">
          <div>
            <div className="text-4xl text-[--primary-color] mb-4">“”</div>
            <p className="body !text-center text-[0.875rem]">
              Cette personne a travaillé pour moi et je suis vraiment super
              contente du résultat !!!! À recommander
            </p>
          </div>

          <div className="w-full">
            <div className="h-px w-full mb-4 bg-gray-200"></div>
            <div className="flex flex-row gap-x-2 justify-center items-center">
              <div className="flex flex-col items-center justify-center bg-[#0289d1] w-2 h-2 rounded-full p-4">
                <span className="text-white">C</span>
              </div>
              <p className="text-center font-semibold">Caroline Gabay</p>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col justify-between items-start gap-y-4 bg-white border border-[--primary-color] rounded-md p-6 lg:p-10 shadow-sm">
          <div>
            <div className="text-4xl text-[--primary-color] mb-4">“”</div>
            <p className="body !text-center text-[0.875rem]">
              Helemaal tevreden over ons dak. Goede samenwerking en alles
              volgens afspraak.
            </p>
          </div>

          <div className="w-full">
            <div className="h-px w-full mb-4 bg-gray-200"></div>
            <div className="flex flex-row gap-x-2 justify-center items-center">
              <div className="flex flex-col items-center justify-center bg-[#008a7c] w-2 h-2 rounded-full p-4">
                <span className="text-white">J</span>
              </div>
              <p className="text-center font-semibold ">Johan Marien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
