import Image from "next/image";
import RenovatieImage from "@/public/images/services/renovation.webp";

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
    title: t("renovatie_metatitle"),
    description: t("header_services_renovatie_description"),
  };
}

export default function Renovatie() {
  const items = [
    { q: "renovatie_faq_question1", a: "renovatie_faq_answer1" },
    { q: "renovatie_faq_question2", a: "renovatie_faq_answer2" },
    { q: "renovatie_faq_question3", a: "renovatie_faq_answer3" },
    { q: "renovatie_faq_question4", a: "renovatie_faq_answer4" },
    { q: "renovatie_faq_question5", a: "renovatie_faq_answer5" },
  ];

  const t = useTranslations("renovatieservice");

  return (
    <div className="section_gap">
      {/* main */}
      <section className="pt-32">
        <div className="py-12">
          <div>
            <h1 className="h1 flex">
              <SplitText text={t("renovatie_title")} />
            </h1>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
              {/* Texto */}
              <div className="order-2 lg:order-none space-y-6">
                <p className="p">{t("renovatie_paragraph1")}</p>
                <p className="p">{t("renovatie_paragraph2")}</p>
                <p className="p">{t("renovatie_paragraph3")}</p>
                <p className="p">{t("renovatie_paragraph4")}</p>

                {/* Call-to-Action */}
                <div className="mt-14">
                  <a className="btn max-w-max uppercase" href="/contact">
                    {t("renovatie_cta")}
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="order-1 lg:order-none rounded-md max-w-lg overflow-hidden shadow-md">
                <Image
                  src={RenovatieImage}
                  alt={t("renovatie_image_alt")}
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
            <h2 className="h2 mb-8">{t("renovatie_faq_title")}</h2>

            {/* Lista de Perguntas e Respostas */}
            <div className="space-y-4">
              {items.map((item, i) => (
                <Decorated key={i} variant="default">
                  <details
                    key={item.q}
                    className="rounded_default border_white overflow-hidden group p-2"
                  >
                    <summary className="list-none cursor-pointer select-none flex items-center justify-between gap-4">
                      <h3 className="h6 !text-[--primary-color] mb-2">
                        {t(item.q)}
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

                    <div className="pb-5">
                      <p className="p">{t(item.a)}</p>
                    </div>
                  </details>
                </Decorated>
              ))}
            </div>
          </div>

          <Image
            alt=""
            src={QuestionMark}
            className="order-1 lg:order-none lg:w-[34rem]"
            aria-hidden="true"
          />
        </div>
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wat kost een dakrenovatie in Mechelen of Sint-Katelijne-Waver?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "De kostprijs van een dakrenovatie hangt af van de oppervlakte, het type dak en de gekozen materialen. Voor een hellend dak rekent u gemiddeld tussen €80 en €150 per m². Een plat dak in EPDM of PVC kost doorgaans €60 tot €120 per m². Wij maken altijd een gratis en vrijblijvende offerte op maat na een inspectie ter plaatse.",
                },
              },
              {
                "@type": "Question",
                name: "Wanneer is een dakrenovatie nodig?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Signalen dat uw dak aan renovatie toe is: vochtplekken op zolderplafonds, gebarsten of verschoven dakpannen, beschadigde dakgoten, een dak ouder dan 25 jaar, of zichtbaar mos en algengroei. Hoe vroeger u ingrijpt, hoe beperkter de schade en de kosten. Twijfelt u? Wij doen een gratis dakcontrole.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe lang duurt een dakrenovatie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Een gedeeltelijke dakrenovatie of herstelling duurt doorgaans 1 tot 3 dagen. Een volledige dakrenovatie van een gemiddelde woning neemt 3 tot 7 werkdagen in beslag, afhankelijk van de complexiteit en de weersomstandigheden.",
                },
              },
              {
                "@type": "Question",
                name: "Welke materialen gebruiken jullie bij dakrenovatie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Voor hellende daken werken wij met keramische dakpannen, leien en betonpannen van A-merken. Voor platte daken bieden wij EPDM (rubber), PVC, TPO en bitumineuze dakbedekking aan.",
                },
              },
              {
                "@type": "Question",
                name: "Bieden jullie garantie op dakrenovatiewerken?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Alle dakrenovatiewerken uitgevoerd door Dakwerken De Haes zijn gedekt door een werkgarantie. Bovendien bieden de meeste materialen die wij gebruiken een fabrieksgarantie van 10 tot 20 jaar.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
