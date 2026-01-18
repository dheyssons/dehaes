import Whyus from "@/components/whyus";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contactform";
import PortfolioPageMotion from "@/components/PortfolioPageMotion";

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
    title: t("header_portfolio"),
    description: t("header_portfolio_description"),
  };
}

export default function Portfolio() {
  return (
    <div className="section_gap">
      <PortfolioPageMotion />

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
