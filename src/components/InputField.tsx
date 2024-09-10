import { RefObject } from "react";
import { LabelText, TitleForm, BodyForm } from "./StyledComponents/ReportFieldComponents";

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
        <BodyForm ref={inputRef as RefObject<HTMLTextAreaElement>} id={id} placeholder="要望などもこちらへどうぞ" />
      ) : (
        <TitleForm ref={inputRef as RefObject<HTMLInputElement>} id={id} placeholder="適当なタイトルを付けてください" />
      )}
    </>
  );
};

export default InputField;
