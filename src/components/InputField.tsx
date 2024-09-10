import styled from "styled-components";
import { RefObject } from "react";

const Wrapper = styled.div`
  text-align: left;
  margin: 0.7rem auto 0 auto;
`;

const LabelText = styled.label`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    margin-left: 2.5rem;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    margin-left: 0.5rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    margin-left: 0.5rem;
  }
  display: block;
  position: relative;

  > span {
    color: red;
  }
`;

const TitleForm = styled.input`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    margin-left: 3.5rem;
    width: 70%;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    margin: 0.5rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    margin: 0.5rem;
  }
`;

const BodyForm = styled.textarea`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    margin-left: 3.5rem;
    width: 70%;
    min-height: 5rem;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    margin: 0.5rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    margin: 0.5rem;
  }
`;

type Props = {
  labelName: string;
  inputRef: RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>;
  id: string;
};

const InputField = ({ labelName, inputRef, id }: Props) => {
  return (
    <Wrapper>
      <LabelText htmlFor={id}>
        {labelName}
        <span> *</span>
      </LabelText>
      {labelName === "不具合の内容" ? (
        <BodyForm ref={inputRef as RefObject<HTMLTextAreaElement>} id={id} />
      ) : (
        <TitleForm ref={inputRef as RefObject<HTMLInputElement>} id={id} />
      )}
    </Wrapper>
  );
};

export default InputField;
