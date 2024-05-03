// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import slide1 from "../assets/carousel-slide-1.png"


import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/new-slide-1.png";
import slide2 from "../assets/new-slide-2-x.png";
import slide3 from "../assets/new-slide-3.png";
import quoteImg from '../assets/quote-svgrepo-com.svg';
import slide4 from "../assets/new-slide-4.png"



export default function TestimonialsHomepage() {
  return (
    <div className='testimonial-content-wrapper'>
        
        <div className='testimonial-content-card-container'> 

            <div className='testimonial-img-container'> 

                <img src={quoteImg}></img>

                <div className='testimonial-header-container'> 

                <h3>See Why Clients Love Our Pest Control Service</h3>

                <h1>Hear from <span className='those-who-trust-text'>Those Who Trust</span> Our Pest Control Expertise</h1>

                </div>


            </div>



        <Carousel id='event-carousel-container'>
         <Carousel.Item>
            <img id='carousel-image' src={slide1} alt='testimonial'></img>
        </Carousel.Item>
        <Carousel.Item>
        <img id='carousel-image' src={slide2} alt='testimonial'></img>
        </Carousel.Item>
        <Carousel.Item>
         <img id='carousel-image' src={slide3} alt='testimonial'></img>
         </Carousel.Item>
         <Carousel.Item>
        <img id='carousel-image' src={slide4} alt='testimonial'></img>
        </Carousel.Item>
      </Carousel>




        






        </div>


    </div>
  )
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
