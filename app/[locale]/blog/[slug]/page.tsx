import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { getArticleBySlug, getAllSlugs } from "@/lib/contentful";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  const locales = ["nl", "fr"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getArticleBySlug(slug, locale);
  if (!article) return {};
  return {
    title: article.fields.metaTitle as string,
    description: article.fields.metaDescription as string,
  };
}

// -------------------------------------------------------
// Rich Text render options
// Maps Contentful rich text nodes to styled React elements
// -------------------------------------------------------
const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-semibold text-gray-900">{text}</strong>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
      <p className="mb-5 body opacity-75 !max-w-[125ch]">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_: unknown, children: React.ReactNode) => (
      <h2 className="h4 !capitalize mb-3 mt-8">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: unknown, children: React.ReactNode) => (
      <h3 className="h4 mt-6 mb-2">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_: unknown, children: React.ReactNode) => (
      <ul className="list-disc list-inside mb-5 text-gray-600 space-y-1">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_: unknown, children: React.ReactNode) => (
      <ol className="list-decimal list-inside mb-5 text-gray-600 space-y-1">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: unknown, children: React.ReactNode) => (
      <li>{children}</li>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <Link
        href={node.data.uri}
        className="text-[--primary-color] hover:underline font-semibold"
      >
        {children}
      </Link>
    ),
  },
};

// -------------------------------------------------------
// Page
// -------------------------------------------------------
export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const article = await getArticleBySlug(slug, locale);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "Blog" });
  const { title, content, date } = article.fields;

  const formattedDate = new Date(date as string).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="section border-b border-gray-100 pt-36 pb-12">
        <div>
          <Link href="/blog" className="body mb-6 inline-block">
            ← {t("backToBlog")}
          </Link>
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            {formattedDate}
          </p>
          <h1 className="h2 max-w-4xl">{title as string}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section py-14">
        <div>
          {/* Contentful Rich Text → React */}
          <div>{documentToReactComponents(content as any, renderOptions)}</div>

          {/* CTA */}
          <div className="mt-14 bg-gray-50 rounded-xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 border border-gray-200">
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
        </div>
      </section>
    </main>
  );
}
