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
    font-size: 88px;
  }
`;

export default Wrapper;
