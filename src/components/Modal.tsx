import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { StyledModal, ModalTitle, ErrorMessage, ModalMessage, OKButton } from "./StyledComponents/ModalComponent";

interface AlertProps {
	closeModal: () => void;
	isModalOpen: boolean;
	modalMessage: string;
}

const ErrorIcon = <ErrorRoundedIcon style={{ fontSize: "3.5vw" }} color="error" />;

const DefaultModal: React.FC<AlertProps> = ({ closeModal, isModalOpen, modalMessage }) => {
	return (
		<StyledModal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="AlertModal" ariaHideApp={false}>
			<ModalTitle>
				{ErrorIcon}
				<ErrorMessage id="modal-title">警告</ErrorMessage>
			</ModalTitle>
			<ModalMessage>{modalMessage}</ModalMessage>
			<OKButton id="okButton" onClick={closeModal}>
				OK
			</OKButton>
		</StyledModal>
	);
};

export default DefaultModal;
