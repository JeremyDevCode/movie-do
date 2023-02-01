/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tmdb.org", "image.tmdb.org"],
  },
}

module.exports = nextConfig
