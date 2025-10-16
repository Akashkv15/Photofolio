import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import profile from '../assets/profile-img.png';
import Carousel from 'react-bootstrap/Carousel';

import test from '../assets/testimonials-3.png'
import test1 from '../assets/testimonials-4.png'
import test2 from '../assets/testimonials-5.png'
import Headersection from './Headersection';
function Mainabout() {
  return (
    <>
   <Headersection></Headersection>
    
    <div className='mainabout'><h1>About</h1>
    <h5>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio <br />
    voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</h5>
    <button>Available For Hire</button>
    
    </div>
    <Navbar expand="lg" style={{ backgroundColor: "#333" ,marginTop:'20px',marginBottom:'20px'}}variant='dark' >
      <Container>

       
          <Nav className="me-auto">
            <Nav.Link href="#home"style={{ color: "white",fontWeight:'bold' }}>Home</Nav.Link>
            <Nav.Link href="#link"style={{ color: "white" ,fontWeight:'bold',marginLeft:'10px'}}>Link</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
    <div className='aboutcontent'>
                <div className='aboutimg'>
                    <img src={profile} alt="" style={{width:'100%'}} />
                </div>
                <div class='imgcontent'>
                    <h1>UI/UX DesiProfessional Photographer from <br />
                     New Yorkgner & Web Developer.</h1>
                     <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                      tempor incididunt ut labore et dolore magna aliqua.</h6>
                      <div className='iconimg'>
                        <div>
                            <h4><i class="bi bi-caret-right-fill"></i>Birthday:1 May 1995 </h4>
                            <h4><i class="bi bi-caret-right-fill"></i>Website:www.example.com</h4>
                            <h4><i class="bi bi-caret-right-fill"></i>Phone:+123 456 7890 </h4>
                            <h4><i class="bi bi-caret-right-fill"></i>City:New York, USA </h4>
                        </div>
                        <div>    
                            <h4><i class="bi bi-caret-right-fill"></i>Age:30</h4>
                            <h4> <i class="bi bi-caret-right-fill"></i>Degree:Master  </h4>
                            <h4><i class="bi bi-caret-right-fill"></i>Email:email@example.com </h4>
                            <h4> <i class="bi bi-caret-right-fill"></i>Freelance:Available  </h4>
                        </div>    
                      </div>
                    <h5 style={{marginTop:'40px'}}>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero <br />
                     Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt <br />
                     officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. <br />
                     Sed et consectetur qui quia repellendus itaque neque. Aliquid amet <br />
                      quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa <br />
                      magni laudantium dolores.</h5>
                      <h5 style={{marginTop:'40px'}}>Recusandae est praesentium consequatur eos voluptatem. Vitae dolores <br />
                       aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime <br />
                        corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et.  <br />
                        Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam <br />
                        alias sint possimus eveniet ad. Ratione in earum eum magni totam.</h5>
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

export default Mainabout