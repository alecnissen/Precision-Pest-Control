import React from 'react';
import Navbar from './Navbar';
import servicesHeaderBackgroundImg from '../assets/person-disinfecting-dangerous-area-while-wearing-protective-suit.jpg';
import { Link } from 'react-router-dom';
import rightArrow from '../assets/arrowright-svgrepo-com.svg';

export default function Services() {
  return (
    <>
     <Navbar></Navbar>
    <div className='services-tab-content-wrapper'>

      <div className='services-header-wrapper'>
        
       <div className='services-header-btn-wrapper'> 

        <h1>Services</h1>

     

       </div>


      </div>

      {/* <img src={servicesHeaderBackgroundImg} className='services-header-img'></img> */}

    </div>

    </>

  )
}
