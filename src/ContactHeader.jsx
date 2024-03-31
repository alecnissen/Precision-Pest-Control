import React from 'react';

export default function ContactHeader() {
  return (
    <div className="contact-header-content-wrapper">
      <div className="contact-header-icons-container">
        <img src="../assets/icons8-facebook (1).svg"></img>
        <img src="../assets/instagram-svgrepo-com (1).svg"></img>
      </div>

      <div className="contact-header-phone-email-container">
        <div className="email-container">
          <img src="../assets/email-1-svgrepo-com.svg"></img>
          <p>matt@prodigypestsolutions.com</p>
        </div>

        <div className="phone-container">
          <img src="../assets/telephone-svgrepo-com.svg"></img>
          <p>267-603-1811</p>
        </div>
      </div>
    </div>
  );
}
