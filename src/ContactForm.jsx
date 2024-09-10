import React from 'react';
import phoneImgContactForm from '../assets/phone-svgrepo-com.svg';
import profileImg from '../assets/account-svgrepo-com.svg';
import dropdownIcon from '../assets/dropdown-arrow-svgrepo-com.svg';
import { useState } from 'react';

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNum: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!formData.phoneNum.trim()) {
      validationErrors.phoneNum = 'Phone number is required';
    } else if (!/^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(formData.phoneNum)) {
      validationErrors.phoneNum = 'Phone number is not valid';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form Submitted Successfully');
    }
  };

  return (
    <div className="contact-form-content-wrapper">
      <div className="contact-form-title-subtitle-container">
        <h3>Contact Form</h3>
        <h1>Connecting With Us</h1>
        <p className="contact-form-description-text">
          Contacting us for your pest control needs is quick and convenient. Simply fill out the form, provide all the
          necessary details, and one of our representatives will get back to you promptly to assist you!
        </p>
        <div className="call-for-help-container-contact-form">
          <div className="phone-icon-container-contact-form">
            <img src={phoneImgContactForm} alt="Phone" />
          </div>
          <div className="phone-num-container">
            <p>Call for help: </p>
            <h4 className="call-for-help-phone-num-contact-form">555-555-5555</h4>
          </div>
        </div>
      </div>
      <form className="contact-form-wrapper" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <div className="form-name-phone-num-container">
          <div className="contact-form-name-container">
            <label>Full Name</label>
            <input name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error-message">{errors.name}</span>}
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="contact-form-phone-num-container">
            <label>Phone Number</label>
            <input name="phoneNum" value={formData.phoneNum} onChange={handleChange} />
            {errors.phoneNum && <span className="error-message">{errors.phoneNum}</span>}
            <img src={phoneImgContactForm} alt="Phone" />
          </div>
        </div>
        <div className="contact-form-services-container">
          <label>Select A Service</label>
          <select placeholder="Services">
            <option>Residential Pest Control</option>
            <option>Commerical Pest Control</option>
            <option>Bed Bug Control</option>
            <option>Fast Pest Removal</option>
          </select>
        </div>
        <div className="form-date-time-container">
          <p>Email Address</p>
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error-message">{errors.email}</span>}
          <p>Your Message</p>
          <textarea></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
