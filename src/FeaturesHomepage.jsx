import React from 'react';
import phoneIcon from "../assets/check-mark-circle-svgrepo-com.svg";
import employeeImg from "../assets/person-disinfecting-restricted-area.jpg";

export default function FeaturesHomepage() {
  return (
    <div className='features-homepage-content-wrapper'>




    <div className='features-left-side-container'> 

    <div className='features-title-subtitle-container'>
      <h3>Discover The Advantages</h3>
      <h1>Features of Our <span className='features-effective-pest-solutions-text'>Effective Pest Control</span> Services</h1>
    </div>


   <div className='container-for-features-cards'> 

   

    <div className='features-card-set-1'> 


    <div className='features-card'> 

      <img src={phoneIcon} className='features-phone-icon'></img>



        <h3>Effective Elimination</h3>

        <p>Efficiently eradicate pests for a pest-free environment</p>
         
    </div>




    <div className='features-card'> 

<img src={phoneIcon} className='features-phone-icon'></img>



  <h3>Lasting Results</h3>

  <p>Sustainable impact that extends well into the future</p>
   
</div>


    </div>




    <div className='features-card-set-2'> 

    <div className='features-card'> 

<img src={phoneIcon} className='features-phone-icon'></img>



  <h3>Safe Methods</h3>

  <p>Protecting your health and the environment with safety</p>
   
</div>

<div className='features-card'> 

<img src={phoneIcon} className='features-phone-icon'></img>



  <h3>Proactive Prevention</h3>

  <p>Prevent pests before they become a problem</p>
   
</div>



    </div>












    </div>




    <div className='numbers-container'> 


    <div className='experience-container'> 
        <h1>35+</h1>
        <p>Years Experience</p>
    </div>

    <div className='volunteers-container'> 
        <h1>800+</h1>
        <p>Great Volunteers</p>
        
    </div>



    <div className='satisfied-clients-container'> 
        <h1>35K</h1>
        <p>Satisfied Clients</p>

    </div>




    </div>




    </div>



    <div className='features-right-side-container'> 
        <img src={employeeImg} className='features-employee-img'></img>
    </div>
    
    
    </div>
  )
}



