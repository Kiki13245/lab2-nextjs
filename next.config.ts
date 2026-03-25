import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,      // включает 'use cache'
  turbopack: {
    root: __dirname,          // исправляет ошибку с tailwindcss
  },
};

export default nextConfig;