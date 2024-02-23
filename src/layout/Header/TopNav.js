import Navbar from "react-bootstrap/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";
import { ShopContext } from "../../context/ShopContext";

const Topnav = () => {
   const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div>
      <Navbar
        expand="lg"
        className="navbar-light bg-body-tertiary position-fixed l-0 r-0 w-100 pb-3 bg-body-white"
        style={{
          borderBottom: "1px solid rgba(187, 187, 187, 0.64)",
          backgroundColor: "white",
          zIndex: 999,
          position: "fixed",
        }}
      >
        <div className="container-fluid d-flex justify-content-around">
          <div className="d-none d-lg-block">
            <ul className="navbar-nav d-flex flex-row align-items-center">
              <li className="nav-item me-3 me-lg-0 border-0">
                <Nav.Link
                  to="./user/cart.html"
                  className="nav-Nav.Link"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-home"></i>
                </Nav.Link>
              </li>
              <li className="nav-item me-3 me-lg-0 border-0">
                <Nav.Link to="#" className="nav-Nav.Link">
                  <i class="fa-brands fa-instagram"></i>
                </Nav.Link>
              </li>
              <li className="nav-item me-3 me-lg-0 border-0">
                <Nav.Link to="#" className="nav-Nav.Link">
                  <i class="fa-brands fa-facebook"></i>
                </Nav.Link>
              </li>
            </ul>
          </div>

          <div className="col-4 col-auto">
            <Form className="form-inline">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="mr-sm-2"
                />
              </InputGroup>
            </Form>
          </div>
          <div>
            <div className="d-flex justify-content-end">
              <Nav.Link to="#">
                <Button
                  data-mdb-ripple-init
                  type="button"
                  variant="primary"
                  className="px-3 me-4 justify-content-end"
                  as={Link}
                  to="/homepage"
                >
                  Logout
                </Button>
              </Nav.Link>
              <Nav.Link to="#">
                <Button
                  data-mdb-ripple-init
                  type="button"
                  variant="primary"
                  className="me-4 d-none d-lg-block"
                  as={Link}
                  to="/sellerreg"
                >
                  Become a Seller
                </Button>
              </Nav.Link>
            </div>
          </div>
        </div>
      </Navbar>
      <Navbar
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
        style={{
          marginTop: "60px",
          borderBottom: "1px solid rgba(187, 187, 187, 0.64)",
          marginBottom: "90px",
          backgroundColor: "white",
          zIndex: 999,
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", fontSize: "1.5rem", color: "green" }}
          >
            TRNDZZ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto justify-content-center fontWeight: 'bold'">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#popular">Popular</Nav.Link>
              <Nav.Link href="#collection">Collection</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#kids">Kids</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <div className="d-lg-block">
              <ul className="navbar-nav d-flex flex-row align-items-center">
                {/* <div className="nav-login-cart">
                  <Link
                    to="/cart"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fas fa-shopping-cart"
                      style={{ marginRight: "6px" }}
                    ></i>
                  </Link>
                  <span className="badge-pill badge-danger position-absolute start-100 translate-middle me-4">
                    {getTotalCartItems()}
                  </span>
                </div> */}
                <div className="nav-login-cart d-flex align-items-center position-relative">
                  <Link
                    to="/cart"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fas fa-shopping-cart"
                      style={{ marginRight: "10px" }}
                    ></i>
                  </Link>
                  {getTotalCartItems() !== null && (
                    <span className="badge-pill badge-danger position-absolute top-0 start-100 translate-middle me-3">
                      {getTotalCartItems()}
                    </span>
                  )}
                </div>
                <div>
                  <li className="nav-item me-3 border-0 position-relative">
                    <Link
                      to="/wishlist"
                      className="nav-link"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <i className="fa-solid fa-heart"></i>
                      <span className="badge-pill badge-danger position-absolute start-100 translate-middle me-3">
                        2
                      </span>
                    </Link>
                  </li>
                </div>
                <div>
                  <li className="nav-item me-3 border-0">
                    <Link
                      to="/profile"
                      className="nav-link"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa-solid fa-user"></i>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Topnav;
