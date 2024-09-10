import React from 'react';
import searchLogo from '../assets/search-svgrepo-com (1).svg';

export default function Modal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Your modal content here */}
            <div className="navbar-button-container">
              <div className="dropdown">
                <button>Services</button>
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

                <div className="dropdown">
                  <button>Contact</button>
                </div>

                <div className="dropdown">
                  <button>Reviews</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
