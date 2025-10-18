import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Mainbodytwo from './Mainbodytwo';
import { Link } from "react-router-dom";
function Mainbodythree() {
  return (
    <>
    <div className='three'>
      <h1>Gallery Single</h1>
      <h5>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio <br />
      sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</h5>
      <button>Available For Hire</button>
    </div>
        <Navbar expand="lg" style={{ backgroundColor: "#333" ,marginTop:'20px',marginBottom:'20px'}}variant='dark' >
      <Container>

       
          <Nav className="me-auto">
            <Nav.Link href="#home"style={{ color: "white",fontWeight:'bold' }}><Link to='/home' style={{color:'white',textDecoration:'none'}}>Home</Link></Nav.Link>
            <Nav.Link href="#link"style={{ color: "white" ,fontWeight:'bold'}}>Link</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
    <Mainbodytwo></Mainbodytwo>
    </>
  )
}

export default Mainbodythree