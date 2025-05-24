import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/boii-website'
}

export default nextConfig