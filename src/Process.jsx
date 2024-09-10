import React from 'react';
import msgImg from '../assets/messages-1-svgrepo-com.svg';
import calenderImg from '../assets/calender-svgrepo-com.svg';
import dollarBillImg from '../assets/three-dollar-banknotes-svgrepo-com.svg';
import handshakeImg from '../assets/handshake-svgrepo-com.svg';

import pestControlSvgImg from '../assets/10780550_19198459.svg';

export default function Process() {
  return (
    <div className="process-content-wrapper">
      <div className="process-title-subtitle-wrapper">
        <div className="process-title-subtitle-container">
          <h3>Behind the Scenes</h3>

          <h1>How We Keep Your Space</h1>

          <h1 className="process-pest-free-text">Pest Free</h1>

          <p>
            Discover our simple three-step process: Inspection, Treatment, and Follow-up, ensuring effective pest
            control solutions tailored to your need
          </p>
        </div>

        <img src={pestControlSvgImg} className="process-pest-control-img"></img>
      </div>

      <div className="process-cards-container">
        <div className="process-card">
          <div className="process-step-number-container">
            <h4>01</h4>
          </div>

          <div className="process-card-img-container">
            <img src={msgImg}></img>
          </div>

          <h3>Project Discussion</h3>

          <p>Discuss your pest control needs with our experts to determine the best solution</p>
        </div>

        <div className="process-card">
          <div className="process-step-number-container">
            <h4>02</h4>
          </div>

          <div className="process-card-img-container">
            <img src={calenderImg}></img>
          </div>

          <h3>Schedule Online</h3>

          <p>Book an appointment online at your convenience for our team to visit your property</p>
        </div>

        <div className="process-card">
          <div className="process-step-number-container">
            <h4>03</h4>
          </div>

          <div className="process-card-img-container">
            <img src={dollarBillImg}></img>
          </div>

          <h3>Pay Online Easily</h3>

          <p>Make secure online payment for our services, ensuring a hassle-free transaction.</p>
        </div>

        <div className="process-card">
          <div className="process-step-number-container">
            <h4>04</h4>
          </div>

          <div className="process-card-img-container">
            <img src={handshakeImg}></img>
          </div>

          <h3>Project Finish</h3>

          <p>Our experts ensure efficient, satisfactory completion of your pest control project</p>
        </div>
      </div>
    </div>
  );
}
