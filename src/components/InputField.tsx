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
        <BodyForm ref={inputRef as RefObject<HTMLTextAreaElement>} id={id} />
      ) : (
        <TitleForm ref={inputRef as RefObject<HTMLInputElement>} id={id} />
      )}
    </>
  );
};

export default InputField;
