import Image from "next/image";
import DaktimmerImage from "@/public/images/services/daktimmer.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Daktimmerwerk",
  description:
    "Vakkundig daktimmerwerk op maat voor nieuwbouw en renovatie. Met vier generaties ervaring realiseren wij sterke, duurzame dakconstructies die stabiliteit, veiligheid en een perfecte afwerking garanderen.",
};

export default function Daktimmer() {
  const t = useTranslations("daktimmerservice");

  return (
    <div className="flex flex-col gap-y-40">
      {/* main */}
      <section className="pt-32">
        <div>
          <div>
            {/* Título */}
            <h1 className="h1">{t("daktimmer_title")}</h1>

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
            <div className="flex flex-col gap-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  {t("daktimmer_faq_question1")}
                </h3>
                <p className="p !text-start md:text-center">
                  {t("daktimmer_faq_answer1")}
                </p>
              </div>
              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  {t("daktimmer_faq_question2")}
                </h3>
                <p className="p !text-start md:text-center">
                  {t("daktimmer_faq_answer2")}
                </p>
              </div>
              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  {t("daktimmer_faq_question3")}
                </h3>
                <p className="p !text-start md:text-center">
                  {t("daktimmer_faq_answer3")}
                </p>
              </div>
              {/* Pergunta 4 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  {t("daktimmer_faq_question4")}
                </h3>
                <p className="p !text-start md:text-center">
                  {t("daktimmer_faq_answer4")}
                </p>
              </div>
              {/* Pergunta 5 */}
              <div>
                <h3 className="h4 !text-[--primary-color] mb-1">
                  {t("daktimmer_faq_question5")}
                </h3>
                <p className="p !text-start md:text-center">
                  {t("daktimmer_faq_answer5")}
                </p>
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
