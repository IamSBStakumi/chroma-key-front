"use client";

import styled from "styled-components";

const Heading1 = styled.h1`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.3rem;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 2.5rem;
    padding: 0.4rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 3rem;
    padding: 0.5rem;
  }
  color: #333;
`;

const Heading2 = styled.h2`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.5rem;
    padding: 1.6rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 2.3rem;
  }
  white-space: pre-wrap;
`;

export { Heading1, Heading2 };
