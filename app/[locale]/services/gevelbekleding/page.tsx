import Image from "next/image";
import GevelbekledingImage from "@/public/images/services/gevelbekleding/image1.webp";

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
    title: t("header_services_gevelbekleding"),
    description: t("header_services_gevelbekleding_description"),
  };
}

export default function Gevelbekleding() {
  const t = useTranslations("gevelbekledingservice");
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">{t("gevelbekleding_title")}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-6">
                <p className="p">{t("gevelbekleding_paragraph1")}</p>
                <p className="p">{t("gevelbekleding_paragraph2")}</p>
                <p className="p">{t("gevelbekleding_paragraph3")}</p>
                <p className="p">{t("gevelbekleding_paragraph4")}</p>
                {/* Call-to-Action */}
                <div className="mt-14">
                  <a className="btn max-w-max uppercase" href="#contactus">
                    {t("gevelbekleding_cta")}
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="order-1 lg:order-none rounded-md max-w-lg overflow-hidden shadow-md">
                <Image
                  src={GevelbekledingImage}
                  alt="Daktimmers"
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
          <div className="order-2 lg:order-none">
            {/* Título */}
            <h2 className="h2 mb-8">{t("gevelbekleding_faq_title")}</h2>

            {/* Lista de Perguntas e Respostas */}
            <div className="flex flex-col gap-y-10">
              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-2">
                  {t("gevelbekleding_faq_question1")}
                </h3>
                <p className="p">{t("gevelbekleding_faq_answer1")}</p>
              </div>

              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-2">
                  {t("gevelbekleding_faq_question2")}
                </h3>
                <p className="p">{t("gevelbekleding_faq_answer2")}</p>
              </div>

              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-2">
                  {t("gevelbekleding_faq_question3")}
                </h3>
                <p className="p">{t("gevelbekleding_faq_answer3")}</p>
              </div>

              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-2">
                  {t("gevelbekleding_faq_question4")}
                </h3>
                <p className="p">{t("gevelbekleding_faq_answer4")}</p>
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
