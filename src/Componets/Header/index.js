import React from 'react';
//import Navigation from '../Navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return (
        <>
        
      <Navbar bg="primary" variant="dark">
        <Container className="mynavbar">
          <Navbar.Brand >Hello React Js</Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/conect">Conect</Link>
              </Nav>
            
         
        </Container>
      </Navbar>

      
        {/* <Navigation /> */}
        </>
    )
}

export default Header;