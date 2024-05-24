import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/new-slide-1.png";
import slide2 from "../assets/new-slide-2-x.png";
import slide3 from "../assets/new-slide-3.png";
import quoteImg from '../assets/quote-svgrepo-com.svg';
import slide4 from "../assets/new-slide-4.png"
import carouselImage1 from "../assets/smallcarousel1.png";
import carouselImage2 from "../assets/smallcarousel2.png";
import carouselImage3 from "../assets/smallcarousel3.png";
import carouselImage4 from "../assets/smallcarousel4.png";

export default function TestimonialsHomepage() {

  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='testimonial-content-wrapper'>
      <div className='testimonial-content-card-container'>
        {isWideScreen ? (
          <>
            <div className='testimonial-img-container'>
              <img id="quote" src={quoteImg} alt='quote'></img>
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
          </>
        ) : (
          <>
            <div className='testimonial-header-container'>
              <h3>See Why Clients Love Our Pest Control Service</h3>
              <h1>Hear from <span className='those-who-trust-text'>Those Who Trust</span> Our Pest Control Expertise</h1>
            </div>
            <Carousel id='event-carousel-container'>
              <Carousel.Item>
                <img id='carousel-image' src={carouselImage1} alt='testimonial'></img>
                <p className='bold-text'>Daniel Murphy</p>
                <p className='bold-text'>4/28/23</p>
                <p>Choosing Prodigy Pest Solutions was the best decision I made for my home. Their professional team not only eradicated the pests efficiently but also provided invaluable advice to prevent future infestations. I'm impressed with their thoroughness and would highly recommend their services to anyone in need.</p>
              </Carousel.Item>
              <Carousel.Item>
                <img id='carousel-image' src={carouselImage2} alt='testimonial'></img>
                <p className='bold-text'>John Anderson</p>
                <p className='bold-text'>4/28/23</p>
                <p>Working with Prodigy Pest Solutions was an absolute game-changer for us. Their expertise and dedication not only rid our home of pests but also gave us peace of mind knowing that our space was thoroughly protected. I'm truly grateful for their exceptional service and would confidently recommend them to anyone seeking top-notch pest control solutions.</p>
              </Carousel.Item>
              <Carousel.Item>
                <img id='carousel-image' src={carouselImage3} alt='testimonial'></img>
                <p className='bold-text'>Andrew Johnson</p>
                <p className='bold-text'>9/20/2022</p>
                <p>Prodigy Pest Solutions completely transformed our living environment. Their team's expertise and commitment not only eliminated pests from our home but also ensured a lasting shield against future infestations. We're immensely thankful for their exceptional service and would enthusiastically endorse them to anyone seeking effective pest control solutions.</p>
              </Carousel.Item>
              <Carousel.Item>
                <img id='carousel-image' src={carouselImage4} alt='testimonial'></img>
                <p className='bold-text'>Jeremy Ferguson</p>
                <p className='bold-text'>5/11/2021</p>
                <p>Prodigy Pest Solutions went above and beyond in delivering exceptional service. Their professionalism and attention to detail were evident from the moment they arrived. Not only did they eradicate the pests effectively, but they also took the time to educate us on preventative measures. Their commitment to customer satisfaction is unmatched, and we're grateful for their outstanding service.</p>
              </Carousel.Item>
            </Carousel>
          </>
        )}
      </div>
    </div>
  );
}