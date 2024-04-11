import React from 'react';
import phoneIcon from '../assets/telephone-svgrepo-com.svg';
import instaIcon from '../assets/instagram-logo-facebook-2-svgrepo-com (1).svg';
import fbIcon from '../assets/fb-logo.svg';
import linkedinIcon from '../assets/linkedin-svgrepo-com (1).svg';


export default function ContactLinksHeader() {
  return (
    <div className='contact-links-content-wrapper'>
        
    <div className='phone-email-hours-container'> 

    <div className='phone-container-contact-header'>
    <p>267-603-1811</p>
    </div>

    <div className='email-container-contact-header'>
    <p>matt@prodigypestsolutions.com</p>
    </div>
    
    <div className='hours-container-contact-header'>
    <p>Mon-Fri: 8:00am - 4:00pm</p>
    </div>




    </div>

    <div className='social-media-icons-container'> 

        <div className='insta-icon-container-contact-header'>
        <img src={instaIcon}></img>
        </div>

        <div className='fb-container-contact-header'>
        <img src={fbIcon}></img>
        </div>

        <div className='linkedin-container-contact-header'> 
        <img src={linkedinIcon}></img>
        </div>


    </div>




    </div>
  )
}
