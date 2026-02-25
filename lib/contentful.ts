import { createClient, EntrySkeletonType } from "contentful";
import type { Document } from "@contentful/rich-text-types";

// -------------------------------------------------------
// Client
// -------------------------------------------------------
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Preview client (for draft content)
export const contentfulPreviewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
  host: "preview.contentful.com",
});

// -------------------------------------------------------
// Types
// -------------------------------------------------------
export interface BlogArticleSkeleton extends EntrySkeletonType {
  contentTypeId: "blogArticle";
  fields: {
    slug: string; // not localized — same across all locales
    title: string; // localized
    excerpt: string; // localized
    metaTitle: string; // localized
    metaDescription: string; // localized
    content: Document; // localized (Contentful Rich Text)
    date: string; // not localized (ISO date)
    image?: {
      // not localized
      fields: {
        file: { url: string };
        title: string;
      };
    };
  };
}

// -------------------------------------------------------
// Locale mapping (next-intl → Contentful)
// -------------------------------------------------------
const localeMap: Record<string, string> = {
  nl: "nl",
  fr: "fr",
  en: "en-US", // adjust if your Contentful default is "en" instead of "en-US"
};

export function toContentfulLocale(locale: string): string {
  return localeMap[locale] ?? locale;
}

// -------------------------------------------------------
// Queries
// -------------------------------------------------------

/** Get all blog articles (for listing page) */
export async function getAllArticles(locale: string) {
  const entries = await contentfulClient.getEntries<BlogArticleSkeleton>({
    content_type: "blogArticle",
    locale: toContentfulLocale(locale),
    order: ["-fields.date" as any],
    select: [
      "fields.slug",
      "fields.title",
      "fields.excerpt",
      "fields.date",
      "fields.image",
    ],
  });

  return entries.items;
}

/** Get a single article by slug */
export async function getArticleBySlug(slug: string, locale: string) {
  const query = {
    content_type: "blogArticle",
    locale: toContentfulLocale(locale),
    "fields.slug": slug,
    limit: 1,
  };

  const entries = await contentfulClient.getEntries<BlogArticleSkeleton>(
    query as any,
  );

  return entries.items[0] ?? null;
}

/** Get all slugs (for generateStaticParams) */
export async function getAllSlugs() {
  const entries = await contentfulClient.getEntries<BlogArticleSkeleton>({
    content_type: "blogArticle",
    select: ["fields.slug"],
    // no locale needed — slug is the same across all locale
  });

  return entries.items.map((item) => item.fields.slug as string);
}
