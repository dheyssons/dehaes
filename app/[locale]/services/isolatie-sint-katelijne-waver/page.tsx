import Image from "next/image";
import IsolatieImage from "@/public/images/services/insulation.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";
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
    namespace: "header",
  });

  return {
    title: t("header_services_isolatie"),
    description: t("header_services_isolatie_description"),
  };
}

export default function Isolatie() {
  const t = useTranslations("isolatieservice");
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">{t("isolatie_title")}</h1>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-6">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-6">
                <p className="p">{t("isolatie_paragraph1")}</p>
                <p className="p">{t("isolatie_paragraph2")}</p>
                <p className="p">{t("isolatie_paragraph3")}</p>
                {/* Call-to-Action */}
                <div className="mt-14">
                  <a className="btn max-w-max uppercase" href="/contact">
                    {t("isolatie_cta")}
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="order-1 lg:order-none rounded-md max-w-lg overflow-hidden shadow-md">
                <Image
                  src={IsolatieImage}
                  alt="Isolatie"
                  className=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
          {/* Título */}
          <div className="order-2 lg:order-none">
            <h2 className="h2 mb-8">{t("isolatie_faq_title")}</h2>
            {/* Lista de Perguntas e Respostas */}
            <div className="space-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("isolatie_faq_question1")}
                </h3>
                <p className="p">{t("isolatie_faq_answer1")}</p>
              </div>

              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("isolatie_faq_question2")}
                </h3>
                <p className="p">{t("isolatie_faq_answer2")}</p>
              </div>

              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("isolatie_faq_question3")}
                </h3>
                <p className="p">{t("isolatie_faq_answer3")}</p>
              </div>

              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("isolatie_faq_question4")}
                </h3>
                <p className="p">{t("isolatie_faq_answer4")}</p>
              </div>

              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("isolatie_faq_question5")}
                </h3>
                <p className="p">{t("isolatie_faq_answer5")}</p>
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
