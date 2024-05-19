// OG verison

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/new-slide-1.png';
import slide2 from '../assets/new-slide-2-x.png';
import slide3 from '../assets/new-slide-3.png';
import quoteImg from '../assets/quote-svgrepo-com.svg';
import slide4 from '../assets/new-slide-4.png';
import { CarouselItem } from 'react-bootstrap';

import examplePortriatPhoto1 from '../assets/pexels-italo-melo-2379004.jpg';
import examplePortriatPhoto2 from '../assets/andrew-power-y9L5-wmifaY-unsplash.jpg';
import examplePortriatPhoto3 from '../assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import examplePortriatPhoto4 from '../assets/jeremy-mcgilvrey-Mum-4dB0VsE-unsplash.jpg';











export default function TestimonialsHomepage() {
  return (
    <div className="testimonial-content-wrapper">
      <div className="testimonial-content-card-container">
        <div className="testimonial-img-container">
          <img src={quoteImg}></img>

          <div className="testimonial-header-container">
            <h3>See Why Clients Love Our Pest Control Service</h3>

            <h1>
              Hear from <span className="those-who-trust-text">Those Who Trust</span> Our Pest Control Expertise
            </h1>
          </div>
        </div>

        <Carousel>
          <Carousel.Item>
            <div className="carousel-container">
              <img src={examplePortriatPhoto1} className="example-img-1"></img>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nam, corrupti earum iste provident
                eaque accusamus optio unde animi natus aliquam dolorum, ab odit ex dolore itaque rerum libero
                voluptatum? Est impedit, vero voluptatum sapiente nemo quos nam consequatur beatae suscipit dolor odit
                voluptate? Dolorem voluptas sed unde esse alias culpa!
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-container">
              <img src={examplePortriatPhoto1} className="example-img-1"></img>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nam, corrupti earum iste provident
                eaque accusamus optio unde animi natus aliquam dolorum, ab odit ex dolore itaque rerum libero
                voluptatum? Est impedit, vero voluptatum sapiente nemo quos nam consequatur beatae suscipit dolor odit
                voluptate? Dolorem voluptas sed unde esse alias culpa!
              </p>
            </div>
          </Carousel.Item>
        </Carousel>




      </div>
    </div>
  );
}

// 733 141

// export default function TestimonialsHomepage() {
//   return (
//     <div className='testimonials-content-wrapper'>

//     <div className='testimonial-content-card-container'>

//     <img src={quoteImg}></img>

//     <h3>See Why Clients Love Our Pest Control Services</h3>

//     <h1>Hear from <span>Those Who Trust</span> Our Pest Control Expertise</h1>

//     <Carousel id='event-carousel-container'>
//         <Carousel.Item>
//             <img id='carousel-image' className="img-fluid" src={slide1} alt='testimonial'></img>
//         </Carousel.Item>
//         <Carousel.Item>
//         <img id='carousel-image' className="img-fluid" src={slide1} alt='testimonial'></img>
//         </Carousel.Item>
//         <Carousel.Item>
//         <img id='carousel-image' className="img-fluid" src={slide1} alt='testimonial'></img>
//         </Carousel.Item>
//         <Carousel.Item>
//         <img id='carousel-image' className="img-fluid" src={slide1} alt='testimonial'></img>
//         </Carousel.Item>
//       </Carousel>

//     </div>

//     </div>
//   )
// }

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
