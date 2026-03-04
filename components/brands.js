import { useTranslations } from "next-intl";
import Brands from "./marquee";
import { SplitText } from "./scripts/SplitWords";

export default function Certifications() {
  const t = useTranslations("brands");
  return (
    <section className="flex flex-col items-start gap-y-4">
      <h3 className="h4">
        {t("brands_title_part1")}{" "}
        <span className="text-[--primary-color]">
          {t("brands_title_part2")}
        </span>
        {t("brands_title_part3")}
      </h3>

      <p className="p !max-w-screen-lg">
        {t("brands_description")}
        <i>{t("brands_certifications")}</i>
      </p>
    </section>
  );
}
