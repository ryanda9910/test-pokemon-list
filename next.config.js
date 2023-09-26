/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me", "placehold.co", "raw.githubusercontent.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
