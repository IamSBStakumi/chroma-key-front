"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SubWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 2.5rem 0 2.5rem 0;
  display: flex;
  justify-content: center;
`;

export const LoadWrapper = styled.div`
  margin: 1.2rem auto;
  text-align: center;

  > p {
    /* スマートフォン向け */
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    /* タブレットなど中間のサイズ */
    @media (max-width: 1024px) and (min-width: 769px) {
      font-size: 1.8rem;
    }
    /* デスクトップ向け */
    @media (min-width: 1025px) {
      font-size: 2.3rem;
    }
  }
`;

export const ReportFormWrapper = styled.div`
  width: 100%;
  margin: 1.5rem auto 0 auto;
  text-align: center;
  justify-content: center;
`;

export default Wrapper;
