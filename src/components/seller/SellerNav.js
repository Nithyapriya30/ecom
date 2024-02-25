import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function SellerNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {" "}
        <Navbar.Brand href="#home">TRNDZZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home" as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item
                href="#action/3.1"
                as={Link}
                to="/sellerdashboard"
              >
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" as={Link} to="/addpdt">
                Add Product
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" as={Link} to="/ordmgt">
                Order Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" as={Link} to="/query">
                Respond to query
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SellerNav;
