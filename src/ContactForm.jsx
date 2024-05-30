import React from 'react';
import phoneImgContactForm from "../assets/phone-svgrepo-com.svg";
import profileImg from "../assets/account-svgrepo-com.svg";
import dropdownIcon from '../assets/dropdown-arrow-svgrepo-com.svg';

export default function ContactForm() {
  return (
    <div className="contact-form-content-wrapper">
      <div className="contact-form-title-subtitle-container">
        <h3>Contact Form</h3>

        <h1>Connecting With Us</h1>

        <p className='contact-form-description-text'>
        Contacting us for your pest control needs is quick and convenient. Simply fill out the form, provide all the necessary details, and one of our representatives will get back to you promptly to assist you!
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

        <h1>Contact Us</h1>

        <div className='form-name-phone-num-container'>
        
        <div className='contact-form-name-container'>
        <label>Full Name</label>
        <input></input>
        <img src={profileImg}></img>
        </div>


        <div className='contact-form-phone-num-container'>
        <label>Phone Number</label>
        <input></input>
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
        <p>Email Address</p>
        {/* <input placeholder='Select Date' type='date'></input> */}
        <input type="email"></input>
        <p>Your Message</p>
        {/* <input placeholder='Select Time' type='time'></input> */}
        <textarea></textarea>

        </div>

        <button>Send</button>

      </form>






    </div>
  );
}
