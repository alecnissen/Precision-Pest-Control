import { useState } from 'react';
import AboutUs from './AboutUs';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Header from './Header';
import ImageTitleComponent from './ImageTitleComponent';
import Navbar from './Navbar';
import Services from './Services';

export default function App() {

  return (
    <>
    <Navbar></Navbar>
    <ImageTitleComponent></ImageTitleComponent>
    <Services></Services>
    <AboutUs></AboutUs>
    <ContactForm></ContactForm>
    <Footer></Footer>
    </>
  );
}


