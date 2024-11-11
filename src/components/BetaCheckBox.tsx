"use client";

import styled from "styled-components";

const CheckboxLabel = styled.label`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		padding: 0 1.5rem;
		font-size: 0.7rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		padding: 0 1.5rem;
		font-size: 1.2rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		padding: 0 2rem;
		font-size: 1.5rem;
	}
	display: inline-block;
`;

type Props = {
	checked: boolean;
	handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BetaCheckBox = ({ checked, handleChangeValue }: Props) => {
	return (
		<>
			<CheckboxLabel>
				<input type="checkbox" checked={checked} onChange={(e) => handleChangeValue(e)} />
				チェックを入れると、グリーンバックではない動画も合成可能です。ただし、まだ精度は高くありません。
			</CheckboxLabel>
		</>
	);
};

export default BetaCheckBox;
