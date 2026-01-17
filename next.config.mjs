import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLICKEY: "TZPoFP8sOe4vVKffU",
    SERVICEID: "service_ys5fnbq",
    TEMPLATEID: "template_dyrghy7",
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
