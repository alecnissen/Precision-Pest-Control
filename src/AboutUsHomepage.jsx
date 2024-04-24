import React from 'react';
import ppsWorkersImg from '../assets/2148848560.jpg';
import ppsWorkersImg2 from '../assets/2148848567.jpg';
import phoneImg from "../assets/phone-svgrepo-com.svg";
import greenCheckMarkImg from "../assets/check-mark-button-svgrepo-com (1).svg"



export default function AboutUsHomepage() {
  return (
    <div className="about-us-homepage-content-wrapper">
      <div className="pps-workers-container">
        <img src={ppsWorkersImg2} className="pps-worker-img2"></img>
        <img src={ppsWorkersImg} className="pps-worker-img-1"></img>
      </div>

      <div className="about-us-content-container">
        <h3>Your Trusted Pest Control Experts</h3>

        <h1>Your <span className='trusted-solution-text-about-us'>Trusted Solution</span> for Effective Pest Control Services</h1>
        <p className='about-us-description-p'>
          Your trusted source for fast, effective, and eco-friendly pest control solutions expert exterminators ensuring
          thorough inspections, customized treatment plans, and guaranteed results at affordable prices
        </p>


        <div className='learn-more-call-help-button-container'>

        <div className='learn-more-btn-container'>
        <button>Learn More</button>
        </div>


        <div className='phone-icon-container'>

            <img src={phoneImg}></img>
        </div>


        <div className='call-for-help-container'> 

          <p>Call for help: </p>
          <h4 className='call-for-help-phone-num'>555-555-5555</h4>
        </div>

        </div>






        <div className='check-marks-wrapper'> 
        
        <div className='check-marks-container'>

        <div className='check-mark-set-1'> 
          <img src={greenCheckMarkImg}></img>
          <p>Licensed and Insured</p>
          <img src={greenCheckMarkImg}></img>
          <p>Trusted Pest Experts</p>
        </div>

        <div className='check-mark-set-2'> 
        <img src={greenCheckMarkImg}></img>
          <p>Guaranteed Results</p>
          <img src={greenCheckMarkImg}></img>
          <p>Organic Methods</p>

        </div>

        </div>

        
        </div>



      </div>







    </div>
  );
}
