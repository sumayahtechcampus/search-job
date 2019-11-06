import React from 'react';
import {Carousel} from 'react-bootstrap'
import web from './web.jpg';
import data from './data.jpg'
import jpic from './j1.png'
import jobpic from './joo.jpg'



const Homepage = (props) =>{
    return(
       
     <div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web} 
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    </div>
       
    )
}

export default Homepage;