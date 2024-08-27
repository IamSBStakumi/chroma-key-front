import Modal from "react-modal";
import styled from "styled-components";
import Button from "@mui/material/Button";

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 15%;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
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
  bottom: 0;
  font-size: 1.5rem;
`;

const ModalMessage = styled.h4`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.3rem;
`;

const OKButton = styled(Button)`
  width: 10%;
  height: 20%;
  align-self: flex-end;
  font-size: 1rem;
`;

export { StyledModal, Title, ErrorMessage, ModalMessage, OKButton };
