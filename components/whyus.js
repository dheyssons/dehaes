import Counter from "./counter";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { LuLeaf } from "react-icons/lu";
import { IoShieldOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";

import { useTranslations } from "next-intl";
import { Card } from "./ui/card";

export default function Whyus() {
  const t = useTranslations("whyUs");

  return (
    <div className="w-screen">
      <section className="flex flex-col gap-y-10 items-center">
        <div className="flex flex-col md:flex-row gap-4 lg:flex-row items-start justify-between w-full">
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
          <Card
            variant="plus"
            icon={IoFlashOutline}
            title={t("benefits.speed.title")}
            description={t("benefits.speed.description")}
            className="max-w-[400px] bg-background"
          />
          <Card
            variant="plus"
            component={Counter}
            title={t("benefits.experience.title")}
            description={t("benefits.experience.description")}
            className="max-w-[400px] bg-background"
          />
          <Card
            variant="plus"
            icon={IoShieldOutline}
            title={t("benefits.quality.title")}
            description={t("benefits.quality.description")}
            className="max-w-[400px] bg-background"
          />
          <Card
            variant="plus"
            icon={LuLeaf}
            title={t("benefits.durability.title")}
            description={t("benefits.durability.description")}
            className="max-w-[400px] bg-background"
          />
        </div>
      </section>
    </div>
  );
}
