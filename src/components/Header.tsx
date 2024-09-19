"use client";

import { useRouter, usePathname } from "next/navigation";
import { HeaderComponent, Ul, Li } from "./StyledComponents/HeaderComponent";
import { Heading1 } from "./StyledComponents/StyledHeading";
import { LogoWrapper } from "./StyledComponents/WrapperComponents";
import Image from "next/image";
import logo from "./images/logo.png";

const homePath = "/";
const reportPath = "/user_report_form";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const toHome = () => {
    if (pathname !== homePath) {
      router.push(homePath);
    }
  };

  const toReport = () => {
    if (pathname !== reportPath) {
      router.push(reportPath);
    }
  };

  return (
    <>
      <HeaderComponent>
        <LogoWrapper>
          <Image
            src={logo}
            alt="compota logo"
            width={260}
            height={200}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </LogoWrapper>
        <Heading1>グリーンバック動画合成</Heading1>
      </HeaderComponent>
      <Ul>
        <Li $isActive={pathname !== homePath}>
          <button role="tab" onClick={toHome}>
            動画合成
          </button>
        </Li>
        <Li $isActive={pathname !== reportPath}>
          <button role="tab" onClick={toReport}>
            不具合の報告
          </button>
        </Li>
      </Ul>
    </>
  );
};

export default Header;
