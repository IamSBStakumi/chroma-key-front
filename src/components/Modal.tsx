import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { StyledModal, Title, ErrorMessage, ModalMessage, OKButton } from "./StyledComponents/ModalComponent";

interface AlertProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  modalMessage: string;
}

const ErrorIcon = <ErrorRoundedIcon style={{ fontSize: "3.5vw" }} color="error" />;

const DefaultModal: React.FC<AlertProps> = ({ closeModal, modalIsOpen, modalMessage }) => {
  return (
    <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="AlertModal" ariaHideApp={false}>
      <Title>
        {ErrorIcon}
        <ErrorMessage id="modal-title">警告</ErrorMessage>
      </Title>
      <ModalMessage>{modalMessage}</ModalMessage>
      <OKButton id="okButton" onClick={closeModal}>
        OK
      </OKButton>
    </StyledModal>
  );
};

export default DefaultModal;
