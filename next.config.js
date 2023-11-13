/** @type {import('next').NextConfig} */
// 서버 배포인지 로컬인지 확인

const nextConfig = {
  // React의 strict mode를 활성화하지 않음
  reactStrictMode: false,

  // Etag 비활성화
  generateEtags: false,

  // poweredByHeader 비활성화
  poweredByHeader: false,

  // 빌드 중에 ESLint를 무시함
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
