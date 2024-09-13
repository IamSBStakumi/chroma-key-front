"use client";

import styled from "styled-components";

const LabelText = styled.label`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    width: 40%;
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    width: 35%;
    font-size: 2.3rem;
    padding: 1rem 0;
  }
  display: inline-block;
  text-align: right;
`;

const Input = styled.input`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    width: 50%;
    font-size: 1rem;
    margin-left: 0.7rem;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 50%;
    font-size: 1.5rem;
    margin-left: 1.3rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    width: 50%;
    font-size: 2rem;
    margin-left: 2rem;
  }
`;

const Button = styled.button`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem;
    width: 24%;
    margin-top: 1.5rem;
    font-color: #000;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
    width: 16%;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 2.3rem;
    padding: 0.6rem;
    margin-top: 1rem;
  }
  border-radius: 8px;
  border: 1px solid #555;
`;

export { LabelText, Input, Button };
