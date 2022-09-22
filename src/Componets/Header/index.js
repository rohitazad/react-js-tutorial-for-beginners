import React from 'react';
//import Navigation from '../Navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ()=>{
    return (
        <>
        
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hello React Js</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
        {/* <Navigation /> */}
        </>
    )
}

export default Header;