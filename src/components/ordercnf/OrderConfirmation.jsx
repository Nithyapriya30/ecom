import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
function OrderConfirmation() {
  return (
    
    <div className="animation-ctn">
      <br/>
      <Container className="text-center mt-5">
        <h1>Order Confirmation</h1>
      </Container>
      <div className="icon icon--order-success svg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
          <g fill="none" stroke="#22AE73" strokeWidth="2">
            <circle cx="77" cy="77" r="72" style={{ strokeDasharray: '480px', strokeDashoffset: '960px' }} />
            <circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" style={{ strokeDasharray: '480px', strokeDashoffset: '960px' }} />
            <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4" style={{ strokeDasharray: '100px', strokeDashoffset: '200px' }} />
          </g>
        </svg>
      </div>
      <Container className="text-center mt-3">
        <h1>Thank you for your purchase</h1>
      </Container>
      <Container className="text-center mt-3">
        <p>A confirmation email has been sent to xyz@gmail.com</p>
      </Container>
      <Container className="text-center mt-3">
        <p>Order No.123123123123</p>
      </Container>
      <Container className="text-center mt-3">
        <p>
          Order status:
          <span className="badge bg-danger">Pending</span>
        </p>
      </Container>
     <Container className="text-center mt-3">
        <Button variant="primary">Return Home</Button>
        <br/>
      </Container>
    </div>
  );
}
export default OrderConfirmation;
