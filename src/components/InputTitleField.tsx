import { RefObject } from "react";

// InputTitleField：報告タイトル入力フィールド（Tailwindに書き換え）
type Props = {
  labelName: string;
  inputRef: RefObject<HTMLInputElement | null>;
  id: string;
};

const InputField = ({ labelName, inputRef, id }: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-300 font-semibold text-sm mb-2">
        {labelName}
        <span className="text-red-400"> *</span>
      </label>
      <input
        ref={inputRef as RefObject<HTMLInputElement>}
        id={id}
        type="text"
        placeholder="適当なタイトルを付けてください"
        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl
          text-white placeholder-gray-500 text-sm
          focus:outline-none focus:border-green-500/50 focus:bg-white/10
          transition-all duration-200"
      />
    </div>
  );
};

export default InputField;
