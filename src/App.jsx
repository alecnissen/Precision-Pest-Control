
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
import OffCanvasExample from './OffCanvasExample';

export default function App() {

  return (
    <>
    {/* <ContactLinksHeader></ContactLinksHeader> */}
    <Navbar></Navbar>
    {/* <OffCanvasExample></OffCanvasExample> */}
    <ImageTitleComponent></ImageTitleComponent>
    <InsectCards></InsectCards>
    <CommericalAndResidential></CommericalAndResidential>
    <AboutUsHomepage></AboutUsHomepage>
    <FeaturesHomepage></FeaturesHomepage>
    <Process></Process>
    <GalleryHomepage></GalleryHomepage>
    <PaymentPlans></PaymentPlans>
    <ContactForm></ContactForm>
    {/* <MeetYourTeam></MeetYourTeam>
    <TestimonialsHomepage></TestimonialsHomepage>
    <GalleryHomepage2></GalleryHomepage2>
    <Footer></Footer> */}
    </>
  );
}


