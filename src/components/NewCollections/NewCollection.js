import React, { useEffect } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
//import { getProductFromJson } from "../../slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import star_icon from '../../Assets/images/img/star_icon.png';
import star_dull_icon from '../../Assets/images/img/star_dull_icon.png';
import "./NewCollections.css"
import { Link } from "react-router-dom";
import { getProductFromJson } from "../../slice/ProductSlice";

function ProductCardCollection(props) {
  const { productSet, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductFromJson());
  }, [dispatch]);

  return (
    <Tab.Container id="categoryTabs" defaultActiveKey="mens">
      <Row className="mt-5 custom-margin">
        <h1>New collections</h1>
        <Col>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="mens">Men</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="womens">Women</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="kids">Kids</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Content>
        
            <Tab.Pane eventKey="mens">
              <Row>
                {productSet
                  .filter((product) => product.Category === "Men")
                  .map((product, index) => (
                    <Col md={6} lg={3} sm={6} key={index}>
                      <Card className="card-prod mt-3">
                        <img
                          className="card-img-top"
                          src={product.productimage}
                          alt=""
                          height={"200px"}
                        />
                        <div className="card-body">
                          <h6 className="card-title">
                            {product.ProductFullName}
                          </h6>
                          <p className="">₹{product.Prize}</p>
                          <div className="productdisplay-right-starzz">
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_dull_icon} alt="" />
                          </div>
                          <div className="nav-login-cart">
                            <Link
                              to="/cart"
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              <i
                                className="fas fa-shopping-cart"
                                style={{ marginRight: "6px" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="womens">
              <Row>
                {productSet
                  .filter((product) => product.Category === "Womens")
                  .map((product, index) => (
                    <Col md={6} lg={3} sm={6} key={index}>
                      <Card className="card-prod mt-3">
                        <Link to="/product/singleprod">
                          <img
                            className="card-img-top"
                            src={product.productimage}
                            alt=""
                            height={"200px"}
                          />
                        </Link>
                        <div className="card-body">
                          <h6 className="card-title">
                            {product.ProductFullName}
                          </h6>
                          <p className="">₹{product.Prize}</p>
                          <div className="productdisplay-right-starzz">
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_dull_icon} alt="" />
                          </div>
                          <div className="nav-login-cart">
                            <Link
                              to="/cart"
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              <i
                                className="fas fa-shopping-cart"
                                style={{ marginRight: "6px" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Tab.Pane>
           
            <Tab.Pane eventKey="kids">
              <Row>
                {productSet
                  .filter((product) => product.Category === "Kids")
                  .map((product, index) => (
                    <Col md={6} lg={3} sm={6} key={index}>
                      <Card className="card-prod mt-3">
                       
                          <img
                            className="card-img-top"
                            src={product.productimage}
                            alt=""
                            height={"200px"}
                          />
                        
                        <div className="card-body">
                          <h6 className="card-title">
                            {product.ProductFullName}
                          </h6>
                          <p className="">₹{product.Prize}</p>
                          <div className="productdisplay-right-starzz">
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_dull_icon} alt="" />
                          </div>
                          <div className="nav-login-cart">
                            <Link
                              to="/cart"
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              <i
                                className="fas fa-shopping-cart"
                                style={{ marginRight: "6px" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Tab.Pane>
            
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ProductCardCollection;
