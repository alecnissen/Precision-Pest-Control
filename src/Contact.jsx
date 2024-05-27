import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function Contact() {
  return (
    <> 
    <div className='contact-tab-content-wrapper'> 

    <Navbar></Navbar>

      {/* <br></br> 
      <br></br> */}

   
      <div className='wrapper'> 
    <ContactForm></ContactForm>
    </div>


    <Footer></Footer>



    </div>
    
    
    </>
  )
}
