import React from 'react'
import Headersection from './Headersection'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import test from '../assets/testimonials-3.png'
import test1 from '../assets/testimonials-4.png'
import test2 from '../assets/testimonials-5.png'
import profile from '../assets/profile-img.png';
import Carousel from 'react-bootstrap/Carousel';
function Mainservices() {
  return (
    <><Headersection></Headersection>
    <div className='mainservices'><h1>Services</h1>
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
    <div className='servicescard'>
             <Card className='service-card'style={{ width: '18rem' ,borderRadius:'0'}}>
                 <Card.Body>
                    <h3><i class="bi bi-activity"></i></h3>
                    <Card.Title>Loreum</Card.Title>
                    <Card.Text>
                    Voluhbdsjbcjdsbncjdbnvjd <br />
                    hwcgdhvchvshcvsd <br />
                    tcftysfcyt
                    </Card.Text>
                </Card.Body>
             </Card>
              <Card className='service-card'style={{ width: '18rem' ,borderRadius:'0'}}>
                 <Card.Body>
                    <h3><i class="bi bi-bounding-box-circles"></i></h3>
                    <Card.Title>Loreum</Card.Title>
                    <Card.Text>
                    Voluhbdsjbcjdsbncjdbnvjd <br />
                    hwcgdhvchvshcvsd <br />
                    tcftysfcyt
                    </Card.Text>
                </Card.Body>
             </Card>
              <Card className='service-card'style={{ width: '18rem' ,borderRadius:'0'}}>
                 <Card.Body>
                    <h3><i class="bi bi-calendar4-week"></i></h3>
                    <Card.Title>Loreum</Card.Title>
                    <Card.Text>
                    Voluhbdsjbcjdsbncjdbnvjd <br />
                    hwcgdhvchvshcvsd <br />
                    tcftysfcyt
                    </Card.Text>
                </Card.Body>
             </Card>
              <Card className='service-card'style={{ width: '18rem' ,borderRadius:'0'}}>
                 <Card.Body>
                    <h3><i class="bi bi-broadcast"></i></h3>
                    <Card.Title>Loreum</Card.Title>
                    <Card.Text>
                    Voluhbdsjbcjdsbncjdbnvjd <br />
                    hwcgdhvchvshcvsd <br />
                    tcftysfcyt
                    </Card.Text>
                </Card.Body>
             </Card>
    </div>
     <div className='serviceheading'>
        <h4>Pricing</h4> 
        <h1>Check my adorable pricing</h1>
    </div>
    <div className='serviceprice'>
            <div className='price1'>
                    <h5>Portrait Photography <span id="p1">$160.00</span></h5>
                     <h5>Sports Photography <span id="p1">$200.00</span></h5>
                      <h5>Wedding Photography <span id="p1">$500.00</span></h5>
            </div>
            <div className='price1'>
                    <h5>Fashion Photography <span id="p1">$300.00</span></h5>
                     <h5>Still Life Photography <span id="p1">$120.00</span></h5>
                      <h5>Photojournalism <span id="p1">$200.00</span></h5>
            </div>
    </div>
    <div className='aboutheading'>
        <h4>Testimonials</h4> 
        <h1>What are they saying</h1>
    </div>
         <Carousel style={{ width: '60%', margin: '40px auto' }} indicators={false}  controls={false} >
  <Carousel.Item interval={1000} style={{textAlign:'center',color:'white'}} className='Move'>
    <h5><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h5>
    <h4 style={{margin:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates cum, praesentium reprehenderit, 
        <br />
        voluptas odit molestias, eos commodi ipsum alias qui distinctio doloribus
        <br /> totam rem ut ad numquam quisquam enim?</h4>
    <img
      className="d-block mx-auto"
      src={test}
      alt="First slide"

      style={{
        width: '100px',
        height: '100px',
        border: '2px solid grey',
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
    <h4 style={{margin:"15px"}}>Jena Karlis</h4>
    <h6 style={{color:'grey'}}>Store owner</h6>
  </Carousel.Item>

  <Carousel.Item interval={1000} style={{textAlign:'center',color:'white'}} className='Move'>
    <h5><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h5>
    <h4 style={{margin:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates cum, praesentium reprehenderit, 
        <br />
        voluptas odit molestias, eos commodi ipsum alias qui distinctio doloribus
        <br /> totam rem ut ad numquam quisquam enim?</h4>
    <img
      className="d-block mx-auto"
      src={test1}
      alt="Second slide"
      style={{
        width: '100px',
        height: '100px',
        border: '2px solid grey',
        borderRadius: '50%',
        objectFit: 'cover'
      }}
      
    />
    <h4 style={{margin:"15px"}}>Matt Brander</h4>
    <h6 style={{color:'grey'}}>Freelancer</h6>
  </Carousel.Item>

  <Carousel.Item style={{textAlign:'center',color:'white'}} className='Move'>
     <h5><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h5>
    <h4 style={{margin:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates cum, praesentium reprehenderit, 
        <br />
        voluptas odit molestias, eos commodi ipsum alias qui distinctio doloribus
        <br /> totam rem ut ad numquam quisquam enim?</h4>
    <img
      className="d-block mx-auto"
      src={test2}
      alt="Third slide"
      style={{
         width: '100px',
        height: '100px',
        border: '2px solid grey',
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
     <h4 style={{margin:"15px"}}>Soul Godman</h4>
    <h6 style={{color:'grey'}}>CEO & Founder</h6>
  </Carousel.Item>
</Carousel>
<div className='aboutfooter'>
            <h5>© Copyright PhotoFolio All Rights Reserved</h5>
            <h3><i class="bi bi-twitter-x"></i><i class="bi bi-facebook"></i><i class="bi bi-whatsapp"></i><i class="bi bi-youtube"></i></h3>
            <h5>designed by <span id='sp2'>BootstrapMade</span></h5>
      </div>
    </>
    
  )
}

export default Mainservices