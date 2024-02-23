import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import testimonial from '../Assets/images/testimonial.webp';
function Testimonials() {
  return (
    <React.Fragment>
      <center>
        <h2>Testimonials</h2>
      </center>
      <Container>
        <Row className="ms-5">
          {[1, 2, 3, 4].map((index) => (
            <Col key={index} className="p-4">
              <Card className="div1 cd" style={{ width: '250px', height: '500px' }}>
                <Card.Img
                  variant="top"
                  src={testimonial}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  alt="Card image"
                />
                <Card.Body>
                  <h6 className="card-title d-flex justify-content-center">PRIYA</h6>
                  <h5 className="card-title d-flex justify-content-center">STUDENT</h5>
                  <p className="card-text d-flex justify-content-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente qui quod, at aut corrupti deserunt
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Testimonials;
