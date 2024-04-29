import React from 'react';
import phoneImgContactForm from "../assets/phone-svgrepo-com.svg";
import profileImg from "../assets/account-svgrepo-com.svg";

export default function ContactForm() {
  return (
    <div className="contact-form-content-wrapper">
      <div className="contact-form-title-subtitle-container">
        <h3>Booking Form</h3>

        <h1>Booking Our Service Online</h1>

        <p className='contact-form-description-text'>
          Booking your pest control service online is quick and convenient - simply choose your preferred date and time,
          provide necessary details, and confirm your appointment with ease.
        </p>


        <div className="call-for-help-container-contact-form">

        <div className="phone-icon-container-contact-form">
          <img src={phoneImgContactForm}></img>
        </div>


          <div className='phone-num-container'> 

          <p>Call for help: </p>
          <h4 className="call-for-help-phone-num-contact-form">555-555-5555</h4>

          </div>

        </div>

      </div>



      <form className='contact-form-wrapper'>

        <h1>Book Now</h1>

        <div className='form-name-phone-num-container'>
        
        <div className='contact-form-name-container'>
        <input placeholder='Your Name'></input>
        {/* <i src={phoneImgContactForm}></i> */}
        <img src={profileImg}></img>
        </div>


        <div className='contact-form-phone-num-container'>
        <input placeholder='Phone Number'></input>
        <img src={phoneImgContactForm}></img>
        </div>

        </div>
       

        
        <input placeholder='Services'></input>




        <div className='form-date-time-container'>

        <input placeholder='Select Date'></input>

        <input placeholder='Select Time'></input>

        </div>

        <button>Book Now</button>

      </form>






    </div>
  );
}
