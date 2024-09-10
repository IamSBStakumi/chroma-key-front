"use client";

import { useRouter, usePathname } from "next/navigation";
import { HeaderComponent, Ul, Li } from "./StyledComponents/HeaderComponent";
import { Heading1 } from "./StyledComponents/StyledHeading";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const toHome = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  };

  const toReport = () => {
    if (pathname === "/") {
      router.push("/user_report_form");
    }
  };

  return (
    <>
      <HeaderComponent>
        <Heading1>グリーンバック動画合成</Heading1>
      </HeaderComponent>
      <Ul>
        <Li $isActive={pathname !== "/"}>
          <button role="tab" onClick={toHome}>
            動画合成
          </button>
        </Li>
        <Li $isActive={pathname === "/"}>
          <button role="tab" onClick={toReport}>
            不具合の報告
          </button>
        </Li>
      </Ul>
    </>
  );
};

export default Header;
