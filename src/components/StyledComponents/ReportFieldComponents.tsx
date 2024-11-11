import styled from "styled-components";

const LabelText = styled.label`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		left: 15%;
		width: 40%;
		margin-top: 0.7rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		left: 20%;
		width: 25%;
		margin-top: 0.9rem;
		font-size: 1.7rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		left: 25%;
		width: 20%;
		margin-top: 1.2rem;
		font-size: 2rem;
	}
	position: relative;
	display: block;
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
		min-height: 7rem;
		margin: auto;
		font-size: 1.5rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		width: 50%;
		min-height: 9rem;
		margin: auto;
		font-size: 1.8rem;
	}
	display: block;
`;

export { LabelText, TitleForm, BodyForm };
