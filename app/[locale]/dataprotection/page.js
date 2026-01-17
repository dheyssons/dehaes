import { useTranslations } from "next-intl";
import React from "react";

export default function DataProtection() {
  const t = useTranslations("dataprotection");
  return (
    <section className="container mx-auto max-w-screen-xl py-12 px-4 pt-40">
      <h1 className="h1 text-[--primary-color] mb-8">
        {t("dataprotection_title")}
      </h1>

      <div className="space-y-10">
        <p className="p">{t("dataprotection_intro")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section1_title")}
        </h2>
        <p className="p">
          {t("dataprotection_section1_content")
            .split("\\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index <
                  t("dataprotection_section1_content").split("\\n").length -
                    1 && <br />}
              </React.Fragment>
            ))}
        </p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section2_title")}
        </h2>
        <p className="p">{t("dataprotection_section2_intro")}</p>
        <ul className="list-disc list-inside p">
          <li>{t("dataprotection_section2_list1")}</li>
          <li>{t("dataprotection_section2_list2")}</li>
          <li>{t("dataprotection_section2_list3")}</li>
          <li>{t("dataprotection_section2_list4")}</li>
          <li>{t("dataprotection_section2_list5")}</li>
        </ul>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section3_title")}
        </h2>
        <p className="p">{t("dataprotection_section3_intro")}</p>
        <ul className="list-disc list-inside p">
          <li>{t("dataprotection_section3_list1")}</li>
          <li>{t("dataprotection_section3_list2")}</li>
          <li>{t("dataprotection_section3_list3")}</li>
          <li>{t("dataprotection_section3_list4")}</li>
          <li>{t("dataprotection_section3_list5")}</li>
        </ul>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section4_title")}
        </h2>
        <p className="p">{t("dataprotection_section4_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section5_title")}
        </h2>
        <p className="p">{t("dataprotection_section5_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section6_title")}
        </h2>
        <p className="p">{t("dataprotection_section6_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section7_title")}
        </h2>
        <p className="p">{t("dataprotection_section7_intro")}</p>
        <ul className="list-disc list-inside p">
          <li>{t("dataprotection_section7_list1")}</li>
          <li>{t("dataprotection_section7_list2")}</li>
          <li>{t("dataprotection_section7_list3")}</li>
          <li>{t("dataprotection_section7_list4")}</li>
          <li>{t("dataprotection_section7_list5")}</li>
          <li>{t("dataprotection_section7_list6")}</li>
        </ul>
        <p className="p">{t("dataprotection_section7_outro")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section8_title")}
        </h2>
        <p className="p">{t("dataprotection_section8_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section9_title")}
        </h2>
        <p className="p">{t("dataprotection_section9_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section10_title")}
        </h2>
        <p className="p">{t("dataprotection_section10_content")}</p>

        <h2 className="h2 text-[--primary-color]">
          {t("dataprotection_section11_title")}
        </h2>
        <p className="p">{t("dataprotection_section11_content")}</p>
      </div>
    </section>
  );
}
