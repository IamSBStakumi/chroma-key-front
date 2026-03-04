import { Metadata } from "next";
import { headers } from "next/headers";
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono } from "next/font/google";
import ReactQueryProvider from "@/provider/QueryClientProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeonBlobs from "@/components/ui/NeonBlobs";
import GridPattern from "@/components/ui/GridPattern";
import "@/styles/globals.css";

// Geist フォント設定
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Compota - グリーンバック動画合成サイト",
  description:
    "すべて無料・登録不要・インストール不要で使える動画合成サイトです。グリーンバックの動画と背景画像を用意するだけで誰でも簡単に動画の合成を行うことができます。",
  keywords:
    "グリーンバック, クロマキー, 動画, 合成, 動画編集, 無料, 画像合成, 作成, フリー, フリーソフト, サイト, アプリ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce"); // middlewareで設定したnonceを取得

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        nonce={nonce || ""}
      >
        <ReactQueryProvider>
          {/* 固定背景レイヤー：グリッド＋Neonブロブ */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <GridPattern />
            <NeonBlobs />
          </div>
          {/* メインコンテンツ */}
          <div className="min-h-screen bg-black relative">
            <Header />
            {children}
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
