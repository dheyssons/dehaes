import RequestEvaluationForm from "@/components/RequestEvaluationForm";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import React from "react";

type Benefit = { title: string; text: string; featured?: boolean };
type ServiceKey = "renovation" | "repairs" | "flatRoof" | "insulation";
type Service = { key: ServiceKey; title: string; text: string; tag: string };

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale });

  return {
    title: t("cityPages.putte.meta.title"),
    description: t("cityPages.putte.meta.description"),
  };
}

const ICONS: Record<ServiceKey, React.ReactNode> = {
  renovation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  repairs: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.7 6.3 17.7 9.3 9 18H6v-3l8.7-8.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 3h9v9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  flatRoof: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M6 12h12M8 17h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  insulation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3c4 4 4 6 4 8a4 4 0 1 1-8 0c0-2 0-4 4-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 14.5c.8.9 1.6 1.3 2.5 1.3s1.7-.4 2.5-1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function DakwerkenPuttePage() {
  const t = useTranslations();

  const benefits = t.raw("cityPages.putte.benefitsSection.items") as Benefit[];
  const services = t.raw("cityPages.putte.servicesSection.items") as Service[];

  return (
    <main className="flex flex-col gap-y-24 md:gap-y-32 lg:gap-y-36">
      {/* HERO */}
      <section className="w-full">
        <div className=" mt-16 md:mt-20 overflow-hidden rounded-md border border-black/5 relative">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/citys/putte.webp')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0b3c5d]/90" />

          {/* Left rail */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-white/20" />

          {/* Glows */}
          <div className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 md:h-96 md:w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 md:h-96 md:w-96 rounded-full bg-white/10 blur-3xl" />

          {/* Texture */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_20%_30%,white,transparent_35%),radial-gradient(circle_at_85%_20%,white,transparent_40%),radial-gradient(circle_at_55%_90%,white,transparent_35%)]" />

          <div className="w-[80%] mx-auto relative z-10 py-20 sm:px-10 md:px-14 md:py-14 lg:px-16 lg:py-16 text-white">
            <div className="grid gap-10 lg:grid-cols-12 items-end">
              <div className="lg:col-span-9 flex flex-col gap-y-7 md:gap-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center">
                    <span className="accent !bg-white" />
                    <p className="p uppercase text-white/90 max-w-none">
                      {t("cityPages.putte.hero.eyebrow")}
                    </p>
                  </span>

                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.65rem] sm:text-xs tracking-widest uppercase">
                    {t("cityPages.putte.hero.badge")}
                  </span>
                </div>

                <h1 className="display-large">
                  {t("cityPages.putte.hero.title")}
                </h1>

                <p className="body text-white/80 max-w-2xl">
                  {t("cityPages.putte.hero.description")}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link
                    href={t("cityPages.putte.servicesSection.cta.href")}
                    className="btn !bg-white !text-black hover:!text-white hover:!bg-[--primary-color] shadow-sm shadow-black/20 hover:shadow-sm hover:shadow-black/25 w-full sm:w-auto"
                  >
                    {t("cityPages.putte.hero.cta.quote")}
                  </Link>

                  <a
                    href={`tel:${t("cityPages.putte.hero.cta.phone")}`}
                    className="btn-ghost w-full sm:w-auto"
                  >
                    {t("cityPages.putte.hero.cta.call")}
                  </a>
                </div>

                <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] text-white/65">
                  {t("cityPages.putte.hero.areas")}
                </p>
              </div>

              <div className="hidden lg:block lg:col-span-3" />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="flex flex-col gap-y-10 md:gap-y-12">
        <div className="max-w-3xl">
          <h2 className="h2">{t("cityPages.putte.benefitsSection.title")}</h2>
          <p className="p">{t("cityPages.putte.benefitsSection.intro")}</p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={[
                "rounded-md border border-black/5 p-6 sm:p-7 shadow-sm transition-all duration-300",
                b.featured
                  ? "bg-[--primary-color] text-white hover:shadow-md sm:col-span-2 lg:col-span-1"
                  : "bg-white hover:shadow-md hover:-translate-y-1",
              ].join(" ")}
            >
              <p
                className={[
                  "uppercase tracking-[0.2em] text-xs",
                  b.featured ? "text-white/75" : "text-black/60",
                ].join(" ")}
              >
                {b.title}
              </p>

              <p
                className={[
                  "mt-3",
                  b.featured ? "text-white/85 text-sm leading-[170%]" : "p",
                ].join(" ")}
              >
                {b.text}
              </p>

              {b.featured && (
                <div className="mt-5">
                  <Link
                    href={t("cityPages.putte.servicesSection.cta.href")}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white hover:text-white/90"
                  >
                    {t("cityPages.putte.servicesSection.cta.label")}{" "}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="flex flex-col gap-y-10 md:gap-y-12">
        <div className="flex flex-col gap-y-3">
          <h2 className="h2">{t("cityPages.putte.servicesSection.title")}</h2>
          <p className="p">{t("cityPages.putte.servicesSection.intro")}</p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.key}
              className="rounded-md bg-gray-100 border border-black/5 p-6 sm:p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[--primary-color] shrink-0">
                    {ICONS[s.key]}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="h4">{s.title}</h3>
                    <p className="p">{s.text}</p>

                    <Link
                      href={t("cityPages.putte.servicesSection.cta.href")}
                      className="mt-2 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[--primary-color] hover:opacity-80"
                    >
                      {t("cityPages.putte.servicesSection.cta.label")}{" "}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>

                <span className="self-start sm:self-auto shrink-0 rounded-full bg-white border border-black/5 px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-black/60">
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL */}
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col gap-y-8">
          <h2 className="h2">{t("cityPages.putte.localSection.title")}</h2>

          <p className="body">
            {t("cityPages.putte.localSection.description")}
          </p>

          <ul className="wrapper-benefits">
            {(t.raw("cityPages.putte.localSection.checklist") as string[]).map(
              (item) => (
                <li key={item}>
                  <div>✓</div>
                  <p className="p">{item}</p>
                </li>
              ),
            )}
          </ul>

          <div className="rounded-md bg-white border border-black/5 p-6 sm:p-7 shadow-sm">
            <p className="uppercase tracking-[0.2em] text-xs text-black/60">
              {t("cityPages.putte.localSection.tip.label")}
            </p>
            <p className="p mt-3">
              {t("cityPages.putte.localSection.tip.text")}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-md border border-black/5 bg-gray-100">
            <img
              src="/images/citys/putte.webp"
              alt={t("cityPages.putte.localSection.image.alt")}
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] object-cover img__zoom"
            />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-black/60">
              {t("cityPages.putte.localSection.image.label")}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section
        id={t("cityPages.putte.contactSection.id")}
        className="rounded-md mb-20 sm:p-10 md:p-14 lg:p-16"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <h2 className="h2">
                {t("cityPages.putte.contactSection.title")}
              </h2>
              <p className="body">
                {t("cityPages.putte.contactSection.description")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <RequestEvaluationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
