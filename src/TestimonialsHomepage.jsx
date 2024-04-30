// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import slide1 from "../assets/carousel-slide-1.png"


import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/carousel-slide-1.png"


export default function TestimonialsHomepage() {
  return (
    <div className='testimonials-content-wrapper'>
      

    <div className='testimonial-content-card-container'> 

    <Carousel id='event-carousel-container'>
        <Carousel.Item>
            <img id='carousel-image' className="img-fluid" src={slide1} alt='testimonial'></img>
        </Carousel.Item>
        <Carousel.Item>
        <img id='carousel-image' className="img-fluid" src={slide1} alt='testimonial'></img>
        </Carousel.Item>
        <Carousel.Item>
        <img id='carousel-image' className="img-fluid" src={slide1} alt='testimonial'></img>
        </Carousel.Item>
        <Carousel.Item>
        <img id='carousel-image' className="img-fluid" src={slide1} alt='testimonial'></img>
        </Carousel.Item>
      </Carousel>

    </div>


    </div>
  )
}



































// export default function TestimonialsHomepage() {
//   return (
//     <div className='testimonials-content-wrapper'>
      

//     <div className='testimonial-content-card-container'> 

//     <Carousel>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="First slide" /> */}
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//           <img src={slide1}></img>
          
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="Second slide" /> */}
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="Third slide" /> */}
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     </div>


//     </div>
//   )
// }
