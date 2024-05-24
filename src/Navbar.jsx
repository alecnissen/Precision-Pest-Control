import React from 'react';
import ppsLogo from "../assets/PPS-logo.jpeg";
import searchLogo from "../assets/search-svgrepo-com (1).svg";
import hamburgerLogo from "../assets/hamburger-menu-svgrepo-com (1).svg";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';

export default function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const toggleOffCanvas = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="navbar-content-wrapper">
        <div className='title-subtitle-container'>
          <div className='title-logo-container'>
            <img src={ppsLogo} alt="PPS Logo"></img>
            <h1>Prodigy Pest Solutions</h1>
          </div>
        </div>
        <div className='navbar-button-container'>
          <div className="dropdown">
            <button>Services</button>
            <div className="content">
              <a href="">Ants</a>
              <a href="">Bed Bugs</a>
              <a href="">Cockroaches</a>
              <a href="">Fleas</a>
              <a href="">Mosquito</a>
              <a href="">Spiders</a>
              <a href="">Stinging Insects</a>
              <a href="">Termites</a>
              <a href="">Ticks</a>
            </div>
          </div>
          <div className="dropdown">
            <button>Service Areas</button>
            <div className="content">
              <a href="">Delaware County</a>
              <a href="">Philadelphia</a>
              <a href="">Chester County</a>
              <a href="">Montgomery County</a>
              <a href="">Bucks County</a>
            </div>
            </div>
          <div className="dropdown">
            <button>Pest ID</button>
            <div className="content">
              <a href="">Ants</a>
              <a href="">Bed Bugs</a>
              <a href="">Boxelder Bugs</a>
              <a href="">Carpenter Bees</a>
              <a href="">Cockroaches</a>
              <a href="">Fleas</a>
              <a href="">Mice</a>
              <a href="">Mosquitos</a>
              <a href="">Rats</a>
              <a href="">Spiders</a>
              <div className="dropdown-for-stinging-pests">
                <div className="stinging-pests-dropdown-icon-container">
                  <a href="">Stinging Pests</a>
                </div>
              </div>
              <a href="">Termites</a>
              <div className="dropdown-for-other-pests">
                <div className="other-pests-dropdown-icon-container">
                  <a href="">Other</a>
                </div>
              </div>
            </div>
          </div>
          <div className='dropdown'>
            <button>Contact</button>
          </div>
          <div className='dropdown'>
            <button>Reviews</button>
          </div>
          <div className='search-hamburger-icon-container'>
            <img src={searchLogo} className="search-icon-navbar" alt="Search Icon"></img>
            <div className="hamburger-menu-icon-navbar" onClick={toggleOffCanvas}>
              <img src={hamburgerLogo} alt="Hamburger Icon" />
            </div>
          </div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas Title</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item 1</Accordion.Header>
                  <Accordion.Body>
                    Content for Accordion Item 1
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item 2</Accordion.Header>
                  <Accordion.Body>
                    Content for Accordion Item 2
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}