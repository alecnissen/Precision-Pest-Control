import React from 'react';
import phoneIcon from "../assets/check-mark-circle-svgrepo-com.svg";

export default function FeaturesHomepage() {
  return (
    <div className='features-homepage-content-wrapper'>




    <div className='features-left-side-container'> 

    <div className='features-title-subtitle-container'>
      <h3>Discover The Advantages</h3>
      <h1>Features of Our <span className='features-effective-pest-solutions-text'>Effective Pest Control</span> Services</h1>
    </div>


    <div className='features-card'> 

      <img src={phoneIcon} className='features-phone-icon'></img>



        <h3>Effective Elimination</h3>

        <p>Efficiently eradicate pests for a pest-free environment</p>
         
    </div>

    </div>





    
    
    </div>
  )
}
