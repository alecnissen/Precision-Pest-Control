
import AboutUsHomepage from './AboutUsHomepage';
import ContactLinksHeader from './ContactLinksHeader';
import ImageTitleComponent from './ImageTitleComponent';
import InsectCards from './InsectCards';
import Navbar from './Navbar';
import FeaturesHomepage from './FeaturesHomepage';
import Process from './Process';
import GalleryHomepage from './GalleryHomepage';
import PaymentPlans from './PaymentPlans';
import ContactForm from './ContactForm';
import MeetYourTeam from './MeetYourTeam';
import TestimonialsHomepage from './TestimonialsHomepage';
import Footer from './Footer';
import GalleryHomepage2 from './GalleryHomepage2';
import CommericalAndResidential from './CommericalAndResidential';
import HomePage from './HomePage';
import Services from './Services';
import ServiceAreas from './ServiceAreas';
import PestID from './PestID';
import Contact from './Contact';
import Reviews from './Reviews';
import PaymentPlansServicePage from './PaymentPlansServicesPage';

import { Route, Routes } from 'react-router-dom';


import { Link } from "react-router-dom";

export default function App() {

  return (
    <>
    
    {/* <Navbar></Navbar>
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
    <Footer></Footer> */}

    <Routes> 

    <Route path='/' element={<HomePage></HomePage>}></Route>

    <Route path='/Services' element={<Services></Services>}></Route>
   
    <Route path='/ServiceAreas' element={<ServiceAreas></ServiceAreas>}></Route>

    <Route path='/PestID' element={<PestID></PestID>}></Route>

    <Route path='/Contact' element={<Contact></Contact>}></Route>

    <Route path='/Reviews' element={<Reviews></Reviews>}></Route>

    



    </Routes>


    </>
  );
}


