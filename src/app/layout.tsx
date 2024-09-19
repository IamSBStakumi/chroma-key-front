import { Metadata } from "next";
import GlobalStyle from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import ReactQueryProvider from "@/lib/QueryClientProvider";
import Wrapper from "@/components/StyledComponents/WrapperComponents";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Compota - 動画編集サイト",
  description:
    "すべて無料・登録不要・インストール不要で使える動画合成サイトです。グリーンバックの動画と背景画像を用意するだけで誰でも簡単に動画の合成を行うことができます。",
  keywords: "グリーンバック, 動画, 合成, 動画編集, 無料, 画像合成, 作成, フリー, フリーソフト, サイト, アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>
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
