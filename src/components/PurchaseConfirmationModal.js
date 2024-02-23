import React from "react";
import { Modal, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PurchaseConfirmationModal = ({ show, handleClose, email }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thank you for your purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>A confirmation email has been sent to {email}</p>
        <Container className="text-center mt-3">
          <p>Order No.123123123123</p>
        </Container>
        <Container className="text-center mt-3">
          <p>
            Order status: <i className="fas fa-clock"></i>
            <span className="badge bg-danger">Pending</span>
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Container className="text-center mt-3">
          <Button variant="primary" onClick={handleClose}  as={Link} to="/">
            Return Home
          </Button>
        </Container>
      </Modal.Footer>
    </Modal>
  );
};

export default PurchaseConfirmationModal;

