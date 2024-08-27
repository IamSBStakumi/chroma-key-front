import styled from "styled-components";

const StyledVideo = styled.video`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    width: 50%;
    padding: 1rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    width: 40%;
    padding: 1.5rem;
  }
  display: block;
  margin: auto;
`;

export default StyledVideo;
