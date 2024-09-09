"use client";

import { useRouter } from "next/navigation";
import HeaderComponent from "./StyledComponents/HeaderComponent";
import { Heading1 } from "./StyledComponents/StyledHeading";

const Header = () => {
  const router = useRouter();

  return (
    <HeaderComponent>
      <Heading1>グリーンバック動画合成</Heading1>
      <p onClick={() => router.push("/user_report_form")}>不具合報告はこちら</p>
    </HeaderComponent>
  );
};

export default Header;
