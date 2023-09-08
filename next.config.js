/** @type {import('next').NextConfig} */

const nextConfig = {
  cleanDistDir: true,
  compiler: { styledComponents: true },
  i18n: { defaultLocale: "en", locales: ["en"] },
  output: "standalone",
  reactStrictMode: true,
};

module.exports = nextConfig;
