/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["carsalesbase.com", "3dmdb.com", "encrypted-tbn0.gstatic.com"],
  },
  // distDir: 'build'
};

module.exports = nextConfig;
