import React from "react";
 import testimonial from "../../Assets/images/testimonial.webp";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Pending() {
  return (

    <Container className="pt-3">
      <Row className="justify-content-md-center ">
        <Col
          md={3}
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 85, 164, 0.0588235294)" }}
        >
           
          <Image
            fluid
            src={testimonial}
            alt="Testimonial"
            style={{ maxWidth: "50px", maxHeight: "100px" }}
          />
        </Col>
        <Col
          md={3}
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 85, 164, 0.0588235294)" }}
        >
          <p>#23 Order receipt not received</p>
          <p>
            Reported on <b>27/10/2023</b>
          </p>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-center align-items-center p-3"
          style={{ backgroundColor: "rgba(0, 85, 164, 0.0588235294)" }}
        >
          <Button
            className="btn "
            style={{ backgroundColor: "#01114c", color: "white" }}
          >
            On-hold
          </Button>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Pending;
