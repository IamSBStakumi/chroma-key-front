"use client";

import styled, { css } from "styled-components";

const HeaderComponent = styled.header`
  background: #22cc22;
  border-top: 3px solid #0c6eb7;
`;

const Ul = styled.ul`
  display: flex;
  padding-left: 0;

  > li {
    position: relative;
    display: block;
    float: left;
    margin-top: -1px;
  }
`;

const Li = styled.li<{ $isActive: boolean }>`
  > button {
    position: relative;
    display: block;
    color: #333;
    text-decoration: none;
    background-color: #22cc22;
    border: 1px solid #222;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 0 0 4px 0;

    & :hover :active {
      outline: 0;
    }

    ${({ $isActive }) =>
      $isActive &&
      css`
        cursor: pointer;
        background-color: #119911;
        border: 1px solid #888;
        border-top-color: transparent;
        border-left-color: transparent;
      `}
  }
`;

export { HeaderComponent, Ul, Li };
