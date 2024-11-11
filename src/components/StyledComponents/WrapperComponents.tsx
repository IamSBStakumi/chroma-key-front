"use client";

import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const SubWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 2.5rem 0 2.5rem 0;
	margin: auto;
`;

export const LoadWrapper = styled.div`
	margin: 1.2rem auto;
	text-align: center;

	> p {
		/* スマートフォン向け */
		@media (max-width: 768px) {
			font-size: 1.2rem;
		}
		/* タブレットなど中間のサイズ */
		@media (max-width: 1024px) and (min-width: 769px) {
			font-size: 1.8rem;
		}
		/* デスクトップ向け */
		@media (min-width: 1025px) {
			font-size: 2.3rem;
		}
	}
`;

export const PreviewWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-around;
`;

export const ReportFormWrapper = styled.div`
	justify-content: center;
	width: 100%;
	margin: 1.5rem auto 0 auto;
	text-align: center;
`;

export const LogoWrapper = styled.div`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		width: 15%;
		padding: 0.2em;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		width: 8%;
		padding: 0.25em 0.25em 0.25em 0.25em;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		width: 7%;
		padding-top: 0.25em;
	}
`;

export default Wrapper;
