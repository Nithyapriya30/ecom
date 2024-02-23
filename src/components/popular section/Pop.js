import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import goldearring from '../../Assets/images/gold earring.webp';
class PopularSection extends React.Component {
  render() {
    return (
      <section id="popular" className="py-3">
        <Container>
          <div className="title text-center pt-3 pb-5">
            <h2 className="position-relative d-inline-block ms-2">Top picks Of This Year</h2>
          </div>
          <Row className="ms-5">
            <Col md={6} lg={4} className="row g-3 ms-2" >
              <h3 className="fs-5">Top Rated</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
                 <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="row g-3 ms-2">
              <h3 className="fs-5">Best Selling</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
            </Col>

            <Col md={6} lg={4} className="row g-3 ms-2">
              <h3 className="fs-5">On Sale</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
             <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={goldearring} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Gold Earring</p>
                  <span>$59.00</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PopularSection;
