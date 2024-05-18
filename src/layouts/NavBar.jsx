import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';
import CheckPointForm from '../components/CheckPointForm';

function NavBar() {
  const [showForm, setShowForm] = useState(false);


  console.log(showForm);
  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
          <Navbar.Brand href="/" className="navbar-brand-custom">Startup</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="#" className="nav-link-custom" onClick={() => {setShowForm(!showForm)}}>Checkpoint</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        {showForm && <CheckPointForm />}
    </>
  );
}

export default NavBar;