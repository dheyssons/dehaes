import Counter from "./counter";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function Whyus() {
  return (
    <section className="flex flex-col gap-y-10 items-center">
      <div className="flex flex-col gap-2 lg:flex-row items-start lg:items-start lg:justify-between w-full pt-10">
        <div className="flex flex-row items-center gap-x-2 p-2 border border-[--primary-color] rounded-full">
          <BsFillQuestionCircleFill className="size-5 text-[--primary-color]" />
          <h2 className="body !text-center lg:text-start">
            Waarom kiezen voor ons?
          </h2>
        </div>
        {/* Call-to-Action */}
        <a className="btn max-w-max uppercase" href="#contactus">
          offerte aanvragen
        </a>
      </div>

      <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6 justify-between w-full">
        {/* Benefício 1 */}
        <div className="flex flex-col items-start border border-black/40 gap-y-2 rounded-md p-6 lg:p-14 shadow-sm bg-[#f0f0f43e]">
          <svg
            fill="#0000009e"
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
          </svg>
          <h6 className="h4 !text-[--primary-color]">Duurzaamheid</h6>
          <p className="p lg:mt-5">
            Wij gebruiken alleen duurzame materialen en milieuvriendelijke
            technieken.
          </p>
        </div>
        {/* Benefício 2 */}
        <div className=" flex flex-col items-start border border-black/40 gap-y-2 rounded-md p-6 lg:p-14 shadow-sm bg-[#f0f0f43e]">
          <Counter target={75} duration={3000} />
          <h6 className="h4 !text-[--primary-color]">Ervaring</h6>
          <p className="p lg:mt-5">
            Vier generaties ervaring in het ontwerpen en bouwen van
            dakstructuren.
          </p>
        </div>
        {/* Benefício 3 */}
        <div className="flex flex-col items-start border border-black/40 gap-y-2 rounded-md p-6 lg:p-14 shadow-sm bg-[#f0f0f43e]">
          <svg
            fill="#0000009e"
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z" />
          </svg>
          <h6 className="h4 !text-[--primary-color]">Kwaliteit</h6>
          <p className="p lg:mt-5">
            Onze projecten zijn ontworpen om generaties lang mee te gaan.
          </p>
        </div>
      </div>
    </section>
  );
}
