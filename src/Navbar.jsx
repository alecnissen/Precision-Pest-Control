import React from 'react';
import arrowRightIcon from '../assets/arrowright-svgrepo-com.svg';
import ppsLogo from "../assets/PPS-logo.jpeg";
import searchLogo from "../assets/search-svgrepo-com (1).svg";
import hamburgerLogo from "../assets/hamburger-menu-svgrepo-com (1).svg";
import { useState } from 'react';
import Modal from './Modal';
// import OffCanvasExample from '../src/OffCanvasExample';
import OffCanvasExample from './OffCanvasExample.jsx';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';





export default function Navbar() {




  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    console.log("Toggle OffCanvas");
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  console.log(isOffCanvasOpen);


  return (
    <div className="navbar-content-wrapper">
     
     <div className='title-subtitle-container'>

      <div className='title-logo-container'>
      <img src={ppsLogo}></img>
      <h1>Prodigy Pest Solutions</h1>
     </div>

    </div>
     
     <div className='navbar-button-container'> 

      <div className='dropdown'>

        <button> 
          <Link to='/' className='header-link'>Home</Link>
        </button>

        </div>


      <div className="dropdown">



        <button>
          <Link to='/Services' className='header-link'>Services</Link>
        </button>

        <div className="content">
          <Link to="/Services#ant-section">Ants</Link>
          <Link to="/Services#bed-bug-section">Bed Bugs</Link>
          <Link to="/Services#cockroaches-section">Cockroaches</Link>
          <Link to="/Services#rodents-section">Rodents</Link>
          <Link to="/Services#mosquito-section">Mosquitos</Link>
          <Link to="/Services#flea-section">Fleas</Link>
          <Link to="/Services#spider-section">Spiders</Link>
        </div>
      </div>

      <div className="dropdown">

        <button>
          <Link to='/ServiceAreas' className='header-link'>Service Areas</Link>
          
        </button>

        <div className="content">
          <Link to="/ServiceAreas#delco-section">Delaware County</Link>
          <Link to="/ServiceAreas#philly-section">Philadelphia</Link>
          <Link to="/ServiceAreas#chester-section">Chester County</Link>
          <Link to="/ServiceAreas#montco-section">Montgomery County</Link>
          <Link to="/ServiceAreas#bucks-section">Bucks County</Link>
        </div>
      </div>


      <div className="dropdown">


        <button>
          <Link to='/PestID' className='header-link'>Pest ID</Link>
        </button>

        <div className="content">
          <Link to="/PestID#ant-section">Ants</Link>
          <Link to="/PestID#bed-bug-section">Bed Bugs</Link>
          <Link to="/PestID#cockroaches-section">Cockroaches</Link>
          <Link to="/PestID#rodents-section">Rodents</Link>
          <Link to="/PestID#mosquito-section">Mosquitos</Link>
          <Link to="/PestID#flea-section">Fleas</Link>
          <Link to="/PestID#spider-section">Spiders</Link>

          



        </div>
      </div>


      <div className='dropdown'>


     
      <button>
        <Link to='/Contact' className='header-link'>Contact</Link>
      </button>


      </div>

      <div className='dropdown'>


      <button>
       <Link to='/Reviews' className='header-link'>Reviews</Link>
      </button>



      </div>

        
      

      <div className='search-hamburger-icon-container'>
      <img src={searchLogo} className="search-icon-navbar"></img>
      <img src={hamburgerLogo} className="hamburger-menu-icon-navbar" onClick={toggleOffCanvas}></img>
      </div>




      {/* {isOffCanvasOpen && <OffCanvasExample onClose={() => setIsOffCanvasOpen(false)} />} */}



      </div>
   

     

    </div>

  );
}

















// 2nd navbar option from discord 


// import React from 'react';
// import ppsLogo from "../assets/PPS-logo.jpeg";
// import searchLogo from "../assets/search-svgrepo-com (1).svg";
// import hamburgerLogo from "../assets/hamburger-menu-svgrepo-com (1).svg";
// import { useState } from 'react';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Accordion from 'react-bootstrap/Accordion';

// export default function Navbar() {

//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//   };

//   const toggleOffCanvas = () => {
//     setShow(!show);
//   };

//   return (

//     <>
//       <div className="navbar-content-wrapper">
//         <div className='title-subtitle-container'>
//           <div className='title-logo-container'>
//             <img src={ppsLogo} alt="PPS Logo"></img>
//             <h1>Prodigy Pest Solutions</h1>
//           </div>
//         </div>
//         <div className='navbar-button-container'>
//           <div className="dropdown">
//             <button>Services</button>
//             <div className="content">
//               <a href="">Ants</a>
//               <a href="">Bed Bugs</a>
//               <a href="">Cockroaches</a>
//               <a href="">Fleas</a>
//               <a href="">Mosquito</a>
//               <a href="">Spiders</a>
//               <a href="">Stinging Insects</a>
//               <a href="">Termites</a>
//               <a href="">Ticks</a>
//             </div>
//           </div>
//           <div className="dropdown">
//             <button>Service Areas</button>
//             <div className="content">
//               <a href="">Delaware County</a>
//               <a href="">Philadelphia</a>
//               <a href="">Chester County</a>
//               <a href="">Montgomery County</a>
//               <a href="">Bucks County</a>
//             </div>
// </div>
//           <div className="dropdown">
//             <button>Pest ID</button>
//             <div className="content">
//               <a href="">Ants</a>
//               <a href="">Bed Bugs</a>
//               <a href="">Boxelder Bugs</a>
//               <a href="">Carpenter Bees</a>
//               <a href="">Cockroaches</a>
//               <a href="">Fleas</a>
//               <a href="">Mice</a>
//               <a href="">Mosquitos</a>
//               <a href="">Rats</a>
//               <a href="">Spiders</a>
//               <div className="dropdown-for-stinging-pests">
//                 <div className="stinging-pests-dropdown-icon-container">
//                   <a href="">Stinging Pests</a>
//                 </div>
//               </div>
//               <a href="">Termites</a>
//               <div className="dropdown-for-other-pests">
//                 <div className="other-pests-dropdown-icon-container">
//                   <a href="">Other</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='dropdown'>
//             <button>Contact</button>
//           </div>
//           <div className='dropdown'>
//             <button>Reviews</button>
//           </div>
// <div className='search-hamburger-icon-container'>
//             <img src={searchLogo} className="search-icon-navbar" alt="Search Icon"></img>
//             <div className="hamburger-menu-icon-navbar" onClick={toggleOffCanvas}>
//               <img src={hamburgerLogo} alt="Hamburger Icon" />
//             </div>
//           </div>
//           <Offcanvas show={show} onHide={handleClose}>
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>Offcanvas Title</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Accordion>
//                 <Accordion.Item eventKey="0">
//                   <Accordion.Header>Accordion Item 1</Accordion.Header>
//                   <Accordion.Body>
//                     Content for Accordion Item 1
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="1">
//                   <Accordion.Header>Accordion Item 2</Accordion.Header>
//                   <Accordion.Body>
//                     Content for Accordion Item 2
//                   </Accordion.Body>
//                 </Accordion.Item>
//               </Accordion>
//             </Offcanvas.Body>
//           </Offcanvas>
//         </div>
//       </div>
//     </>
//   );
// }








