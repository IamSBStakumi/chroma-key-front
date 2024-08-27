"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 2.5rem 0 2.5rem 0;
  display: flex;
  justify-content: center;
`;

const Text = styled.h2`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 2.3rem;
  }
`;

export { Wrapper, Text };
