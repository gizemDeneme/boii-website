/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/boii-website',
    assetPrefix: '/boii-website/',
  } : {})
};

export default nextConfig;