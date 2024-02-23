import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ApprovalModal from "./ApprovalModal";
import shirt from "../../Assets/images/menshirt.png";

const ProductCard = () => {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleApproveClick = () => {
    setShowApproveModal(true);
  };

  const handleRejectClick = () => {
    setShowRejectModal(true);
  };

  const handleCloseModal = () => {
    setShowApproveModal(false);
    setShowRejectModal(false);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        {[...Array(3)].map((_, index) => (
          <Col key={index} md={4} className="mt-4">
            <Card>
              <Card.Title>MEN..WOMEN..KIDS</Card.Title>
              <Card.Img
                src={shirt}
                className="img-fluid"
                alt="Product Image"
                style={{ height: "200px", width: "auto" }}
              />
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, magni.
                </p>
                <div className="cta">
                  <Button variant="primary" onClick={handleApproveClick}>
                    Approve
                  </Button>&nbsp;&nbsp;
                  <Button variant="danger" onClick={handleRejectClick}>
                    Reject
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ApprovalModal
        show={showApproveModal}
        handleClose={handleCloseModal}
        action="approve"
      />
      <ApprovalModal
        show={showRejectModal}
        handleClose={handleCloseModal}
        action="reject"
      />
    </Container>
  );
};

export default ProductCard;
