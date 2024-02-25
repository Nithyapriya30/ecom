// import React, { useState } from "react";
// import { Button, Card, Container } from "react-bootstrap";

// const CreditCardForm = () => {
//   const [cardnum, setCardnum] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [ccv, setCcv] = useState("");
//   const [cardnumError, setCardnumError] = useState("");
//   const [expiryError, setExpiryError] = useState("");
//   const [ccvError, setCcvError] = useState("");
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const validateCardNumber = (value) => {
//     var cardNumRegex = /^\d{16}$/;

//     if (!value.trim()) {
//       return "Card Number is required.";
//     } else if (!cardNumRegex.test(value)) {
//       return "Invalid Card Number.";
//     } else {
//       return "";
//     }
//   };

//   const validateExpiryDate = (value) => {
//     if (!value.trim()) {
//       return "Expiry Date is required.";
//     } else {
//       const today = new Date();
//       const [inputYear, inputMonth] = value.split("-");
//       const inputDate = new Date(inputYear, inputMonth - 1);

//       if (inputDate < today) {
//         return "Expiry Date cannot be a past date.";
//       } else {
//         return "";
//       }
//     }
//   };

//   const validateCCV = (value) => {
//     var ccvRegex = /^\d{3}$/;

//     if (!value.trim()) {
//       return "CCV is required.";
//     } else if (!ccvRegex.test(value)) {
//       return "Invalid CCV.";
//     } else {
//       return "";
//     }
//   };

//   const handleCardnumChange = (e) => {
//     const value = e.target.value;
//     setCardnum(value);
//     setCardnumError(validateCardNumber(value));
//   };

//   const handleExpiryChange = (e) => {
//     const value = e.target.value;
//     setExpiry(value);
//     setExpiryError(validateExpiryDate(value));
//   };

//   const handleCcvChange = (e) => {
//     const value = e.target.value;
//     setCcv(value);
//     setCcvError(validateCCV(value));
//   };

//   const validateAndSubmit = () => {
//     const cardnumValidationError = validateCardNumber(cardnum);
//     const expiryValidationError = validateExpiryDate(expiry);
//     const ccvValidationError = validateCCV(ccv);

//     setCardnumError(cardnumValidationError);
//     setExpiryError(expiryValidationError);
//     setCcvError(ccvValidationError);

//     if (
//       !cardnumValidationError &&
//       !expiryValidationError &&
//       !ccvValidationError
//     ) {
//       // If there are no validation errors, show payment success message
//       setPaymentSuccess(true);
//     }
//   };

//   return (
//     <Container>
//       <Card>
//         <Card.Header>Enter Card Details</Card.Header>
//         <Card.Body>
//           {!paymentSuccess ? (
//             <form>
//               <div className="mb-3">
//                 <label className="form-label">
//                   Card Number
//                   <span className="star" style={{ color: "red" }}>
//                     *
//                   </span>
//                 </label>
//                 <input
//                   type="tel"
//                   className="form-control"
//                   value={cardnum}
//                   onChange={handleCardnumChange}
//                   style={{ width: "200px" }}
//                 />
//                 <div className="text-danger">{cardnumError}</div>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">
//                   Expiry Date
//                   <span className="star" style={{ color: "red" }}>
//                     *
//                   </span>
//                 </label>
//                 <input
//                   type="month"
//                   className="form-control"
//                   value={expiry}
//                   onChange={handleExpiryChange}
//                   style={{ width: "200px" }}
//                 />
//                 <div className="text-danger">{expiryError}</div>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">
//                   CCV
//                   <span className="star" style={{ color: "red" }}>
//                     *
//                   </span>
//                 </label>
//                 <input
//                   type="tel"
//                   className="form-control"
//                   value={ccv}
//                   onChange={handleCcvChange}
//                   style={{ width: "100px" }}
//                 />
//                 <div className="text-danger">{ccvError}</div>
//               </div>

//               <div className="mb-3 form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="termsCheckbox"
//                   checked
//                 />
//                 <label className="form-check-label" htmlFor="termsCheckbox">
//                   By clicking on Confirm My Reservation, I agree to accept the
//                   Payment Terms & Cancellation Policy
//                 </label>
//               </div>

//               <Button
//                 variant="primary"
//                 type="button"
//                 onClick={validateAndSubmit}
//               >
//                 Confirm My Reservation
//               </Button>
//             </form>
//           ) : (
//             <div>
//               <h3>Payment Successful!</h3>
//               <p>Your payment has been successfully processed.</p>
//               {/* Additional content after successful payment */}
//             </div>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default CreditCardForm;


import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const CreditCardForm = () => {
  const [cardnum, setCardnum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [ccv, setCcv] = useState("");
  const [cardnumError, setCardnumError] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const [ccvError, setCcvError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const validateCardNumber = (value) => {
    var cardNumRegex = /^\d{16}$/;

    if (!value.trim()) {
      return "Card Number is required.";
    } else if (!cardNumRegex.test(value)) {
      return "Invalid Card Number.";
    } else {
      return "";
    }
  };

  const validateExpiryDate = (value) => {
    if (!value.trim()) {
      return "Expiry Date is required.";
    } else {
      const today = new Date();
      const [inputYear, inputMonth] = value.split("-");
      const inputDate = new Date(inputYear, inputMonth - 1);

      if (inputDate < today) {
        return "Expiry Date cannot be a past date.";
      } else {
        return "";
      }
    }
  };

  const validateCCV = (value) => {
    var ccvRegex = /^\d{3}$/;

    if (!value.trim()) {
      return "CCV is required.";
    } else if (!ccvRegex.test(value)) {
      return "Invalid CCV.";
    } else {
      return "";
    }
  };

  const handleCardnumChange = (e) => {
    const value = e.target.value;
    setCardnum(value);
    setCardnumError(validateCardNumber(value));
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value;
    setExpiry(value);
    setExpiryError(validateExpiryDate(value));
  };

  const handleCcvChange = (e) => {
    const value = e.target.value;
    setCcv(value);
    setCcvError(validateCCV(value));
  };

  const validateAndSubmit = () => {
    const cardnumValidationError = validateCardNumber(cardnum);
    const expiryValidationError = validateExpiryDate(expiry);
    const ccvValidationError = validateCCV(ccv);

    setCardnumError(cardnumValidationError);
    setExpiryError(expiryValidationError);
    setCcvError(ccvValidationError);

    if (
      !cardnumValidationError &&
      !expiryValidationError &&
      !ccvValidationError
    ) {
      // If there are no validation errors, show payment success message
      setPaymentSuccess(true);
    }
  };

  return (
    <Container className="my-5 mt-8" style={{ maxWidth: "600px" }}>
      <Card style={{ width: "100%" }}>
        <Card.Header>Enter Card Details</Card.Header>
        <Card.Body>
          {!paymentSuccess ? (
            <form>
              <div className="mb-3 d-flex justify-content-center">
                <div className="text-center">
                  <label className="form-label">
                    Card Number
                    <span className="star" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    value={cardnum}
                    onChange={handleCardnumChange}
                    style={{ width: "100%" }}
                  />
                  <div className="text-danger">{cardnumError}</div>
                </div>
              </div>
              <Row className="mb-3">
                <Col xs={6}>
                  <div className="mb-3">
                    <label className="form-label">
                      Expiry Date
                      <span className="star" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <input
                      type="month"
                      className="form-control"
                      value={expiry}
                      onChange={handleExpiryChange}
                      style={{ width: "100%" }}
                    />
                    <div className="text-danger">{expiryError}</div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="mb-3">
                    <label className="form-label">
                      CVV
                      <span className="star" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      value={ccv}
                      onChange={handleCcvChange}
                      style={{ width: "100%" }}
                    />
                    <div className="text-danger">{ccvError}</div>
                  </div>
                </Col>
              </Row>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheckbox"
                  checked
                />
                <label className="form-check-label" htmlFor="termsCheckbox">
                  By clicking on Confirm My Reservation, I agree to accept the
                  Payment Terms & Cancellation Policy
                </label>
              </div>

              <Button
                variant="primary"
                type="button"
                onClick={validateAndSubmit}
              >
                PAY
              </Button>
            </form>
          ) : (
            <div>
              <h3>Payment Successful!</h3>
              <p>Your payment has been successfully processed.</p>
              {/* Additional content after successful payment */}
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreditCardForm;
