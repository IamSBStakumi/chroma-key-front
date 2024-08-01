import GlobalStyle from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import ReactQueryProvider from "@/lib/QueryClientProvider";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <title>Greenback Chroma key</title>
      </head>
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
