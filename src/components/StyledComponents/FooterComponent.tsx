"use client";

import styled from "styled-components";

const FooterComponent = styled.footer`
  margin-top: auto;
  padding: 0.4rem 0.1rem;
  text-align: center;
  background: #22cc22;
`;

const FooterText = styled.p`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 1rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 1.3rem;
  }
  color: #333;
`;

export { FooterComponent, FooterText };
