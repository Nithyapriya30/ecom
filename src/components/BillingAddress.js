import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PurchaseConfirmationModal from "./PurchaseConfirmationModal";
const BillingAddressPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "3",
    companyName: "",
    address: "",
    stateCountry: "",
    postalZip: "",
    emailAddress: "",
    phone: "",
    createAccount: false,
    shipToDifferentAddress: false,
    orderNotes: "",
    couponCode: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, paymentMethod) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (paymentMethod === "CASH_ON_DELIVERY") {
        // Show the modal only for "CASH ON DELIVERY"
        setShowModal(true);
        console.log("Form submitted:", formData);
      } else {
        // Redirect to the specified page for other payment methods
        window.location.href = "/paymentpage";
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if ( !formData.country.trim() || formData.country ===' ') {
      errors.country = "Please select a country";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.stateCountry.trim()) {
      errors.stateCountry = "State/Country is required";
    }
    if (!formData.emailAddress.trim()) {
      errors.emailAddress = "Email Address is required";
    } else if (!isValidEmail(formData.emailAddress)) {
      errors.emailAddress = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = "Invalid phone number format";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center align-items-center">
          <Col md={8} className="mb-3">
            <div className="p-1 p-lg-2 border">
              <Form onSubmit={handleSubmit}>
                <h2 className="h3 mb-5 text-black align-content-center">
                  Billing Details
                </h2>
                <Row
                  style={{
                    textAlign: "start",
                    paddingLeft: "10px",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Col md={6}>
                    <Form.Group controlId="c_fname">
                      <Form.Label>
                        First Name <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="c_lname">
                      <Form.Label>
                        Last Name <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row
                  style={{
                    textAlign: "start",
                    paddingLeft: "10px",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Col md={6}>
                    <Form.Group controlId="c_country">
                      <Form.Label>
                        Country {/* <span style={{ color: "red" }}>*</span> */}
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        isInvalid={!!errors.country}
                      >
                        <option value=' '>Select a country</option>
                    {/*     <option value="2">Bangladesh</option> */}
                        <option value="3">India</option>
                       {/*  <option value="4">Indonesiah</option>
                        <option value="5">Japan</option>
                        <option value="6">Malaysia</option> */}
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors.country}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="c_address">
                      <Form.Label>
                        Address <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Street address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        isInvalid={!!errors.address}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row
                  style={{
                    textAlign: "start",
                    paddingLeft: "10px",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Col md={6}>
                    <Form.Group controlId="c_state_country">
                      <Form.Label>
                        State <span style={{ color: "red" }}>*</span>{" "}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter State"
                        name="stateCountry"
                        value={formData.stateCountry}
                        onChange={handleChange}
                        isInvalid={!!errors.stateCountry}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.stateCountry}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="c_email_address">
                      <Form.Label>
                        Email Address <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email Address"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        isInvalid={!!errors.emailAddress}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.emailAddress}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row
                  style={{
                    textAlign: "start",
                    paddingLeft: "10px",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Col md={6}>
                    <Form.Group controlId="c_phone">
                      <Form.Label>
                        Phone <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="c_landmark">
                      <Form.Label>Landmark</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Landmark"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                        isInvalid={!!errors.landmark}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.landmark}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="c_order_notes">
                  <Form.Label>Order Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your notes here..."
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                  onClick={(e) => handleSubmit(e, "CASH_ON_DELIVERY")}
                >
                  CASH ON DELIVERY
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={(e) => handleSubmit(e, "CARD_PAYMENT")}
                >
                  CARD PAYMENT
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <PurchaseConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        email={formData.emailAddress}
      />
    </>
  );
};

export default BillingAddressPage;
