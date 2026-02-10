import Image from "next/image";
import DaktimmerImage from "@/public/images/services/daktimmer.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";
import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { SplitText } from "@/components/scripts/SplitWords";
import { Decorated } from "@/components/ui/decoration";

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
    title: t("header_services_daktimmer"),
    description: t("header_services_daktimmer_description"),
  };
}

export default function Daktimmer() {
  const t = useTranslations("daktimmerservice");

  return (
    <div className="flex flex-col gap-y-40">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">
              <SplitText text={t("daktimmer_title")} />
            </h1>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-10">
                <p className="p !text-start lg:text-center">
                  {t("daktimmer_paragraph1")}
                </p>
                <p className="p !text-start lg:text-center">
                  {t("daktimmer_paragraph2")}
                </p>
                <p className="p !text-start lg:text-center">
                  {t("daktimmer_paragraph3")}
                </p>
                <p className="p !text-start lg:text-center">
                  {t("daktimmer_paragraph4")}
                </p>
                {/* Call-to-Action */}
                <div className="mt-10">
                  <a className="btn max-w-max uppercase" href="/contact">
                    {t("daktimmer_cta")}
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="order-1 lg:order-none rounded-md max-w-lg max-h-96 overflow-hidden shadow-md">
                <Image
                  src={DaktimmerImage}
                  alt="Daktimmer"
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
            <h2 className="h2 mb-8">{t("daktimmer_faq_title")}</h2>

            <div className="space-y-4">
              <Decorated variant="default">
                {/* Pergunta 1 */}
                <details className="rounded_default border_white overflow-hidden group">
                  <summary className="list-none cursor-pointer select-none p-5 flex items-center justify-between gap-4">
                    <h3 className="h6 !text-[--primary-color]">
                      {t("daktimmer_faq_question1")}
                    </h3>

                    <span
                      className="shrink-0 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5">
                    <p className="p !text-start md:text-center">
                      {t("daktimmer_faq_answer1")}
                    </p>
                  </div>
                </details>
              </Decorated>

              <Decorated variant="default">
                {/* Pergunta 2 */}
                <details className="rounded_default border_white overflow-hidden group">
                  <summary className="list-none cursor-pointer select-none p-5 flex items-center justify-between gap-4">
                    <h3 className="h6 !text-[--primary-color]">
                      {t("daktimmer_faq_question2")}
                    </h3>

                    <span className="shrink-0 transition-transform group-open:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5">
                    <p className="p !text-start md:text-center">
                      {t("daktimmer_faq_answer2")}
                    </p>
                  </div>
                </details>
              </Decorated>

              <Decorated variant="default">
                {/* Pergunta 3 */}
                <details className="rounded_default border_white overflow-hidden group">
                  <summary className="list-none cursor-pointer select-none p-5 flex items-center justify-between gap-4">
                    <h3 className="h6 !text-[--primary-color]">
                      {t("daktimmer_faq_question3")}
                    </h3>

                    <span className="shrink-0 transition-transform group-open:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5">
                    <p className="p !text-start md:text-center">
                      {t("daktimmer_faq_answer3")}
                    </p>
                  </div>
                </details>
              </Decorated>

              <Decorated variant="default">
                {/* Pergunta 4 */}
                <details className="rounded_default border_white overflow-hidden group">
                  <summary className="list-none cursor-pointer select-none p-5 flex items-center justify-between gap-4">
                    <h3 className="h6 !text-[--primary-color]">
                      {t("daktimmer_faq_question4")}
                    </h3>

                    <span className="shrink-0 transition-transform group-open:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5">
                    <p className="p !text-start md:text-center">
                      {t("daktimmer_faq_answer4")}
                    </p>
                  </div>
                </details>
              </Decorated>

              <Decorated variant="default">
                {/* Pergunta 5 */}
                <details className="rounded_default border_white overflow-hidden group">
                  <summary className="list-none cursor-pointer select-none p-5 flex items-center justify-between gap-4">
                    <h3 className="h6 !text-[--primary-color]">
                      {t("daktimmer_faq_question5")}
                    </h3>

                    <span className="shrink-0 transition-transform group-open:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5">
                    <p className="p !text-start md:text-center">
                      {t("daktimmer_faq_answer5")}
                    </p>
                  </div>
                </details>
              </Decorated>
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

      {/* <Testimonials /> */}

      <ContactForm />
    </div>
  );
}
