/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/introduction',
          permanent: false,
        },
      ]
    },
    reactStrictMode: true,
    experimental: {
      appDir: true
    }
  }

export default nextConfig;
