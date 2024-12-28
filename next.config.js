/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: [], // 외부 이미지 도메인이 있다면 추가
  },
};

module.exports = nextConfig;
