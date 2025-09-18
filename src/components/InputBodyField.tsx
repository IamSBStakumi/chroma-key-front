import { RefObject } from "react";
import { LabelText, BodyForm } from "./StyledComponents/ReportFieldComponents";

type Props = {
  labelName: string;
  inputRef: RefObject<HTMLTextAreaElement | null>;
  id: string;
};

const InputField = ({ labelName, inputRef, id }: Props) => {
  return (
    <>
      <LabelText htmlFor={id}>
        {labelName}
        <span> *</span>
      </LabelText>
      <BodyForm
        ref={inputRef as RefObject<HTMLTextAreaElement>}
        id={id}
        placeholder="要望などもこちらへどうぞ"
      />
    </>
  );
};

export default InputField;
