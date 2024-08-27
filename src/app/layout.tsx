import { Metadata } from "next";
import GlobalStyle from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import ReactQueryProvider from "@/lib/QueryClientProvider";
import Wrapper from "@/components/StyledComponents/WrapperComponents";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Greenback Chroma key",
  description: "グリーンバックの動画と画像を合成します。",
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
