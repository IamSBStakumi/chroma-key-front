"use client";

import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
`;

const Loader = styled.div`
	position: relative;
	width: 3.625rem;
	height: 3.625rem;
	border-color: green green green green;
	border-style: solid;
	border-width: 0.5rem;
	border-radius: 50%;
	-webkit-animation: spin 2s infinite;
	animation: spin 2s infinite;

	&::before,
	&::after {
		position: absolute;
		left: 0.125rem;
		width: 0.5rem;
		height: 0.5rem;
		content: "";
		background: black;
		border-radius: 50%;
	}

	&::before {
		top: 0.063rem;
	}

	&::after {
		bottom: 0.063rem;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
`;

const LoadingSpinner = () => {
	return (
		<Container>
			<Loader />
		</Container>
	);
};

export default LoadingSpinner;
