"use client";

import { ImWhatsapp, ImMail2, ImFacebook } from "react-icons/im";

import config from "@/utils/config";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer>
      <div className="container w-[80%] mx-auto flex flex-col gap-y-10 py-10">
        <div className="flex flex-row items-center gap-2 justify-between">
          {/* icon & text  */}
          <div className="flex flex-col items-center md:items-start gap-y-2">
            <img src={config.companyIconPath} className="w-36" alt="" />
            <p className={`p w-[8rem] md:w-full text-center`}>
              {config.companySlogan}
            </p>
          </div>

          {/* social media  */}
          <div className="flex flex-col md:flex-col justify-between">
            <div className=" flex flex-col gap-y-6">
              <nav>
                <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6">
                  <li className="flex flex-row items-center">
                    <a
                      className="flex social_link btn"
                      href={`mailto:${config.emailAddress}`}
                      target="_blank"
                    >
                      <ImMail2 className="mr-2" />
                      {t("footer_email")}
                    </a>
                  </li>
                  <li className="flex flex-row items-center">
                    <a
                      className="social_link btn"
                      href={config.facebookProfile}
                      target="_blank"
                    >
                      <ImFacebook className="mr-2" />
                      {t("footer_facebook")}
                    </a>
                  </li>
                  <li className="flex flex-row items-center">
                    <a
                      className="social_link btn"
                      href={`https://api.whatsapp.com/send?phone=${config.whatsappNumber}`}
                      target="_blank"
                    >
                      <ImWhatsapp className="mr-2" />
                      {t("footer_whatsapp")}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex gap-10 md:gap-24 lg:gap-36">
          {/* menu  */}
          <div className="flex flex-col items-start gap-y-3">
            <p className="body after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[--primary-color] after:block">
              {t("footer_menu_title")}
            </p>
            <a href="/" className="p hover:text-[#000000a1] transition-all">
              {t("footer_menu_home")}
            </a>
            <a
              href="/about"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_menu_about")}
            </a>
            <a
              href="/#services"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_menu_services")}
            </a>
            <a
              href="/portfolio"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_menu_portfolio")}
            </a>
            <a
              href="/contact"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_menu_contact")}
            </a>
          </div>
          {/* services  */}
          <div className="flex flex-col items-start gap-y-3">
            <p
              className={`p !opacity-100 !text-[#000000] font-[600] leading-[1] after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[--primary-color] after:block`}
            >
              {t("footer_services_title")}
            </p>
            <a
              href="/services/groendak-sint-katelijne-waver"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              {t("footer_services_groendaken")}
            </a>
            <a
              href="/services/daktimmer-sint-katelijne-waver"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_services_daktimmers")}
            </a>
            <a
              href="/services/gevelbekleding-sint-katelijne-waver"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_services_gevelbekleding")}
            </a>
            <a
              href="/services/platdak-sint-katelijne-waver"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_services_plattedaken")}
            </a>
            <a
              href="/services/dakrenovatie-sint-katelijne-waver"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              {t("footer_services_renovatie")}
            </a>
            <a
              href="/services/isolatie-sint-katelijne-waver"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              {t("footer_services_isolatie")}
            </a>
          </div>

          {/* policy  */}
          <div className="flex flex-col items-start gap-y-3">
            <p
              className={`p !opacity-100 !text-[#000000] font-[600] leading-[1] after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[--primary-color] after:block`}
            >
              {t("footer_policy_title")}
            </p>
            <a
              href="/dataprotection"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              {t("footer_policy_dataprotection")}
            </a>
            <a
              href="/generalconditions"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_policy_conditions")}
            </a>
            <a
              href="/legalnotices"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_policy_legal")}
            </a>
            <a
              href="/privacypolicy"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_policy_privacy")}
            </a>
          </div>
          {/* areas  */}
          <div className="flex flex-col items-start gap-y-3">
            <a
              href="/dakwerken-antwerpen"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              {t("footer_dakwerken_antwerpen")}
            </a>
            <a
              href="/dakwerken-brussel"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_dakwerken_brussel")}
            </a>
            <a
              href="/dakwerken-duffel"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_dakwerken_duffel")}
            </a>
            <a
              href="/dakwerken-lier"
              className="p hover:text-[#000000a1] transition-all"
            >
              {t("footer_dakwerken_lier")}
            </a>
            <a
              href="/dakwerken-mechelen"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              {t("footer_dakwerken_mechelen")}
            </a>
            <a
              href="/dakwerken-putte"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              {t("footer_dakwerken_putte")}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <p className={`p self-center text-center mx-[1rem]`}>
            {t("footer_copyright")}
            {config.companyName}
          </p>
        </div>
      </div>

      <div className="bg-[#151515]">
        <p className="w-[80%] mx-auto body !text-center text-white py-4">
          {t("footer_developed")}
          <a
            className="text-white hover:opacity-70 underline underline-offset-2 mx-1"
            href="https://doon.digital/fr"
            target="_blank"
          >
            Doon Digital
          </a>
          <a className="opacity-0" href="https://seojuice.com">
            SEOJuice
          </a>
        </p>
      </div>
    </footer>
  );
}
