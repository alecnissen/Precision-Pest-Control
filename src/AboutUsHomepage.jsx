import React from 'react';
import ppsWorkersImg from '../assets/pps-img-3.jpg';
import ppsWorkersImg2 from '../assets/tyler-pps-img-1.jpg';

export default function AboutUsHomepage() {
  return (
    <div className="about-us-homepage-content-wrapper">
      <div className="pps-workers-container">
        <img src={ppsWorkersImg2} className="pps-worker-img2"></img>
        <img src={ppsWorkersImg} className="pps-worker-img-1"></img>
      </div>

      <div className="about-us-content-container">
        <h3>Your Trusted Pest Control Experts</h3>

        <h1>Your Trusted Solution for Effective Pest Control Services</h1>
        <p>
          Your trusted source for fast, effective, and eco-friendly pest control solutions expert exterminators ensuring
          thorough inspections, customized treatment plans, and guaranteed results at affordable prices
        </p>



        <div className='learn-more-btn-container'>
        <button>Learn More</button>
        </div>


      </div>







    </div>
  );
}
