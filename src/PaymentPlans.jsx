import React from 'react';

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

        <p>
          Explore Competitive Prices for Professional Pest Control Services.Affordable Pricing Options for a Pest-Free
          Environment
        </p>
      </div>


      <div className='payment-plans-card-wrapper'> 

        <div className='payment-plan-card'> 

          <h3>Basic Plan</h3>

          <div className='payment-plan-price-container'>
          <h1>$15.00</h1>
          <p>Per Month</p>
          </div>

        </div>

      </div>



    </div>
  );
}
