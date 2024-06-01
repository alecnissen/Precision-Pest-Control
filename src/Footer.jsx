import React from 'react';
import ppsLogo from '../assets/PPS-logo.jpeg';
// import instaLogo from '../assets/facebook-logo-svgrepo-com.svg';
import fbLogo from '../assets/facebook-logo-meta-2-svgrepo-com (1).svg';
import instaLogo from '../assets/instagram-svgrepo-com (2).svg';
import linkedInLogo from '../assets/linkedin-161-svgrepo-com.svg';
import { useState } from 'react';

export default function Footer() {

  const [email, setEmail] = useState('');

  return (
    <div className="footer-content-wrapper">
      <div className="footer-welcome-to-container">
        <h5>
          Welcome To <span className="footer-pps-text">Prodigy Pest Solutions</span>
        </h5>

        <p>
          We are a leading pest control company, dedicated to providing exceptional services and ensuring pest-free
          environments
        </p>

        <div className="footer-icon-container">
          <div className="footer-fb-logo-container">
            <img src={fbLogo}></img>
          </div>

          <div className="footer-insta-logo-container">
            <img src={instaLogo}></img>
          </div>

          <div className="footer-linkedin-logo-container">
            <img src={linkedInLogo}></img>
          </div>
        </div>
      </div>

      <div className="footer-privacy-policy-container">
        <h4>Privacy Policy</h4>

        <h5>Cookie Policy</h5>

        <h5>Data Protection</h5>

        <h5>Data Security</h5>

        <h5>Information Security</h5>
      </div>



      <div className="footer-emergency-services-container">
        <h4>Emergency Services</h4>

        <h5>Rapid Response</h5>

        <h5>Quick Relief</h5>

        <h5>Fast Action</h5>

        <h5>Instant Help</h5>
      </div>


      <div className='newsletter-container'>
        <h4>Newsletter</h4>

        <input placeholder='Email Address'  value={email}
        onChange={(e) => setEmail(e.target.value)}></input>

        <div className='newsletter-btn-container'>
        <button onClick={() => { 
          alert('Success!');
          setEmail(''); 
        }}>Subscribe</button>
        </div>

      </div>



    </div>
  );
}
