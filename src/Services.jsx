import React from 'react';
import Navbar from './Navbar';
import servicesHeaderBackgroundImg from '../assets/person-disinfecting-dangerous-area-while-wearing-protective-suit.jpg';
import { Link } from 'react-router-dom';
import rightArrow from '../assets/arrowright-svgrepo-com.svg';
import InsectCards from './InsectCards';
import AntImg from '../assets/pexels-ekamelev-1104974.jpg';
import bedBugImg from '../assets/pexels-pixabay-35804.jpg';

export default function Services() {
  return (
    <>
      <Navbar></Navbar>
      <div className="services-tab-content-wrapper">
        <div className="services-header-wrapper">
          <div className="services-header-btn-wrapper">
            <h1>Services</h1>
          </div>
        </div>

        {/* <img src={servicesHeaderBackgroundImg} className='services-header-img'></img> */}

        <div className="title-cards-container">
          <h1>
            Your <span className="trusted-source-text-styles">Trusted Source</span> for Professional Pest Control
          </h1>

          {/* <InsectCards></InsectCards> */}
        </div>
      </div>

      <InsectCards></InsectCards>

      <div className="service-container">
        <img src={AntImg}></img>

        <div className="service-content-container">
          <h1>Ant Service Plan</h1>

          <p>
            An ant service plan offers a comprehensive approach to control and prevent ant infestations in your home or
            business. This plan includes regular inspections, targeted treatments, and proactive measures to ensure a
            pest-free environment.
          </p>

          <ul>
            <li>
              <span className="li-header-text">Regular Inspections: </span>Technicians conduct thorough inspections to
              identify ant colonies and entry points, assessing the extent of the infestation.
            </li>
            <li>
              <span className="li-header-text">Targeted Treatments: </span>The plan includes the application of safe and
              effective treatments specifically designed to eliminate ant colonies and prevent future infestations.
            </li>
            <li>
              <span className="li-header-text">Preventative Measures: </span> Recommendations and implementations of
              strategies to seal entry points, reduce attractants, and maintain a barrier to keep ants from returning.
            </li>
          </ul>
        </div>
      </div>

      <div className="service-container">
        <img src={bedBugImg}></img>

        <div className="service-content-container">
          <h1>Bed Bug Service Plan</h1>

          <p>
         
A bed bug service plan provides a thorough strategy to eliminate and prevent bed bug infestations in residential or commercial settings. This plan includes detailed inspections, customized treatments, and ongoing monitoring to ensure effective control and long-term protection.
          </p>

          <ul>
            <li>
              <span className="li-header-text">Detailed Inspections: </span> Technicians perform comprehensive inspections of all potential hiding spots to accurately assess the severity and spread of the infestation.
            </li>
            <li>
              <span className="li-header-text">Customized Treatments: </span>The plan includes the application of targeted treatments using safe and effective methods tailored to eradicate bed bugs at all life stages.
            </li>
            <li>
              <span className="li-header-text">Ongoing Monitoring: </span> Continuous monitoring and follow-up visits are scheduled to ensure that the bed bugs are completely eradicated and to prevent future infestations through proactive measures.
            </li>
          </ul>
        </div>
      </div>

      <div className="service-container">
        <img src={bedBugImg}></img>

        <div className="service-content-container">
          <h1>Bed Bug Service Plan</h1>

          <p>
         
A bed bug service plan provides a thorough strategy to eliminate and prevent bed bug infestations in residential or commercial settings. This plan includes detailed inspections, customized treatments, and ongoing monitoring to ensure effective control and long-term protection.
          </p>

          <ul>
            <li>
              <span className="li-header-text">Detailed Inspections: </span> Technicians perform comprehensive inspections of all potential hiding spots to accurately assess the severity and spread of the infestation.
            </li>
            <li>
              <span className="li-header-text">Customized Treatments: </span>The plan includes the application of targeted treatments using safe and effective methods tailored to eradicate bed bugs at all life stages.
            </li>
            <li>
              <span className="li-header-text">Ongoing Monitoring: </span> Continuous monitoring and follow-up visits are scheduled to ensure that the bed bugs are completely eradicated and to prevent future infestations through proactive measures.
            </li>
          </ul>
        </div>
      </div>

      
    </>
  );
}
