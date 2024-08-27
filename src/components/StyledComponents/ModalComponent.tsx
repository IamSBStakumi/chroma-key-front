import Modal from "react-modal";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    width: 75%;
    height: 25%;
    padding: 15px;
    top: 35%;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 60%;
    height: 30%;
    top: 50%;
    padding: 20px;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    width: 50%;
    height: 35%;
    padding: 25px;
    top: 50%;
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
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
    font-size: 1rem;
    margin-bottom: 0.9rem;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.5rem;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  text-align: center;
`;

const OKButton = styled.button`
  /* スマートフォン向け */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.7rem;
    width: 25%;
    height: 20%;
  }
  /* タブレットなど中間のサイズ */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 15%;
    height: 20%;
    padding: 3px;
  }
  /* デスクトップ向け */
  @media (min-width: 1025px) {
    font-size: 2.5rem;
    margin-bottom: 1.3rem;
    width: 20%;
    padding: 3px;
  }
  align-self: flex-end;
  background-color: #2193ea;
  border-radius: 8px;
`;

export { StyledModal, Title, ErrorMessage, ModalMessage, OKButton };
