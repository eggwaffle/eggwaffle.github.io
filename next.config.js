/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  //  domains: ['eggwaffle.github.io', 'images.unsplash.com', 'raw.githubusercontent.com','img.shields.io'],
    loader: 'imgix',
    path: '',
  },
}

module.exports = nextConfig
