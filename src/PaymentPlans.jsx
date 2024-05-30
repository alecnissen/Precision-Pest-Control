import React from 'react';
import greenCheckMark from '../assets/check-mark-svgrepo-com (1).svg';
import pestLogo from '../assets/10780277_19198237.svg';
import { HashLink as Link } from 'react-router-hash-link';



export default function PaymentPlans() {
  return (
    <div className="payment-plans-content-wrapper">
      <div className="payment-plans-title-subtitle-wrapper">
        <div className="payment-plans-title-subtitle-container">
          <h3>Flexible Pricing Packages</h3>

          <h1>
            Choose the <span className='plan-fits-text'>Plan that Fits</span>
          </h1>

          <h1>Your Pest Control Needs</h1>
        </div>
{/* 
        <p>
          Explore Competitive Prices for Professional Pest Control Services. Affordable Pricing Options for a Pest-Free
          Environment
        </p> */}


        <div className='payment-plans-img-container'> 
        <img src={pestLogo} className='payment-plans-pest-logo'></img>
        </div>

      </div>


      <div className='payment-plans-cards-wrapper'>


      <div className='payment-plans-card-container'> 

        <div className='payment-plan-card'> 

          <h3>Basic Plan</h3>

          <div className='payment-plan-price-container'>
          <h1>$15.00</h1>
          <p>Per Month</p>
          </div>

        </div>




        <div className='payment-card-features-container'>


        <div className='feature-img-container'> 
        <img src={greenCheckMark}></img>
        <h3>Energy saving pest Control</h3>
        </div>

        <div className='feature-img-container'> 
        <img src={greenCheckMark}></img>
        <h3>Mosquito Services</h3>
        </div>

        <div className='feature-img-container'> 
        <img src={greenCheckMark}></img>
        <h3>Bed Bug Solution</h3>
        </div>

        <div className='feature-img-container'> 
        <img src={greenCheckMark}></img>
        <h3>Property Maintenance</h3>
        </div>

        <div className='feature-img-container'> 
        <img src={greenCheckMark}></img>
        <h3>Mouse Removal</h3>
        </div>

        <div className='feature-img-container'> 
        <img src={greenCheckMark}></img>
        <h3>Home Pest Control</h3>
        </div>



        

        </div>
      
        <div className='our-services-button-container'> 

          <Link to="/Contact"> 
          <button>Contact Us</button>
          </Link>

        </div>


      </div> 


      <div className='payment-plans-card-container'> 

<div className='payment-plan-card'> 

{/* <div className='most-popular-container'> 
    <h4>Most Popular</h4>

</div> */}

  <h3>Standard Plan</h3>

  <div className='payment-plan-price-container'>
  <h1>$25.00</h1>
  <p>Per Month</p>
  </div>

</div>




<div className='payment-card-features-container'>


<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Energy saving pest Control</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Mosquito Services</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Bed Bug Solution</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Property Maintenance</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Mouse Removal</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Home Pest Control</h3>
</div>





</div>

<div className='our-services-button-container'> 

  <Link to="/Contact">
  <button>Contact Us</button>
  </Link>

</div>


</div> 




<div className='payment-plans-card-container'> 

<div className='payment-plan-card'> 

  <h3>Deluxe Plan</h3>

  <div className='payment-plan-price-container'>
  <h1>$40.00</h1>
  <p>Per Month</p>
  </div>

</div>




<div className='payment-card-features-container'>


<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Energy saving pest Control</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Mosquito Services</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Bed Bug Solution</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Property Maintenance</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Mouse Removal</h3>
</div>

<div className='feature-img-container'> 
<img src={greenCheckMark}></img>
<h3>Home Pest Control</h3>
</div>





</div>

<div className='our-services-button-container'> 

  <Link to="/Contact">
  <button>Contact Us</button>
  </Link>



</div>


</div> 






      

















      </div>

    </div>
  );
}
