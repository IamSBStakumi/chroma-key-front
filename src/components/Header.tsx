"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeaderComponent, Ul, Li } from "./StyledComponents/HeaderComponent";
import { Heading1 } from "./StyledComponents/StyledHeading";

const Header = () => {
  const [isHome, setHome] = useState<boolean>(false);
  const router = useRouter();

  const toHome = () => {
    if (!isHome) {
      setHome(true);
      router.push("/");
    }
  };

  const toReport = () => {
    if (isHome) {
      setHome(false);
      router.push("/user_report_form");
    }
  };

  return (
    <>
      <HeaderComponent>
        <Heading1>グリーンバック動画合成</Heading1>
      </HeaderComponent>
      <Ul>
        <Li $isActive={!isHome}>
          <button role="tab" onClick={toHome}>
            ホーム
          </button>
        </Li>
        <Li $isActive={isHome}>
          <button role="tab" onClick={toReport}>
            不具合の報告
          </button>
        </Li>
      </Ul>
    </>
  );
};

export default Header;
