import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {" "}
        {/* Use fluid to make it full-width */}
        <Navbar.Brand href="#home">TRNDZZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Empty Nav to push elements to the right */}
          </Nav>
          <Nav>
            <Nav.Link href="#home" as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item
                href="#action/3.1"
                as={Link}
                to="/admindashboard"
              >
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"as={Link} to="usermgt">
                User Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" as={Link} to="pdtmgt">
                Product Management
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

export default AdminNav;
