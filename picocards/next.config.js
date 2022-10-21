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
  scope: '.',
  sw: 'sw.js',
  subdomainPrefix: '/cardsnext/',    
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
})


