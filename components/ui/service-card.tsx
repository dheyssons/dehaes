import { useTranslations } from "next-intl";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

type ServiceCardProps = {
  slug: string;
  image: StaticImageData;
  city: string;
};

export function ServiceCard({ slug, image, city }: ServiceCardProps) {
  const t = useTranslations("services");

  return (
    <a
      href={`/services/${slug}-${city}`}
      className="group lg:overflow-hidden lg:h-[40rem] relative cursor-pointer transition-all duration-500"
    >
      <div className="relative">
        <div className="absolute bottom-0 ease-in-out w-full h-0 group-hover:h-full transition-all duration-500 bg-white opacity-0 group-hover:opacity-40"></div>

        <Image
          src={image}
          className="w-full h-full transition-transform duration-500"
          alt={t(`${slug}.alt`)}
        />
      </div>

      <div className="lg:absolute mt-4 lg:mt-14 bottom-0 right-0 bg-white lg:p-10 h-[70%] w-[90%] lg:w-[40%] group-hover:lg:bg-[--primary-color] duration-500">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col h-full gap-y-3 justify-evenly">
            <h2 className="h3 group-hover:lg:text-white duration-500">
              {t(`${slug}.title`)}
            </h2>

            <p className="p line-clamp-3 group-hover:lg:text-white duration-500">
              {t(`${slug}.description`)}
            </p>

            <div className="flex flex-row gap-x-2 items-center">
              <div className="bg-[--primary-color] p-2 group-hover:lg:bg-white duration-500">
                <LuArrowUpRight className="text-white group-hover:lg:text-black duration-500" />
              </div>

              <span className="group-hover:lg:text-white duration-500 uppercase">
                {t("cta")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
