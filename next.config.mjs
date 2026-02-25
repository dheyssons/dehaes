import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  env: {
    PUBLICKEY: "TZPoFP8sOe4vVKffU",
    SERVICEID: "service_ys5fnbq",
    TEMPLATEID: "template_dyrghy7",
    CONTENTFUL_SPACE_ID: "zl2wqcohwf3n",
    CONTENTFUL_ACCESS_TOKEN: "qgPRTWV40WIWKOrd1wnDMS7204_C2aXznno9HayGcWU",
    CONTENTFUL_PREVIEW_TOKEN: "akQrqK1I620D06gJOKcMCZxbPJfi1ZJOzcNC65miDmI",
  },
  experimental: {
    optimizeCss: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
