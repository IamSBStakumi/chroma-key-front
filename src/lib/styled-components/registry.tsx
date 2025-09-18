"use client";

import useNonceFix from "@/hooks/useNonceFix";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

const StyledComponentsRegistry = ({ children, nonce = "" }: { children: React.ReactNode; nonce?: string }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    const styled = React.Children.map(styles, (child) =>
      React.isValidElement(child)
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.cloneElement(child as React.ReactElement<unknown>, { nonce } as any)
        : child,
    );

    return styled;
  });

  useNonceFix(nonce);

  if (typeof window !== "undefined") return <>{children}</>;

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
};

export default StyledComponentsRegistry;
