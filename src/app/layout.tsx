import { Metadata } from "next";
import { headers } from "next/headers";
import GlobalStyle from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/styled-components/registry";
import ReactQueryProvider from "@/provider/QueryClientProvider";
import Wrapper from "@/components/StyledComponents/WrapperComponents";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body nonce={nonce || ""}>
        <StyledComponentsRegistry nonce={nonce || ""}>
          <ReactQueryProvider>
            <GlobalStyle />
            <Wrapper>
              <Header />
              {children}
              <Footer />
            </Wrapper>
          </ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
