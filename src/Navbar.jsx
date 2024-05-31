import React from 'react';
import arrowRightIcon from '../assets/arrowright-svgrepo-com.svg';
import ppsLogo from '../assets/PPS-logo.jpeg';
import searchLogo from '../assets/search-svgrepo-com (1).svg';
import hamburgerLogo from '../assets/hamburger-menu-svgrepo-com (1).svg';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';

import { useLocation } from "react-router-dom";
import { useEffect } from 'react';


export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const toggleOffCanvas = () => {
    setShow(!show);
  };


  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname]);
  

  return (
    <div className="navbar-content-wrapper">
      <div className="title-subtitle-container">
        <div className="title-logo-container">
          <img src={ppsLogo}></img>
          <h1>Prodigy Pest Solutions</h1>
        </div>
      </div>

      <div className="navbar-button-container">
        <div className="dropdown">
          <button>
            <Link to="/" className="header-link">
              Home
            </Link>
          </button>
        </div>

        <div className="dropdown">
          <button>
            <Link to="/Services" className="header-link">
              Services
            </Link>
          </button>

          <div className="content">
            <Link to="/Services#ant-section">Ants</Link>
            <Link to="/Services#bed-bug-section">Bed Bugs</Link>
            {/* <Link to="/Services#cockroaches-section">Cockroaches</Link> */}
            <Link to="/Services#rodents-section">Rodents</Link>
            <Link to="/Services#mosquito-section">Mosquitos</Link>
            <Link to="/Services#flea-section">Fleas</Link>
            <Link to="/Services#spider-section">Spiders</Link>
          </div>
        </div>

        <div className="dropdown">
          <button>
            <Link to="/ServiceAreas" className="header-link">
              Service Areas
            </Link>
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
            <Link to="/PestID" className="header-link">
              Pest ID
            </Link>
          </button>

          <div className="content">
            <Link to="/PestID#ant-section">Ants</Link>
            <Link to="/PestID#bed-bug-section">Bed Bugs</Link>
            {/* <Link to="/PestID#cockroaches-section">Cockroaches</Link> */}
            <Link to="/PestID#rodents-section">Rodents</Link>
            <Link to="/PestID#mosquito-section">Mosquitos</Link>
            <Link to="/PestID#flea-section">Fleas</Link>
            <Link to="/PestID#spider-section">Spiders</Link>
          </div>
        </div>

        <div className="dropdown">
          <button>
            <Link to="/Contact" className="header-link">
              Contact
            </Link>
          </button>
        </div>

        <div className="dropdown">
          <button>
            <Link to="/Reviews" className="header-link">
              Reviews
            </Link>
          </button>
        </div>

        <div className="search-hamburger-icon-container">
          <img src={searchLogo} className="search-icon-navbar"></img>
          <img src={hamburgerLogo} className="hamburger-menu-icon-navbar" onClick={toggleOffCanvas}></img>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Prodigy Pest Solutions</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Accordion>



            <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Link to="/">
                  Home
                  </Link>
                  </Accordion.Header>
            
              </Accordion.Item>





              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <Link to="/Services">
                  Services
                  </Link>
                  </Accordion.Header>
                <Accordion.Body>
                  <Link to="/Services#ant-section">Ants</Link>
                  <Link to="/Services#bed-bug-section">Bed Bugs</Link>
                  <Link to="/Services#cockroaches-section">Cockroaches</Link>
                  <Link to="/Services#rodents-section">Rodents</Link>
                  <Link to="/Services#mosquito-section">Mosquitos</Link>
                  <Link to="/Services#flea-section">Fleas</Link>
                  <Link to="/Services#spider-section">Spider</Link>
              
                </Accordion.Body>
              </Accordion.Item>




              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <Link to="/ServiceAreas">Service Areas</Link>
                  </Accordion.Header>
                <Accordion.Body>
                  
            <Link to="/ServiceAreas#delco-section">Delaware County</Link>
            <Link to="/ServiceAreas#philly-section">Philadelphia</Link>
            <Link to="/ServiceAreas#chester-section">Chester County</Link>
            <Link to="/ServiceAreas#montco-section">Montgomery County</Link>
            <Link to="/ServiceAreas#bucks-section">Bucks County</Link>
                  
                  
                  
                  </Accordion.Body>

              </Accordion.Item>



              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <Link to="/PestID">Pest ID</Link>
                  </Accordion.Header>
                <Accordion.Body>
                  
            <Link to="/PestID#ant-section">Ants</Link>
            <Link to="/PestID#bed-bug-section">Bed Bugs</Link>
            <Link to="/PestID#cockroaches-section">Cockroaches</Link>
            <Link to="/PestID#rodents-section">Rodents</Link>
            <Link to="/PestID#mosquito-section">Mosquitos</Link>
            <Link to="/PestID#flea-section">Fleas</Link>
            <Link to="/PestID#spider-section">Spiders</Link>
                  
                  
                  
                  </Accordion.Body>

              </Accordion.Item>



              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <Link to="/Contact">Contact</Link>
                  </Accordion.Header>
              </Accordion.Item>



              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <Link to="/Reviews">Reviews</Link>
                  </Accordion.Header>
              </Accordion.Item>






            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
