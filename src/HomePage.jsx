import React from 'react';
import Navbar from './Navbar';
import InsectCards from './InsectCards';
import ImageTitleComponent from './ImageTitleComponent';
import CommericalAndResidential from './CommericalAndResidential';
import AboutUsHomepage from './AboutUsHomepage';
import FeaturesHomepage from './FeaturesHomepage';
import Process from './Process';
import GalleryHomepage from './GalleryHomepage';
import PaymentPlans from './PaymentPlans';
import ContactForm from './ContactForm';
import MeetYourTeam from './MeetYourTeam';
import TestimonialsHomepage from './TestimonialsHomepage';
import GalleryHomepage2 from './GalleryHomepage2';
import Footer from './Footer';



export default function HomePage() {
  return (
    <>
      
    <Navbar></Navbar>
    <ImageTitleComponent></ImageTitleComponent>
    <InsectCards></InsectCards>
    <CommericalAndResidential></CommericalAndResidential>
    <AboutUsHomepage></AboutUsHomepage>
    <FeaturesHomepage></FeaturesHomepage>
    <Process></Process>
    <GalleryHomepage></GalleryHomepage>
    <PaymentPlans></PaymentPlans>
    <ContactForm></ContactForm>
    <MeetYourTeam></MeetYourTeam>
    <TestimonialsHomepage></TestimonialsHomepage> 
    <GalleryHomepage2></GalleryHomepage2>
    <Footer></Footer>

    </>

  )
}
