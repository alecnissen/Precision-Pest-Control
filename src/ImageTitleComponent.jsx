import React from 'react';
import ppsLogo from '../assets/PPS-logo.jpeg';
import backgroundImg from "../assets/hero-2.png";
import greenCheckMark from "../assets/check-mark-svgrepo-com.svg";




export default function ImageTitleComponent() {
  return (
    <div className='image-title-component-wrapper'>



      {/* <img src={backgroundImg}></img> */}

      <div className='title-cta-button-container'>
      <h1>Effective Pest Control <span className='solutions-text-styles'>Solutions</span></h1>
      </div>


      <div className='check-marks-features'>
          <div className='check-mark-1-pair'>
          <img src={greenCheckMark}></img>
          <h3>Organic Treatment</h3>
          </div>

          <div className='check-mark-2-pair'>
          <img src={greenCheckMark}></img>
          <h3>Customer Satisfaction</h3>
          </div>

          <div className='check-mark-3-pair'>
          <img src={greenCheckMark}></img>
          <h3>Licensed and Insured</h3>
          </div>

      </div>

    </div>
  )
}
