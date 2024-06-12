import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#343a40' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#ffffff', fontSize: '1.5rem' }}>E-BOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: '#ffffff', fontSize: '1rem' }}>Home</Nav.Link>
            <Nav.Link href="#link" style={{ color: '#ffffff', fontSize: '1rem' }}>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{ background: '#343a40' }}>
              <NavDropdown.Item href="#action/3.1" style={{ color: '#ffffff' }}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ color: '#ffffff' }}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{ color: '#ffffff' }}>Category</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{ color: '#ffffff' }}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
