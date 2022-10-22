/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  scope: '/cardsnext/',
  sw: '/sw.js',   
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  async redirects() {
    return [
    {
        source: '/cardsnext',
        destination: '/cardsnext/',
        permanent: true
    },
    ]
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  },
   basePath: '/cardsnext',
})


