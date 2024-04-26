
import AboutUsHomepage from './AboutUsHomepage';
import ContactLinksHeader from './ContactLinksHeader';
import ImageTitleComponent from './ImageTitleComponent';
import InsectCards from './InsectCards';
import Navbar from './Navbar';
import FeaturesHomepage from './FeaturesHomepage';
import Process from './Process';
import GalleryHomepage from './GalleryHomepage';
import PaymentPlans from './PaymentPlans';

export default function App() {

  return (
    <>
    {/* <ContactLinksHeader></ContactLinksHeader> */}
    <Navbar></Navbar>
    <ImageTitleComponent></ImageTitleComponent>
    <InsectCards></InsectCards>
    <AboutUsHomepage></AboutUsHomepage>
    <FeaturesHomepage></FeaturesHomepage>
    <Process></Process>
    <GalleryHomepage></GalleryHomepage>
    <PaymentPlans></PaymentPlans>
    </>
  );
}


