import Box from "@mui/material/Box";
import ModalComponent from "@mui/material/Modal";

type ModalType = {
  open: boolean;
  handleOpen: any;
  children: any;
  className?: any;
  modalStyle?: any;
};

const basicStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const Modal = ({
  open,
  children,
  handleOpen,
  modalStyle,
  className,
  ...props
}: ModalType) => {
  const style = { ...basicStyle, ...modalStyle };
  return (
    <ModalComponent
      open={open}
      onClose={() => handleOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={className}
    >
      <Box sx={style}>{children}</Box>
    </ModalComponent>
  );
};

export default Modal;
