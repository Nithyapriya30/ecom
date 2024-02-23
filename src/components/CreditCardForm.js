/* import React, { useState } from "react";
import "../App.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Card,
} from "react-bootstrap";

const CreditCardForm = () => {
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [ccv, setCcv] = useState("");
  const [cardNumError, setCardNumError] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const [ccvError, setCcvError] = useState("");
  const [showModal, setShowModal] = useState(false);




  const validateCardNumber = () => {
    const cardNumRegex = /^\d{16}$/;

    if (!cardNum.trim()) {
      setCardNumError("Card Number is required.");
    } else if (!cardNumRegex.test(cardNum)) {
      setCardNumError("Invalid Card Number.");
    } else {
      setCardNumError("");
    }
  };

  const validateExpiryDate = () => {
    const today = new Date();
    today.setDate(1);

    if (!expiry.trim()) {
      setExpiryError("Expiry Date is required.");
    } else {
      const [inputYear, inputMonth] = expiry.split("-");
      const inputYearNum = parseInt(inputYear, 10);
      const inputMonthNum = parseInt(inputMonth, 10);

      if (
        inputYearNum < today.getFullYear() ||
        (inputYearNum === today.getFullYear() &&
          inputMonthNum < today.getMonth() + 1)
      ) {
        setExpiryError("Expiry Date cannot be a past date.");
      } else {
        setExpiryError("");
      }
    }
  };

  const validateCCV = () => {
    const ccvRegex = /^\d{3}$/;

    if (!ccv) {
      setCcvError("CCV is required.");
    } else if (!ccvRegex.test(ccv)) {
      setCcvError("Invalid CCV. CCV must be a 3-digit number.");
    } else {
      setCcvError("");
    }
  };

  

  const handleSubmit = () => {
    validateCardNumber();
    validateExpiryDate();
    validateCCV();
    console.log(cardNumError, expiryError, ccvError);
    if (!cardNumError && !expiryError && !ccvError) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }; 




  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card className="p-4  mt-4">
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <div style={{ textAlign: "start" }}>
                    <Form.Label>Card Number</Form.Label>
                  </div>

                  <Form.Control
                    type="tel"
                    id="cardnum"
                    onChange={(e) => setCardNum(e.target.value)}
                    onBlur={validateCardNumber}
                    size="sm"
                  />
                  <div className="text-danger">{cardNumError}</div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <div style={{ textAlign: "start" }}>
                    <Form.Label>Expiry Date</Form.Label>
                  </div>

                  <Form.Control
                    type="month"
                    id="expiry"
                    onChange={(e) => setExpiry(e.target.value)}
                    onBlur={validateExpiryDate}
                    size="sm"
                  />
                  <div className="text-danger">{expiryError}</div>
                </Col>
                <Col>
                  <div style={{ textAlign: "start" }}>
                    <Form.Label>CCV</Form.Label>
                  </div>

                  <Form.Control
                    type="tel"
                    id="ccv"
                    onChange={(e) => setCcv(e.target.value)}
                    onBlur={validateCCV}
                    size="sm"
                  />
                  <div className="text-danger">{ccvError}</div>
                </Col>
              </Row>

              <Form.Check
                className="mb-4 ch"
                type="checkbox"
                id="form4Example4"
                label="By clicking on Confirm My Reservation, I agree to accept the Payment Terms & Cancellation Policy"
                checked
              />

              <div className="modal-footer mt-5 mb-2">
                <Button className="btn button" onClick={handleSubmit}>
                  Pay
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your payment was successful! Thank you for your purchase.</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CreditCardForm;
 */



import React, { useState } from "react";
import "../App.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Card,
} from "react-bootstrap";

const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    cardnum: "",
    expiry: "",
    ccv: "",
  });
  const [cardNumError, setCardNumError] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const [ccvError, setCcvError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const validateCardNumber = () => {
    const cardNumRegex = /^\d{16}$/;
    if (!formData.cardnum.trim()) {
      setCardNumError("Card Number is required.");
    } else if (!cardNumRegex.test(formData.cardnum)) {
      setCardNumError("Invalid Card Number.");
    } else {
      setCardNumError("");
    }
  };

  const validateExpiryDate = () => {
    const today = new Date();
    today.setDate(1);

    if (!formData.expiry.trim()) {
      setExpiryError("Expiry Date is required.");
    } else {
      const [inputYear, inputMonth] = formData.expiry.split("-");
      const inputYearNum = parseInt(inputYear, 10);
      const inputMonthNum = parseInt(inputMonth, 10);

      if (
        inputYearNum < today.getFullYear() ||
        (inputYearNum === today.getFullYear() &&
          inputMonthNum < today.getMonth() + 1)
      ) {
        setExpiryError("Expiry Date cannot be a past date.");
      } else {
        setExpiryError("");
      }
    }
  };

  const validateCCV = () => {
    const ccvRegex = /^\d{3}$/;

    if (!formData.ccv) {
      setCcvError("CCV is required.");
    } else if (!ccvRegex.test(formData.ccv)) {
      setCcvError("Invalid CCV. CCV must be a 3-digit number.");
    } else {
      setCcvError("");
    }
  };

  const handleSubmit = () => {
    validateCardNumber();
    validateExpiryDate();
    validateCCV();

    if (!cardNumError && !expiryError && !ccvError) {
      setShowModal(true);
      setFormData({
        cardnum: "",
        expiry: "",
        ccv: "",
      });
    } else {
      setShowModal(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card className="p-4  mt-4">
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <div style={{ textAlign: "start" }}>
                    <Form.Label>Card Number</Form.Label>
                  </div>

                  <Form.Control
                    type="tel"
                    value={formData.cardnum}
                    id="cardnum"
                    onChange={(e) =>
                      setFormData({ ...formData, cardnum: e.target.value })
                    }
                    onBlur={validateCardNumber}
                    size="sm"
                  />
                  <div className="text-danger">{cardNumError}</div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <div style={{ textAlign: "start" }}>
                    <Form.Label>Expiry Date</Form.Label>
                  </div>

                  <Form.Control
                    type="month"
                    value={formData.expiry}
                    id="expiry"
                    onChange={(e) =>
                      setFormData({ ...formData, expiry: e.target.value })
                    }
                    onBlur={validateExpiryDate}
                    size="sm"
                  />
                  <div className="text-danger">{expiryError}</div>
                </Col>
                <Col>
                  <div style={{ textAlign: "start" }}>
                    <Form.Label>CCV</Form.Label>
                  </div>

                  <Form.Control
                    type="tel"
                    value={formData.ccv}
                    id="ccv"
                    onChange={(e) =>
                      setFormData({ ...formData, ccv: e.target.value })
                    }
                    onBlur={validateCCV}
                    size="sm"
                  />
                  <div className="text-danger">{ccvError}</div>
                </Col>
              </Row>

              <Form.Check
                className="mb-4 ch"
                type="checkbox"
                id="form4Example4"
                label="By clicking on Confirm My Reservation, I agree to accept the Payment Terms & Cancellation Policy"
                checked
              />

              <div className="modal-footer mt-5 mb-2">
                <Button className="btn button" onClick={handleSubmit}>
                  Pay
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your payment was successful! Thank you for your purchase.</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CreditCardForm;
