/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: "standalone",
  headers: async()=>{
    const isDev = process.env.NODE_ENV === "development";

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // クリックジャッキング対策
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()", // カメラ、マイク、位置情報へのアクセスを制限
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // リファラー(参照元URL)の送信ポリシーを制限
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload", // HTTPSの強制
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // XSS対策
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // MIMEタイプの偽装を防止
          },
          {
            key: "Content-Security-Policy",
            value: `
                  default-src 'self';
                  connect-src 'self';
                  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""};
                  media-src 'self' blob:;
                  frame-src 'self';
                  style-src 'self' 'unsafe-inline';
                  img-src 'self' blob: data:;
                  font-src 'self';
                  object-src 'none';
                  frame-ancestors 'none';
                `
              .replace(/\s{2,}/g, " ")
              .trim(), // コンテンツセキュリティポリシーの設定
          },
        ],
      },
    ];
  },
};

export default nextConfig;
