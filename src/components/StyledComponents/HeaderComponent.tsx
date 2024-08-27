"use client";

import styled from "styled-components";

const HeaderComponent = styled.header`
  height: 14%;
  background: #22cc22;
  color: #fff;
  border-top: 3px solid #0c6eb7;
  border-bottom: solid 1px #eee;
`;

const Text = styled.h1`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.3rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 3rem;
    padding: 0.5rem;
  }
  color: #333;
`;

export { HeaderComponent, Text };
