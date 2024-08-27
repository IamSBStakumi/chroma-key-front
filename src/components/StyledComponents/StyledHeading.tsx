"use client";

import styled from "styled-components";

const Heading1 = styled.h1`
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

const Heading2 = styled.h2`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 2.3rem;
  }
`;

export { Heading1, Heading2 };
