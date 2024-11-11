"use client";

import styled from "styled-components";

const Heading1 = styled.h1`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		padding: 0.3rem;
		font-size: 1.6rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		padding: 0.4rem;
		font-size: 2.5rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		padding: 0.5rem;
		font-size: 3rem;
	}
	color: #333;
`;

const Heading2 = styled.h2`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		padding: 1.6rem;
		font-size: 1.5rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		font-size: 2.3rem;
	}
	white-space: pre-wrap;
`;

const PageTitle = styled.h2`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		font-size: 1.4rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		padding: 1.6rem;
		font-size: 1.9rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		font-size: 2.3rem;
	}
	white-space: pre-wrap;
`;

export { Heading1, Heading2, PageTitle };
