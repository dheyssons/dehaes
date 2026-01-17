import Image from "next/image";
import GroendakenImage from "@/public/images/services/groendaken/image1.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import QuestionMark from "@/public/icons/questionmark.svg";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Groendaken",
  description:
    "Een groendak biedt esthetische meerwaarde, verbetert de isolatie en reguleert de binnentemperatuur, wat zorgt voor lagere energiekosten en meer comfort. Daarnaast absorbeert het regenwater, zuivert het de lucht en bevordert het de biodiversiteit. Met een professionele plaatsing kiest u voor een duurzame en energiezuinige oplossing.",
};

export default function Groendaken() {
  const t = useTranslations("groendakenservice");
  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div>
          {/* Título */}
          <h1 className="h1">{t("groendaken_title")}</h1>

          {/* Conteúdo com Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
            {/* Texto */}
            <div className="order-2 lg:order-none space-y-10">
              <p className="p">{t("groendaken_paragraph1")}</p>
              <p className="p">{t("groendaken_paragraph2")}</p>
              <p className="p">{t("groendaken_paragraph3")}</p>
              {/* Call-to-Action */}
              <div className="mt-8">
                <a className="btn max-w-max uppercase" href="/contact">
                  {t("groendaken_cta")}
                </a>
              </div>
            </div>

            {/* Imagem */}
            <div className="order-1 lg:order-none rounded-md max-w-lg max-h-96 overflow-hidden shadow-md">
              <Image
                src={GroendakenImage}
                alt="Groendaken"
                className=""
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
          <div className="order-2 lg:order-none">
            <h2 className="h2 mb-8">{t("groendaken_faq_title")}</h2>
            <div className="flex flex-col gap-y-10">
              {/* Pergunta 1 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("groendaken_faq_question1")}
                </h3>
                <p className="p">{t("groendaken_faq_answer1")}</p>
              </div>
              {/* Pergunta 2 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("groendaken_faq_question2")}
                </h3>
                <p className="p">{t("groendaken_faq_answer2")}</p>
              </div>
              {/* Pergunta 3 */}
              <div>
                <h3 className="h4 !text-[--primary-color]">
                  {t("groendaken_faq_question3")}
                </h3>
                <p className="p">{t("groendaken_faq_answer3")}</p>
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
