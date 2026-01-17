// NEXT
import Image from "next/image";

// IMAGES
import Velux from "@/public/images/brands/velux.webp";
import Resitrix from "@/public/images/brands/resitrix.webp";
import Iko from "@/public/images/brands/iko.webp";
import Bosscover from "@/public/images/brands/bosscover.webp";

// CLIENT PART
import BrandsCarouselMobile from "@/components/BrandsCarouselMobile";
import { useTranslations } from "next-intl";

export default function Brands() {
  const t = useTranslations("brands");
  return (
    <section className="flex flex-col items-center gap-y-6">
      <h3 className="h4 !text-center text-balance">
        {t("brands_title_part1")}{" "}
        <span className="text-[--primary-color]">
          {t("brands_title_part2")}
        </span>
        {t("brands_title_part3")}
      </h3>

      <p className="p !text-center !max-w-screen-lg">
        {t("brands_description")}
        <i>{t("brands_certifications")}</i>enz.
      </p>

      {/* DESKTOP — STATIC */}
      <div className="hidden lg:flex flex-row gap-x-20">
        <Image className="w-36" src={Velux} alt="Velux" />
        <Image className="w-36" src={Iko} alt="Iko" />
        <Image className="w-36" src={Resitrix} alt="Resitrix" />
        <Image
          className="w-36 h-36 object-scale-down"
          src={Bosscover}
          alt="Bosscover"
        />
      </div>

      {/* MOBILE — CLIENT */}
      <BrandsCarouselMobile />
    </section>
  );
}
