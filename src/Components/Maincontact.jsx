import React from 'react'
import Headersection from './Headersection'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Maincontact() {
  return (
    <>
    <Headersection></Headersection>
    <div className='mainservices'><h1>Contact</h1>
    <h5>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio <br />
    voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</h5>
    <button>Available For Hire</button>
    </div>
     <Navbar expand="lg" style={{ backgroundColor: "#333" ,marginTop:'20px',marginBottom:'20px'}}variant='dark' >
      <Container>

       
          <Nav className="me-auto">
            <Nav.Link href="#home"style={{ color: "white",fontWeight:'bold', }}><Link to='/home' style={{color:'white',textDecoration:'none'}}>Home</Link></Nav.Link>
            <Nav.Link href="#link"style={{ color: "white" ,fontWeight:'bold',marginLeft:'10px'}}>Link</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
    <div className='contactdata'>
            <div className='d1'>
               <h5><i class="bi bi-geo-alt-fill"></i>Location <br /> <span id='da1'>A108 Adam Street, New York, NY 535022</span></h5>
            </div>
              <div className='d2'>
               <h5 ><i class="bi bi-telephone"></i>Call <br /> <span id='da1'>+252562326</span></h5>
            </div>
              <div className='d3'>
               <h5><i class="bi bi-envelope"></i>Email <br /> <span id='da1'>info@example.com</span></h5>
            </div>
    </div>
    <div className="inp"style={{marginTop:'80px',}}>
        <InputGroup className=" mb-3" style={{gap:'10px',width:'80%',marginLeft:'50px'}}>
            
            <Form.Control
            placeholder="Your name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="custom-input"
            style={{borderRadius:'0',backgroundColor: "#333", color:'white',border:'none'}}
            
            />
            <Form.Control
            placeholder="Your email"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="custom-input"
            style={{borderRadius:'0',backgroundColor: "#333", color:'white',border:'none'}}
            
            />
        </InputGroup>

        <InputGroup className="mb-3" style={{width:'80%',marginLeft:'50px'}}>
            <Form.Control
            placeholder="Subject"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="custom-input"
            style={{borderRadius:'0',backgroundColor: "#333", color:'white',border:'none'}}
            
            />
            
        </InputGroup>
        <InputGroup style={{width:'80%',marginLeft:'50px'}}>
            {/* <InputGroup.Text>Message</InputGroup.Text> */}
            
            <Form.Control as="textarea" 
            placeholder="Message"
            className="custom-input"
            style={{borderRadius:'0',backgroundColor: "#333", color:'white',border:'none', height: '120px'  }}
            
            
            
            />
        </InputGroup>
        <div className='mainservices1' style={{marginTop:'-10px',marginBottom:'10px'}}>
        <button>Send Message</button>
        </div>
    </div>    
      <div className='aboutfooter'>
            <h5>© Copyright PhotoFolio All Rights Reserved</h5>
            <h3><i class="bi bi-twitter-x"></i><i class="bi bi-facebook"></i><i class="bi bi-whatsapp"></i><i class="bi bi-youtube"></i></h3>
            <h5>designed by <span id='sp2'>BootstrapMade</span></h5>
      </div>
    </>
  )
}

export default Maincontact