import React from 'react';
import pestControlAnimatedImg from '../assets/138218414_10384375.jpg';
import houseImg from '../assets/house-svgrepo-com.svg';
import businessBuilding from '../assets/building-small-svgrepo-com.svg';
import animatedWorker from '../assets/30163502_tpox_watm_220602.svg'

export default function CommericalAndResidential() {
  return (
    <div className="commerical-residential-wrapper">
      <img src={pestControlAnimatedImg} className='pest-control-animated-img-1'></img>

      <div className="residential-and-commerical-containers">
        <div className="residential-services-container">
          <img src={houseImg}></img>

          <div className="residential-services-content-container">
            <h6>Homeguard</h6>
            <h1>Residential Services</h1>

            <p>
              Our residential pest control services offer effective solutions to protect your home from unwanted pests
            </p>
          </div>
        </div>

        <div className="commerical-services-container">
            <img src={businessBuilding}></img>
          <div className="commerical-services-content-container">
            <h6>Business</h6>
            <h1>Commerical Services</h1>

            <p>
              Our residential pest control services offer effective solutions to protect your home from unwanted pests
            </p>
          </div>
        </div>
      </div>




        <img src={animatedWorker} className='animated-worker-img'></img>




    </div>
  );
}
