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

import { NavLink } from 'react-router-dom';

import './Styles/index.scss'


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

  const handleCanvasClose = () => setShow(false);
  

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
            {/* <Link to="/" className="header-link">
              Home
            </Link> */}


  <NavLink to="/" className={({ isActive }) => isActive ? "active-link header-link" : "header-link"}>
  Home
</NavLink>



          </button>
        </div>

        <div className="dropdown">
          <button>
            <Link to="/Services" className="header-link">
              Services
            </Link>

            
            {/* <NavLink to="/Services" activeClassName="active-link" className="header-link">
              Services
            </NavLink> */}



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
                  <Link to="/" onClick={handleCanvasClose}>
                  Home
                  </Link>
                  </Accordion.Header>
            
              </Accordion.Item>





              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <Link to="/Services" onClick={handleCanvasClose}>
                  Services
                  </Link>
                  </Accordion.Header>
                <Accordion.Body>
                  <Link to="/Services#ant-section" onClick={handleCanvasClose}>Ants</Link>
                  <Link to="/Services#bed-bug-section" onClick={handleCanvasClose}>Bed Bugs</Link>
                  <Link to="/Services#rodents-section" onClick={handleCanvasClose}>Rodents</Link>
                  <Link to="/Services#mosquito-section" onClick={handleCanvasClose}>Mosquitos</Link>
                  <Link to="/Services#flea-section" onClick={handleCanvasClose}>Fleas</Link>
                  <Link to="/Services#spider-section" onClick={handleCanvasClose}>Spiders</Link>
              
                </Accordion.Body>
              </Accordion.Item>




              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <Link to="/ServiceAreas" onClick={handleCanvasClose}>Service Areas</Link>
                  </Accordion.Header>
                <Accordion.Body>
                  
            <Link to="/ServiceAreas#delco-section" onClick={handleCanvasClose}>Delaware County</Link>
            <Link to="/ServiceAreas#philly-section" onClick={handleCanvasClose}>Philadelphia</Link>
            <Link to="/ServiceAreas#chester-section" onClick={handleCanvasClose}>Chester County</Link>
            <Link to="/ServiceAreas#montco-section" onClick={handleCanvasClose}>Montgomery County</Link>
            <Link to="/ServiceAreas#bucks-section" onClick={handleCanvasClose}>Bucks County</Link>
                  
                  
                  
                  </Accordion.Body>

              </Accordion.Item>



              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <Link to="/PestID" onClick={handleCanvasClose}>Pest ID</Link>
                  </Accordion.Header>
                <Accordion.Body>
                  
            <Link to="/PestID#ant-section" onClick={handleCanvasClose}>Ants</Link>
            <Link to="/PestID#bed-bug-section" onClick={handleCanvasClose}>Bed Bugs</Link>
            <Link to="/PestID#rodents-section" onClick={handleCanvasClose}>Rodents</Link>
            <Link to="/PestID#mosquito-section" onClick={handleCanvasClose}>Mosquitos</Link>
            <Link to="/PestID#flea-section" onClick={handleCanvasClose}>Fleas</Link>
            <Link to="/PestID#spider-section" onClick={handleCanvasClose}>Spiders</Link>
                  
                  
                  
                  </Accordion.Body>

              </Accordion.Item>



              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <Link to="/Contact" onClick={handleCanvasClose}>Contact</Link>
                  </Accordion.Header>
              </Accordion.Item>



              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <Link to="/Reviews" onClick={handleCanvasClose}>Reviews</Link>
                  </Accordion.Header>
              </Accordion.Item>






            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
