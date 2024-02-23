import React from "react";
import { Modal, Button } from "react-bootstrap";

const ApprovalModal = ({ show, handleClose, action }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {action === "approve" ? "Approved" : "Rejected"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your product has been {action === "approve" ? "approved" : "rejected"}.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApprovalModal;
