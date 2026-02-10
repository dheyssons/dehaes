import { useTranslations } from "next-intl";
import Brands from "./marquee";
import { SplitText } from "./scripts/SplitWords";

export default function Certifications() {
  const t = useTranslations("brands");
  return (
    <section className="flex flex-col items-start gap-y-4">
      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-700">
        <span className="h-1.5 w-1.5 rounded-full bg-[--primary-color]" />
        {t("brands_badge")}
      </div>
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
