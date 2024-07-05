import GlobalStyle from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
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
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Wrapper>
            <Header />
            {children}
            <Footer />
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
