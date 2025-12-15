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
    root: "/home/dheysson/dehaes",
  },
};

export default nextConfig;
