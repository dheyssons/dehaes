import { useTranslations } from "next-intl";
import { MdStars } from "react-icons/md";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  return (
    <section className="flex flex-col gap-y-10 items-center">
      <div className="flex flex-col lg:flex-row items-start lg:items-start lg:justify-between w-full pt-10">
        <div className="flex flex-row items-center gap-x-2 p-2 border border-[--primary-color] rounded-full">
          <MdStars className="size-6 text-[--primary-color]" />
          <h2 className="body !text-center lg:text-start">{t("title")}</h2>
        </div>
      </div>

      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div
        className="elfsight-app-1f05ba1b-5e65-45fb-87a2-46f2dc818438"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
}
