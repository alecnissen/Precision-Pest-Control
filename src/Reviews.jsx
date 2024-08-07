import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import examplePortriatPhoto1 from '../assets/pexels-italo-melo-2379004.jpg';
import examplePortriatPhoto2 from '../assets/andrew-power-y9L5-wmifaY-unsplash.jpg';
import examplePortriatPhoto3 from '../assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import examplePortriatPhoto4 from '../assets/jeremy-mcgilvrey-Mum-4dB0VsE-unsplash.jpg';

import mockEmployeeImg from '../assets/mock-image-testimonial-section.jpg';

export default function Reviews() {
  return (
    <>
      <Navbar></Navbar>

      <div className="reviews-content-wrapper">
        <div className="reviews-header-container">
          <h1>Hear From Our Customers!</h1>

          {/* <h1>Discover Why Prodigy Pest Solutions Is The Best!</h1> */}
        </div>

        <div className="reviews-text-photo-container">
          <img src={mockEmployeeImg}></img>

          <div className="reviews-text-container">
            <p>
              "I couldn't be happier with the pest control services provided by Precision Pest Control. Their team was
              professional, thorough, and highly knowledgeable. They quickly identified and resolved our pest issue,
              ensuring our home was safe and pest-free. I highly recommend their services to anyone in need of effective
              and reliable pest control solutions."
            </p>

            <p className="review-name-styles">-Daniel Murphy</p>
          </div>
        </div>

        <div className="reviews-text-photo-container">
          <img src={examplePortriatPhoto2}></img>

          <div className="reviews-text-container">
            <p>
              "Precision Pest Control exceeded our expectations with their exceptional pest control service. Their staff
              was prompt, courteous, and extremely efficient in handling our pest problem. We appreciated their
              attention to detail and the comprehensive approach they took to ensure our home remained pest-free. We
              wholeheartedly recommend their services to anyone facing pest issues."
            </p>

            <p className="review-name-styles">-Andrew Johnson</p>
          </div>
        </div>

        <div className="reviews-text-photo-container">
          <img src={examplePortriatPhoto3}></img>

          <div className="reviews-text-container">
            <p>
              "We couldn't be happier with the pest control services provided by Precision Pest Control. From the moment
              we contacted them, their team was professional and attentive. They quickly identified the problem and
              implemented an effective solution. The results have been fantastic, and our home is now completely
              pest-free. We highly recommend Precision Pest Control for anyone needing reliable and thorough pest
              control."
            </p>

            <p className="review-name-styles">-John Anderson</p>
          </div>
        </div>

        <div className="reviews-text-photo-container">
          <img src={examplePortriatPhoto4}></img>

          <div className="reviews-text-container">
            <p>
              "Precision Pest Control exceeded our expectations with their exceptional pest control services. Their team was
              prompt, courteous, and extremely knowledgeable. They addressed our pest issue swiftly and effectively, and
              we haven't seen a single pest since their visit. We are thrilled with the results and highly recommend
              Precision Pest Control to anyone dealing with pest problems."
            </p>

            <p className="review-name-styles">-Jeremy Ferguson</p>
          </div>
        </div>
      </div>


      <div className='reviews-footer-wrapper'> 
      <Footer></Footer>
      </div>


    </>
  );
}
