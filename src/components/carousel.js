import React from 'react'
import { Carousel } from 'react-bootstrap';
import banz2 from '../Assets/images/banz2.jpg';
import banz3 from '../Assets/images/banz3.jpg';
function MyCarousel()
{
  return (
   <div id='home'>
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={banz2} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={banz3} alt="Second slide"/>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={banz2} alt="Third slide" />
    </Carousel.Item>
  </Carousel>
</div>
  )
}
export default MyCarousel;