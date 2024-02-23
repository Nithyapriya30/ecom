import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import about from "../Assets/images/about.png";

function AboutSection() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="lg-5 align-items-center">
          <Col lg={6} order-lg={1} className="text-center text-lg-start">
            <div className="title pt-3 pb-5">
              <h2 className="position-relative d-inline-block ms-4">
                ABOUT US
              </h2>
            </div>
            <p className="lead text-muted">
              Welcome to our company! We are dedicated to providing the best
              products and services to our customers.
            </p>
            <p>
              Our journey began several years ago with a vision to revolutionize
              the industry. Today, we are proud to say that we have achieved
              remarkable success, thanks to the unwavering support of our loyal
              customers and the dedication of our talented team.
            </p>
            <p>
              At our core, we believe in innovation, integrity, and excellence.
              These values drive everything we do, from product development to
              customer service. We are committed to exceeding expectations and
              delivering exceptional value to our stakeholders.
            </p>
          </Col>
          <Col lg={6}>
            <Image src={about} alt="About Us" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
