/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: 'build',  // 指定构建输出目录
  output: 'export',  // 生成静态文件
}

module.exports = nextConfig