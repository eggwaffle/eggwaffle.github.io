/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    loader: 'imgix',
    path: 'https://eggwaffle.github.io',
  },
}

module.exports = nextConfig
