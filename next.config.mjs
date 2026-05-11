/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sliderr',
  assetPrefix: '/sliderr/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
