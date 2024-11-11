"use client";

import styled from "styled-components";

const LabelText = styled.label`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		width: 40%;
		padding: 0.5rem 0;
		font-size: 1.5rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		width: 30%;
		padding: 0.5rem 0;
		font-size: 1.5rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		width: 35%;
		padding: 1rem 0;
		font-size: 2.3rem;
	}
	display: inline-block;
	text-align: right;
`;

const Input = styled.input`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		width: 50%;
		margin-left: 0.7rem;
		font-size: 1rem;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		width: 50%;
		margin-left: 1.3rem;
		font-size: 1.5rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		width: 50%;
		margin-left: 2rem;
		font-size: 2rem;
	}
`;

const Button = styled.button`
	/* スマートフォン向け */
	@media (max-width: 768px) {
		width: 24%;
		padding: 0.4rem;
		margin-top: 1.5rem;
		font-size: 1rem;
		font-color: #000;
	}
	/* タブレットなど中間のサイズ */
	@media (max-width: 1024px) and (min-width: 769px) {
		width: 16%;
		padding: 0.5rem;
		margin-top: 1rem;
		font-size: 1.5rem;
	}
	/* デスクトップ向け */
	@media (min-width: 1025px) {
		padding: 0.6rem;
		margin-top: 1rem;
		font-size: 2.3rem;
	}
	border: 1px solid #555;
	border-radius: 8px;
`;

export { LabelText, Input, Button };
