/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "sjbfac0etnzq",
    CONTENTFUL_ACCESS_KEY: "jCx2YXHFqg8CYvMGQWOUjuMST9oDqoAQCyJ3iYIO2mA"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
