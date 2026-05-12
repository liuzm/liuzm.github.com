/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 静态导出
  output: 'export',

  // GitHub Pages 需要 trailingSlash 以保证路由正确
  trailingSlash: true,

  // 如果你的仓库名不是个人域名 (username.github.io)，需要设置 basePath
  // 例如仓库名为 personal-website，则：
  // basePath: '/personal-website',
  // 如果是 username.github.io 则不需要

  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
