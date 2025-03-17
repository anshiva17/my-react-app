import { Modal } from "react-bootstrap";

const ReusableModal = ({ show, handleClose, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">{children}</Modal.Body>
    </Modal>
  );
};

export default ReusableModal;
