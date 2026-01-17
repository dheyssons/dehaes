import Counter from "./counter";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { LuLeaf } from "react-icons/lu";
import { IoShieldOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";

import { useTranslations } from "next-intl";

export default function Whyus() {
  const t = useTranslations("whyUs");

  return (
    <section className="flex flex-col gap-y-10 items-center">
      <div className="flex flex-col gap-2 lg:flex-row items-start lg:items-start lg:justify-between w-full pt-10">
        <div className="flex flex-row items-center gap-x-2 p-2 border border-[--primary-color] rounded-full">
          <BsFillQuestionCircleFill className="size-5 text-[--primary-color]" />
          <h2 className="body !text-center lg:text-start">{t("badge")}</h2>
        </div>

        {/* Call-to-Action */}
        <a className="btn max-w-max uppercase" href="#contactus">
          {t("cta")}
        </a>
      </div>

      <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6 justify-between w-full">
        {/* Benefício 1 */}
        <div className="flex flex-col items-start border border-black/40 gap-y-3 rounded-md p-6 lg:p-10 shadow-sm bg-[#f0f0f427]">
          <IoFlashOutline className="w-10 h-10 text-[--primary-color]" />
          <h6 className="h4 !text-[--primary-color]">
            {t("benefits.speed.title")}
          </h6>
          <p className="p lg:mt-5">{t("benefits.speed.description")}</p>
        </div>

        {/* Benefício 2 */}
        <div className="flex flex-col items-start border border-black/40 gap-y-3 rounded-md p-6 lg:p-10 shadow-sm bg-[#f0f0f427]">
          <Counter target={75} duration={3000} />
          <h6 className="h4 !text-[--primary-color]">
            {t("benefits.experience.title")}
          </h6>
          <p className="p lg:mt-5">{t("benefits.experience.description")}</p>
        </div>

        {/* Benefício 3 */}
        <div className="flex flex-col items-start border border-black/40 gap-y-3 rounded-md p-6 lg:p-10 shadow-sm bg-[#f0f0f427]">
          <IoShieldOutline className="w-10 h-10 text-[--primary-color]" />
          <h6 className="h4 !text-[--primary-color]">
            {t("benefits.quality.title")}
          </h6>
          <p className="p lg:mt-5">{t("benefits.quality.description")}</p>
        </div>
        {/* Benefício 4 */}
        <div className="flex flex-col items-start border border-black/40 gap-y-3 rounded-md p-6 lg:p-10 shadow-sm bg-[#f0f0f427]">
          <LuLeaf className="w-10 h-10 text-[--primary-color]" />
          <h6 className="h4 !text-[--primary-color]">
            {t("benefits.durability.title")}
          </h6>
          <p className="p lg:mt-5">{t("benefits.durability.description")}</p>
        </div>
      </div>
    </section>
  );
}
