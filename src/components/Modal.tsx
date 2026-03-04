import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import Modal from "react-modal";

// モーダルのオーバーレイスタイル（Tailwindはclassで定義できないためかインラインスタイルで指定）
const overlayStyles = {
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  backdropFilter: "blur(4px)",
  zIndex: 1000,
};

// モーダルコンテンツのインラインスタイル（react-modalはclassではなくstyle propが必要）
const contentStyles = {
  position: "absolute" as const,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgba(15, 15, 20, 0.95)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "1.5rem",
  padding: "2rem",
  width: "90%",
  maxWidth: "480px",
  maxHeight: "60vh",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
};

interface AlertProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  modalMessage: string;
}

const DefaultModal: React.FC<AlertProps> = ({ closeModal, modalIsOpen, modalMessage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="AlertModal"
      ariaHideApp={false}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      {/* モーダルタイトル */}
      <div className="flex items-center gap-3 mb-4">
        <ErrorRoundedIcon className="text-red-400" style={{ fontSize: "2rem" }} color="error" />
        <h3 id="modal-title" className="text-white font-bold text-xl">
          警告
        </h3>
      </div>

      {/* メッセージ */}
      <p className="text-gray-300 text-base text-center whitespace-pre-wrap mb-6 flex-1">
        {modalMessage}
      </p>

      {/* OKボタン */}
      <div className="flex justify-end">
        <button
          id="okButton"
          onClick={closeModal}
          className="px-6 py-2 rounded-xl font-bold text-black text-sm
            bg-linear-to-r from-green-400 to-green-500
            shadow-lg shadow-green-500/40
            hover:shadow-green-500/60 hover:scale-105
            active:scale-95 transition-all duration-200 cursor-pointer"
        >
          OK
        </button>
      </div>
    </Modal>
  );
};

export default DefaultModal;
