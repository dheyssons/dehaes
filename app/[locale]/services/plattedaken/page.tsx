import Image from "next/image";
import PlattedakenImage from "@/public/images/services/epdm.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";
import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "header",
  });

  return {
    title: t("header_services_plattedaken"),
    description: t("header_services_plattedaken_description"),
  };
}

export default function Plattedaken() {
  const t = useTranslations("plattedakenservice");
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">{t("plattedaken_title")}</h1>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-6">
                <p className="p">{t("plattedaken_paragraph1")}</p>
                <p className="p">{t("plattedaken_paragraph2")}</p>
                <p className="p">{t("plattedaken_paragraph3")}</p>
                <p className="p">{t("plattedaken_paragraph4")}</p>
                {/* Call-to-Action */}
                <div className="mt-14">
                  <a className="btn max-w-max uppercase" href="/contact">
                    {t("plattedaken_cta")}
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="order-1 lg:order-none rounded-md max-w-lg overflow-hidden shadow-md">
                <Image
                  src={PlattedakenImage}
                  alt="Platte daken"
                  className=""
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
          <div className="order-2 lg:order-none">
            {/* Título */}
            <h2 className="h2 mb-8">{t("plattedaken_faq_title")}</h2>

            {/* Lista de Perguntas e Respostas */}
            <div className="space-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("plattedaken_faq_question1")}
                </h3>
                <p className="p">{t("plattedaken_faq_answer1")}</p>
              </div>

              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("plattedaken_faq_question2")}
                </h3>
                <p className="p">{t("plattedaken_faq_answer2")}</p>
              </div>

              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("plattedaken_faq_question3")}
                </h3>
                <p className="p">{t("plattedaken_faq_answer3")}</p>
              </div>

              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("plattedaken_faq_question4")}
                </h3>
                <p className="p">{t("plattedaken_faq_answer4")}</p>
              </div>

              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("plattedaken_faq_question5")}
                </h3>
                <p className="p">{t("plattedaken_faq_answer5")}</p>
              </div>
            </div>
          </div>
          <Image
            alt=""
            src={QuestionMark}
            className="order-1 lg:order-none lg:w-[34rem]"
          />
        </div>
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
