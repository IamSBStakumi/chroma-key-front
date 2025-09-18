import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/static/.*|_next/image/.*|favicon.ico|.*\\.png$).*)"],
  missing: [
    { type: "header", key: "next-router-prefetch" },
    { type: "header", key: "purpose", value: "prefetch" },
  ],
};

export function middleware(req: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV !== "production";
  const cspHeader = isDev
    ? `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    frame-ancestors 'none';
  `
    : `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    frame-ancestors 'none';
  `;
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("X-Frame-Options", "SAMEORIGIN"); // クリックジャッキング対策
  requestHeaders.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()"); // 不要な権限の制限 カメラ、マイク、位置情報を無効化
  requestHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin"); // リファラ(参照元URL)の送信ポリシーを制御
  requestHeaders.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload"); // HTTPS強制
  requestHeaders.set("X-XSS-Protection", "1; mode=block"); // XSS対策
  requestHeaders.set("X-Content-Type-Options", "nosniff"); // MIMEタイプのスニッフィング対策 例: スクリプトファイルが画像ファイルとして解釈されるのを防ぐ

  requestHeaders.set("x-nonce", nonce); // nonceをレスポンスヘッダーに追加
  requestHeaders.set("Content-Security-Policy", contentSecurityPolicyHeaderValue); // コンテンツセキュリティポリシーの設定

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);
  response.headers.set("x-nonce", nonce);

  return response;
}
