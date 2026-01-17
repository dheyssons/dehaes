import { useTranslations } from "next-intl";
import React from "react";

export default function LegalNotices() {
  const t = useTranslations("legalnotices");
  return (
    <section className="container mx-auto max-w-screen-xl py-12 px-4 pt-40">
      <h1 className="h1 text-[--primary-color] mb-8">
        {t("legalnotices_title")}
      </h1>

      <div className="space-y-10">
        <p className="p max-w-[100ch]">{t("legalnotices_intro")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("legalnotices_section1_title")}
        </h2>
        <p className="p max-w-[100ch]">
          {t("legalnotices_section1_content")
            .split("\\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index <
                  t("legalnotices_section1_content").split("\\n").length -
                    1 && <br />}
              </React.Fragment>
            ))}
        </p>

        <h2 className="h2 text-[--primary-color]">
          {t("legalnotices_section2_title")}
        </h2>
        <p className="p max-w-[100ch]">{t("legalnotices_section2_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("legalnotices_section3_title")}
        </h2>
        <p className="p max-w-[100ch]">{t("legalnotices_section3_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("legalnotices_section4_title")}
        </h2>
        <p className="p max-w-[100ch]">{t("legalnotices_section4_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("legalnotices_section5_title")}
        </h2>
        <p className="p max-w-[100ch]">{t("legalnotices_section5_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("legalnotices_section6_title")}
        </h2>
        <p className="p max-w-[100ch]">{t("legalnotices_section6_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("legalnotices_section7_title")}
        </h2>
        <p className="p max-w-[100ch]">{t("legalnotices_section7_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("legalnotices_section8_title")}
        </h2>
        <p className="p max-w-[100ch]">{t("legalnotices_section8_content")}</p>
      </div>
    </section>
  );
}
