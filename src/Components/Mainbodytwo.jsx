import React from 'react'
import Card from 'react-bootstrap/Card'
import one from '../assets/gallery-1.png'
import two from '../assets/gallery-2.png'
import three from '../assets/gallery-3.png'
import four from '../assets/gallery-4.png'
import five from '../assets/gallery-5.png'
import six from '../assets/gallery-6.png'
import seven from '../assets/gallery-7.png'
import eight from '../assets/gallery-8-2.png'
import { Link } from "react-router-dom";
function Mainbodytwo() {
  return (
   <>
    <div className="d-flex flex-wrap justify-content-center" style={{ gap: '20px' ,marginTop:'40px',marginBottom:'50px'}}>
      
      <Card style={{ width: '18rem', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        <div className="img-wrapper">
             
          <Card.Img src={one} className="hover-image" />
          <span className="hover-icon"><i class="bi bi-link-45deg"></i> <i class="bi bi-arrows-angle-expand"></i></span>
        </div>
      </Card>

      <Card style={{ width: '18rem', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        <div className="img-wrapper">
          <Card.Img src={two} className="hover-image" />
          <span className="hover-icon"><i class="bi bi-link-45deg"></i> <i class="bi bi-arrows-angle-expand"></i></span>
        </div>
      </Card>

      <Card style={{ width: '18rem', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        <div className="img-wrapper">
          <Card.Img src={three} className="hover-image" />
          <span className="hover-icon"><Link to="/main"><i class="bi bi-link-45deg"></i></Link> <i class="bi bi-arrows-angle-expand"></i></span>
        </div>
      </Card>

      <Card style={{ width: '18rem', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        <div className="img-wrapper">
          <Card.Img src={four} className="hover-image" />
          <span className="hover-icon"><i class="bi bi-link-45deg"></i> <i class="bi bi-arrows-angle-expand"></i></span>
        </div>
      </Card>

    </div>
    <div className="d-flex flex-wrap justify-content-center" style={{ gap: '20px' ,marginTop:'40px',marginBottom:'50px'}}>
      
      <Card style={{ width: '18rem', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        <div className="img-wrapper">
          <Card.Img src={five} className="hover-image" />
          <span className="hover-icon"><i class="bi bi-link-45deg"></i> <i class="bi bi-arrows-angle-expand"></i></span>
        </div>
      </Card>

      <Card style={{ width: '18rem', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        <div className="img-wrapper">
          <Card.Img src={six} className="hover-image" />
          <span className="hover-icon"><i class="bi bi-link-45deg"></i> <i class="bi bi-arrows-angle-expand"></i></span>
        </div>
      </Card>

      <Card style={{ width: '18rem', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        <div className="img-wrapper">
          <Card.Img src={seven} className="hover-image" />
          <span className="hover-icon"><i class="bi bi-link-45deg"></i> <i class="bi bi-arrows-angle-expand"></i></span>
        </div>
      </Card>

      <Card style={{ width: '18rem', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        <div className="img-wrapper">
          <Card.Img src={eight} className="hover-image" />
          <span className="hover-icon"><i class="bi bi-link-45deg"></i> <i class="bi bi-arrows-angle-expand"></i></span>
        </div>
      </Card>

    </div>
   </>
  
  )
}

export default Mainbodytwo