/** @type {import('next').NextConfig} */

const nextConfig = {
  cleanDistDir: true,
  compiler: { styledComponents: true },
  i18n: { defaultLocale: "en", locales: ["en"] },
  output: "standalone",
  reactStrictMode: true,
  rewrites: async () => [{ source: "/hub/:path*", destination: "https://hub.docker.com/:path*" }],
};

module.exports = nextConfig;
