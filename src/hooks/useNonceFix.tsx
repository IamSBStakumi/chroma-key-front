import { useEffect } from "react";

function useNonceFix(nonce: string) {
  useEffect(() => {
    const styles = document.querySelectorAll<HTMLStyleElement>("style[data-styled]");
    styles.forEach((el) => {
      if (!el.nonce) {
        el.setAttribute("nonce", nonce);
      }
    });
  }, [nonce]);
}

export default useNonceFix;
