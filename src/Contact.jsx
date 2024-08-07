import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import Footer from './Footer';

import locationImg from '../assets/location-pin-svgrepo-com.svg'
import emailImg from '../assets/email-1-svgrepo-com.svg';
import phoneImg from '../assets/phone-svgrepo-com (1).svg';



export default function Contact() {
  return (
    <> 
    <div className='contact-tab-content-wrapper'> 

    <Navbar></Navbar>

      
    <div className='contact-address-phone-wrapper'> 

            <h5>-Contact Us</h5>

            <h1>Ready For Our Best Services?</h1>

            <h1>Connect With Us!</h1>

           
        <div className='contact-cards-wrapper'>

        <div className='contact-card'> 

        <img src={locationImg}></img>

        <h5>Office Location:</h5>

        <h4>555 Roadside Way, Morton Pennsylvania, 18099</h4>

        </div>


        <div className='contact-card'> 

        <img src={emailImg}></img>

        <h5>Email Address:</h5>

        <h4>precisionpestsolutions@gmail.com</h4>

      </div>


      <div className='contact-card'> 

        <img src={phoneImg}></img>

        <h5>Phone Number:</h5>

        <h4>555-555-5555</h4>

      </div>






        </div>



    </div>


   
      <div className='wrapper'> 
    <ContactForm></ContactForm>
    </div>


    <Footer></Footer>



    </div>
    
    
    </>
  )
}
