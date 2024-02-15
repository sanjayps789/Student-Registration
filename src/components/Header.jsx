import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div >
      <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand className='text-white fs-4'>Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white fs-6' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white fs-6' href="#link">Services</Nav.Link>
            <Nav.Link className='text-white fs-6' href="#home">About Us</Nav.Link>
            <Nav.Link className='text-white fs-6' href="#home">Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header