import { RefObject } from "react";
import { LabelText, TitleForm } from "./StyledComponents/ReportFieldComponents";

type Props = {
  labelName: string;
  inputRef: RefObject<HTMLInputElement | null>;
  id: string;
};

const InputField = ({ labelName, inputRef, id }: Props) => {
  return (
    <>
      <LabelText htmlFor={id}>
        {labelName}
        <span> *</span>
      </LabelText>

      <TitleForm
        ref={inputRef as RefObject<HTMLInputElement>}
        id={id}
        placeholder="適当なタイトルを付けてください"
      />
    </>
  );
};

export default InputField;
