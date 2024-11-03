/* eslint-disable import/no-unresolved */
import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateEtags: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.vipmuaban.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

// Wrap nextConfig with withNextra
export default withNextra(nextConfig);
