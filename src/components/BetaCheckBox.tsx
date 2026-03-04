"use client";

// BetaCheckBox：AI合成モード切り替えチェックボックス（Tailwindに書き換え）
type Props = {
  checked: boolean;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BetaCheckBox = ({ checked, handleChangeValue }: Props) => {
  return (
    <div className="px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-2xl">
      <label className="flex items-start gap-3 cursor-pointer text-gray-300 text-sm leading-relaxed">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => handleChangeValue(e)}
          className="mt-0.5 w-4 h-4 accent-purple-400 cursor-pointer shrink-0"
        />
        <span>
          <span className="text-purple-400 font-bold">【Beta】</span>
          チェックを入れると、グリーンバックではない動画も合成可能です。
          ただし、まだ精度は高くありません。
        </span>
      </label>
    </div>
  );
};

export default BetaCheckBox;
