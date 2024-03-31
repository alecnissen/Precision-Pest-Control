import React from 'react';
import arrowRightIcon from '../assets/arrowright-svgrepo-com.svg';

export default function Navbar() {
  return (
    <div className="navbar-content-wrapper">
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
              <img src={arrowRightIcon}></img>
            </div>

            <div className="content-for-stinging-pests">
              <a href="">Yellow Jackets</a>
              <a href="">European Hornets</a>
              <a href="">Bald Faced Hornets</a>
            </div>
          </div>

          <a href="">Termites</a>

          <div className="dropdown-for-other-pests">
            <div className="other-pests-dropdown-icon-container">
              <a href="">Other</a>
              <img src={arrowRightIcon}></img>
            </div>

            <div className="content-for-other-pests">
              <a href="">Stick Bugs</a>
              <a href="">Lady Bugs</a>
            </div>
          </div>
        </div>
      </div>

      <button>About Us</button>
      <button>Contact</button>
    </div>
  );
}
