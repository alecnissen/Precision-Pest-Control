import React from 'react';
import phoneIcon from '../assets/telephone-svgrepo-com.svg';
import instaIcon from '../assets/instagram-svgrepo-com (1).svg';
import fbIcon from '../assets/icons8-facebook (1).svg';


export default function ContactLinksHeader() {
  return (
    <div className='contact-links-content-wrapper'>
        
    <div className='phone-email-hours-container'> 

    
    <p>267-603-1811</p>


    <p>matt@prodigypestsolutions.com</p>
    <p>Mon-Fri: 8:00am - 4:00pm</p>

    </div>

    <div className='social-media-icons-container'> 
        <img src={instaIcon}></img>
        <img src={fbIcon}></img>
    </div>




    </div>
  )
}
