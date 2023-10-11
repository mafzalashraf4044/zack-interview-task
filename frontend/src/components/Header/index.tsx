import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="bg-gray-800" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          News App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse role="navigation">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
