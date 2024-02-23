import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = ({ show, onHide, onConfirm }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the hall?</Modal.Body>
        <Modal.Footer>
          <Button
            className="btn me-2 btn-secondary"
            style={{ backgroundColor: "#01114c", color: "rgba(255, 255, 255)" }}
            onClick={onConfirm}
          >
            Yes
          </Button>
          <Button className="btn me-2 btn-danger" onClick={onHide}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
