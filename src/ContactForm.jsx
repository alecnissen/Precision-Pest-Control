import React from 'react';
import phoneImgContactForm from "../assets/phone-svgrepo-com.svg";
import profileImg from "../assets/account-svgrepo-com.svg";
import dropdownIcon from '../assets/dropdown-arrow-svgrepo-com.svg';

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
        <img src={profileImg}></img>
        </div>


        <div className='contact-form-phone-num-container'>
        <input placeholder='Phone Number'></input>
        <img src={phoneImgContactForm}></img>
        </div>

        </div>
       

        <div className='contact-form-services-container'>
        <label>Select A Service</label>
        <select placeholder='Services'>
        <option>Residential Pest Control</option>
        <option>Commerical Pest Control</option>
        <option>Bed Bug Control</option>
        <option>Fast Pest Removal</option>

        </select>
       
        {/* <img src={dropdownIcon}></img> */}
        </div>



        <div className='form-date-time-container'>
        <p>Select A Date</p>
        <input placeholder='Select Date' type='date'></input>
        <p>Select A Time</p>
        <input placeholder='Select Time' type='time'></input>

        </div>

        <button>Book Now</button>

      </form>






    </div>
  );
}
