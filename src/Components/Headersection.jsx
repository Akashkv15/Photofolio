import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function Headersection() {
  return (
     <Navbar expand="lg" variant='dark' className='custom-navbar fixed-top'>
      <Container className="">
        <Nav className='Nav1'>
          <Navbar.Brand href="#home"><i class="bi bi-camera"></i> PhotoFolio</Navbar.Brand>
        </Nav>  
         <Nav className="ms-auto Nav3 d-flex  d-lg-none flex-row">
           <i class="bi bi-twitter"></i>
           <i class="bi bi-instagram"></i> 
           <i class="bi bi-facebook"></i>
           <i class="bi bi-whatsapp"></i>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='Nav2'>
          <Nav.Link href="#home"><Link to="/" style={{color:'white',textDecoration:'none'}}>Home</Link></Nav.Link>
            <Nav.Link href="#link"> <Link to="/about" style={{color:'white',textDecoration:'none'}}>About</Link></Nav.Link>
             <NavDropdown title="Gallary" id="basic-nav-dropdown"  className="custom-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to='/main'style={{color:'black',textDecoration:'none'}}> Action </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Link to="/main" style={{color:'black',textDecoration:'none'}}>Nature</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='/main' style={{color:'black',textDecoration:'none'}}>People</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='/main' style={{color:'black',textDecoration:'none'}}>Architeture</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='/main' style={{color:'black',textDecoration:'none'}}>Animals</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='/main' style={{color:'black',textDecoration:'none'}}>Sports</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='/main' style={{color:'black',textDecoration:'none'}}>Travel</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='/main' style={{color:'black',textDecoration:'none'}}>Deep Dropdown</Link></NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#link"><Link to='/services' style={{color:'white',textDecoration:'none'}}>Services</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/contact' style={{color:'white',textDecoration:'none'}}>Contact</Link></Nav.Link>

        </Nav>
         
        </Navbar.Collapse>
      </Container>
      <Nav className="ms-auto Nav3 d-none d-lg-flex flex-row">
           <i class="bi bi-twitter"></i>
           <i class="bi bi-instagram"></i> 
           <i class="bi bi-facebook"></i>
           <i class="bi bi-whatsapp"></i>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
    </Navbar>
    
  )
}

export default Headersection
