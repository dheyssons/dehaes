import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { Entry } from "contentful";
import { getAllArticles, type BlogArticleSkeleton } from "@/lib/contentful";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  const articles = await getAllArticles(locale);

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="section border-b border-gray-100 pt-36 pb-12">
        <div>
          <p className="p mb-3">{t("breadcrumb")}</p>
          <h1 className="h2">{t("title")}</h1>
          <p className="mt-2 p">{t("subtitle")}</p>
        </div>
      </section>

      {/* Articles */}
      <section className="section py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article: Entry<BlogArticleSkeleton>) => {
            const fields = article.fields as unknown as {
              slug: string;
              title: string;
              excerpt: string;
              date: string;
              image?: { fields: { file: { url: string }; title: string } };
            };
            const { slug, title, excerpt, date, image } = fields;
            const imageUrl = image?.fields?.file?.url;
            const formattedDate = new Date(date as string).toLocaleDateString(
              locale,
              { day: "numeric", month: "long", year: "numeric" },
            );

            return (
              <article
                key={slug as string}
                className="border border-gray-100 rounded-lg flex flex-col hover:border-gray-300 transition-colors overflow-hidden"
              >
                {/* Image */}
                <div className="w-full h-48 bg-gray-100 relative overflow-hidden">
                  {imageUrl && (
                    <Image
                      src={`https:${imageUrl}`}
                      alt={title as string}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <time className="text-xs text-gray-400 uppercase tracking-wide">
                    {formattedDate}
                  </time>
                  <h2 className="text-base font-bold text-gray-900 mt-2 mb-3 leading-snug">
                    {title as string}
                  </h2>
                  <p className="text-sm text-gray-500 flex-1 leading-relaxed">
                    {excerpt as string}
                  </p>
                  <Link
                    href={`/blog/${slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[--primary-color] hover:underline"
                  >
                    {t("readMore")} →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-gray-100 py-12">
        <div className="bg-gray-50 rounded-xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 border border-gray-200">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              {t("cta.label")}
            </p>
            <p className="text-xl font-bold text-gray-900 leading-snug">
              {t("cta.text")}
            </p>
            <p className="mt-2 text-sm text-gray-500">{t("cta.sub")}</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[--primary-color] text-white font-semibold px-8 py-4 rounded-lg transition-opacity hover:opacity-90 text-center"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
