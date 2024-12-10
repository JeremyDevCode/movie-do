/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["tmdb.org", "image.tmdb.org"],
  },
}

module.exports = nextConfig
