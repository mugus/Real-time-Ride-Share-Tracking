import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
      <Navbar.Brand href="/" className="navbar-brand-custom">Startup</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link href="#link" className="nav-link-custom">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;