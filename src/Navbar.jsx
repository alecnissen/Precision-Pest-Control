import React from 'react';
import arrowRightIcon from '../assets/arrowright-svgrepo-com.svg';

import ppsLogo from '../assets/bug-fixing-svgrepo-com (1).svg';

import searchLogo from '../assets/search-svgrepo-com (1).svg';
import hamburgerLogo from '../assets/hamburger-menu-svgrepo-com (1).svg';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import './Styles/index.scss';

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
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleCanvasClose = () => setShow(false);

  return (
    <div className="navbar-content-wrapper">
      <div className="title-subtitle-container">
        <div className="title-logo-container">
          <img src={ppsLogo}></img>
          <h1>Precision Pest Control</h1>
        </div>
      </div>

      <div className="navbar-button-container">
        <div className="dropdown">
          <button>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}>
              Home
            </NavLink>
          </button>
        </div>

        <div className="dropdown">
          <button>
            <NavLink
              to="/Services"
              className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}
            >
              Services
            </NavLink>
          </button>

          <div className="content">
            <Link to="/Services#ant-section">Ants</Link>
            <Link to="/Services#bed-bug-section">Bed Bugs</Link>

            <Link to="/Services#rodents-section">Rodents</Link>
            <Link to="/Services#mosquito-section">Mosquitos</Link>
            <Link to="/Services#flea-section">Fleas</Link>
            <Link to="/Services#spider-section">Spiders</Link>
          </div>
        </div>

        <div className="dropdown">
          <button>
            <NavLink
              to="/ServiceAreas"
              className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}
            >
              Service Areas
            </NavLink>
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
            <NavLink to="/PestID" className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}>
              Pest ID
            </NavLink>
          </button>

          <div className="content">
            <Link to="/PestID#ant-section">Ants</Link>
            <Link to="/PestID#bed-bug-section">Bed Bugs</Link>
            <Link to="/PestID#rodents-section">Rodents</Link>
            <Link to="/PestID#mosquito-section">Mosquitos</Link>
            <Link to="/PestID#flea-section">Fleas</Link>
            <Link to="/PestID#spider-section">Spiders</Link>
          </div>
        </div>

        <div className="dropdown">
          <button>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}>
              Contact
            </NavLink>
          </button>
        </div>

        <div className="dropdown">
          <button>
            <NavLink to="/Reviews" className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}>
              Reviews
            </NavLink>
          </button>
        </div>

        <div className="search-hamburger-icon-container">
          <img src={searchLogo} className="search-icon-navbar"></img>
          <img src={hamburgerLogo} className="hamburger-menu-icon-navbar" onClick={toggleOffCanvas}></img>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Precision Pest Control</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}
                    onClick={handleCanvasClose}
                  >
                    Home
                  </NavLink>
                </Accordion.Header>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <NavLink
                    to="/Services"
                    className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}
                    onClick={handleCanvasClose}
                  >
                    Services
                  </NavLink>
                </Accordion.Header>
                <Accordion.Body>
                  <Link to="/Services#ant-section" onClick={handleCanvasClose}>
                    Ants
                  </Link>
                  <Link to="/Services#bed-bug-section" onClick={handleCanvasClose}>
                    Bed Bugs
                  </Link>
                  <Link to="/Services#rodents-section" onClick={handleCanvasClose}>
                    Rodents
                  </Link>
                  <Link to="/Services#mosquito-section" onClick={handleCanvasClose}>
                    Mosquitos
                  </Link>
                  <Link to="/Services#flea-section" onClick={handleCanvasClose}>
                    Fleas
                  </Link>
                  <Link to="/Services#spider-section" onClick={handleCanvasClose}>
                    Spiders
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <NavLink
                    to="/ServiceAreas"
                    className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}
                    onClick={handleCanvasClose}
                  >
                    Services Areas
                  </NavLink>
                </Accordion.Header>
                <Accordion.Body>
                  <Link to="/ServiceAreas#delco-section" onClick={handleCanvasClose}>
                    Delaware County
                  </Link>
                  <Link to="/ServiceAreas#philly-section" onClick={handleCanvasClose}>
                    Philadelphia
                  </Link>
                  <Link to="/ServiceAreas#chester-section" onClick={handleCanvasClose}>
                    Chester County
                  </Link>
                  <Link to="/ServiceAreas#montco-section" onClick={handleCanvasClose}>
                    Montgomery County
                  </Link>
                  <Link to="/ServiceAreas#bucks-section" onClick={handleCanvasClose}>
                    Bucks County
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <NavLink
                    to="/PestID"
                    className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}
                    onClick={handleCanvasClose}
                  >
                    Pest ID
                  </NavLink>
                </Accordion.Header>
                <Accordion.Body>
                  <Link to="/PestID#ant-section" onClick={handleCanvasClose}>
                    Ants
                  </Link>
                  <Link to="/PestID#bed-bug-section" onClick={handleCanvasClose}>
                    Bed Bugs
                  </Link>
                  <Link to="/PestID#rodents-section" onClick={handleCanvasClose}>
                    Rodents
                  </Link>
                  <Link to="/PestID#mosquito-section" onClick={handleCanvasClose}>
                    Mosquitos
                  </Link>
                  <Link to="/PestID#flea-section" onClick={handleCanvasClose}>
                    Fleas
                  </Link>
                  <Link to="/PestID#spider-section" onClick={handleCanvasClose}>
                    Spiders
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <NavLink
                    to="/Contact"
                    className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}
                    onClick={handleCanvasClose}
                  >
                    Contact
                  </NavLink>
                </Accordion.Header>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <NavLink
                    to="/Reviews"
                    className={({ isActive }) => (isActive ? 'active-link header-link' : 'header-link')}
                    onClick={handleCanvasClose}
                  >
                    Reviews
                  </NavLink>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
