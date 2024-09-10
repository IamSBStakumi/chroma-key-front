import styled from "styled-components";
import { RefObject } from "react";

const LabelText = styled.label`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    width: 40%;
    margin-top: 0.7rem;
    left: 15%;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 25%;
    margin-top: 0.9rem;
    left: 20%;
    font-size: 1.7rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    width: 20%;
    margin-top: 1.2rem;
    left: 25%;
    font-size: 2rem;
  }
  display: block;
  position: relative;
  text-align: left;

  > span {
    color: red;
  }
`;

const TitleForm = styled.input`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    width: 70%;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 60%;
    font-size: 1.5rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    width: 50%;
    font-size: 1.8rem;
  }
`;

const BodyForm = styled.textarea`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    width: 70%;
    min-height: 5rem;
    margin: auto;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 60%;
    font-size: 1.5rem;
    min-height: 7rem;
    margin: auto;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    width: 50%;
    font-size: 1.8rem;
    min-height: 9rem;
    margin: auto;
  }
  display: block;
`;

type Props = {
  labelName: string;
  inputRef: RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>;
  id: string;
};

const InputField = ({ labelName, inputRef, id }: Props) => {
  return (
    <>
      <LabelText htmlFor={id}>
        {labelName}
        <span> *</span>
      </LabelText>
      {labelName === "不具合の内容" ? (
        <BodyForm ref={inputRef as RefObject<HTMLTextAreaElement>} id={id} />
      ) : (
        <TitleForm ref={inputRef as RefObject<HTMLInputElement>} id={id} />
      )}
    </>
  );
};

export default InputField;
