import Modal from "react-modal";
import styled from "styled-components";

const StyledModal = styled(Modal)`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		top: 35%;
		width: 75%;
		height: 25%;
		padding: 15px;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		top: 50%;
		width: 60%;
		height: 30%;
		padding: 20px;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		top: 50%;
		width: 50%;
		height: 45%;
		padding: 25px;
	}
	position: absolute;
	left: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	border: 2px solid black;
	border-radius: 10px;
	transform: translate(-50%, -50%);
`;

const ModalTitle = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.h3`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		font-size: 1rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		font-size: 1.5rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		font-size: 2rem;
	}
	bottom: 0;
`;

const ModalMessage = styled.h4`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		margin-bottom: 0.9rem;
		font-size: 1rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		font-size: 1.5rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		margin-bottom: 1rem;
		font-size: 2rem;
	}
	text-align: center;
	white-space: pre-wrap;
`;

const OKButton = styled.button`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		width: 25%;
		height: 20%;
		margin-bottom: 0.7rem;
		font-size: 1rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		width: 15%;
		height: 20%;
		padding: 3px;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		width: 20%;
		padding: 3px;
		margin-bottom: 1.3rem;
		font-size: 2.5rem;
	}
	align-self: flex-end;
	background-color: #2193ea;
	border-radius: 8px;
`;

export { StyledModal, ModalTitle, ErrorMessage, ModalMessage, OKButton };
