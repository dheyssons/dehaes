import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "generalconditions",
  });

  return {
    title: t("generalconditions_title"),
    description: t("description"),
  };
}

export default function GeneralConditions() {
  const t = useTranslations("generalconditions");
  return (
    <section className="container mx-auto max-w-screen-xl py-12 px-4 pt-40">
      <h1 className="h1 text-[--primary-color] mb-8">
        {t("generalconditions_title")}
      </h1>

      <div className="space-y-10">
        <p className="p">{t("generalconditions_intro")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section1_title")}
        </h2>
        <p className="p">{t("generalconditions_section1_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section2_title")}
        </h2>
        <p className="p">{t("generalconditions_section2_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section3_title")}
        </h2>
        <p className="p">{t("generalconditions_section3_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section4_title")}
        </h2>
        <p className="p">{t("generalconditions_section4_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section5_title")}
        </h2>
        <p className="p">{t("generalconditions_section5_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section6_title")}
        </h2>
        <p className="p">{t("generalconditions_section6_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section7_title")}
        </h2>
        <p className="p">{t("generalconditions_section7_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section8_title")}
        </h2>
        <p className="p">{t("generalconditions_section8_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section9_title")}
        </h2>
        <p className="p">{t("generalconditions_section9_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("generalconditions_section10_title")}
        </h2>
        <p className="p">{t("generalconditions_section10_content")}</p>
      </div>
    </section>
  );
}
