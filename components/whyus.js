import Counter from "./counter";

export default function Whyus() {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-12">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h3 className="text-3xl font-bold  text-center mb-8">
          Pourquoi nous choisir ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Benefício 1 */}
          <div className="flex flex-col items-center text-center">
            {/* <BiSolidLeaf className="text-[--primary-color] w-8 h-8"/> */}
            <svg
              fill="#101010"
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
            </svg>
            <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
              Durabilité
            </h4>
            <p className="text-gray-700">
              Nous utilisons uniquement des matériaux durables et des techniques
              respectueuses de l'environnement.
            </p>
          </div>
          {/* Benefício 2 */}
          <div className=" flex flex-col items-center text-center shadow-md rounded-md p-4">
            <Counter target={5} duration={3000} />
            <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
              Expérience
            </h4>
            <p className="text-gray-700">
              plus 5 ans d'expérience dans la conception et la construction de
              structures de toiture.
            </p>
          </div>
          {/* Benefício 3 */}
          <div className="flex flex-col items-center text-center">
            {/* <BsShieldFillCheck className="text-[--primary-color] w-8 h-8" /> */}
            <svg
              fill="#101010"
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z" />
            </svg>
            <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
              Qualité
            </h4>
            <p className="text-gray-700">
              Nos projets sont conçus pour durer plusieurs générations.
            </p>
          </div>
        </div>
      </div>
      {/* Call-to-Action */}
      <div className="mt-10">
        <a className="btn max-w-max uppercase" href="#contactus">
          Demandez un devis
        </a>
      </div>
    </div>
  );
}
