/** @type {import('next').NextConfig} */
const nextConfig = {
  // image.tmdb.org
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig
