import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"; 

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-secondary fixed-top">
      {" "}
 
      <Container>
        <Navbar.Brand href="#home">TRNDZZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link href="#home" className="text-dark mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#popular" className="text-dark mx-2">
              Popular
            </Nav.Link>
            <Nav.Link href="#collection" className="text-dark mx-2">
              Collection
            </Nav.Link>
            <Nav.Link href="#Blog" className="text-dark mx-2">
              Blog
            </Nav.Link>
            <Nav.Link href="#about" className="text-dark mx-2">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link to="#" className="mx-2">
            <Link to="/loginform">
              <Button
                data-mdb-ripple-init
                variant="primary"
                className="px-3"
               
              >
                Login
              </Button>
            </Link>
          </Nav.Link>
          <Nav.Link to="#" className="mx-2">
            <Link to="/signup">
              <Button
                data-mdb-ripple-init
                variant="outline-primary"
        
              >
                Sign Up
              </Button>
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
